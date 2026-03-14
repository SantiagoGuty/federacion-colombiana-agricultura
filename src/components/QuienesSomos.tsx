import styles from '../styles/QuienesSomos.module.css'

const stats = [
  { number: '9', label: 'Asociaciones cofundadoras' },
  { number: '3', label: 'Sectores de trabajo' },
  { number: '100%', label: 'Compromiso nacional' },
]

export default function QuienesSomos() {
  return (
    <section id="quienes" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>

          {/* Text */}
          <div>
            <p className={styles.tagline}>Nuestra organizacion</p>
            <h2 className={styles.title}>Quienes Somos</h2>
            <p className={styles.body}>
              La Federacion Colombiana de Agricultura es una organizacion de caracter nacional
              conformada por <strong className={styles.highlight}>9 asociaciones cofundadoras</strong>,
              que trabajan de manera articulada para promover el desarrollo rural sostenible.
            </p>
            <p className={styles.body}>
              La federacion impulsa iniciativas que fortalecen las comunidades rurales,
              promueven el cuidado del medio ambiente y generan nuevas oportunidades
              economicas para los territorios.
            </p>

            <div className={styles.stats}>
              {stats.map((s) => (
                <div key={s.label} className={styles.statCard}>
                  <p className={styles.statNumber}>{s.number}</p>
                  <p className={styles.statLabel}>{s.label}</p>
                </div>
              ))}
            </div>

            <a href="#sectores" className={styles.cta}>Conocer mas</a>
          </div>

          {/* Vision card */}
          <div className={styles.cardWrapper}>
            <div className={styles.visionCard}>
              <h3 className={styles.visionTitle}>Nuestra Vision</h3>
              <p className={styles.visionText}>
                Contribuir a un modelo de desarrollo rural donde la agricultura, el cuidado
                del medio ambiente y el turismo rural se conviertan en pilares de crecimiento
                economico y social para los territorios.
              </p>
              <h3 className={styles.visionTitle}>Nuestra Mision</h3>
              <p className={styles.visionText}>
                Promover el desarrollo rural sostenible mediante el fortalecimiento de las
                asociaciones rurales, la implementacion de proyectos productivos y la
                proteccion de los recursos naturales.
              </p>
            </div>
            <div className={styles.decorBottom} />
            <div className={styles.decorTop} />
          </div>

        </div>
      </div>
    </section>
  )
}