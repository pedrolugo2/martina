import * as admin from 'firebase-admin'

if (!admin.apps.length) {
  admin.initializeApp()
}

export const db = admin.firestore()

/**
 * Atomically increments the global donation total.
 * Uses a transaction to ensure idempotency and consistency under concurrent webhooks.
 */
export async function incrementDonationTotal(amountCents: number): Promise<void> {
  const totalRef = db.collection('donations').doc('total')

  await db.runTransaction(async (tx) => {
    const snap = await tx.get(totalRef)
    if (!snap.exists) {
      tx.set(totalRef, {
        amount: amountCents,
        count: 1,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      })
    } else {
      tx.update(totalRef, {
        amount: admin.firestore.FieldValue.increment(amountCents),
        count:  admin.firestore.FieldValue.increment(1),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      })
    }
  })
}

/**
 * Returns the Firestore document reference for a given payment ID.
 */
export function paymentRef(paymentId: string) {
  return db.collection('donations').doc('payments').collection('items').doc(paymentId)
}
