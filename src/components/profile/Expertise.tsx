"use client";

import React from 'react';
import { Server, Layout, Cpu } from 'lucide-react';
import { m } from 'framer-motion';

const expertise = [
    {
        title: 'Arquitectura Empresarial',
        tagline: 'Sistemas distribuidos de alta disponibilidad',
        icon: <Server size={22} />,
        desc: 'Diseño infraestructuras resilientes optimizadas para escala masiva. Foco en latencia baja y pipelines de datos preparados para que el sistema no se caiga ni cuando queda la grande.',
        techs: ['Node.js Ecosystem', 'Kubernetes Deployment', 'Distributed SQL', 'Kafka Streams']
    },
    {
        title: 'UX Engineering de Élite',
        tagline: 'Interfaces de precisión para directorios',
        icon: <Layout size={22} />,
        desc: 'Desarrollo visual táctico enfocado en quienes cortan el queque. Interfaces ultra rápidas que priorizan la claridad y el rendimiento frontend de alto nivel.',
        techs: ['Next.js App Core', 'TypeScript Strict', 'Framer Dynamics', 'Tailwind Systems']
    },
    {
        title: 'Asesoría Técnica Estratégica',
        tagline: 'Ingeniería de soluciones de alto impacto',
        icon: <Cpu size={22} />,
        desc: 'Consultoría en transición de sistemas críticos y reducción de deuda técnica. Metodologías de trinchera derivadas de la ingeniería internacional.',
        techs: ['System Architecture', 'CI/CD Automation', 'Edge Computing', 'AI Integration']
    }
];

import { SpotlightCard, MagneticWrapper } from '@/components/ui/SpotlightCard';

export const Expertise = () => {
    return (
        <section id="expertise" className="space-y-12">
            <div className="space-y-2">
                <h2>Experiencia Core // Áreas de Dominio</h2>
                <p className="text-slate-500 max-w-2xl font-medium">
                    Soluciones de alto rendimiento forjadas a través de la ejecución industrial y la ingeniería estratégica.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {expertise.map((exp, i) => (
                    <m.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <SpotlightCard
                            className="card group h-full cursor-default border-slate-200/60 bg-white/50 backdrop-blur-sm"
                            contentClassName="flex flex-col items-start gap-6 h-full"
                        >
                            <MagneticWrapper>
                                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                    {exp.icon}
                                </div>
                            </MagneticWrapper>

                            <div className="space-y-4 flex-1">
                                <div className="space-y-1">
                                    <h3 className="text-xl font-black text-slate-900 tracking-tight">
                                        {exp.title}
                                    </h3>
                                    <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                                        {exp.tagline}
                                    </div>
                                </div>

                                <p className="text-sm text-slate-500 leading-relaxed font-semibold">
                                    {exp.desc}
                                </p>

                                <div className="flex flex-wrap gap-1.5 pt-4">
                                    {exp.techs.map((tech, j) => (
                                        <span key={j} className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded-md border border-slate-100 group-hover:border-primary/20 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </SpotlightCard>
                    </m.div>
                ))}
            </div>
        </section>
    );
};
