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
              que articula <strong className={styles.highlight}>afiliados, organizaciones y
              procesos rurales</strong> comprometidos con el desarrollo sostenible del campo
              colombiano.
            </p>
            <p className={styles.body}>
              La federacion surge de la iniciativa de diferentes actores del sector rural que
              decidieron trabajar de manera articulada para impulsar proyectos que fortalezcan
              las comunidades y promuevan nuevas oportunidades para los territorios.
            </p>
            <p className={styles.body}>
              La organizacion se encuentra legalmente constituida e inscrita ante la{' '}
              <strong className={styles.highlight}>Camara de Comercio</strong>, lo que respalda
              su funcionamiento institucional y su capacidad para desarrollar proyectos y
              establecer alianzas.
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
                Contribuir a un modelo de desarrollo rural donde agricultura, sostenibilidad
                ambiental y turismo rural se conviertan en pilares de crecimiento economico,
                social y ambiental para los territorios.
              </p>
              <h3 className={styles.visionTitle}>Nuestra Mision</h3>
              <p className={styles.visionText}>
                Promover el desarrollo rural sostenible mediante el fortalecimiento de
                afiliados, organizaciones y procesos rurales, y la implementacion de proyectos
                en los sectores de agricultura, ambiente y turismo rural.
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