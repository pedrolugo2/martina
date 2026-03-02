import { formatCurrency } from '@/shared/lib/formatters'
import { Button } from '@/shared/ui/Button'
import styles from './DonationSuccess.module.css'

interface Props {
  amountCents?: number
  onReset: () => void
}

export function DonationSuccess({ amountCents, onReset }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.emoji} aria-hidden="true">🎉</div>
      <h3 className={styles.title}>Muito obrigada!</h3>
      <p className={styles.message}>
        {amountCents
          ? `Sua doação de ${formatCurrency(amountCents)} foi recebida`
          : 'Sua doação foi recebida'}{' '}
        e já está transformando o sorriso de um bebê. 💛
      </p>
      <p className={styles.sub}>
        Com o seu gesto, estamos mais perto de entregar um kit NoseAlign® para uma família
        que precisa muito.
      </p>
      <Button variant="outline" size="sm" onClick={onReset}>
        Fazer outra doação
      </Button>
    </div>
  )
}
