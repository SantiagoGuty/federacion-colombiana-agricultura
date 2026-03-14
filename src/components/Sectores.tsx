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
    description: 'Producción agrícola, cadenas productivas, agroindustria e innovación para los productores rurales.',
    tags: ['Café', 'Cacao', 'Frutas', 'Agroindustria', 'Agricultura sostenible'],
    gradient: 'from-verde-dark to-verde-mid',
  },
  {
    icon: '🌿',
    title: 'Ambiente',
    description: 'Protección de recursos naturales, reforestación, conservación de ecosistemas y educación ambiental.',
    tags: ['Restauración ambiental', 'Protección del agua', 'Proyectos climáticos'],
    gradient: 'from-cielo to-verde-mid',
  },
  {
    icon: '🏡',
    title: 'Turismo Rural',
    description: 'Turismo comunitario y experiencias rurales que generan ingresos y muestran la riqueza territorial.',
    tags: ['Agroturismo', 'Rutas productivas', 'Ecoturismo', 'Turismo cultural'],
    gradient: 'from-tierra to-verde-dark',
  },
]

export default function Sectores() {
  return (
    <section id="sectores" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-verde-mid text-sm tracking-widest uppercase text-center mb-3 font-body">
          Nuestro trabajo
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-verde-dark mb-4">
          Sectores de trabajo
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-16 font-body">
          Trabajamos en tres pilares fundamentales que integran producción, sostenibilidad 
          y nuevas economías para el campo colombiano.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {sectores.map(s => (
            <div
              key={s.title}
              className="rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className={`bg-gradient-to-br ${s.gradient} p-8 text-white`}>
                <div className="text-6xl mb-4">{s.icon}</div>
                <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed font-body">{s.description}</p>
              </div>
              <div className="bg-white p-6">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-body">Actividades</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map(t => (
                    <span
                      key={t}
                      className="bg-verde-light text-verde-dark text-xs px-3 py-1 rounded-full font-body"
                    >
                      {t}
                    </span>
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