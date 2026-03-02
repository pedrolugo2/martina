import { onRequest } from 'firebase-functions/v2/https'
import { getPaymentClient } from './lib/mpClient'
import { incrementDonationTotal, paymentRef } from './lib/firestore'

interface MpWebhookBody {
  type?: string
  data?: { id?: string }
  action?: string
}

export const mpWebhook = onRequest(
  {
    secrets: ['MP_ACCESS_TOKEN'],
    region: 'southamerica-east1',
    timeoutSeconds: 30,
    memory: '256MiB',
  },
  async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).send('Method Not Allowed')
      return
    }

    const body = req.body as MpWebhookBody

    // Only process payment events
    if (body.type !== 'payment') {
      res.status(200).send('ok')
      return
    }

    const rawId = body.data?.id
    if (!rawId) {
      res.status(400).send('missing payment id')
      return
    }

    const paymentId = String(rawId)

    try {
      // Always fetch payment directly from MP — never trust webhook body alone
      const paymentClient = getPaymentClient()
      const payment = await paymentClient.get({ id: paymentId })

      if (payment.status !== 'approved') {
        // Not yet approved — MP may retry later
        res.status(200).send('not approved')
        return
      }

      const ref = paymentRef(paymentId)
      const existing = await ref.get()

      // Idempotency: skip if already processed
      if (existing.exists && existing.data()?.status === 'approved') {
        console.log(`[mpWebhook] Payment ${paymentId} already processed — skipping`)
        res.status(200).send('already processed')
        return
      }

      const amountCents = Math.round((payment.transaction_amount ?? 0) * 100)

      // Mark payment as approved
      if (existing.exists) {
        await ref.update({ status: 'approved' })
      } else {
        // Edge case: payment wasn't pre-created (e.g. direct MP link)
        const { FieldValue } = await import('firebase-admin/firestore')
        await ref.set({
          paymentId,
          amount: amountCents,
          status: 'approved',
          createdAt: FieldValue.serverTimestamp(),
        })
      }

      // Atomically increment the total
      await incrementDonationTotal(amountCents)

      console.log(`[mpWebhook] Payment ${paymentId} approved — +${amountCents} cents`)
      res.status(200).send('ok')
    } catch (err: unknown) {
      console.error('[mpWebhook] error:', err)
      // Return 500 so MP retries the webhook
      res.status(500).send('error')
    }
  }
)
