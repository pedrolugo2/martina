/** R$ 6.000,00 in BRL cents */
export const GOAL_AMOUNT_CENTS = 600_000

/** Preset donation amounts in BRL cents: R$25, R$50, R$100 */
export const PRESET_AMOUNTS = [2_500, 5_000, 10_000] as const

/** PIX destination key */
export const PIX_KEY = 'pedrolugo2+ml@gmail.com'

/** createPixPayment Cloud Run URL — set via VITE_CREATE_PIX_URL env var */
export const CREATE_PIX_URL = import.meta.env.VITE_CREATE_PIX_URL as string
