export default function TrustBanner() {
  const info = [
    { icon: "💸", title: "Pagos Rápidos", desc: "Pago Móvil, Zelle, Cash" },
    { icon: "🚚", title: "Delivery", desc: "Envíos a domicilio" },
    { icon: "⭐", title: "Calidad", desc: "Fórmulas concentradas" }
  ];

  return (
    <div className="glass-card rounded-[2.5rem] flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/20">
      <div className="rounded-4xl shadow-xl border border-slate-100 flex flex-row md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100 overflow-hidden">
        {info.map((item, i) => (
          <div key={i} className="flex-1 p-5 flex items-center gap-4 hover:bg-green-500 transition-colors">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <h4 className="font-bold text-black text-sm leading-tight">{item.title}</h4>
              <p className="text-slate-500 text-[11px]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}