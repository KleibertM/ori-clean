// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';

export default function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, medida, cantidad) => {
    const itemUnique = { ...producto, medida, cantidad, idCarrito: `${producto.id}-${medida}` };
    setCarrito(prev => {
      const existe = prev.find(i => i.idCarrito === itemUnique.idCarrito);
      if (existe) return prev.map(i => i.idCarrito === itemUnique.idCarrito ? { ...i, cantidad: i.cantidad + cantidad } : i);
      return [...prev, itemUnique];
    });
  };

  return (
    <div className="antialiased text-slate-900">
      <Navbar cartCount={carrito.length} />
      <Routes>
        <Route path="/" element={<Home onAdd={agregarAlCarrito} />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}