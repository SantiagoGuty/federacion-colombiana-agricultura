const asociaciones = [
  { nombre: 'Asociación 1', territorio: 'Cundinamarca', actividad: 'Agricultura y café' },
  { nombre: 'Asociación 2', territorio: 'Antioquia', actividad: 'Cacao y frutas' },
  { nombre: 'Asociación 3', territorio: 'Nariño', actividad: 'Agricultura sostenible' },
  { nombre: 'Asociación 4', territorio: 'Boyacá', actividad: 'Turismo rural' },
  { nombre: 'Asociación 5', territorio: 'Tolima', actividad: 'Agroindustria' },
  { nombre: 'Asociación 6', territorio: 'Cauca', actividad: 'Medio ambiente' },
  { nombre: 'Asociación 7', territorio: 'Huila', actividad: 'Café y ecoturismo' },
  { nombre: 'Asociación 8', territorio: 'Meta', actividad: 'Ganadería sostenible' },
  { nombre: 'Asociación 9', territorio: 'Córdoba', actividad: 'Cadenas productivas' },
]

export default function Asociaciones() {
  return (
    <section id="asociaciones" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-verde-mid text-sm tracking-widest uppercase text-center mb-3 font-body">
          Nuestra red
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-verde-dark mb-4">
          Red territorial
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-16 font-body">
          La federación está conformada por 9 asociaciones cofundadoras que representan 
          diferentes procesos organizativos rurales a lo largo del territorio colombiano.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {asociaciones.map((a, i) => (
            <div
              key={a.nombre}
              className="border border-gray-100 rounded-2xl p-6 hover:border-verde-mid hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-verde-light rounded-full flex items-center justify-center text-verde-dark font-bold font-display">
                  {i + 1}
                </div>
                <h4 className="font-display font-bold text-verde-dark group-hover:text-verde-mid transition-colors">
                  {a.nombre}
                </h4>
              </div>
              <p className="text-xs text-gray-400 font-body mb-1">📍 {a.territorio}</p>
              <p className="text-sm text-gray-600 font-body">{a.actividad}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10 font-body">
          * Los nombres y territorios de las asociaciones serán actualizados con la información oficial.
        </p>
      </div>
    </section>
  )
}