import { CREATE_PIX_URL } from '@/shared/config/constants'
import type { PixPaymentResponse } from '@/entities/donation/types'

export async function createPixPayment(amountCents: number): Promise<PixPaymentResponse> {
  const res = await fetch(CREATE_PIX_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amountCents }),
  })

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Erro desconhecido' }))
    throw new Error((error as { message?: string }).message ?? 'Erro no servidor')
  }

  return res.json() as Promise<PixPaymentResponse>
}
