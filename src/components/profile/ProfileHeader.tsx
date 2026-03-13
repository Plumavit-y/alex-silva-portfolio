"use client";

import React from 'react';
import { Mail, Github, Linkedin, Target, ExternalLink, Mouse } from 'lucide-react';
import { m, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import { MagneticWrapper } from '@/components/ui/SpotlightCard';

export const ProfileHeader = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [1, 0]);
    const scale = useTransform(scrollY, [0, 100], [1, 0.9]);

    return (
        <header id="home" className="space-y-16 pb-16 border-b border-slate-100 relative">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                {/* Executive Portrait */}
                <m.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="relative w-44 h-44 md:w-56 md:h-56 shrink-0 group"
                >
                    <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] rotate-6 group-hover:rotate-12 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-slate-100 rounded-[2.5rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-700" />
                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                        <Image
                            src="/images/profile/alex-silva.webp"
                            alt="Alex Silva"
                            fill
                            className="object-cover transition-all duration-1000 group-hover:scale-110"
                            priority
                        />
                    </div>
                </m.div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 flex-1">
                    <div className="space-y-3">
                        <m.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full border border-primary/10"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            <span className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase">
                                Perfil Profesional de Élite
                            </span>
                        </m.div>
                        <m.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]"
                        >
                            Alex Silva
                        </m.h1>
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-2xl md:text-3xl font-bold text-slate-400 tracking-tight italic"
                        >
                            Arquitecto de Soluciones & UX Engineer
                        </m.div>
                    </div>

                    <m.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-600 text-xl leading-relaxed max-w-[700px] font-medium"
                    >
                        Especializado en arquitecturas de alto rendimiento y sistemas de misión crítica.
                        Con más de <span className="text-slate-900 font-black decoration-primary/30 decoration-4 underline-offset-4 underline">15 despliegues industriales</span> y un historial de <span className="text-slate-900 font-black">99.9% de resiliencia</span>. Transformo la complejidad técnica en una ventaja competitiva real para el negocio.
                    </m.p>

                    <m.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap items-center gap-4 pt-4"
                    >
                        <MagneticWrapper>
                            <a href="mailto:contact@manquilef.cl" className="px-8 py-4 bg-primary text-white rounded-2xl font-black text-sm shadow-2xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-3">
                                <Mail size={18} />
                                Iniciar Transmisión
                            </a>
                        </MagneticWrapper>
                        <div className="flex items-center gap-3">
                            <MagneticWrapper>
                                <a href="https://github.com/manquilef" target="_blank" rel="noopener noreferrer" className="p-4 bg-white text-slate-400 hover:text-primary hover:shadow-xl hover:shadow-primary/5 rounded-2xl transition-all border border-slate-100">
                                    <Github size={22} />
                                </a>
                            </MagneticWrapper>
                            <MagneticWrapper>
                                <a href="https://linkedin.com/in/alexsilva" target="_blank" rel="noopener noreferrer" className="p-4 bg-white text-slate-400 hover:text-primary hover:shadow-xl hover:shadow-primary/5 rounded-2xl transition-all border border-slate-100">
                                    <Linkedin size={22} />
                                </a>
                            </MagneticWrapper>
                        </div>
                    </m.div>
                </div>
            </div>

            {/* Credential Highlight */}
            <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-slate-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-200/50"
            >
                <div className="flex items-center gap-4 text-slate-600">
                    <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-primary shadow-sm">
                        <Target size={24} />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Reconocimiento Global</div>
                        <div className="text-slate-900 font-bold">Representante World Robot Summit Tokyo</div>
                    </div>
                </div>
                <div className="flex items-center gap-4 px-6 border-l border-slate-200 hidden md:flex">
                    <span className="text-sm font-medium text-slate-500 italic">&ldquo;Engineering excellence at the highest level&rdquo;</span>
                </div>
            </m.div>
            {/* Scroll Indicator */}
            <m.div
                style={{ opacity, scale }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-none hidden md:flex"
            >
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2 text-primary">
                        <Mouse size={14} className="animate-bounce" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Explorar Datos</span>
                    </div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent relative overflow-hidden">
                    <m.div
                        initial={{ y: "-100%" }}
                        animate={{ y: "100%" }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-primary"
                    />
                </div>
            </m.div>
        </header>
    );
};
