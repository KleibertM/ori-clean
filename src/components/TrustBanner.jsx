export default function TrustBanner() {
  const info = [
    { icon: "💸", title: "Pagos Rápidos", desc: "Pago Móvil, Zelle, Cash", link: "#footer" },
    { icon: "📍", title: "Retiro Local", desc: "Entrega en tienda", link: "https://maps.app.goo.gl/GpeQE6GFSr2iXRz18" }, // Cambio de Delivery a Retiro
    { icon: "⭐", title: "Calidad", desc: "Fórmulas concentradas", link: "#productos" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-2 md:px-4">
  <div className="glass-card efecto-burbujas rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border-none">
    <div className="grid grid-cols-3 md:flex md:flex-row divide-x divide-white/20">
      {info.map((item, i) => (
        <a 
          key={i} 
          className="flex flex-col md:flex-row items-center md:items-center justify-center text-center md:text-left gap-2 md:gap-4 p-3 md:p-6 hover:bg-white/20 transition-colors"
          href={item.link}
        >
          {/* Icono: Un poco más pequeño en móvil para ahorrar espacio */}
          <span className="text-xl md:text-3xl filter drop-shadow-sm">
            {item.icon}
          </span>
          
          <div className="flex flex-col">
            {/* Título: Ajustado a text-[9px] en móvil para que no rompa la línea */}
            <h4 className="font-black text-black text-[9px] md:text-sm leading-tight uppercase tracking-tighter md:tracking-normal">
              {item.title}
            </h4>
            
            {/* Descripción: Solo visible en tablets/desktop para mantener la limpieza en móvil */}
            <p className="hidden md:block text-slate-700 text-[11px] font-medium opacity-80">
              {item.desc}
            </p>
          </div>
        </a>
      ))}
    </div>
  </div>
</div>
  );
}