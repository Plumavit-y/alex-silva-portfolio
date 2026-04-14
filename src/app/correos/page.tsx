"use client";

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Check, Mail, Shield, Zap, Globe, ArrowRight, Server, Search, CheckCircle2, ChevronDown, Rocket } from 'lucide-react';
import { TelemetryPanel } from '@/components/studio/TelemetryPanel';
import { CorreosHeader } from '@/components/correos/CorreosHeader';
import { StudioFooter } from '@/components/studio/StudioFooter';
import { MagneticButton } from '@/components/studio/MagneticButton';
import dynamic from 'next/dynamic';

const ConfiguratorModal = dynamic(() => import('@/components/studio/ConfiguratorModal').then(mod => mod.ConfiguratorModal), { ssr: false });

// DATOS DE EJEMPLO DE ALTO VALOR (Reemplazar precios y detalles finales)
const PRICING_TIERS = [
    {
        id: "startup",
        name: "Plan Startup",
        price: "$80.000",
        period: "Pago Único + Costos Google",
        description: "Ideal para profesionales independientes o marcas emergentes que necesitan validación inmediata.",
        features: [
            "Configuración de 1 a 3 cuentas (ej. hola@)",
            "Conexión DNS y MX Básica",
            "Firma HTML Corporativa Simple",
            "Soporte post-entrega (7 días)"
        ],
        highlighted: false,
    },
    {
        id: "business",
        name: "Plan Corporativo",
        price: "$150.000",
        period: "Pago Único + Costos Google",
        description: "Infraestructura blindada para empresas en crecimiento que no pueden permitirse caer en Spam.",
        features: [
            "Configuración de hasta 10 cuentas",
            "Implementación SPF, DKIM y DMARC",
            "Migración Total de Correos Antiguos",
            "Firmas HTML Dinámicas para todo el equipo",
            "Auditoría Blacklist de Dominio",
            "Soporte dedicado (30 días)"
        ],
        highlighted: true,
        tag: "Recomendado",
    },
    {
        id: "enterprise",
        name: "Plan Élite Server",
        price: "$350.000+",
        period: "Cotización a Medida",
        description: "Arquitectura dedicada para flujos masivos de correos, transaccionales y fuerza de ventas gran angular.",
        features: [
            "Cuentas Ilimitadas / Servidor Dedicado",
            "Protección Antispam de Grado Militar",
            "Calentamiento de IP (IP Warmup)",
            "Políticas DMARC Estrictas (p=reject)",
            "Soporte Directo 24/7 (SLA)"
        ],
        highlighted: false,
    }
];

const FAQS = [
    {
        question: "¿Perderé mis correos antiguos al cambiar a Google Workspace/Microsoft 365?",
        answer: "En absoluto. Realizamos una migración bit a bit de tus bandejas antiguas (IMAP/POP) a los servidores nuevos sin pérdida de información ni tiempo de inactividad."
    },
    {
        question: "¿Por qué mis correos actuales llegan a Spam?",
        answer: "Generalmente por la falta de registros de autenticación (SPF, DKIM, DMARC) en tus DNS, o por usar servidores compartidos de baja reputación (como cPanel webmail). Nosotros solucionamos esto de raíz."
    },
    {
        question: "¿Cuánto demora la instalación?",
        answer: "Dependiendo del plan, la configuración técnica, migración y propagación de DNS tarda entre 48 y 72 horas hábiles."
    },
    {
        question: "¿Tengo que pagar suscripciones mensuales a ustedes?",
        answer: "No. Nuestro servicio es un 'Setup' de pago único. Los únicos pagos recurrentes que tendrás serán las licencias oficiales directamente con Google Workspace o Microsoft 365, sin intermediarios."
    }
];


export default function CorreosPage() {
    const [configuratorOpen, setConfiguratorOpen] = useState(false);
    const [selectedServiceId, setSelectedServiceId] = useState<string | null>('emails');
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const handleOpenConfigurator = () => {
        setSelectedServiceId('emails');
        setConfiguratorOpen(true);
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-correos/30 font-sans relative overflow-x-hidden">
            <TelemetryPanel />
            <CorreosHeader onOpenConfigurator={handleOpenConfigurator} />

            {/* 1. HERO + PRICING (Unified Section) */}
            <section id="inversion" className="relative w-full pt-28 md:pt-32 pb-20 md:pb-24 px-4 md:px-6 flex flex-col items-center justify-center min-h-[90vh] overflow-hidden bg-[#050505] z-10">
                {/* Subtle Sage Green Background Glow */}
                <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[150vw] md:w-[800px] h-[150vw] md:h-[600px] bg-correos/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
                
                <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
                    
                    {/* Hero Header */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4 mb-6 font-mono text-[9px] uppercase tracking-[0.4em] text-correos/80 bg-correos/[0.03] border border-correos/10 px-4 py-2 rounded-full"
                    >
                        <Shield size={14} className="text-correos" />
                        Infraestructura de Comunicaciones
                    </m.div>

                    <m.h1 
                        initial={{ opacity: 0, scale: 0.99 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="text-[2.25rem] md:text-6xl font-light leading-[1.05] md:leading-[1.1] tracking-tighter md:tracking-tight mb-5 md:mb-6"
                    >
                        Correos Oficiales. <br className="md:hidden" />
                        <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-correos/50">Entrega Garantizada.</span>
                    </m.h1>

                    <m.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-white/50 text-sm md:text-base max-w-3xl font-light mb-16 leading-relaxed"
                    >
                        Seleccione el nivel de despliegue que su operación requiere. Infraestructura dedicada (Google Workspace/M365) con blindaje antispam completo.
                    </m.p>

                    {/* PRICING GRID OVERLAP */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 items-start text-left max-w-6xl mx-auto">
                        {PRICING_TIERS.map((tier, i) => (
                            <m.div
                                key={tier.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
                                className={`relative flex flex-col p-6 lg:p-10 rounded-[2rem] md:rounded-3xl transition-all duration-500 h-full ${
                                    tier.highlighted 
                                    ? 'bg-[#0A0F0D] border border-correos/40 shadow-[0_0_50px_rgba(138,163,146,0.15)] md:-translate-y-4' 
                                    : 'bg-[#080A09] border border-white/5 opacity-90 hover:opacity-100 hover:border-correos/20'
                                }`}
                            >
                                {tier.highlighted && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-correos text-[#0A0F0D] text-[9px] font-mono uppercase tracking-[0.2em] px-4 py-1.5 rounded-full font-bold flex items-center gap-2 shadow-[0_5px_20px_rgba(138,163,146,0.3)]">
                                        <CheckCircle2 size={12} />
                                        Estándar de la Industria
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className={`text-xl font-medium tracking-tight mb-2 ${tier.highlighted ? 'text-correos' : 'text-white/80'}`}>
                                        {tier.name}
                                    </h3>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-4xl md:text-5xl font-light tracking-tight">{tier.price}</span>
                                        <span className="text-xs text-white/30 font-mono">CLP</span>
                                    </div>
                                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/20 mb-6 pb-6 border-b border-white/5">
                                        {tier.period}
                                    </p>
                                    <p className="text-xs text-white/50 leading-relaxed h-[60px]">
                                        {tier.description}
                                    </p>
                                </div>

                                <ul className="space-y-3.5 flex-1 mb-8 md:mb-10">
                                    {tier.features.map((feature, fidx) => (
                                        <li key={fidx} className="flex items-start gap-4 text-xs font-light text-white/70">
                                            <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${tier.highlighted ? 'bg-correos/20 text-correos' : 'bg-white/5 text-white/40'}`}>
                                                <Check size={10} strokeWidth={3} />
                                            </div>
                                            <span className="leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <MagneticButton
                                    onClick={handleOpenConfigurator}
                                    className={`w-full py-3.5 md:py-4 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] font-medium transition-all duration-300 flex items-center justify-center gap-2 rounded-xl md:rounded ${
                                        tier.highlighted 
                                        ? 'bg-correos hover:bg-white text-[#0A0F0D]' 
                                        : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/5'
                                    }`}
                                >
                                    Elegir {tier.name}
                                </MagneticButton>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. THE PROBLEM / SOLUTION (Benefits Validation) */}
            <section id="beneficios" className="relative z-20 py-20 md:py-32 px-4 md:px-6 border-t border-white/5 bg-[#080A09]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-20">
                        <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.4em] text-correos/60 mb-3 block">El Estándar Corporativo</span>
                        <h2 className="text-[1.75rem] md:text-4xl font-light italic text-white/90 leading-tight">Protección e Inteligencia en <br className="hidden md:block" /> sus Comunicaciones</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
                        {[
                            {
                                icon: <Globe size={28} />,
                                title: "Autoridad Digital",
                                desc: "Reemplazamos tu correo genérico por un dominio corporativo impecable, proyectando el nivel de profesionalismo adecuado a tu tarifario."
                            },
                            {
                                icon: <Shield size={28} />,
                                title: "Cero Spam (SPF & DKIM)",
                                desc: "Firmamos criptográficamente cada correo saliente y autorizamos tu servidor en los DNS mundiales para que Gmail/Outlook nunca te filtren."
                            },
                            {
                                icon: <Zap size={28} />,
                                title: "Migración Transparente",
                                desc: "Sin pérdida de datos. Extraemos todo tu historial antiguo, contactos y carpetas, y lo inyectamos intacto en tu nueva infraestructura premium."
                            }
                        ].map((item, i) => (
                            <m.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                className="p-10 border border-white/5 bg-[#0A0D0B] hover:bg-[#0D120F] flex flex-col gap-6 transition-colors shadow-2xl rounded-2xl"
                            >
                                <div className="w-14 h-14 rounded-full bg-correos/[0.05] flex items-center justify-center text-correos border border-correos/10">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-medium text-white/90 tracking-tight">{item.title}</h3>
                                <p className="text-sm font-light text-white/40 leading-relaxed">
                                    {item.desc}
                                </p>
                            </m.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FAQ / ACORDEON */}
            <section id="faq" className="relative z-20 py-20 md:py-32 px-4 md:px-6 border-t border-white/5 bg-[#050505]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <Search size={28} className="mx-auto text-correos/50 mb-4 md:mb-6" />
                        <h2 className="text-[1.75rem] md:text-3xl font-light italic">Preguntas Frecuentes</h2>
                    </div>

                    <div className="space-y-4">
                        {FAQS.map((faq, i) => (
                            <m.div 
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="border border-white/5 bg-white/[0.01] rounded-2xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full text-left p-5 md:p-6 flex items-center justify-between hover:bg-white/[0.03] transition-colors focus:outline-none"
                                >
                                    <span className="text-[13px] md:text-sm font-medium tracking-wide text-white/90 pr-6 leading-snug">{faq.question}</span>
                                    <ChevronDown size={18} className={`text-correos/50 transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180 text-correos' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <m.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="p-6 pt-0 text-sm font-light leading-relaxed text-white/40">
                                                {faq.answer}
                                            </p>
                                        </m.div>
                                    )}
                                </AnimatePresence>
                            </m.div>
                        ))}
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

            <StudioFooter />
        </main>
    );
}
