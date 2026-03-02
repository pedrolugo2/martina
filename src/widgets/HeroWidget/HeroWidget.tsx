import { Button } from '@/shared/ui/Button'
import styles from './HeroWidget.module.css'

export function HeroWidget() {
  const scrollToDonation = () => {
    document.getElementById('donation')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      {/* Bee illustration */}
      <div className={styles.beeWrapper} aria-hidden="true">
        <span className={styles.bee}>🐝</span>
        <span className={styles.honeyDrop}>🍯</span>
      </div>

      <div className={styles.content}>
        <span className={styles.badge}>1 aninho da Martina 🎂</span>
        <h1 className={styles.title}>
          Meu primeiro aninho pode&nbsp;transformar uma vida
        </h1>
        <p className={styles.subtitle}>
          Ao invés de presentes, que tal espalharmos sorrisos?
        </p>
        <Button variant="primary" size="lg" onClick={scrollToDonation}>
          Quero doar agora 💛
        </Button>
      </div>

      {/* Decorative wave */}
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="var(--color-white)"
          />
        </svg>
      </div>
    </section>
  )
}
