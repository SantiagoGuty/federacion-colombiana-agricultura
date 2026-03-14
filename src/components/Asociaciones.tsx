import styles from '../styles/Asociaciones.module.css'

const asociaciones = [
  { nombre: 'Asociacion 1', territorio: 'Cundinamarca', actividad: 'Agricultura y cafe' },
  { nombre: 'Asociacion 2', territorio: 'Antioquia', actividad: 'Cacao y frutas' },
  { nombre: 'Asociacion 3', territorio: 'Narino', actividad: 'Agricultura sostenible' },
  { nombre: 'Asociacion 4', territorio: 'Boyaca', actividad: 'Turismo rural' },
  { nombre: 'Asociacion 5', territorio: 'Tolima', actividad: 'Agroindustria' },
  { nombre: 'Asociacion 6', territorio: 'Cauca', actividad: 'Medio ambiente' },
  { nombre: 'Asociacion 7', territorio: 'Huila', actividad: 'Cafe y ecoturismo' },
  { nombre: 'Asociacion 8', territorio: 'Meta', actividad: 'Ganaderia sostenible' },
  { nombre: 'Asociacion 9', territorio: 'Cordoba', actividad: 'Cadenas productivas' },
]

export default function Asociaciones() {
  return (
    <section id="asociaciones" className={styles.section}>
      <div className={styles.container}>

        <p className={styles.tagline}>Nuestra red</p>
        <h2 className={styles.title}>Red territorial</h2>
        <p className={styles.subtitle}>
          La federacion esta conformada por 9 asociaciones cofundadoras que representan
          diferentes procesos organizativos rurales a lo largo del territorio colombiano.
        </p>

        <div className={styles.grid}>
          {asociaciones.map((a, i) => (
            <div key={a.nombre} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardNumber}>{i + 1}</div>
                <h4 className={styles.cardName}>{a.nombre}</h4>
              </div>
              <p className={styles.cardTerritorio}>📍 {a.territorio}</p>
              <p className={styles.cardActividad}>{a.actividad}</p>
            </div>
          ))}
        </div>

        <p className={styles.disclaimer}>
          * Los nombres y territorios seran actualizados con la informacion oficial.
        </p>

      </div>
    </section>
  )
}