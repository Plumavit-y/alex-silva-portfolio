"use client";

import React, { useRef } from 'react';
import { m, useMotionTemplate, useMotionValue } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
    id: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    stack: string[];
    price: string;
    time: string;
    features: string[];
    isLocked?: boolean;
    onClick: () => void;
}

export const ServiceCard = ({ icon, title, subtitle, stack, price, time, features, isLocked, onClick }: ServiceCardProps) => {

    // 3D Hover tilt effect math
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
        if (isLocked) return;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        // Calculate percentages [-1, 1] relative to center
        const x = (clientX - left - width / 2) / (width / 2);
        const y = (clientY - top - height / 2) / (height / 2);

        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        if (isLocked) return;
        mouseX.set(0);
        mouseY.set(0);
    };

    // Very subtle rotations (5deg max)
    const rotateX = useMotionTemplate`${mouseY}deg`;
    const rotateY = useMotionTemplate`${mouseX}deg`;

    return (
        <m.div
            style={isLocked ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={isLocked ? {} : { y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className={`group relative bg-[#111111] border border-white/[0.03] rounded-2xl p-6 md:p-8 overflow-hidden shadow-2xl text-left transition-all duration-500 ${isLocked ? 'opacity-50 cursor-not-allowed select-none' : 'hover:border-studio/20 cursor-pointer'}`}
            onClick={isLocked ? undefined : onClick}
        >
            {/* Soft Champagne Gradient Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br from-studio/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-700 pointer-events-none ${isLocked ? '' : 'group-hover:opacity-100'}`} />

            <div className={`relative z-10 ${isLocked ? '' : 'transform-gpu'}`} style={isLocked ? {} : { transform: "translateZ(30px)" }}>
                <div className="flex justify-between items-start mb-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isLocked ? 'bg-white/5 text-white/30 border border-white/5' : 'bg-studio/[0.05] text-studio border border-studio/[0.08] group-hover:border-studio/30'}`}>
                        {React.isValidElement(icon) && React.cloneElement(icon as React.ReactElement<any>, { size: 18, strokeWidth: 1.2 })}
                    </div>
                    {isLocked ? (
                        <div className="text-[8px] font-mono tracking-[0.2em] text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/10 flex items-center gap-2" title="Cerrado temporalmente para nuevos clientes.">
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            POR INVITACIÓN
                        </div>
                    ) : (
                        <div className="text-[8px] font-mono tracking-[0.2em] text-studio/60 bg-studio/[0.02] px-3 py-1 rounded-full border border-studio/[0.05] flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-studio/40" />
                            DISPONIBLE
                        </div>
                    )}
                </div>

                <h3 className={`text-lg font-medium tracking-tight font-sans italic mb-3 transition-colors ${isLocked ? 'text-white/40' : 'text-white/90 group-hover:text-studio'}`}>{title}</h3>
                <p className={`text-xs leading-relaxed mb-8 h-12 font-light ${isLocked ? 'text-white/20' : 'text-white/40'}`}>{subtitle}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {stack.map((tech, i) => (
                        <span key={i} className={`text-[9px] font-mono border px-2 py-1 rounded ${isLocked ? 'border-white/[0.02] text-white/20' : 'border-white/[0.03] text-white/30'}`}>
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="space-y-4 border-t border-white/10 pt-6">
                    <div className="flex justify-between items-center text-[11px] uppercase tracking-widest">
                        <span className={isLocked ? 'text-white/20' : 'text-white/40'}>Precio base:</span>
                        <span className={`font-mono font-bold ${isLocked ? 'text-white/30' : 'text-white'}`}>{price}</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px] uppercase tracking-widest mb-6">
                        <span className={isLocked ? 'text-white/20' : 'text-white/40'}>Estimación:</span>
                        <span className={`font-mono ${isLocked ? 'text-white/20' : 'text-white'}`}>{time}</span>
                    </div>

                    <ul className="space-y-3">
                        {features.map((feature, i) => (
                            <li key={i} className={`flex items-center gap-4 text-xs font-light transition-colors ${isLocked ? 'text-white/20' : 'text-white/50 group-hover:text-white/70'}`}>
                                <span className={`w-1 h-1 rounded-full ${isLocked ? 'bg-white/10' : 'bg-studio/30'}`} />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Minimalist Action Indicator */}
            {!isLocked && (
                <div className="absolute bottom-8 right-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                    <div className="text-[9px] text-studio font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                        Inicia el Brief
                        <div className="w-6 h-[1px] bg-studio" />
                    </div>
                </div>
            )}
        </m.div>
    );
};
