"use client";

import React from 'react';
import { Server, Layout, Cpu, Database, Network, ChevronRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { ArchitectureDiagram } from '../ui/ArchitectureDiagram';
import { m } from 'framer-motion';

const expertiseItems = [
    {
        title: 'SISTEMAS BACKEND',
        desc: 'Arquitecturas distribuidas de alta disponibilidad y baja latencia.',
        icon: <Server size={14} />,
        tags: ['Node.js', 'Go', 'Redis']
    },
    {
        title: 'INFRAESTRUCTURA CLOUD',
        desc: 'Orquestación de contenedores y pipelines CI/CD automatizados.',
        icon: <Network size={14} />,
        tags: ['Docker', 'AWS', 'Terraform']
    },
    {
        title: 'UX ENGINEERING',
        desc: 'Interfaces tácticas de alto rendimiento con enfoque en claridad.',
        icon: <Layout size={14} />,
        tags: ['React', 'Next.js', 'Framer']
    },
    {
        title: 'ARQUITECTURA DE DATOS',
        desc: 'Estructuras modulares que previenen la deuda técnica y escalan.',
        icon: <Database size={14} />,
        tags: ['PostgreSQL', 'Kafka', 'Elastic']
    }
];

export const Expertise = () => {
    return (
        <Section id="expertise" className="border-b border-white/5 bg-[#0C0B0A] relative overflow-hidden scroll-mt-24 md:scroll-mt-32">
            {/* Ambient Background - Subtle Warmth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(197,160,89,0.04),transparent_60%)] pointer-events-none" />

            <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-start">

                    {/* Left Column: Expertise HUD */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-[#C5A059] text-[10px] uppercase font-bold tracking-[0.4em] opacity-80">SECCIÓN_02 // ARSENAL</span>
                            <div className="h-[1px] w-12 bg-[#C5A059]/30" />
                        </div>
                        <h2 className="mb-0 text-[40px] sm:text-[48px] md:text-[64px] tracking-tighter leading-none text-white font-black uppercase">
                            MAESTRÍA <br />
                            <span className="text-white/20 italic font-light text-[24px] sm:text-[32px] md:text-[48px]">TÉCNICA</span>
                        </h2>
                        <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg font-mono tracking-wide lowercase pt-4">
                            ejecución táctica sobre infraestructuras de misión crítica.
                        </p>

                        <div className="mt-12">
                            {expertiseItems.map((item, i) => (
                                <m.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`py-8 ${i === 0 ? 'border-t border-white/10' : 'border-t border-white/10'}`}
                                >
                                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                                        <div className="flex items-center gap-4 md:w-1/3">
                                            <div className="text-[#C5A059]/50 shrink-0">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-[12px] md:text-[14px] font-black text-white/90 tracking-widest uppercase">
                                                {item.title}
                                            </h3>
                                        </div>

                                        <div className="md:w-2/3 space-y-4">
                                            <p className="text-white/40 text-[10px] md:text-[11px] leading-relaxed font-mono tracking-wide">
                                                {item.desc}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {item.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] font-mono text-[#C5A059]/40 uppercase tracking-widest">
                                                        [{tag}]
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </m.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Architecture HUD Diagram */}
                    <div className="lg:col-span-7 pt-12 lg:pt-32">
                        <div className="relative group">
                            {/* Minimalism Bracket Frame */}
                            <div className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-white/10 group-hover:border-[#C5A059]/30 transition-colors duration-500" />
                            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b border-r border-white/10 group-hover:border-[#C5A059]/30 transition-colors duration-500" />

                            <div className="relative aspect-[4/3] w-full bg-[#050505] border border-white/10 overflow-hidden shadow-2xl group-hover:border-[#C5A059]/30 transition-colors duration-500">
                                <ArchitectureDiagram />

                                <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-2">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">Signal_Link</span>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className={`w-1 h-3 ${i <= 3 ? 'bg-[#C5A059]' : 'bg-white/10'}`} />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* HUD Details Overlay */}
                                <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-1">
                                    <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.2em]">02_TECHNICAL_SCHEMA // VER. 4.0</span>
                                </div>
                            </div>

                            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 px-2">
                                {[
                                    { label: 'Latency', value: '08ms', status: 'Optimal' },
                                    { label: 'Uptime', value: '99.99%', status: 'Nominal' },
                                    { label: 'Security', value: 'Tier-4', status: 'Locked' },
                                    { label: 'Region', value: 'SA_CL', status: 'Global' }
                                ].map((stat, i) => (
                                    <div key={i} className="space-y-2 group/stat">
                                        <div className="text-[8px] font-bold text-white/20 uppercase tracking-[0.4em] group-hover/stat:text-[#C5A059]/50 transition-colors">{stat.label}</div>
                                        <div className="text-lg sm:text-xl font-bold text-white tracking-tighter">{stat.value}</div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1 h-1 bg-[#C5A059] shadow-[0_0_8px_rgba(197,160,89,0.5)]" />
                                            <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest">{stat.status}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
};
