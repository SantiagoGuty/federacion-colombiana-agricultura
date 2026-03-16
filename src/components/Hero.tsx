import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>

      <div className={styles.background} />
      <div className={styles.circleTopRight} />
      <div className={styles.circleBottomLeft} />
      <div className={styles.circleCenter} />

      <div className={styles.content}>
        <p className={styles.tagline}>
          Progreso y desarrollo integral
        </p>
        <h1 className={styles.title}>
          Federacion Colombiana<br />de Agricultura
        </h1>
        <p className={styles.subtitle}>
          Desarrollo rural sostenible que integra agricultura, ambiente y turismo rural.
        </p>
        <p className={styles.description}>
          Organizacion nacional que articula afiliados, organizaciones y procesos rurales
          comprometidos con el desarrollo sostenible del campo colombiano.
        </p>
        <div className={styles.buttons}>
          <a href="#quienes" className={styles.btnPrimary}>Conocer la Federacion</a>
          <a href="#sectores" className={styles.btnOutline}>Sectores de trabajo</a>
          <a href="#contacto" className={styles.btnGreen}>Contacto</a>
        </div>
      </div>

      <div className={styles.wave}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="#FAFAF7"/>
        </svg>
      </div>

    </section>
  )
}