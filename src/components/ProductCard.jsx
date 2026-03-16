// src/components/ProductCard.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { PlusIcon, EyeIcon } from '@heroicons/react/24/outline'; // Usando tus dependencias

import 'swiper/css';
import 'swiper/css/pagination';

export default function ProductCard({ producto, onAdd }) {
  const navigate = useNavigate();
  const [medidaSel, setMedidaSel] = useState(producto.presentaciones[0]);
  const [cantidad, setCantidad] = useState(1);

  return (
    <div className="glass-card border-none rounded-3xl overflow-hidden flex flex-col h-full hover:scale-[1.02] transition-all duration-300">
      
      {/* Carrusel 3:4 */}
      <div className="relative aspect-[9/16] overflow-hidden"
      onClick={() => navigate(`/producto/${producto.id}`)}>
        <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="h-full w-full">
          {producto.imagenes.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt={producto.nombre} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-black text-sm md:text-base leading-tight mb-3">
          {producto.nombre}
        </h3>

        {/* Medidas */}
        <div className="flex flex-wrap gap-1 mb-4">
          {producto.presentaciones.map((m) => (
            <button
              key={m}
              onClick={() => setMedidaSel(m)}
              className={`text-[10px] font-bold px-2 py-1 rounded-md border transition-colors ${
                medidaSel === m ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-400 border-slate-200'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Botón Añadir con estilo moderno */}
        <button 
          onClick={() => onAdd(producto, medidaSel, cantidad)}
          className="w-full bg-green-500 text-white py-3 rounded-xl font-bold text-xs uppercase flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-lg shadow-green-100"
        >
          <PlusIcon className="w-4 h-4" />
          añadir
        </button>
        
        <button 
          onClick={() => navigate(`/producto/${producto.id}`)}
          className="mt-3 flex items-center justify-center gap-1 text-slate-400 text-[10px] font-bold hover:text-green-600 transition-colors uppercase tracking-tighter"
        >
          <EyeIcon className="w-3 h-3" />
          Ver Modo de Uso
        </button>
      </div>
    </div>
  );
}