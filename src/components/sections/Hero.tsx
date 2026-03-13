"use client";

import React, { useRef, useEffect, useState } from 'react';
import { m, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { LayeredParallax } from '@/components/ui/LayeredParallax';

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax logic for background elements
    const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

    // 1. Mouse Tracking for Gradient Blur
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        // Initial center position or just wait for mouse
        mouseX.set(typeof window !== "undefined" ? window.innerWidth / 2 - 300 : 0);
        mouseY.set(typeof window !== "undefined" ? window.innerHeight / 2 - 300 : 0);

        const updateMousePosition = (e: MouseEvent) => {
            // Subtract half the width/height (300px) to center it on the cursor
            mouseX.set(e.clientX - 300);
            mouseY.set(e.clientY - 300);
        };
        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, [mouseX, mouseY]);

    const springX = useSpring(mouseX, { damping: 50, stiffness: 200 });
    const springY = useSpring(mouseY, { damping: 50, stiffness: 200 });

    // 2. Magnetic Button implementation
    const btnRef = useRef<HTMLButtonElement>(null);
    const btnX = useMotionValue(0);
    const btnY = useMotionValue(0);
    const btnSpringX = useSpring(btnX, { stiffness: 150, damping: 25, mass: 0.1 });
    const btnSpringY = useSpring(btnY, { stiffness: 150, damping: 25, mass: 0.1 });

    const handleBtnMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!btnRef.current) return;
        const rect = btnRef.current.getBoundingClientRect();
        const h = rect.width / 2;
        const v = rect.height / 2;
        btnX.set((e.clientX - rect.left - h) * 0.3);
        btnY.set((e.clientY - rect.top - v) * 0.3);
    };

    const handleBtnMouseLeave = () => {
        btnX.set(0);
        btnY.set(0);
    };

    const scrollToWork = () => {
        document.getElementById('robotics')?.scrollIntoView({ behavior: 'smooth' });
    };

    const subtitleFull = "Full-stack developer construyendo soluciones que importan.";
    const [subtitleText, setSubtitleText] = useState("");

    useEffect(() => {
        let currentLength = 0;
        const stepTime = 1800 / subtitleFull.length; // 1.8s delay total for typing

        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                currentLength++;
                setSubtitleText(subtitleFull.slice(0, currentLength));
                if (currentLength >= subtitleFull.length) {
                    clearInterval(interval);
                }
            }, stepTime);
            return () => clearInterval(interval);
        }, 800); // initial delay to wait for Hero entry

        return () => clearTimeout(timeout);
    }, [subtitleFull]);


    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-[120svh] flex flex-col items-center justify-center px-6 overflow-hidden bg-[#0A0A0A] text-white pt-24 pb-16"
        >
            {/* Minimalist Industrial Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Subtle Animated Grid */}
                <m.div
                    className="absolute inset-[0%] opacity-[0.03]"
                    style={{
                        y: y1,
                        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                    animate={{
                        backgroundPosition: ['0px 0px', '40px 40px']
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 12,
                        ease: "linear"
                    }}
                />

                {/* Industrial Precision Accents */}
                <div className="absolute top-8 left-8 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-white/30 hidden md:block" />
                <div className="absolute top-8 right-8 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-white/30 hidden md:block" />
                <div className="absolute bottom-8 left-8 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-white/30 hidden md:block" />
                <div className="absolute bottom-8 right-8 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-white/30 hidden md:block" />

                {/* Floating Geometric Elements (Piolas) */}
                <m.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[20%] right-[15%] w-32 h-32 border border-white/10 rounded-sm hidden lg:block"
                />

                <m.div
                    animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[30%] left-[10%] hidden lg:flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span className="text-[10px] font-mono tracking-widest text-white/50">SYS.OK_</span>
                </m.div>

                {/* Cursor Tracking Gradient Blur */}
                <m.div
                    style={{ left: springX, top: springY }}
                    className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#76153C] to-[#593F62] rounded-full blur-[150px] opacity-20 mix-blend-screen"
                />
            </div>

            {/* ART PIECE - Full Screen Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 opacity-100">
                    <LayeredParallax />
                </div>
                {/* Subtle dark overlay - Lightened for better art clarity */}
                <div className="absolute inset-0 bg-black/20 z-10" />
                {/* Bottom vignette for smooth transition - Balanced Intensity */}
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent z-20" />
            </div>

            {/* Profile Content Container - Raw Typography, No Boxes */}
            <m.div
                style={{ opacity, scale }}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    duration: 1.2,
                    delay: 1.8, // Appears after art assembly
                    ease: [0.23, 1, 0.32, 1]
                }}
                className="relative z-30 w-full max-w-7xl px-4 sm:px-6 flex flex-col items-center mt-12 sm:mt-0"
            >
                {/* HUD Framing Accents (Top/Bottom brackets) */}
                <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center">

                    {/* Top Accent - Reduced intensity, cleaner line */}
                    <div className="w-12 h-[1px] bg-white/20 mb-12" />

                    {/* Minimalist Profile Area */}
                    <div className="flex flex-col items-center text-center relative">
                        {/* Soft Ambient Shadow - Creates a natural 'pocket' of depth behind text without visible artifacts */}
                        <div className="absolute inset-x-[-50%] inset-y-[-20%] bg-black/30 blur-[100px] rounded-[100%] pointer-events-none z-0" />

                        <div className="relative z-10 flex flex-col items-center">
                            {/* Name & Badge */}
                            <m.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                                className="flex flex-col sm:flex-row items-center gap-6 mb-8"
                            >
                                <div className="relative flex items-center justify-center">
                                    {/* Small Avatar Badge - Cleaner monochrome look */}
                                    <div className="relative w-20 h-20 sm:w-32 sm:h-32 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#0A0A0A]">
                                        <Image
                                            src="/images/profile/alex-silva.webp"
                                            alt="Alex Silva"
                                            fill
                                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                            sizes="(max-width: 640px) 96px, 128px"
                                            priority
                                        />
                                    </div>
                                    {/* Minimalist Status Dot */}
                                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#0A0A0A] rounded-full flex items-center justify-center">
                                        <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)] animate-pulse" />
                                    </div>
                                </div>

                                <h1 className="text-[48px] sm:text-[72px] md:text-[96px] lg:text-[110px] leading-[0.9] font-black tracking-[-0.04em] text-white drop-shadow-[0_8px_32px_rgba(0,0,0,0.5)] uppercase whitespace-nowrap">
                                    Alex Silva
                                </h1>
                            </m.div>

                            {/* Title & Typewriter */}
                            <m.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="flex flex-col items-center space-y-6"
                            >
                                <h2 className="text-[10px] sm:text-xs md:text-sm lg:text-xl text-white font-mono tracking-[0.2em] sm:tracking-[0.4em] max-w-4xl mx-auto leading-relaxed min-h-[48px] sm:min-h-[auto] uppercase font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center break-words px-2">
                                    <span
                                        className="bg-[#0A0A0A]/60 backdrop-blur-md px-2 py-1 sm:px-3 sm:py-1.5 box-decoration-clone rounded-[4px] border border-white/5 shadow-[0_4px_16px_rgba(0,0,0,0.6)] transition-all duration-75"
                                    >
                                        {subtitleText}
                                        <span className="opacity-50 ml-1 inline-block animate-[pulse_1s_ease-in-out_infinite]">_</span>
                                    </span>
                                </h2>

                                {/* Subtle Divider */}
                                <div className="w-8 h-[1px] bg-white/20" />

                                <p className="text-[10px] sm:text-xs md:text-base text-white/50 font-mono uppercase tracking-[0.2em] sm:tracking-[0.4em] max-w-3xl mx-auto leading-loose drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] px-4">
                                    De representar a Chile en Japón a trabajar en soluciones locales.
                                    <span className="text-[#C5A059] font-bold mt-6 sm:mt-8 block whitespace-normal sm:whitespace-nowrap text-[8px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.6em] leading-relaxed">Precisión Industrial // Maestría Técnica</span>
                                </p>
                            </m.div>

                            {/* Primary Call to Action - Architectural Button with Dynamic Attention Motion */}
                            <m.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 3.5, duration: 1.2 }}
                                className="flex justify-center w-full mt-12"
                            >
                                <m.button
                                    ref={btnRef}
                                    onMouseMove={handleBtnMouseMove}
                                    onMouseLeave={handleBtnMouseLeave}
                                    style={{ x: btnSpringX, y: btnSpringY }}
                                    onClick={scrollToWork}
                                    animate={{
                                        y: [0, -4, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="group relative flex items-center justify-center gap-6 sm:gap-10 py-3 sm:py-4 px-4 sm:px-6 transition-all duration-300 w-full sm:w-auto"
                                >
                                    {/* HUD Scanline Pulse Effect behind button */}
                                    <div className="absolute inset-0 bg-white/[0.02] blur-xl scale-x-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                    {/* Left Bracket Line - Dynamic Pulse */}
                                    <m.span
                                        animate={{ scaleX: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-10 h-[1px] bg-white origin-right group-hover:w-16 group-hover:bg-[#C5A059] transition-all duration-500 hidden sm:block"
                                    />

                                    <span className="text-white text-[11px] font-mono tracking-[0.6em] uppercase flex items-center gap-4 relative">
                                        Explorar Trinchera
                                        <m.div
                                            animate={{ y: [0, 4, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                            className="relative"
                                        >
                                            <ArrowDown className="w-4 h-4 text-[#C5A059] group-hover:text-white transition-all duration-300" />
                                        </m.div>
                                    </span>

                                    {/* Right Bracket Line - Dynamic Pulse */}
                                    <m.span
                                        animate={{ scaleX: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                        className="w-10 h-[1px] bg-white origin-left group-hover:w-16 group-hover:bg-[#C5A059] transition-all duration-500 hidden sm:block"
                                    />

                                    {/* Underline accent on hover */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C5A059] group-hover:w-[40%] transition-all duration-700 opacity-50" />
                                </m.button>
                            </m.div>
                        </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="w-12 h-[1px] bg-white/20 mt-16 mb-8" />
                </div>

                {/* Subtle Scroll Hint */}
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.5, duration: 1 }}
                    className="opacity-30 flex flex-col items-center gap-3 mt-8"
                >
                    <span className="text-[8px] font-mono tracking-[0.6em] text-white/50 uppercase">Descubrir</span>
                    <div className="h-20 w-[1px] bg-gradient-to-b from-white/30 to-transparent" />
                </m.div>
            </m.div>
        </section>
    );
};
