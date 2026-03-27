export default function Footer() {
  return (
    <footer className="pt-8 pb-8 px-6" id="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="font-black text-slate-900 mb-4 uppercase tracking-tighter">CJ-Limpio</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Tu aliado en productos de limpieza de alta concentración. 
              Ventas al mayor y detal con atención personalizada.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Atención al Cliente</h4>
            <p className="text-slate-500 text-sm">Lunes a Sábado: 8:00 AM - 5:00 PM</p>
            <p className="text-slate-500 text-sm">Ubicados en: La Victoria, Edo. Aragua</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Formas de Pagos</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-[14px] font-bold border border-green-600 px-2 py-1 rounded text-black uppercase bg-green-100">Pago Móvil</span>
              <span className="text-[14px] font-bold border border-pink-600 px-2 py-1 rounded text-black uppercase bg-pink-100">Zelle</span>
              <span className="text-[14px] font-bold border border-purple-600 px-2 py-1 rounded text-black uppercase bg-purple-100">Efectivo $</span>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-800">© {new Date().getFullYear()} LimpiaTodo. Los precios se confirman vía WhatsApp.</p>
        </div>
      </div>
    </footer>
  );
}