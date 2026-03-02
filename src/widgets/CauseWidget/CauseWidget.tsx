import styles from './CauseWidget.module.css'

export function CauseWidget() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.icon} aria-hidden="true">😊</span>
        <h2 className={styles.title}>A causa: um novo sorriso</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>O que é Fenda Lábio-Palatina?</h3>
            <p>
              É uma das malformações congênitas mais comuns, afetando aproximadamente{' '}
              <strong>1 em cada 650 nascidos vivos</strong> no Brasil. Ocorre quando os
              tecidos do lábio e/ou palato não se fundem completamente durante a gestação.
            </p>
            <p>
              O tratamento é longo, multidisciplinar e pode durar até a fase adulta —
              mas os avanços da medicina permitem resultados extraordinários.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>O kit NoseAlign® / LipAlign™</h3>
            <p>
              Desenvolvido pela CleftAlign, este kit de tratamento <strong>pré-cirúrgico</strong>{' '}
              molda suavemente o nariz e o lábio antes da cirurgia, melhorando
              significativamente os resultados estéticos e funcionais.
            </p>
            <p>
              Com um custo aproximado de <strong>USD 1.200</strong>, não está ao alcance
              de muitas famílias. Nossa meta de <strong>R$ 6.000</strong> cobre a compra
              e doação de um kit completo para um bebê que não teria essa oportunidade.
            </p>
          </div>

          <div className={`${styles.card} ${styles.cardHighlight}`}>
            <h3 className={styles.cardTitle}>🏥 O RIRE</h3>
            <p>
              O <strong>RIRE — Núcleo Avançado em Fissura Labiopalatina</strong>, liderado
              bela Dra. Daniela Tanikawa, é uma instituição de referência internacional no tratamento 
              completo e humanizado de bebês e crianças com fenda lábio-palatina, acompanhando desde o nascimento
              até a fase adulta com uma equipe multidisciplinar extremamente competente.
            </p>
          </div>
        </div>

        <div className={styles.links}>
          <p className={styles.linksWarning}>
            ⚠️ <strong>Atenção:</strong> os sites abaixo podem conter imagens clínicas.
          </p>
          <div className={styles.linkRow}>
            <a
              href="https://fissuralabiopalatina.com/linha-de-cuidado/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              fissuralabiopalatina.com →
            </a>
            <a
              href="https://cleftalign.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              cleftalign.com →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
