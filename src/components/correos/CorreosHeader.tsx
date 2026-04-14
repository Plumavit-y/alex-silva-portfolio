"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { MagneticButton } from '@/components/studio/MagneticButton';

interface CorreosHeaderProps {
    onOpenConfigurator: () => void;
}

export const CorreosHeader = ({ onOpenConfigurator }: CorreosHeaderProps) => {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
             setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-white/10 shadow-2xl' : 'bg-transparent border-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                
                {/* Brand Left */}
                <div className="flex items-center gap-3">
                    <Link href="/estudio" className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-correos/50 transition-colors shadow-inner">
                            <span className="font-serif italic font-bold text-white group-hover:text-correos transition-colors">A</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-sans font-medium text-white/90 text-[13px] tracking-wide leading-none group-hover:text-white transition-colors mb-0.5">Alex Silva</span>
                            <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-correos/60 group-hover:text-correos transition-colors">Communications</span>
                        </div>
                    </Link>
                </div>

                {/* Nav Center */}
                <nav className="hidden md:flex items-center gap-10">
                    <button onClick={() => scrollToSection('beneficios')} className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">Beneficios</button>
                    <button onClick={() => scrollToSection('inversion')} className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">Planes de Inversión</button>
                    <button onClick={() => scrollToSection('faq')} className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">F.A.Q.</button>
                </nav>

                {/* CTA Right */}
                <div className="flex items-center">
                    <MagneticButton onClick={onOpenConfigurator} className="hidden md:flex bg-correos text-black px-6 py-2.5 hover:bg-white transition-colors text-[10px] font-mono uppercase tracking-[0.1em] font-bold items-center gap-2 group shadow-[0_0_15px_rgba(138,163,146,0.3)]">
                       <Mail size={12} className="group-hover:scale-110 transition-transform" />
                       Comisionar Setup
                    </MagneticButton>
                    
                    {/* Mobile premium pill */}
                    <button onClick={onOpenConfigurator} className="md:hidden text-[#0A0F0D] bg-correos border border-correos/50 px-5 py-2 rounded-full text-[9px] font-mono uppercase tracking-[0.2em] font-bold shadow-[0_0_15px_rgba(138,163,146,0.2)] active:scale-95 transition-transform">Cotizar</button>
                </div>

            </div>
        </header>
    );
}
