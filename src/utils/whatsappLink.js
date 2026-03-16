export const generateWhatsAppLink = (carrito) => {
  const phone = "584121234567"; // Reemplaza con tu número real
  
  const listaProductos = carrito.map(item => 
    `- *${item.nombre}* (${item.medida}) x${item.cantidad}`
  ).join('%0A');

  const textoMetodos = "Métodos de pago aceptados: %0A✅ Pago Móvil %0A✅ Zelle %0A✅ Efectivo / Divisas";

  const mensaje = `Hola! 👋 Quisiera consultar el precio actual de estos productos:%0A%0A${listaProductos}%0A%0A${textoMetodos}%0A%0A¿Están disponibles?`;

  return `https://wa.me/${phone}?text=${mensaje}`;
};