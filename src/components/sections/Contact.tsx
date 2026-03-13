"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Mail, Linkedin, ArrowRight, MessageSquare } from 'lucide-react';

export const Contact = () => {
    return (
        <Section id="contact" className="border-t border-white/5 bg-[#050505]">
            <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-12 md:py-24">
                <div className="space-y-6 mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[1px] w-12 bg-primary/30" />
                        <span className="text-primary text-[10px] uppercase font-bold tracking-[0.4em] opacity-80">SECCIÓN_05 // PORTAL B2B</span>
                        <div className="h-[1px] w-12 bg-primary/30" />
                    </div>
                    <h2 className="mb-0 text-[48px] md:text-[64px] tracking-tighter leading-none text-white font-black uppercase">
                        SALA DE <br />
                        <span className="text-white/20 italic font-light text-[32px] md:text-[48px]">OPERACIONES</span>
                    </h2>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-mono tracking-wide lowercase pt-6">
                        sistemas donde el rendimiento no es una métrica de vanidad, es el modelo de negocio. para arquitectura privada, contratos y consultoría de ingeniería de sistemas de alto nivel, ingrese al portal del estudio.
                    </p>
                </div>

                <a
                    href="/estudio"
                    className="group relative inline-flex items-center justify-center gap-6 bg-white text-black px-12 md:px-16 py-6 md:py-8 font-black uppercase tracking-[0.3em] text-[10px] md:text-[12px] hover:bg-white/90 transition-all overflow-hidden"
                >
                    <span className="relative z-10">INGRESAR A ESTUDIO.ALEXSILVA.CL</span>
                    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                    <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                </a>

                <div className="mt-16 text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] flex items-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-500/50 animate-pulse" />
                    ESTUDIO_STATUS: EN_LÍNEA
                </div>
            </div>
        </Section>
    );
};
