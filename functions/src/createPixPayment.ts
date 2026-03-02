import { onRequest } from 'firebase-functions/v2/https'
import * as admin from 'firebase-admin'
import { getPaymentClient } from './lib/mpClient'
import { paymentRef } from './lib/firestore'

const ALLOWED_ORIGINS = [
  'https://martinaflp.web.app',
  'https://martinaflp.firebaseapp.com',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
]

export const createPixPayment = onRequest(
  {
    secrets: ['MP_ACCESS_TOKEN'],
    region: 'southamerica-east1',
    timeoutSeconds: 30,
    memory: '256MiB',
  },
  async (req, res) => {
    const origin = req.headers.origin ?? ''
    if (ALLOWED_ORIGINS.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin)
    }
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Access-Control-Max-Age', '3600')

    if (req.method === 'OPTIONS') {
      res.status(204).send('')
      return
    }

    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method Not Allowed' })
      return
    }

    const { amountCents } = req.body as { amountCents?: number }

    if (!amountCents || typeof amountCents !== 'number' || amountCents < 100) {
      res.status(400).json({ error: 'amountCents must be a number >= 100' })
      return
    }

    try {
      const paymentClient = getPaymentClient()

      const paymentData = await paymentClient.create({
        body: {
          transaction_amount: amountCents / 100,
          description: 'Doação — Martina 1 Ano',
          payment_method_id: 'pix',
          payer: {
            email: 'doador@martina.com',
            first_name: 'Doador',
            last_name: 'Anônimo',
          },
        },
      })

      const paymentId = String(paymentData.id)
      const pixData   = paymentData.point_of_interaction?.transaction_data

      if (!pixData?.qr_code) {
        throw new Error('Mercado Pago did not return PIX QR code data')
      }

      // Persist pending payment for webhook deduplication
      await paymentRef(paymentId).set({
        paymentId,
        amount: amountCents,
        status: 'pending',
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      })

      res.status(200).json({
        paymentId,
        pixCopiaECola: pixData.qr_code,
        qrCodeBase64:  pixData.qr_code_base64 ?? '',
        expiresAt:     paymentData.date_of_expiration ?? '',
      })
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Internal server error'
      console.error('[createPixPayment] error:', err)
      res.status(500).json({ error: message })
    }
  }
)
