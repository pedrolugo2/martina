/**
 * Format BRL cents to a currency string, e.g. 2500 → "R$ 25,00"
 */
export function formatCurrency(cents: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cents / 100)
}

/**
 * Format a 0-100 percentage value to a display string, e.g. 73.4 → "73%"
 */
export function formatPercent(value: number): string {
  return `${Math.round(value)}%`
}
