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
    categoria: 'Agrícola',
    titulo: 'Fortalecimiento de cadenas productivas de café',
    descripcion: 'Apoyo a productores rurales en la mejora de procesos de producción, transformación y comercialización del café.',
    impacto: '200 familias beneficiadas',
    territorio: 'Huila y Nariño',
    color: 'bg-verde-dark',
  },
  {
    categoria: 'Ambiental',
    titulo: 'Restauración de ecosistemas y protección del agua',
    descripcion: 'Proyecto de reforestación y conservación de cuencas hídricas en territorios rurales.',
    impacto: '500 hectáreas restauradas',
    territorio: 'Cauca y Boyacá',
    color: 'bg-cielo',
  },
  {
    categoria: 'Turismo Rural',
    titulo: 'Rutas de turismo comunitario',
    descripcion: 'Desarrollo de rutas turísticas que integran cultura, naturaleza y producción agrícola local.',
    impacto: '15 comunidades participantes',
    territorio: 'Antioquia y Meta',
    color: 'bg-tierra',
  },
  {
    categoria: 'Inclusión',
    titulo: 'Oportunidades para mujeres rurales',
    descripcion: 'Programa de formación y acceso a mercados para mujeres cabeza de hogar en zonas rurales.',
    impacto: '150 mujeres participantes',
    territorio: 'Cundinamarca y Tolima',
    color: 'bg-verde-mid',
  },
]

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-24 bg-crema">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-verde-mid text-sm tracking-widest uppercase text-center mb-3 font-body">
          Nuestras iniciativas
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-verde-dark mb-4">
          Proyectos
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-16 font-body">
          Iniciativas concretas que generan impacto en los territorios rurales colombianos.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {proyectos.map(p => (
            <div key={p.titulo} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className={`${p.color} px-6 py-3`}>
                <span className="text-white text-xs font-body uppercase tracking-widest">{p.categoria}</span>
              </div>
              <div className="p-8">
                <h3 className="font-display text-xl font-bold text-verde-dark mb-3">{p.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-body mb-6">{p.descripcion}</p>
                <div className="flex gap-4 flex-wrap">
                  <span className="bg-verde-light text-verde-dark text-xs px-3 py-1 rounded-full font-body">
                    📊 {p.impacto}
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-body">
                    📍 {p.territorio}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}