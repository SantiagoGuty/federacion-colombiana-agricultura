import styles from '../styles/Proyectos.module.css'

interface Proyecto {
  categoria: string
  titulo: string
  descripcion: string
  impacto: string
  territorio: string
  color: string
}

const proyectos: Proyecto[] = [
  {
    categoria: 'Agricola',
    titulo: 'Fortalecimiento de cadenas productivas de cafe',
    descripcion: 'Apoyo a productores rurales en la mejora de procesos de produccion, transformacion y comercializacion del cafe.',
    impacto: '200 familias beneficiadas',
    territorio: 'Huila y Narino',
    color: '#005932',
  },
  {
    categoria: 'Ambiental',
    titulo: 'Restauracion de ecosistemas y proteccion del agua',
    descripcion: 'Proyecto de reforestacion y conservacion de cuencas hidricas en territorios rurales.',
    impacto: '500 hectareas restauradas',
    territorio: 'Cauca y Boyaca',
    color: '#1A6B9A',
  },
  {
    categoria: 'Turismo Rural',
    titulo: 'Rutas de turismo comunitario',
    descripcion: 'Desarrollo de rutas turisticas que integran cultura, naturaleza y produccion agricola local.',
    impacto: '15 comunidades participantes',
    territorio: 'Antioquia y Meta',
    color: '#8B5E3C',
  },
  {
    categoria: 'Inclusion',
    titulo: 'Oportunidades para mujeres rurales',
    descripcion: 'Programa de formacion y acceso a mercados para mujeres cabeza de hogar en zonas rurales.',
    impacto: '150 mujeres participantes',
    territorio: 'Cundinamarca y Tolima',
    color: '#0CA81B',
  },
]

export default function Proyectos() {
  return (
    <section id="proyectos" className={styles.section}>
      <div className={styles.container}>

        <p className={styles.tagline}>Nuestras iniciativas</p>
        <h2 className={styles.title}>Proyectos</h2>
        <p className={styles.subtitle}>
          Iniciativas concretas que generan impacto en los territorios rurales colombianos.
        </p>

        <div className={styles.grid}>
          {proyectos.map((p) => (
            <div key={p.titulo} className={styles.card}>
              <div className={styles.cardBar} style={{ backgroundColor: p.color }}>
                <span className={styles.cardCategoria}>{p.categoria}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{p.titulo}</h3>
                <p className={styles.cardDesc}>{p.descripcion}</p>
                <div className={styles.cardTags}>
                  <span className={styles.tagImpacto}>📊 {p.impacto}</span>
                  <span className={styles.tagTerritorio}>📍 {p.territorio}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}