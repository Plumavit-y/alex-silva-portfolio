"use client";

import React, { useEffect, useState } from 'react';
import { m, useScroll, useMotionValue, useVelocity, useSpring, useTransform } from 'framer-motion';
import { Activity, Clock, Cpu, HardDrive } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const TelemetryWidget = ({ className = "" }: { className?: string }) => {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityTransform = useTransform(smoothVelocity, [-1000, 1000], [-100, 100]);

    const [fps, setFps] = useState(60);
    const [memory, setMemory] = useState(42);
    const [uptime, setUptime] = useState(0);
    const [velDisplay, setVelDisplay] = useState(0);
    const [posDisplay, setPosDisplay] = useState(0);

    // Track real FPS and generic telemetry
    useEffect(() => {
        let frameCount = 0;
        let lastTime = performance.now();
        let animationFrameId: number;

        const loop = () => {
            const now = performance.now();
            frameCount++;

            // Calculate FPS every second
            if (now - lastTime >= 1000) {
                setFps(Math.round((frameCount * 1000) / (now - lastTime)));
                frameCount = 0;
                lastTime = now;

                // Simulate fluctuating memory allocation (varies around 40-70MB)
                setMemory(42 + Math.floor(Math.random() * 25) - 5);
            }

            animationFrameId = requestAnimationFrame(loop);
        };

        animationFrameId = requestAnimationFrame(loop);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    // Track Uptime
    useEffect(() => {
        const interval = setInterval(() => {
            setUptime(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Sync framer motion values to React state for UI rendering safely
    useEffect(() => {
        const unsubscribeY = scrollY.on("change", (v) => setPosDisplay(Math.round(v)));
        const unsubscribeV = smoothVelocity.on("change", (v) => setVelDisplay(Math.round(Math.abs(v))));

        return () => {
            unsubscribeY();
            unsubscribeV();
        };
    }, [scrollY, smoothVelocity]);

    const formatUptime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    if (pathname?.startsWith('/estudio')) return null;

    return (
        <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className={`fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-50 flex flex-col gap-2 font-mono text-[10px] tracking-widest text-white/50 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl pointer-events-none select-none hidden lg:flex ${className}`}
        >
            {/* Header */}
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/10">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(118,21,60,0.8)]" />
                <span className="text-white/80 font-bold uppercase tracking-[0.2em]">SYS.TELEMETRY</span>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-white/30">
                        <Activity size={10} />
                        <span>FPS</span>
                    </div>
                    <span className={fps >= 55 ? "text-emerald-400" : "text-amber-400"}>{fps}</span>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-white/30">
                        <HardDrive size={10} />
                        <span>MEM</span>
                    </div>
                    <span>{memory} MB</span>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-white/30">
                        <Cpu size={10} />
                        <span>VEL</span>
                    </div>
                    <span className="text-white/80">{velDisplay} px/s</span>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-white/30">
                        <Clock size={10} />
                        <span>UPTIME</span>
                    </div>
                    <span>{formatUptime(uptime)}</span>
                </div>
            </div>

            {/* Visualizer Bar (Reacts to Scroll Velocity) */}
            <div className="mt-3 h-1 w-full bg-white/5 rounded-full overflow-hidden relative">
                <m.div
                    style={{ x: velocityTransform }}
                    className="absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#76153C] to-transparent"
                />
                <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/20 -translate-x-1/2" />
            </div>

            <div className="flex justify-between mt-1 text-[8px] text-white/20">
                <span>POS: {posDisplay}</span>
                <span>ID: MANQ-01</span>
            </div>
        </m.div>
    );
};
