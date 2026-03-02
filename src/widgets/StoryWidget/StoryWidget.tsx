import styles from './StoryWidget.module.css'
import photoBorn from './photo-born.jpg'
import photoTreatment from './photo-treatment.jpg'
import photoSmile from './photo-smile.jpg'

export function StoryWidget() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.icon} aria-hidden="true">💛</span>
        <h2 className={styles.title}>A história da Martina</h2>

        <div className={styles.text}>
          <p>
            Quando cheguei ao mundo, os médicos logo perceberam que eu precisaria de um
            cuidado especial: nasci com <strong>Fenda Lábio-Palatina</strong>. Para a
            minha família, foi uma notícia assustadora no início — mas logo entenderam
            que isso era apenas o começo de uma linda história.
          </p>
          <p>
            Com o apoio do <strong>RIRE — Núcleo Avançado em Fissura Labiopalatina</strong>,
            eu pude ter acesso ao kit<strong>NoseAlign® / LipAlign™</strong>, um tratamento
            pré-cirúrgico inovador que preparou meu narizinho e meu sorriso para a cirurgia.
            Esse tratamento fez toda a diferença nos resultados e na minha qualidade de vida.
          </p>
          <p>
            A minha família sabe que tem um privilégio enorme em poder prover esse
            cuidado. E é por isso que, no meu primeiro aniversário, ao invés de presentes
            quero doar todo esse carinho para fazer o mesmo por outro bebê que precisa muito.
          </p>
          <p className={styles.callout}>
            🐝 Afinal, abelhinhas trabalham juntas para espalhar doçura pelo mundo!
          </p>

          <div className={styles.photoGallery}>
            <figure className={styles.photoItem}>
              <img src={photoBorn} alt="Martina no dia em que nasceu" className={styles.photo} />
              <figcaption className={styles.photoCaption}>No dia em que nasci</figcaption>
            </figure>
            <figure className={styles.photoItem}>
              <img src={photoTreatment} alt="Martina após tratamento pré-cirúrgico" className={styles.photo} />
              <figcaption className={styles.photoCaption}>Após ~3 meses de tratamento pré-cirúrgico</figcaption>
            </figure>
            <figure className={styles.photoItem}>
              <img src={photoSmile} alt="Martina sorrindo" className={styles.photo} />
              <figcaption className={styles.photoCaption}>Sorrisão lindo desses dias!</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
