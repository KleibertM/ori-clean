import { ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function Navbar({ cartCount, onOpenCart }) {
    return (
        <nav className="fixed top-0 left-0 w-full glass-navbar z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-black text-xl">L</span>
                    </div>
                    <span className="font-black text-black tracking-tighter text-xl uppercase">
                        Ori<span className="text-pink-700">Clean</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
                    <a href="#inicio" className="hover:text-blue-600 transition">Inicio</a>
                    <a href="#productos" className="hover:text-blue-600 transition">Productos</a>
                    <a href="#nosotros" className="hover:text-blue-600 transition">Sobre Nosotros</a>
                </div>

                {/* Cart Icon */}
                <button
                    onClick={onOpenCart}
                    className="relative p-2 hover:bg-slate-50 rounded-full transition"
                >
                    <ShoppingCartIcon className="w-6 h-6 text-slate-700" />
                    {cartCount > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                            {cartCount}
                        </span>
                    )}
                </button>
            </div>
        </nav>
    );
}