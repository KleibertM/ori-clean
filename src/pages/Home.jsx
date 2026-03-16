import { useState } from 'react';
import Hero from '../components/Hero';
import TrustBanner from '../components/TrustBanner';
import ProductCard from '../components/ProductCard';
import productosData from '../data/productos.json';

export default function Home({ onAdd }) {
  // Estado para saber qué categoría mostrar
  const [categoriaActiva, setCategoriaActiva] = useState('todos');

  // Definimos las categorías que coinciden con el JSON
  const categorias = [
    { id: 'todos', nombre: 'Todos' },
    { id: 'suelo', nombre: 'Pisos' },
    { id: 'cocina', nombre: 'Cocina' },
    { id: 'ropa', nombre: 'Ropa' },
    { id: 'especiales', nombre: 'Especiales' }
  ];

  // Filtramos la data según la selección
  const productosFiltrados = categoriaActiva === 'todos' 
    ? productosData 
    : productosData.filter(p => p.categoria === categoriaActiva);

  return (
    <div className="min-h-screen pb-20">
      <Hero />

      <div className="relative z-20 -mt-8">
        <TrustBanner />
      </div>

      <section id="productos" className="max-w-7xl mx-auto px-4 pt-16">
        <div className="text-center mb-10">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2">Nuestro Catálogo</h2>
          <h3 className="text-3xl font-black text-slate-900 italic">Eficacia en cada gota</h3>
        </div>

        {/* 2. BARRA DE FILTROS (SCROLL HORIZONTAL EN MÓVIL) */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar justify-start md:justify-center">
          {categorias.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategoriaActiva(cat.id)}
              className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all border shrink-0 ${
                categoriaActiva === cat.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100'
                  : 'bg-white text-slate-400 border-slate-200 hover:border-blue-300'
              }`}
            >
              {cat.nombre}
            </button>
          ))}
        </div>

        {/* 3. GRID DE PRODUCTOS (2 COLUMNAS EN MÓVIL) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {productosFiltrados.map(producto => (
            <ProductCard 
              key={producto.id} 
              producto={producto} 
              onAdd={onAdd} 
            />
          ))}
        </div>

        {/* Mensaje si no hay productos (opcional) */}
        {productosFiltrados.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            Próximamente más productos en esta categoría...
          </div>
        )}
      </section>
    </div>
  );
}