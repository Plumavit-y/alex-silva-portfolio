"use client";

import React from 'react';
import { m } from 'framer-motion';
import Image from 'next/image';

export const ProfileHeader = () => {
    return (
        <div className="flex flex-col items-center text-center pt-12 pb-8 px-6 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-sm h-64 bg-studio/5 blur-[120px] rounded-full -z-10" />
            
            <m.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative mb-8 pt-4 pb-2"
            >
                {/* Visual Frame for Avatar */}
                <div className="absolute inset-0 bg-gradient-to-tr from-studio/40 via-transparent to-studio/10 rounded-full blur-xl opacity-20" />
                <div className="w-24 h-24 rounded-full border border-studio/30 p-1 relative z-10 bg-black/40 backdrop-blur-md">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white/5 flex items-center justify-center text-studio/50 uppercase font-mono text-xl">
                        AS
                    </div>
                </div>
            </m.div>

            <m.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="space-y-3"
            >
                <div className="flex items-center justify-center gap-3 font-mono text-[9px] uppercase tracking-[0.5em] text-studio/60 mb-1">
                    <div className="w-8 h-[1px] bg-studio/20" />
                    Directorio Privado
                    <div className="w-8 h-[1px] bg-studio/20" />
                </div>
                <h1 className="text-4xl font-medium tracking-tight text-white leading-none italic">
                    Alex <span className="font-light not-italic opacity-40">Silva</span>
                </h1>
                <p className="text-[10px] text-white/40 font-mono tracking-[0.3em] uppercase max-w-xs mx-auto">
                    Digital Systems Architect <br /> & Robotics Engineer
                </p>
                <p className="text-[11px] text-white/30 font-light leading-relaxed max-w-xs mx-auto italic pt-2">
                    Fusionando precisión robótica con arquitectura <br className="hidden sm:block" /> de software de alto nivel.
                </p>
            </m.div>
        </div>
    );
};
