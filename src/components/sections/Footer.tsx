"use client";

import React from 'react';

export const Footer = () => {
    return (
        <footer className="py-20 px-6 border-t border-white/5 bg-[#050505]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex flex-col gap-4">
                    <div className="text-white font-bold text-xl tracking-tighter">Alex Silva<span className="text-primary italic">.S</span></div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">Desarrollador Full-stack y Arquitecto Técnico</p>
                </div>

                <div className="flex gap-12">
                    {['GitHub', 'LinkedIn', 'Instagram'].map(social => (
                        <a key={social} href="#" className="text-xs text-white/30 hover:text-white transition-colors uppercase tracking-widest">{social}</a>
                    ))}
                </div>

                <div className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-mono">
                    © 2025 // Construido con precisión
                </div>
            </div>
        </footer>
    );
};
