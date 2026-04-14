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
            <section className="relative w-full pt-16 pb-20 px-6 overflow-hidden">
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
                        className="flex items-center gap-6 mb-8 font-mono uppercase tracking-[0.5em] text-[9px]"
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
                    <div className="text-center mb-12 space-y-4">
                        <m.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="relative">
                                {/* Subtle glow to lift text from the painting background without a shadow */}
                                <div className="absolute inset-0 bg-black/40 blur-[100px] rounded-full scale-150 pointer-events-none" />
                                <h1 className="relative text-4xl md:text-6xl lg:text-[7rem] font-medium tracking-tight text-white leading-[0.8] flex flex-col items-center">
                                    <span className="opacity-90">Acompañamos</span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-studio via-studio to-studio/80 font-light italic tracking-normal lowercase mt-1 pb-4 px-12 text-center">
                                         tu visión con excelencia
                                     </span>
                                </h1>
                            </div>
                            {/* Removed Scroll Indicator for Ultra-Compactness */}
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

                    </div>

                    {/* Exclusives / Ads Banner */}
                    <m.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full max-w-7xl mx-auto mb-20 relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-studio/10 via-transparent to-studio/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl pointer-events-none" />
                        <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0A0A0A]/50 backdrop-blur-md relative overflow-hidden hover:border-studio/20 transition-colors duration-700">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-studio/30 to-transparent opacity-50" />
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-studio/10 to-transparent opacity-30" />
                            
                            <div className="flex flex-col gap-3 relative z-10 text-center md:text-left mb-8 md:mb-0">
                                <div className="flex items-center justify-center md:justify-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-studio animate-pulse" />
                                    <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-studio">Acceso Prioritario</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-light italic tracking-tight text-white/95">
                                    Instalación de Correos Corporativos
                                </h3>
                                <p className="text-sm md:text-base font-light text-white/40 max-w-xl leading-relaxed">
                                    Asegura la legitimidad de tu empresa con correos oficiales. Aprovecha una tarifa fundacional temporal antes del despliegue total del estudio.
                                </p>
                            </div>
                            <div className="relative z-10 shrink-0 w-full md:w-auto">
                                <MagneticButton
                                    onClick={() => handleOpenConfigurator('emails')}
                                    className="w-full md:w-auto bg-white/5 text-white border border-white/10 hover:bg-studio hover:border-studio hover:text-black px-8 py-4 flex items-center justify-center gap-3 transition-all duration-500 rounded-none group/btn"
                                >
                                    <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Comisionar Correos</span>
                                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                </MagneticButton>
                            </div>
                        </div>
                    </m.div>

                    {/* Unified Services Grid */}
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

                    <div className="flex-1 text-left space-y-10">
                        <div className="flex items-center gap-4 text-studio/60 font-mono text-[9px] tracking-[0.6em] uppercase">
                            <div className="w-8 h-[1px] bg-studio/30" />
                            Protocolo de Apertura
                        </div>
                        <h2 className="text-5xl md:text-7xl font-light italic tracking-tight text-white/95 leading-[1.1]">
                            Demos vida a su <br className="hidden md:block" /> próximo legado.
                        </h2>
                        <p className="text-white/40 max-w-md font-sans text-base tracking-wide leading-relaxed font-light italic">
                            Un enfoque de guante blanco para el desarrollo de software. <br />
                            Discreción absoluta, excelencia técnica sin concesiones y un compromiso inquebrantable con la estética funcional.
                        </p>

                        <div className="flex gap-12 pt-10 font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">
                            <div className="flex flex-col gap-3">
                                <span className="text-studio text-2xl font-light italic">24h</span>
                                <span>Respuesta Directa</span>
                            </div>
                            <div className="w-[1px] h-16 bg-white/5" />
                            <div className="flex flex-col gap-3">
                                <span className="text-studio text-2xl font-light italic">CL</span>
                                <span>Operación Global</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full flex flex-col gap-8">
                         <MagneticButton
                            onClick={() => handleOpenConfigurator()}
                            className="w-full bg-studio text-black hover:bg-white p-10 flex justify-between items-center group transition-all duration-1000 rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        >
                            <div className="text-left">
                                <span className="block text-[9px] font-mono uppercase tracking-[0.4em] opacity-50 mb-3">Declaración de Intenciones</span>
                                <span className="text-2xl font-light italic tracking-tight group-hover:tracking-widest transition-all">Comisionar Proyecto</span>
                            </div>
                            <div className="w-16 h-[1px] bg-black/20 group-hover:w-24 transition-all duration-1000" />
                        </MagneticButton>

                        <MagneticButton
                            onClick={() => window.open('https://calendly.com', '_blank')}
                            className="w-full bg-transparent border border-white/5 hover:border-studio/30 p-10 flex justify-between items-center group transition-all duration-1000 rounded-none"
                        >
                            <div className="text-left">
                                <span className="block text-[9px] font-mono uppercase tracking-[0.4em] opacity-30 mb-3">Sesión de Descubrimiento</span>
                                <span className="text-2xl font-light italic tracking-tight group-hover:tracking-widest transition-all text-white/80">Agendar Sesión Privada</span>
                            </div>
                            <Calendar className="group-hover:translate-x-3 transition-transform duration-1000 opacity-20" size={28} strokeWidth={0.5} />
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
