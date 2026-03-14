export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-verde-dark via-[#0a7a20] to-verde-mid" />
      
      {/* Decorative circles inspired by brand book */}
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/4 translate-x-1/4" />
      <div className="absolute left-0 bottom-0 w-72 h-72 rounded-full bg-white/5 translate-y-1/4 -translate-x-1/4" />
      <div className="absolute right-1/4 bottom-1/4 w-48 h-48 rounded-full bg-white/5" />

      <div className="relative z-10 text-center max-w-4xl px-6 py-32">
        <p className="text-verde-mid text-sm tracking-[0.3em] uppercase mb-4 font-body">
          Progreso y desarrollo integral
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-black leading-tight mb-6">
          Federación Colombiana<br />de Agricultura
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4 font-body">
          Desarrollo rural sostenible que integra agricultura, ambiente y turismo rural.
        </p>
        <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto mb-10 font-body leading-relaxed">
          Organización nacional conformada por 9 asociaciones rurales que impulsan proyectos 
          productivos, sostenibles e innovadores para fortalecer el campo colombiano.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#quienes" className="bg-white text-verde-dark font-semibold px-8 py-3 rounded-full hover:bg-verde-mid hover:text-white transition-all duration-300">
            Conocer la Federación
          </a>
          <a href="#sectores" className="border border-white/50 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300">
            Sectores de trabajo
          </a>
          <a href="#contacto" className="bg-verde-mid text-white px-8 py-3 rounded-full hover:bg-verde-dark transition-all duration-300">
            Contacto
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="#FAFAF7"/>
        </svg>
      </div>
    </section>
  )
}