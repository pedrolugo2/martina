import { useEffect, useState } from 'react'
import { onSnapshot, doc } from 'firebase/firestore'
import { db } from '@/shared/lib/firebase'
import { GOAL_AMOUNT_CENTS } from '@/shared/config/constants'
import type { DonationTotal } from '@/entities/donation/types'

export function useProgress() {
  const [total, setTotal] = useState<DonationTotal>({
    amount: 0,
    count: 0,
    updatedAt: null,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, 'donations', 'total'),
      (snap) => {
        if (snap.exists()) {
          const data = snap.data()
          setTotal({
            amount: data.amount ?? 0,
            count: data.count ?? 0,
            updatedAt: data.updatedAt?.toDate() ?? null,
          })
        }
        setLoading(false)
      },
      () => {
        // On error, keep loading=false so UI doesn't hang
        setLoading(false)
      }
    )
    return () => unsub()
  }, [])

  const percentage = Math.min((total.amount / GOAL_AMOUNT_CENTS) * 100, 100)
  const reached = total.amount >= GOAL_AMOUNT_CENTS

  return { total, loading, percentage, reached, goalCents: GOAL_AMOUNT_CENTS }
}
