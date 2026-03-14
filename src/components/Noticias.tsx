const noticias = [
  {
    categoria: 'Proyectos',
    titulo: 'Avances en el fortalecimiento de cadenas productivas de café en el Huila',
    fecha: 'Marzo 2025',
    descripcion: 'La federación acompaña a productores rurales en la mejora de sus procesos productivos y acceso a mercados.',
  },
  {
    categoria: 'Eventos',
    titulo: 'Primera asamblea general de asociaciones cofundadoras',
    fecha: 'Febrero 2025',
    descripcion: 'Las 9 asociaciones cofundadoras se reunieron para definir el plan de trabajo para 2025.',
  },
  {
    categoria: 'Convocatorias',
    titulo: 'Convocatoria abierta para proyectos de turismo rural comunitario',
    fecha: 'Enero 2025',
    descripcion: 'La federación abre convocatoria para comunidades interesadas en desarrollar proyectos de turismo rural.',
  },
]

export default function Noticias() {
  return (
    <section id="noticias" className="py-24 bg-crema">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-verde-mid text-sm tracking-widest uppercase text-center mb-3 font-body">
          Últimas novedades
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-verde-dark mb-4">
          Noticias
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-16 font-body">
          Avances, actividades, convocatorias y eventos de la Federación Colombiana de Agricultura.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {noticias.map(n => (
            <article
              key={n.titulo}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Color bar */}
              <div className="h-2 bg-gradient-to-r from-verde-dark to-verde-mid" />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-verde-light text-verde-dark text-xs px-3 py-1 rounded-full font-body">
                    {n.categoria}
                  </span>
                  <span className="text-gray-400 text-xs font-body">{n.fecha}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-verde-dark mb-3 leading-snug group-hover:text-verde-mid transition-colors">
                  {n.titulo}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-body">{n.descripcion}</p>
                <button className="mt-6 text-verde-mid text-sm font-body font-medium hover:text-verde-dark transition-colors">
                  Leer más →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}