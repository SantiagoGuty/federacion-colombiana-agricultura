import styles from '../styles/Sectores.module.css'

interface Sector {
  icon: string
  title: string
  description: string
  tags: string[]
  image: string
}

const sectores: Sector[] = [
  {
    icon: '🌾',
    title: 'Agricultura',
    description: 'Produccion agricola, cadenas productivas, agroindustria e innovacion para los productores rurales.',
    tags: ['Cafe', 'Cacao', 'Frutas', 'Agroindustria', 'Agricultura sostenible'],
    image: '/images/ganado.jpeg',
  },
  {
    icon: '🌿',
    title: 'Ambiente',
    description: 'Proteccion de recursos naturales, reforestacion, conservacion de ecosistemas y educacion ambiental.',
    tags: ['Restauracion ambiental', 'Proteccion del agua', 'Proyectos climaticos'],
    image: '/images/pajaro_rojo.jpeg',
  },
  {
    icon: '🏡',
    title: 'Turismo Rural',
    description: 'Turismo comunitario y experiencias rurales que generan ingresos y muestran la riqueza territorial.',
    tags: ['Agroturismo', 'Rutas productivas', 'Ecoturismo', 'Turismo cultural'],
    image: '/images/vacas_en_campo.jpeg',
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
              <div
                className={styles.cardTop}
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.55)), url(${s.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
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