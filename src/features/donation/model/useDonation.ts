import { useState, useCallback, useEffect, useRef } from 'react'
import { onSnapshot, doc } from 'firebase/firestore'
import { db } from '@/shared/lib/firebase'
import { createPixPayment } from '../api/createPixPayment'
import type { PixPaymentResponse } from '@/entities/donation/types'

type DonationState =
  | { status: 'idle' }
  | { status: 'selecting'; amountCents: number }
  | { status: 'loading' }
  | { status: 'awaiting_payment'; data: PixPaymentResponse; amountCents: number }
  | { status: 'success'; amountCents: number }
  | { status: 'error'; message: string }

export function useDonation() {
  const [state, setState] = useState<DonationState>({ status: 'idle' })
  // Track the Firestore total at the moment PIX was generated so we can
  // detect when a new payment lands (total increases).
  const baselineRef = useRef<number | null>(null)

  // Watch Firestore total while awaiting payment — auto-confirm on change
  useEffect(() => {
    if (state.status !== 'awaiting_payment') return

    const amountCents = state.amountCents

    const unsub = onSnapshot(doc(db, 'donations', 'total'), (snap) => {
      const current: number = snap.exists() ? (snap.data().amount ?? 0) : 0

      if (baselineRef.current === null) {
        // First snapshot — record baseline
        baselineRef.current = current
        return
      }

      if (current > baselineRef.current) {
        // Total increased → webhook confirmed a payment
        setState({ status: 'success', amountCents })
      }
    })

    return () => {
      unsub()
      baselineRef.current = null
    }
  }, [state.status]) // eslint-disable-line react-hooks/exhaustive-deps

  const requestPix = useCallback(async (amountCents: number) => {
    setState({ status: 'loading' })
    try {
      const data = await createPixPayment(amountCents)
      baselineRef.current = null // reset so next snapshot sets the baseline
      setState({ status: 'awaiting_payment', data, amountCents })
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : 'Não foi possível gerar o PIX. Tente novamente.'
      setState({ status: 'error', message })
    }
  }, [])

  const confirmSuccess = useCallback(() => {
    // Manual "Já paguei" — show success optimistically
    setState((prev) => ({
      status: 'success',
      amountCents: prev.status === 'awaiting_payment' ? prev.amountCents : 0,
    }))
  }, [])

  const reset = useCallback(() => {
    setState({ status: 'idle' })
  }, [])

  return { state, requestPix, confirmSuccess, reset }
}
