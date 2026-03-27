import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function Toast({ message, visible }) {
    if (!visible) return null;

    return (
        <div className="fixed top-20 right-6 z-[100] animate-in fade-in slide-in-from-right-8 duration-300">
            <div className="glass-card bg-white/70 backdrop-blur-xl border border-white/40 p-4 rounded-2xl shadow-2xl flex items-center gap-3 min-w-[280px]">
                <div className="bg-green-500/20 p-2 rounded-full">
                    <CheckCircleIcon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black">
                        Éxito
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                        {message}
                    </p>
                </div>
            </div>
        </div>
    );
}