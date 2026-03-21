"use client";

import React, { useEffect, useState } from 'react';
import { m } from 'framer-motion';

export const TelemetryPanel = () => {
    const [time, setTime] = useState('00:00');
    const [metrics, setMetrics] = useState({ ping: 23, load: 12, resp: 45 });

    useEffect(() => {
        const updateTime = () => {
            setTime(new Date().toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Santiago' }));
        }
        updateTime();

        const timer = setInterval(() => {
            updateTime();
            // Ambient tech variations
            if (Math.random() > 0.6) {
                setMetrics(prev => ({
                    ...prev,
                    ping: Math.max(10, prev.ping + (Math.random() > 0.5 ? 2 : -2)),
                    load: Math.min(100, Math.max(0, prev.load + (Math.random() > 0.5 ? 1 : -1))),
                    resp: Math.max(20, prev.resp + (Math.random() > 0.5 ? 5 : -5))
                }));
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="fixed bottom-6 left-6 z-40 hidden lg:block bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/10 rounded-lg p-5 font-mono text-[10px] text-white/50 shadow-2xl"
        >
            <div className="flex items-center gap-3 mb-6 text-studio border-b border-studio/5 pb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-studio shadow-[0_0_15px_rgba(197,160,89,0.5)]" />
                <span className="tracking-[0.6em] font-medium text-[9px] uppercase">Protocolos de Servicio</span>
            </div>
            <div className="space-y-3 tracking-wider uppercase">
                <div className="flex justify-between gap-12 group">
                    <span className="opacity-40 font-light tracking-[0.2em]">LATENCIA:</span>
                    <span className="text-white/80 group-hover:text-studio transition-colors font-medium tracking-tight italic">{metrics.resp}ms</span>
                </div>
                <div className="flex justify-between gap-12 group">
                    <span className="opacity-40 font-light tracking-[0.2em]">DISPONIBILIDAD:</span>
                    <span className="text-white/80 group-hover:text-studio transition-colors font-medium tracking-tight italic">99.9%</span>
                </div>
                <div className="flex justify-between gap-12 group">
                    <span className="opacity-40 font-light tracking-[0.2em]">SINCRONÍA:</span>
                    <span className="text-white/80 group-hover:text-studio transition-colors font-medium tracking-tight italic">{metrics.ping}ms</span>
                </div>
                <div className="flex justify-between gap-12 group">
                    <span className="opacity-40 font-light tracking-[0.2em]">SANTIAGO:</span>
                    <span className="text-white relative">
                        {time}
                    </span>
                </div>
                <div className="flex justify-between gap-12 pt-3 mt-3 border-t border-white/10 group">
                    <span>📍 LOC:</span>
                    <span className="text-white">CL/CHILE</span>
                </div>
            </div>
        </m.div>
    );
};
