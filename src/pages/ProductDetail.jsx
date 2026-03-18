import { useParams, useNavigate } from 'react-router-dom';
import productosData from '../data/productos.json';

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Buscamos el producto por ID
    const producto = productosData.find(p => p.id === parseInt(id));

    if (!producto) return <div className="p-20 text-center text-slate-500 font-bold">Producto no encontrado...</div>;

    return (
        <div className="min-h-screen pt-24 pb-12 px-0">
            <div className="max-w-4xl mx-auto">
                {/* Botón Volver */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-1 transition-transform"
                >
                    ← Volver al catálogo
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Imagen destacada */}
                    <div className="aspect-[3/4]  overflow-hidden shadow-2xl">
                        <img
                            src={producto.imagenes[0]}
                            className="w-full h-full object-cover"
                            alt={producto.nombre}
                        />
                    </div>

                    {/* Información de Uso */}
                    <div className="flex flex-col m-2 p-6 rounded-t-[2rem] glass-card mt-[1rem] shadow-xl border-none">
                        <span className="text-blue-600 font-black uppercase text-xs tracking-widest mb-2">
                            {producto.categoria}
                        </span>
                        <h1 className="text-4xl font-black text-slate-900 mb-6">{producto.nombre}</h1>

                        <div className="space-y-8">
                            {/* Sección Modo de Uso */}
                            <div>
                                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                                    <span className="text-blue-500">✨</span> ¿Cómo usar este producto?
                                </h3>
                                <p className="text-slate-900 leading-relaxed bg-white/40 backdrop-blur-sm p-6 rounded-3xl border border-white/60 shadow-inner">
                                    {producto.uso}
                                </p>
                            </div>

                            {/* Sección Presentaciones */}
                            <div>
                                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                                    <span className="text-blue-500">📦</span> Presentaciones disponibles
                                </h3>
                                <div className="flex gap-3">
                                    {producto.presentaciones.map(m => (
                                        <span key={m} className="px-4 py-2 bg-slate-100 rounded-xl text-slate-700 font-bold text-sm">
                                            {m}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Advertencia de Seguridad (Clave para productos de limpieza) */}
                            <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-amber-600 font-bold">⚠️ Atención:</span>
                                </div>
                                <p className="text-sm text-amber-800">
                                    Mantener fuera del alcance de niños y mascotas. No mezclar con otros químicos sin asesoría previa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}