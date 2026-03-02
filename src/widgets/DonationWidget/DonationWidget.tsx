import { useDonation, AmountSelector, PixDisplay, DonationSuccess } from '@/features/donation'
import { ProgressBar } from '@/features/progress'
import { Spinner } from '@/shared/ui/Spinner'
import styles from './DonationWidget.module.css'

export function DonationWidget() {
  const { state, requestPix, confirmSuccess, reset } = useDonation()


  return (
    <section id="donation" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.icon} aria-hidden="true">🍯</span>
        <h2 className={styles.title}>Faça parte desta corrente de amor!</h2>
        <p className={styles.subtitle}>
          Cada doação, de qualquer valor, nos aproxima do nosso objetivo.
        </p>

        {/* Live progress bar */}
        <div className={styles.progressWrapper}>
          <ProgressBar />
        </div>

        {/* Donation flow card */}
        <div className={styles.card}>
          {state.status === 'idle' || state.status === 'selecting' ? (
            <AmountSelector onConfirm={requestPix} />
          ) : state.status === 'loading' ? (
            <div className={styles.loading}>
              <Spinner size="lg" />
              <p>Gerando seu PIX...</p>
            </div>
          ) : state.status === 'awaiting_payment' ? (
            <PixDisplay
              data={state.data}
              amountCents={state.amountCents}
              onConfirmed={confirmSuccess}
              onBack={reset}
            />
          ) : state.status === 'success' ? (
            <DonationSuccess
              amountCents={state.amountCents}
              onReset={reset}
            />
          ) : state.status === 'error' ? (
            <div className={styles.error}>
              <span className={styles.errorIcon} aria-hidden="true">😕</span>
              <p className={styles.errorMsg}>{state.message}</p>
              <button className={styles.retryBtn} onClick={reset}>
                Tentar novamente
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
