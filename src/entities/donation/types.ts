export interface DonationTotal {
  amount: number        // total confirmed in BRL cents
  count: number         // number of confirmed donations
  updatedAt: Date | null
}

export interface Payment {
  paymentId: string
  amount: number        // in BRL cents
  status: 'pending' | 'approved' | 'rejected'
  createdAt: Date
}

export interface PixPaymentResponse {
  paymentId: string
  pixCopiaECola: string   // EMV payload — both QR and copy-paste
  qrCodeBase64: string    // base64 PNG from Mercado Pago (backup)
  expiresAt: string       // ISO 8601 datetime
}
