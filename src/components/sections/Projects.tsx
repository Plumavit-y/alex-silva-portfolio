"use client";

import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { m } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

import { sectionProjects } from '@/data/section-projects';

export const Projects = () => {
    return (
        <Section id="work" className="bg-[#050505]">
            <div className="flex flex-col md:flex-row justify-between items-start mb-4 md:mb-8 gap-12">
                <div className="max-w-2xl space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-primary text-[10px] uppercase font-bold tracking-[0.4em] opacity-80">Sección_03 // Despliegues</span>
                        <div className="h-[1px] w-12 bg-primary/30" />
                    </div>
                    <h2 className="mb-0 text-[48px] md:text-[64px] tracking-tighter leading-none text-white font-black uppercase">
                        IMPACTO <br />
                        <span className="text-white/20 italic font-light text-[32px] md:text-[48px]">MEDIBLE</span>
                    </h2>
                </div>
                <div className="max-w-[320px] md:pt-12">
                    <p className="text-white/40 text-[11px] md:text-right font-mono tracking-wider leading-relaxed uppercase">
                        Sistemas comerciales donde el rendimiento no es una métrica de vanidad, es el modelo de negocio.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
                {sectionProjects.map((project, i) => (
                    <m.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className={cn(
                            "group relative border border-white/5 overflow-hidden flex flex-col p-5 md:p-6 hover:border-white/15 transition-all duration-500 bg-white/[0.01]",
                            project.size === 'large' ? 'md:col-span-8 md:row-span-2 min-h-[380px] md:min-h-[420px]' : '',
                            project.size === 'medium' ? 'md:col-span-4 md:row-span-2 min-h-[380px] md:min-h-[420px]' : '',
                            project.size === 'small' ? 'md:col-span-4 min-h-[220px]' : '',
                        )}
                    >
                        {/* Project Image (only for projects with image) */}
                        {project.image && (
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-1000"
                                />
                            </div>
                        )}

                        <div className="flex justify-between items-start mb-auto relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                            <div>
                                <div className="text-[8px] uppercase tracking-[0.2em] text-primary/60 font-bold mb-2 font-mono">[{project.category}]</div>
                                <h3 className={cn("font-black text-white tracking-tighter uppercase mb-2 leading-none", project.size === 'large' ? 'text-2xl md:text-4xl' : 'text-xl')}>
                                    {project.title}
                                </h3>
                            </div>
                            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 text-white/20 hover:text-white hover:bg-primary transition-all duration-300 rounded-full group-hover:rotate-45" aria-label={`View project ${project.title}`}>
                                <ArrowUpRight size={18} />
                            </a>
                        </div>

                        <div className="mt-8 relative z-10 flex flex-col flex-1">
                            <p className="text-white/50 text-xs md:text-sm font-light leading-relaxed mb-6 max-w-[320px]">
                                {project.desc}
                            </p>

                            {project.impact && (
                                <div className="mb-6 border-l border-primary/30 pl-3 py-1">
                                    <div className="text-[7px] font-mono text-primary/60 font-bold uppercase tracking-[0.2em] mb-1">DATA_OUT: IMPACT_LOG</div>
                                    <div className="text-white/80 text-[11px] font-medium leading-tight font-mono tracking-tight">{project.impact}</div>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-[9px] font-mono tracking-widest text-white/15 group-hover:text-white/30 transition-colors duration-500">
                                        {"//"}{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Functional Gradient Overlay */}
                        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-1000", project.color)} />
                    </m.div>
                ))}
            </div>
        </Section>
    );
};
