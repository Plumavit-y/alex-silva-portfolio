"use client";

import React, { useState } from 'react';
import { m, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Calendar, Terminal, ArrowRight, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { LayeredParallaxStudio } from '@/components/ui/LayeredParallaxStudio';
import { TelemetryPanel } from '@/components/studio/TelemetryPanel';
import dynamic from 'next/dynamic';
import { ServiceCard } from '@/components/studio/ServiceCard';
import { MagneticButton } from '@/components/studio/MagneticButton';
const ConfiguratorModal = dynamic(() => import('@/components/studio/ConfiguratorModal').then(mod => mod.ConfiguratorModal), { ssr: false });
import { StudioFooter } from '@/components/studio/StudioFooter';
import { STUDIO_SERVICES } from '@/constants/studioData';
import { Button } from '@/components/ui/Button';
import { GlobalHUD } from '@/components/ui/GlobalHUD';

export default function EstudioPage() {
    const [configuratorOpen, setConfiguratorOpen] = useState(false);
    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

    const handleOpenConfigurator = (id?: string) => {
        setSelectedServiceId(id || null);
        setConfiguratorOpen(true);
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-studio/30 font-sans relative overflow-x-hidden">

            <TelemetryPanel />
            <GlobalHUD />


            {/* 1. MAIN SERVICES SECTION (Parallax Backdrop) */}
            <section className="relative w-full min-h-screen pt-24 pb-32 px-6 overflow-hidden">
                {/* Parallax Background - Fixed and Ambient */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <LayeredParallaxStudio />
                    <div className="absolute inset-0 bg-[#422006]/02 mix-blend-color" />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto flex flex-col items-center">
                    
                    {/* Minimalist Status / Identity */}
                    <m.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-6 mb-20 font-mono uppercase tracking-[0.5em] text-[9px]"
                    >
                        <div className="flex items-center gap-3 bg-studio/[0.03] backdrop-blur-3xl border border-studio/20 px-5 py-2 rounded-full shadow-2xl">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-studio/40 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-studio"></span>
                            </span>
                            <span className="text-studio tracking-[0.2em] font-medium">DISPONIBILIDAD ÉLITE</span>
                        </div>
                        <div className="w-[1px] h-3 bg-white/10" />
                        <span className="text-white/30">Alex Silva // Systems Architect</span>
                    </m.div>

                    {/* Impactful Services Header */}
                    <div className="text-center mb-24 space-y-8">
                        <m.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-medium tracking-tight text-white leading-[0.85] flex flex-col items-center">
                                <span className="opacity-90">Bespoke Architecture</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-studio/60 via-studio to-studio/30 font-light italic tracking-normal lowercase mt-2 pb-6 px-12">
                                     of digital luxury
                                 </span>
                            </h1>
                        </m.div>
                        
                        <m.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-white/40 max-w-2xl mx-auto font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase leading-relaxed"
                        >
                            La intersección entre la <br className="hidden md:block" />
                            ingeniería de precisión y el diseño atemporal.
                        </m.p>

                        <m.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex justify-center pt-8"
                        >
                            <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
                        </m.div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
                        {STUDIO_SERVICES.map((service, i) => (
                            <m.div
                                key={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <ServiceCard
                                    {...service}
                                    onClick={() => handleOpenConfigurator(service.id)}
                                />
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. CONTACT / CTA SECTION */}
            <section className="relative z-30 py-32 px-6 bg-[#050505]/95 backdrop-blur-3xl border-y border-white/5 shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">

                    <div className="flex-1 text-left space-y-8">
                        <div className="flex items-center gap-3 text-studio/60 font-mono text-[9px] tracking-[0.6em] uppercase">
                            Consultoría Privada
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light italic tracking-tight text-white/90 leading-tight">
                            Elevando su visión a un <br className="hidden md:block" /> estándar superior.
                        </h2>
                        <p className="text-white/30 max-w-sm font-sans text-sm tracking-wide leading-relaxed font-light italic">
                            Un enfoque de guante blanco para el desarrollo de software. <br />
                            Discreción, excelencia técnica y un compromiso inquebrantable con la calidad.
                        </p>

                        <div className="flex gap-10 pt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                            <div className="flex flex-col gap-2">
                                <span className="text-white text-2xl font-black">24-48H</span>
                                <span>Tiempo de Respuesta</span>
                            </div>
                            <div className="w-[1px] h-14 bg-white/10" />
                            <div className="flex flex-col gap-2">
                                <span className="text-white text-2xl font-black">GMT-3</span>
                                <span>Basado en Chile</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full flex flex-col gap-6">
                         <MagneticButton
                            onClick={() => handleOpenConfigurator()}
                            className="w-full bg-studio text-black hover:bg-white p-8 flex justify-between items-center group transition-all duration-700 rounded-none shadow-2xl"
                        >
                            <div className="text-left">
                                <span className="block text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 mb-2">Comisionar Proyecto</span>
                                <span className="text-xl font-light italic tracking-tight group-hover:tracking-wider transition-all">Iniciar Brief de Lujo</span>
                            </div>
                            <div className="w-12 h-[1px] bg-black/20 group-hover:w-16 transition-all duration-700" />
                        </MagneticButton>

                        <MagneticButton
                            onClick={() => window.open('https://calendly.com', '_blank')}
                            className="w-full bg-white/0 border border-white/5 hover:border-studio/20 p-8 flex justify-between items-center group transition-all duration-700 rounded-none"
                        >
                            <div className="text-left">
                                <span className="block text-[10px] font-mono uppercase tracking-[0.3em] opacity-30 mb-2">Private Session</span>
                                <span className="text-xl font-light italic tracking-tight group-hover:tracking-wider transition-all text-white/80">Agendar Protocolo</span>
                            </div>
                            <Calendar className="group-hover:translate-x-2 transition-transform duration-700 opacity-20" size={24} strokeWidth={1} />
                        </MagneticButton>
                    </div>

                </div>
            </section>

            {/* Configurator Wizard Modal */}
            <AnimatePresence>
                {configuratorOpen && (
                    <ConfiguratorModal
                        isOpen={configuratorOpen}
                        initialServiceId={selectedServiceId}
                        onClose={() => setConfiguratorOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* 3. FOOTER */}
            <StudioFooter />

        </main>
    );
}
