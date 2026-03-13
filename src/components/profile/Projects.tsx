"use client";

import React from 'react';
import { Github, ArrowUpRight, Activity } from 'lucide-react';
import { m } from 'framer-motion';

import { profileProjects } from '@/data/profile-projects';
import { SpotlightCard, MagneticWrapper } from '@/components/ui/SpotlightCard';

export const Projects = () => {
    return (
        <section id="projects" className="space-y-12">
            <div className="flex items-center justify-between">
                <h2>Strategic Projects // Casos de Éxito</h2>
                <div className="flex items-center gap-2 text-slate-400">
                    <Activity size={12} className="text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Despliegues en Vivo</span>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-12">
                {profileProjects.map((project, i) => (
                    <m.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <SpotlightCard
                            className="card overflow-hidden relative border-slate-200/60 bg-white/40 backdrop-blur-md"
                            contentClassName="grid grid-cols-1 lg:grid-cols-12 gap-10"
                        >
                            {/* Decorative Background Accent */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-1000" />

                            <div className="lg:col-span-12 flex flex-col md:flex-row justify-between items-start gap-6 border-b border-slate-100 pb-10">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Despliegue Destacado</span>
                                    </div>
                                    <h3 id={`project-title-${i}`} className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">
                                        {project.title}
                                    </h3>
                                    <p className="text-xl font-bold text-primary italic tracking-tight">
                                        {project.tagline}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <MagneticWrapper>
                                        <a href="#" className="p-4 bg-slate-50 text-slate-400 hover:text-primary hover:bg-white hover:shadow-xl hover:shadow-primary/5 rounded-2xl border border-slate-100 transition-all duration-300" aria-label="GitHub Repository">
                                            <Github size={22} />
                                        </a>
                                    </MagneticWrapper>
                                    <MagneticWrapper>
                                        <a href="#" className="px-8 py-4 bg-primary text-white hover:bg-primary/90 rounded-2xl shadow-xl shadow-primary/20 transition-all duration-300 font-bold flex items-center gap-3 text-sm" aria-label="Ver Detalles del Proyecto">
                                            Ver Caso de Estudio <ArrowUpRight size={18} />
                                        </a>
                                    </MagneticWrapper>
                                </div>
                            </div>

                            <div className="lg:col-span-7 space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-px bg-slate-200" />
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Análisis de Negocio</h4>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed font-semibold text-xl tracking-tight">
                                        {project.analysis}
                                    </p>
                                </div>

                                <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-100/50 backdrop-blur-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Activity size={14} className="text-primary" />
                                        <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Resultado Clave</span>
                                    </div>
                                    <p className="text-slate-900 font-bold text-sm">
                                        Implementación de arquitectura de alta disponibilidad en nodos distribuidos.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:col-span-5 space-y-8 border-l border-slate-100 pl-0 lg:pl-10">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-px bg-slate-200" />
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Ejecución de Ingeniería</h4>
                                    </div>
                                    <p className="text-slate-500 leading-relaxed font-semibold text-sm">
                                        {project.execution}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Despliegue del Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, idx) => (
                                            <span key={idx} className="px-3 py-1.5 bg-white border border-slate-100 rounded-lg text-[9px] font-bold text-slate-500 uppercase tracking-[0.1em] shadow-sm group-hover:border-primary/20 transition-colors">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </m.div>
                ))}
            </div>
        </section>
    );
};
