import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

export default function Cart({ items, updateQuantity, removeItem }) {
  
  // Cálculo del total (si decides ponerle precios luego, si no, solo cuenta items)
  const totalItems = items.reduce((acc, item) => acc + item.cantidad, 0);

  const enviarWhatsApp = () => {
    const telefono = "584149442141"; // <-- PON AQUÍ EL NÚMERO DE TU TÍA
    
    let mensaje = "¡Hola! 👋 Quisiera realizar el siguiente pedido en *CJ-Limpio*:\n\n";
    
    items.forEach(item => {
      mensaje += `✅ *${item.nombre}*\n`;
      mensaje += `   Medida: ${item.medida}\n`;
      mensaje += `   Cantidad: ${item.cantidad}\n`;
      mensaje += `   --------------------------\n`;
    });

    mensaje += `\n*Total de productos:* ${totalItems}`;
    mensaje += `\n\n¿Me podrías indicar el monto total y los datos de pago?`;

    // Codificar para URL
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="glass-card efecto-burbujas p-10 rounded-[2.5rem] text-center max-w-2xl mx-auto mt-10">
        <p className="text-slate-500 font-bold">Tu carrito está vacío...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 mt-16">
      <div className="glass-card efecto-burbujas rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="p-6 md:p-10">
          <h2 className="text-2xl font-black text-black mb-8 uppercase tracking-tighter">
            Mi Pedido ✨
          </h2>

          {/* Tabla de Productos */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/20 text-slate-500 text-[10px] uppercase tracking-widest">
                  <th className="py-4 px-2">Producto</th>
                  <th className="py-4 px-2 text-center">Cantidad</th>
                  <th className="py-4 px-2 text-right">Acción</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.idCarrito} className="border-b border-white/10 group">
                    <td className="py-6 px-2">
                      <p className="font-bold text-black text-sm md:text-base">{item.nombre}</p>
                      <span className="text-[10px] bg-white/40 px-2 py-0.5 rounded text-slate-600 font-bold uppercase">
                        {item.medida}
                      </span>
                    </td>
                    <td className="py-6 px-2">
                      <div className="flex items-center justify-center gap-3 bg-white/30 rounded-full p-1 w-max mx-auto border border-white/40">
                        <button 
                          onClick={() => updateQuantity(item.idCarrito, -1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-full transition-colors"
                        >
                          <MinusIcon className="w-4 h-4 text-black" />
                        </button>
                        <span className="font-black text-black w-4 text-center">{item.cantidad}</span>
                        <button 
                          onClick={() => updateQuantity(item.idCarrito, 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-full transition-colors"
                        >
                          <PlusIcon className="w-4 h-4 text-black" />
                        </button>
                      </div>
                    </td>
                    <td className="py-6 px-2 text-right">
                      <button 
                        onClick={() => removeItem(item.idCarrito)}
                        className="text-pink-500 hover:text-pink-700 transition-colors p-2"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer del Carrito */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Resumen</p>
              <p className="text-2xl font-black text-black">{totalItems} Productos seleccionados</p>
            </div>
            
            <button 
              onClick={enviarWhatsApp}
              className="w-full md:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-green-600 transition-all shadow-xl hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
            >
              🚀 Hacer Pedido por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}