import { MercadoPagoConfig, Payment } from 'mercadopago'

function createMpClient(): Payment {
  const accessToken = process.env.MP_ACCESS_TOKEN
  if (!accessToken) {
    throw new Error('MP_ACCESS_TOKEN environment variable is not set')
  }
  const client = new MercadoPagoConfig({ accessToken })
  return new Payment(client)
}

// Lazily initialized to avoid issues during cold start before env is available
let _paymentClient: Payment | null = null

export function getPaymentClient(): Payment {
  if (!_paymentClient) {
    _paymentClient = createMpClient()
  }
  return _paymentClient
}
