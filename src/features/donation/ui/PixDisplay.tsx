import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { Button } from '@/shared/ui/Button'
import { formatCurrency } from '@/shared/lib/formatters'
import type { PixPaymentResponse } from '@/entities/donation/types'
import styles from './PixDisplay.module.css'

interface Props {
  data: PixPaymentResponse
  amountCents: number
  onConfirmed: () => void
  onBack: () => void
}

export function PixDisplay({ data, amountCents, onConfirmed, onBack }: Props) {
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(data.pixCopiaECola)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea')
      el.value = data.pixCopiaECola
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.amount}>
        Doação de <strong>{formatCurrency(amountCents)}</strong>
      </div>

      <p className={styles.instruction}>
        Escaneie o QR Code com o app do seu banco ou copie o código PIX:
      </p>

      <div className={styles.qrWrapper}>
        <QRCodeSVG
          value={data.pixCopiaECola}
          size={220}
          level="M"
          includeMargin
          style={{ borderRadius: 12 }}
        />
      </div>

      <Button variant="secondary" size="lg" fullWidth onClick={copyCode}>
        {copied ? '✅ Código copiado!' : '📋 Copiar código PIX'}
      </Button>

      <p className={styles.hint}>
        Após realizar o pagamento, a confirmação é automática e o placar atualiza em instantes.
      </p>

      <div className={styles.actions}>
        <Button variant="outline" size="sm" onClick={onBack}>
          Alterar valor
        </Button>
        <Button variant="ghost" size="sm" onClick={onConfirmed}>
          Já paguei ✓
        </Button>
      </div>
    </div>
  )
}
