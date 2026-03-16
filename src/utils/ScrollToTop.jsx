import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Esto fuerza al navegador a ir al inicio suavemente o de golpe
    window.scrollTo(0, 0);
  }, [pathname]); // Se ejecuta cada vez que el nombre de la ruta cambia

  return null;
}