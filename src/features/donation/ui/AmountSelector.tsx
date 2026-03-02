import { useState } from 'react'
import { Button } from '@/shared/ui/Button'
import { PRESET_AMOUNTS } from '@/shared/config/constants'
import { formatCurrency } from '@/shared/lib/formatters'
import styles from './AmountSelector.module.css'

interface Props {
  onConfirm: (amountCents: number) => void
}

export function AmountSelector({ onConfirm }: Props) {
  const [selected, setSelected] = useState<number | null>(null)
  const [customRaw, setCustomRaw] = useState('')

  const handlePreset = (cents: number) => {
    setSelected(cents)
    setCustomRaw('')
  }

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '')
    setCustomRaw(digits)
    setSelected(null)
  }

  const customCents = customRaw ? parseInt(customRaw, 10) * 100 : null
  const effectiveAmount = selected ?? customCents
  const isValid = effectiveAmount !== null && effectiveAmount >= 100

  const handleConfirm = () => {
    if (isValid && effectiveAmount) onConfirm(effectiveAmount)
  }

  return (
    <div className={styles.container}>
      <p className={styles.label}>Escolha o valor da sua doação:</p>

      <div className={styles.presets}>
        {PRESET_AMOUNTS.map((cents) => (
          <button
            key={cents}
            type="button"
            className={`${styles.presetBtn} ${selected === cents ? styles.presetBtnActive : ''}`}
            onClick={() => handlePreset(cents)}
          >
            {formatCurrency(cents)}
          </button>
        ))}
      </div>

      <div className={styles.customRow}>
        <span className={styles.prefix}>R$</span>
        <input
          type="number"
          inputMode="numeric"
          placeholder="Outro valor"
          value={customRaw}
          onChange={handleCustomChange}
          min="1"
          className={styles.customInput}
          aria-label="Valor personalizado em reais"
        />
      </div>

      <Button
        variant="primary"
        size="lg"
        fullWidth
        onClick={handleConfirm}
        disabled={!isValid}
      >
        Gerar PIX {isValid && effectiveAmount ? `· ${formatCurrency(effectiveAmount)}` : ''}
      </Button>
    </div>
  )
}
