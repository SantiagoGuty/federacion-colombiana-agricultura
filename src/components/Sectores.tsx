import styles from '../styles/Sectores.module.css'

interface Sector {
  icon: string
  title: string
  description: string
  tags: string[]
  gradient: string
}

const sectores: Sector[] = [
  {
    icon: '🌾',
    title: 'Agricultura',
    description: 'Produccion agricola, cadenas productivas, agroindustria e innovacion para los productores rurales.',
    tags: ['Cafe', 'Cacao', 'Frutas', 'Agroindustria', 'Agricultura sostenible'],
    gradient: 'linear-gradient(to bottom right, #005932, #0CA81B)',
  },
  {
    icon: '🌿',
    title: 'Ambiente',
    description: 'Proteccion de recursos naturales, reforestacion, conservacion de ecosistemas y educacion ambiental.',
    tags: ['Restauracion ambiental', 'Proteccion del agua', 'Proyectos climaticos'],
    gradient: 'linear-gradient(to bottom right, #1A6B9A, #0CA81B)',
  },
  {
    icon: '🏡',
    title: 'Turismo Rural',
    description: 'Turismo comunitario y experiencias rurales que generan ingresos y muestran la riqueza territorial.',
    tags: ['Agroturismo', 'Rutas productivas', 'Ecoturismo', 'Turismo cultural'],
    gradient: 'linear-gradient(to bottom right, #8B5E3C, #005932)',
  },
]

export default function Sectores() {
  return (
    <section id="sectores" className={styles.section}>
      <div className={styles.container}>

        <p className={styles.tagline}>Nuestro trabajo</p>
        <h2 className={styles.title}>Sectores de trabajo</h2>
        <p className={styles.subtitle}>
          Trabajamos en tres pilares fundamentales que integran produccion, sostenibilidad
          y nuevas economias para el campo colombiano.
        </p>

        <div className={styles.grid}>
          {sectores.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.cardTop} style={{ background: s.gradient }}>
                <div className={styles.cardIcon}>{s.icon}</div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.description}</p>
              </div>
              <div className={styles.cardBottom}>
                <p className={styles.cardActividades}>Actividades</p>
                <div className={styles.tags}>
                  {s.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}