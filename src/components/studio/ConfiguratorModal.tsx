"use client";

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import { STUDIO_SERVICES } from '@/constants/studioData';
import { Button } from '@/components/ui/Button';

interface ConfiguratorProps {
    isOpen: boolean;
    onClose: () => void;
    initialServiceId?: string | null;
}

export const ConfiguratorModal = ({ isOpen, onClose, initialServiceId }: ConfiguratorProps) => {
    const [step, setStep] = useState(1);
    const [serviceId, setServiceId] = useState<string | null>(initialServiceId || null);
    const [urgency, setUrgency] = useState<number>(1);
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [form, setForm] = useState({
        projectName: '',
        objectives: '',
        userName: '',
        userEmail: ''
    });

    const activeService = STUDIO_SERVICES.find(s => s.id === serviceId);
    const basePrice = activeService?.basePrice || 0;
    const finalPrice = Math.round((basePrice * urgency) / 10000) * 10000;

    const handleSubmit = async () => {
        setIsSending(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSending(false);
        setIsSuccess(true);
    };

    if (!isOpen) return null;


    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/95 backdrop-blur-xl p-4 md:p-12 overflow-y-auto"
        >
            <div className="absolute top-8 right-8 z-50">
                <button 
                    onClick={onClose} 
                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all border border-white/10"
                    aria-label="Cerrar configurador"
                >
                    <X size={20} />
                </button>
            </div>

            <m.div
                initial={{ y: 50, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ type: "spring", bounce: 0.2 }}
                className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-1 bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
                {/* WIZARD CONTENT */}
                <div className="lg:col-span-8 bg-[#0A0A0A] p-8 md:p-16 relative">
                    {/* Step indicator */}
                    <div className="flex gap-2 mb-12">
                        {[1, 2, 3, 4, 5, 6, 7].map(num => (
                            <div key={num} className="h-1 flex-1 rounded-full bg-white/10 overflow-hidden relative">
                                {step >= num && (
                                    <m.div
                                        layoutId={`step-${num}`}
                                        className="absolute inset-0 bg-studio"
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <m.div 
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center text-center py-20"
                                >
                                    <div className="w-20 h-20 rounded-full bg-studio/10 flex items-center justify-center text-studio mb-8 border border-studio/20 shadow-[0_0_50px_rgba(197,160,89,0.1)]">
                                        <Check size={32} strokeWidth={1.5} />
                                    </div>
                                    <h2 className="text-3xl font-light italic text-white tracking-tight mb-4">Solicitud Recibida</h2>
                                    <p className="text-white/40 font-light text-sm max-w-sm leading-relaxed">
                                        Su requerimiento ha sido cifrado y enviado a mi terminal privada. <br />
                                        Me pondré en contacto personalmente dentro de las próximas 24 horas.
                                    </p>
                                    <Button onClick={onClose} className="mt-12 bg-studio text-black hover:bg-white px-12 h-14 font-medium uppercase text-[10px] tracking-[0.3em] rounded-none">
                                        Cerrar Selección
                                    </Button>
                                </m.div>
                            ) : step === 1 && (
                                <m.div id="modal-title" key="1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                    <h2 className="text-2xl font-light italic tracking-tight mb-2 text-white/90">01 // Selección del Vector</h2>
                                    <p className="text-white/30 mb-10 font-light text-xs tracking-wide">Elija la base arquitectónica para su intervención bespoke.</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {STUDIO_SERVICES.map(s => (
                                                <div
                                                    key={s.id}
                                                    onClick={() => setServiceId(s.id)}
                                                    className={`p-6 rounded-xl border cursor-pointer transition-all ${serviceId === s.id ? 'bg-studio/10 border-studio' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
                                                >
                                                    <div className="flex items-center gap-4 mb-3">
                                                        <div className={serviceId === s.id ? 'text-studio' : 'text-white/20'}>{s.icon}</div>
                                                        <h3 className={`font-light italic text-sm ${serviceId === s.id ? 'text-white' : 'text-white/40'}`}>{s.title}</h3>
                                                    </div>
                                                    <p className="text-[10px] text-white/20 font-mono tracking-[0.2em]">Ejecución estimada: {s.time}</p>
                                                </div>
                                        ))}
                                    </div>
                                    <div className="mt-12 flex justify-end">
                                        <Button onClick={() => setStep(2)} disabled={!serviceId} className="bg-studio hover:bg-white text-black rounded-none h-14 uppercase tracking-widest font-black text-[10px] w-full sm:w-auto px-12 transition-colors">Confirmar Vector</Button>
                                    </div>
                                </m.div>
                            )}

                            {step === 2 && (
                                <m.div key="2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                    <h2 className="text-2xl font-light italic tracking-tight mb-2 text-white/90">02 // Alcance y Refinamiento</h2>
                                    <p className="text-white/30 mb-10 font-light text-xs tracking-wide">Capacidades técnicas del {activeService?.title}.</p>

                                    <div className="space-y-4">
                                        {activeService?.features.map((f, i) => (
                                            <div key={i} className="flex items-center gap-4 p-4 border border-white/10 rounded-xl bg-white/5 text-white/80 font-mono text-sm">
                                                <div className="w-4 h-4 rounded-full bg-studio/10 border border-studio/30 flex items-center justify-center text-studio">
                                                    <Check size={10} strokeWidth={3} />
                                                </div>
                                                {f}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-12 flex justify-between">
                                        <Button variant="outline" onClick={() => setStep(1)} className="border-white/20 text-white/50 hover:text-white rounded-none h-14 uppercase tracking-widest font-bold text-[10px]">Atrás</Button>
                                        <Button onClick={() => setStep(3)} className="bg-studio hover:bg-white text-black rounded-none h-14 uppercase tracking-widest font-black text-[10px] px-12 transition-colors">Siguiente Fase</Button>
                                    </div>
                                </m.div>
                            )}

                            {step === 3 && (
                                <m.div key="3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                    <h2 className="text-2xl font-light italic tracking-tight mb-2 text-white/90">03 // ADN Tecnológico</h2>
                                    <p className="text-white/30 mb-10 font-light text-xs tracking-wide">Protocolos preferidos para la implementación.</p>

                                    <div className="space-y-6">
                                        <div className="p-8 rounded-none border border-studio bg-studio/[0.03] cursor-pointer group transition-all duration-700">
                                            <div className="flex items-center gap-6 mb-4">
                                                <div className="w-5 h-5 rounded-full border border-studio flex items-center justify-center p-1">
                                                    <div className="w-full h-full rounded-full bg-studio" />
                                                </div>
                                                <h3 className="font-light italic text-base text-white">Configuración Recomendada</h3>
                                            </div>
                                            <p className="text-xs text-white/30 font-light leading-relaxed ml-11">
                                                Permítame seleccionar el stack óptimo (<span>{activeService?.stack.join(' & ')}</span>) para garantizar la integridad y el rendimiento de su solución.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-12 flex justify-between">
                                        <Button variant="outline" onClick={() => setStep(2)} className="border-white/20 text-white/50 hover:text-white rounded-none h-14 uppercase tracking-widest font-bold text-[10px]">Atrás</Button>
                                        <Button onClick={() => setStep(4)} className="bg-studio hover:bg-white text-black rounded-none h-14 uppercase tracking-widest font-black text-[10px] px-12 transition-colors">Siguiente Fase</Button>
                                    </div>
                                </m.div>
                            )}

                            {step === 4 && (
                                <m.div key="4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                    <h2 className="text-2xl font-light italic tracking-tight mb-2 text-white/90">04 // Cronograma Privado</h2>
                                    <p className="text-white/30 mb-10 font-light text-xs tracking-wide">Defina la urgencia del despliegue en producción.</p>

                                    <div className="space-y-4 font-mono uppercase tracking-[0.2em] text-[10px]">
                                        <div onClick={() => setUrgency(1)} className={`p-8 rounded-none border cursor-pointer flex justify-between items-center transition-all duration-700 ${urgency === 1 ? 'bg-studio/[0.03] border-studio text-white' : 'bg-transparent border-white/5 text-white/20 hover:border-white/20'}`}>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-white font-medium">Prioridad Estándar</span>
                                                <span className="text-[8px] opacity-40">Ritmo de desarrollo orgánico</span>
                                            </div>
                                            <div className="font-light italic">{activeService?.time}</div>
                                        </div>
                                        <div onClick={() => setUrgency(1.2)} className={`p-8 rounded-none border cursor-pointer flex justify-between items-center transition-all duration-700 ${urgency === 1.2 ? 'bg-studio/[0.03] border-studio text-white' : 'bg-transparent border-white/5 text-white/20 hover:border-white/20'}`}>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-white font-medium">Protocolo Preferencial</span>
                                                <span className="text-[8px] opacity-40">Atención prioritaria en calendario</span>
                                            </div>
                                            <div className="text-studio font-light italic">Fast Track</div>
                                        </div>
                                        <div onClick={() => setUrgency(1.5)} className={`p-8 rounded-none border cursor-pointer flex justify-between items-center transition-all duration-700 ${urgency === 1.5 ? 'bg-studio/[0.03] border-studio text-white' : 'bg-transparent border-white/5 text-white/20 hover:border-white/20'}`}>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-white font-medium">Despliegue Crítico</span>
                                                <span className="text-[8px] opacity-40">Máxima urgencia y recursos</span>
                                            </div>
                                            <div className="text-red-400 font-light italic">Inmediato</div>
                                        </div>
                                    </div>

                                    <div className="mt-12 flex justify-between">
                                        <Button variant="outline" onClick={() => setStep(3)} className="border-white/20 text-white/50 hover:text-white rounded-none h-14 uppercase tracking-widest font-bold text-[10px]">Atrás</Button>
                                        <Button onClick={() => setStep(5)} className="bg-studio hover:bg-white text-black rounded-none h-14 uppercase tracking-widest font-black text-[10px] px-12 transition-colors">Siguiente Fase</Button>
                                    </div>
                                </m.div>
                            )}

                            {(step === 5 || step === 6) && (
                                <m.div key="5-6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                    <h2 className="text-2xl font-light italic tracking-tight mb-2 text-white/90">05-06 // Perfil del Partner</h2>
                                    <p className="text-white/30 mb-10 font-light text-xs tracking-wide">Documentación de identidad y objetivos.</p>

                                    <div className="space-y-10">
                                        <input 
                                            type="text" 
                                            value={form.projectName}
                                            onChange={(e) => setForm({...form, projectName: e.target.value})}
                                            placeholder="TÍTULO DEL PROYECTO O VISIÓN" 
                                            className="w-full bg-transparent border-b border-white/5 py-6 outline-none focus:border-studio/40 transition-all duration-700 text-white font-mono text-[10px] uppercase tracking-[0.4em] placeholder:text-white/10" 
                                        />
                                        <textarea 
                                            rows={3} 
                                            value={form.objectives}
                                            onChange={(e) => setForm({...form, objectives: e.target.value})}
                                            placeholder="DESCRIBA LOS OBJETIVOS DE ALTO NIVEL" 
                                            className="w-full bg-transparent border-b border-white/5 py-6 outline-none focus:border-studio/40 transition-all duration-700 text-white font-mono text-[10px] uppercase tracking-[0.4em] placeholder:text-white/10 resize-none" 
                                        />

                                        <div className="grid grid-cols-2 gap-12 pt-4">
                                            <input 
                                                type="text" 
                                                value={form.userName}
                                                onChange={(e) => setForm({...form, userName: e.target.value})}
                                                placeholder="NOMBRE COMPLETO" 
                                                className="w-full bg-transparent border-b border-white/5 py-6 outline-none focus:border-studio/40 transition-all duration-700 text-white font-mono text-[10px] uppercase tracking-[0.4em] placeholder:text-white/10" 
                                            />
                                            <input 
                                                type="email" 
                                                value={form.userEmail}
                                                onChange={(e) => setForm({...form, userEmail: e.target.value})}
                                                placeholder="CORREO ELECTRÓNICO PROFESIONAL" 
                                                className="w-full bg-transparent border-b border-white/5 py-6 outline-none focus:border-studio/40 transition-all duration-700 text-white font-mono text-[10px] uppercase tracking-[0.4em] placeholder:text-white/10" 
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-12 flex justify-between">
                                        <Button variant="outline" onClick={() => setStep(4)} className="border-white/20 text-white/50 hover:text-white rounded-none h-14 uppercase tracking-widest font-bold text-[10px]">Atrás</Button>
                                        <Button onClick={() => setStep(7)} className="bg-studio hover:bg-white text-black rounded-none h-14 uppercase tracking-widest font-black text-[10px] px-12 transition-colors">Generar Documento</Button>
                                    </div>
                                </m.div>
                            )}

                            {step === 7 && (
                                <m.div key="7" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                    <h2 className="text-2xl font-light italic tracking-tight mb-2 text-studio">07 // Protocolo Preparado</h2>
                                    <p className="text-white/30 mb-10 font-light text-xs tracking-wide">Documento validado para su transmisión privada.</p>

                                    <div className="bg-studio/[0.02] border border-studio/10 p-10 rounded-none font-sans space-y-6 mb-12">
                                        <div className="text-[9px] text-studio/60 tracking-[0.5em] font-mono uppercase mb-4">Resumen de Requerimientos</div>
                                        <div className="text-2xl text-white/90 font-light italic tracking-tight underline underline-offset-8 decoration-studio/20">Servicio: {activeService?.title}</div>
                                        <div className="text-xs text-white/30 font-light tracking-wide leading-relaxed">
                                            Prioridad seleccionada: <span className="text-white/60">{urgency > 1 ? 'Fast Track / Despliegue Crítico' : 'Desarrollo Orgánico'}</span>. <br />
                                            Este documento será procesado de forma estrictamente privada.
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button 
                                            onClick={handleSubmit}
                                            disabled={isSending}
                                            className="flex-1 bg-studio hover:bg-white text-black rounded-none h-16 uppercase tracking-[0.4em] font-medium text-[10px] transition-all duration-700 shadow-2xl disabled:opacity-50"
                                        >
                                            {isSending ? 'CIFRANDO PROTOCOLO...' : 'TRANSMITIR BRIEF'} 
                                            {!isSending && <div className="ml-4 w-8 h-[1px] bg-black/20" />}
                                        </Button>
                                    </div>
                                </m.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* SIDEBAR */}
                <div className="lg:col-span-4 bg-[#111111] p-8 border-l border-white/5 flex flex-col font-mono text-xs uppercase tracking-widest relative">
                    <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-studio/30 to-transparent" />

                    <h3 className="text-studio/40 mb-10 border-b border-studio/5 pb-6 font-mono text-[9px] tracking-[0.4em]">DETALLE DE LA PROPUESTA</h3>

                    <div className="space-y-8 flex-grow">
                        <div>
                            <div className="text-white/20 mb-3 font-mono text-[8px] tracking-[0.4em]">SERVICIO SELECCIONADO</div>
                            <div className={`text-sm font-light italic tracking-tight ${serviceId ? "text-white/80" : "text-white/10"}`}>{activeService?.title || 'Pendiente...'}</div>
                        </div>
                        <div>
                            <div className="text-white/20 mb-3 font-mono text-[8px] tracking-[0.4em]">PLAZO ESTIMADO</div>
                            <div className={`text-sm font-light italic tracking-tight ${serviceId ? "text-white/80" : "text-white/10"}`}>{activeService?.time || '---'}</div>
                        </div>
                        <div className="pt-6 border-t border-studio/5">
                            <div className="text-white/20 mb-4 font-mono text-[8px] tracking-[0.4em]">INVERSIÓN ESTIMADA (NETO)</div>
                            <div className="text-3xl font-light italic text-studio tracking-tighter">
                                ${finalPrice > 0 ? finalPrice.toLocaleString('es-CL') : '0'} CLP
                            </div>
                        </div>
                    </div>
                </div>

            </m.div>
        </m.div>
    );
}
