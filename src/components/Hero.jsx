export default function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[1rem] overflow-hidden bg-slate-900 h-[500px] md:h-[500px] flex items-center">
          {/* Imagen de fondo con overlay */}
          <img 
            src="https://eurosanic.com/wp-content/uploads/2022/04/productos-limpieza-profesional.jpg" 
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            alt="Limpieza profesional"
          />
          
          <div className="relative z-10 p-8 md:p-16 max-w-2xl">
            <span className="bg-celeste-p text-black text-[12px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
              Despachos en Local
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Calidad que brilla, <br />
              <span className="text-blue-700">Precios que rinden.</span>
            </h1>
            <p className="text-white text-lg mb-8">
              Encuentra los mejores productos de limpieza al mayor y detal. 
              Paga con **Pago Móvil, Zelle o Divisas**.
            </p>
            <a href="#productos" className="inline-block glass-card text-slate-900 px-8 py-4 rounded-2xl font-bold transition shadow-xl efecto-burbujas">
              Ver Catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}