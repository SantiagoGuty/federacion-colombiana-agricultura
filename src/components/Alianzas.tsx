import styles from '../styles/Alianzas.module.css'

const aliados = [
  { tipo: 'Asociaciones rurales', icon: '🤝', desc: 'Organizaciones de base que representan comunidades del campo.' },
  { tipo: 'Instituciones publicas', icon: '🏛️', desc: 'Entidades del Estado que apoyan el desarrollo rural.' },
  { tipo: 'Cooperacion internacional', icon: '🌍', desc: 'Organismos internacionales que financian proyectos sostenibles.' },
  { tipo: 'Sector privado', icon: '🏢', desc: 'Empresas comprometidas con el desarrollo del campo colombiano.' },
]

export default function Alianzas() {
  return (
    <section id="alianzas" className={styles.section}>
      <div className={styles.container}>

        <p className={styles.tagline}>Trabajo en equipo</p>
        <h2 className={styles.title}>Alianzas</h2>
        <p className={styles.subtitle}>
          El trabajo en el campo se fortalece cuando se hace en equipo. La federacion
          promueve alianzas estrategicas para impulsar proyectos de desarrollo rural sostenible.
        </p>

        <div className={styles.grid}>
          {aliados.map((a) => (
            <div key={a.tipo} className={styles.card}>
              <div className={styles.cardIcon}>{a.icon}</div>
              <h4 className={styles.cardTitle}>{a.tipo}</h4>
              <p className={styles.cardDesc}>{a.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h3 className={styles.ctaTitle}>Quieres ser aliado?</h3>
          <p className={styles.ctaText}>
            Si tu organizacion trabaja por el desarrollo rural sostenible, nos interesa
            conocerte y explorar oportunidades de trabajo conjunto.
          </p>
          <a href="#contacto" className={styles.ctaBtn}>Contactanos</a>
        </div>

      </div>
    </section>
  )
}