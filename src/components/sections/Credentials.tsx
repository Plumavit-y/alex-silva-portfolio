"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { m } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const certifications = [
    { name: 'Desarrollo Backend', issuer: 'Platzi', year: '2026' },
    { name: 'Matemáticas para Programación', issuer: 'Platzi', year: '2026' },
    { name: 'Ingeniería Python', issuer: 'Platzi', year: '2026' },
    { name: 'Emprendimiento Social', issuer: 'Fundación Telefónica', year: '2024' }
];

export const Credentials = () => {
    return (
        <Section id="credentials" className="border-y border-white/5">
            <div className="container-grid">
                <div className="md:col-span-5 space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-primary text-[10px] uppercase font-bold tracking-[0.4em] opacity-80">SECCIÓN_05 // RESPALDO</span>
                        <div className="h-[1px] w-12 bg-primary/30" />
                    </div>
                    <h2 className="mb-0 text-[48px] md:text-[64px] tracking-tighter leading-none text-white font-black uppercase">
                        GARANTÍA <br />
                        <span className="text-white/20 italic font-light text-[32px] md:text-[48px]">TÉCNICA</span>
                    </h2>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg font-mono tracking-wide lowercase pt-4">
                        certificaciones que respaldan años de práctica y ejecución en entornos de desarrollo real.
                    </p>
                </div>

                <div className="md:col-start-7 md:col-span-6 grid grid-cols-1 gap-4">
                    {certifications.map((cert, i) => (
                        <m.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex items-center justify-between p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.04]"
                        >
                            <div className="flex items-center gap-6">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                                    <BadgeCheck size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                                    <div className="text-xs text-white/30 uppercase tracking-widest">{cert.issuer}</div>
                                </div>
                            </div>
                            <div className="text-xs font-mono text-white/10 group-hover:text-primary transition-colors">{cert.year}</div>
                        </m.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
