import { useProgress } from '../model/useProgress'
import { formatCurrency, formatPercent } from '@/shared/lib/formatters'
import styles from './ProgressBar.module.css'

export function ProgressBar() {
  const { total, loading, percentage, goalCents } = useProgress()

  return (
    <div className={styles.container}>
      <div className={styles.labels}>
        <span className={styles.raised}>
          {loading ? '...' : formatCurrency(total.amount)}
        </span>
        <span className={styles.goal}>
          meta {formatCurrency(goalCents)}
        </span>
      </div>

      <div
        className={styles.track}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(percentage)}
        aria-label={`${formatPercent(percentage)} da meta arrecadada`}
      >
        <div
          className={styles.fill}
          style={{ width: `${percentage}%` }}
        />
        {percentage > 8 && (
          <span className={styles.badge}>{formatPercent(percentage)}</span>
        )}
      </div>

      <p className={styles.donors}>
        {loading
          ? 'Carregando...'
          : `${total.count} ${total.count === 1 ? 'doação' : 'doações'} realizadas`}
      </p>
    </div>
  )
}
