import styles from './FooterWidget.module.css'

export function FooterWidget() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.bee} aria-hidden="true">🐝</div>

        <h2 className={styles.title}>
          Obrigada por fazer parte da nossa história!
        </h2>
        <p className={styles.message}>
          Com o seu gesto de carinho, estamos transformando o aniversário da Martina
          em um presente para toda uma família. Que esse sorriso se espalhe e inspire
          muitas outras histórias de amor e superação.
        </p>
        <p className={styles.signature}>
          Com muito amor, <strong>Martina e família</strong> 💛
        </p>

        <div className={styles.divider} />

        <div className={styles.references}>
          <p className={styles.refTitle}>Referências e mais informações:</p>
          <div className={styles.refLinks}>
            <a
              href="https://fissuralabiopalatina.com/linha-de-cuidado/"
              target="_blank"
              rel="noopener noreferrer"
            >
              RIRE — Fissura Labiopalatina
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://cleftalign.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              CleftAlign / NoseAlign®
            </a>
          </div>
          <p className={styles.warning}>
            ⚠️ Os sites acima podem conter imagens clínicas.
          </p>
        </div>

        <div className={styles.divider} />

        <p className={styles.credits}>
          Feito com 💛 para a Martina · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
