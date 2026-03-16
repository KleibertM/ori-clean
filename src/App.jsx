// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsappButton from './utils/WhatsAppBtn';
import ProductDetail from './pages/ProductDetail';
import ScrollToTop from './utils/ScrollToTop';

export default function App() {
  const [carrito, setCarrito] = useState([]);

  // 1. Agregar
  const agregarAlCarrito = (producto, medida, cantidad) => {
    const idCarrito = `${producto.id}-${medida}`;
    setCarrito(prev => {
      const existe = prev.find(i => i.idCarrito === idCarrito);
      if (existe) {
        return prev.map(i => i.idCarrito === idCarrito ? { ...i, cantidad: i.cantidad + cantidad } : i);
      }
      return [...prev, { ...producto, medida, cantidad, idCarrito }];
    });
  };

  // 2. Aumentar/Disminuir cantidad
  const updateQuantity = (idCarrito, change) => {
    setCarrito(prev => prev.map(item => {
      if (item.idCarrito === idCarrito) {
        const nuevaCant = Math.max(1, item.cantidad + change);
        return { ...item, cantidad: nuevaCant };
      }
      return item;
    }));
  };

  // 3. Eliminar
  const removeItem = (idCarrito) => {
    setCarrito(prev => prev.filter(item => item.idCarrito !== idCarrito));
  };

  return (
    <div className="antialiased">
      <ScrollToTop />
      <Navbar cartCount={carrito.length} />
      <Routes>
        <Route path="/" element={<Home onAdd={agregarAlCarrito} />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route 
          path="/carrito" 
          element={<Cart items={carrito} updateQuantity={updateQuantity} removeItem={removeItem} />} 
        />
      </Routes>
      <Footer />
      <WhatsappButton />
    </div>
  );
}