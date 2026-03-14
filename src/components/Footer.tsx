const navLinks = ['Quienes Somos', 'Sectores', 'Innovacion', 'Proyectos', 'Alianzas', 'Noticias', 'Contacto']

export default function Footer() {
  return (
    <footer className="bg-verde-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <p className="font-display text-xl font-bold mb-1">FEDERACION COLOMBIANA</p>
            <p className="text-verde-mid text-sm tracking-widest uppercase mb-4">de Agricultores</p>
            <p className="text-white/60 text-sm font-body leading-relaxed">
              Impulsamos el desarrollo rural sostenible integrando agricultura, ambiente
              y turismo rural para fortalecer las comunidades del campo colombiano.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              Navegacion
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-white/60 text-sm font-body hover:text-verde-mid transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              Contacto
            </p>
            <ul className="space-y-3 text-white/60 text-sm font-body">
              <li>Colombia</li>
              <li>info@federacioncolombianadeagricultura.co</li>
              <li className="pt-4">
                <p className="text-white/80 text-xs mb-2 uppercase tracking-wider">Slogan</p>
                <p className="text-verde-mid font-display italic text-base">Progreso y desarrollo integral</p>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-body">
            &copy; 2025 Federacion Colombiana de Agricultura. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-xs font-body">
            Legalmente constituida ante la Camara de Comercio de Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}