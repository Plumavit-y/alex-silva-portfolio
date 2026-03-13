"use client";

import React from 'react';
import { m } from 'framer-motion';

import { extraItems } from '@/data/extra-items';
import { SpotlightCard, MagneticWrapper } from '@/components/ui/SpotlightCard';

export const Extra = () => {
    return (
        <section id="strategy" className="space-y-12">
            <div className="space-y-2">
                <h2>Strategic Extensions // Otros Activos</h2>
                <p className="text-slate-500 max-w-2xl font-medium">
                    Explorando la frontera técnica: Iniciativas operacionales y despliegue de conocimiento táctico.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {extraItems.map((item, i) => (
                    <m.article
                        key={item.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className={`md:col-span-6 lg:col-span-4 ${i === 0 ? 'lg:col-span-4' : ''}`}
                    >
                        <SpotlightCard
                            className="card group h-full border-slate-200/60 bg-white/50 backdrop-blur-sm cursor-default"
                            contentClassName="flex flex-col justify-between h-full"
                        >
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-primary" />
                                        <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                                            {item.category}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 tracking-tighter">
                                        {item.title}
                                    </h3>
                                </div>

                                <p className="text-slate-500 font-semibold leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="pt-8 flex items-center justify-between border-t border-slate-50 mt-6">
                                <MagneticWrapper>
                                    <button className="flex items-center gap-3 font-black text-[9px] text-slate-400 uppercase tracking-widest group-hover:text-primary transition-colors pr-4 py-2" aria-label={`Acceder a Datos para ${item.title}`}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-primary transition-colors" />
                                        Revisar Activo
                                    </button>
                                </MagneticWrapper>
                                <div className="text-[8px] font-black text-slate-200 uppercase tracking-[0.3em] group-hover:text-slate-300 transition-colors">
                                    ID: 0{i + 1}
                                </div>
                            </div>
                        </SpotlightCard>
                    </m.article>
                ))}
            </div>
        </section>
    );
};
