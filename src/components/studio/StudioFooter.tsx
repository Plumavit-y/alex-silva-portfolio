import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export const StudioFooter = () => {
    return (
        <footer className="w-full bg-[#0A0A0A] border-t border-white/5 py-16 px-6 relative z-30">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 font-mono">

                {/* Brand */}
                <div className="space-y-6">
                    <div>
                        <span className="font-black text-white text-lg tracking-[0.3em] uppercase block mb-1">ALEX // SILVA</span>
                        <span className="text-studio text-[10px] uppercase tracking-widest font-bold">Estudio de Desarrollo</span>
                    </div>
                    <p className="text-white/40 text-xs tracking-wide">
                        Melipilla, Chile.<br />
                        Arquitectura por contrato y sistemas de misión crítica.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://github.com/manquilef" target="_blank" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-studio/20 border border-white/5 transition-all">
                            <Github size={14} />
                        </a>
                        <a href="https://linkedin.com/in/alex-silva-loyola" target="_blank" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-studio/20 border border-white/5 transition-all">
                            <Linkedin size={14} />
                        </a>
                        <a href="mailto:alex@manquilef.cl" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-studio/20 border border-white/5 transition-all">
                            <Mail size={14} />
                        </a>
                    </div>
                </div>

                {/* Navigation 1 */}
                <div className="space-y-6">
                    <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Sectores</h4>
                    <div className="flex flex-col gap-3 text-white/40 text-xs tracking-widest uppercase">
                        <a href="#" className="hover:text-white transition-colors">Desarrollo Web</a>
                        <a href="#" className="hover:text-white transition-colors">Orquestación IA</a>
                        <a href="#" className="hover:text-white transition-colors">Sistemas API</a>
                        <a href="#" className="hover:text-white transition-colors">Infraestructura</a>
                        <a href="#" className="hover:text-white transition-colors">Modelos MVP</a>
                        <a href="#" className="hover:text-white transition-colors">Asesoría Técnica</a>
                    </div>
                </div>

                {/* Navigation 2 */}
                <div className="space-y-6">
                    <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Protocolos</h4>
                    <div className="flex flex-col gap-3 text-white/40 text-xs tracking-widest uppercase">
                        <Link href="/" className="hover:text-[#34D399] transition-colors">{`<- Portafolio Base`}</Link>
                        <a href="https://github.com/manquilef" target="_blank" className="hover:text-white transition-colors">Auditoría Código</a>
                        <a href="#" className="hover:text-white transition-colors">Metodología</a>
                    </div>
                </div>

                {/* Compliance */}
                <div className="space-y-6">
                    <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Legal</h4>
                    <div className="flex flex-col gap-3 text-white/40 text-[10px] tracking-widest uppercase">
                        <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
                        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Configuración de Protocolos</a>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono">
                <p className="text-white/20 text-[10px] uppercase tracking-widest">
                    © 2025 Alex Silva · Hecho con React + TypeScript + <span className="text-studio">☕</span>
                </p>
                <div className="flex items-center gap-4 px-4 py-1.5 rounded-none bg-studio/[0.03] border border-studio/20 text-[9px] uppercase tracking-[0.4em] text-studio">
                    <span className="w-1 h-1 rounded-full bg-studio animate-pulse" />
                    Selección Privada de Socios
                </div>
            </div>
        </footer>
    );
};
