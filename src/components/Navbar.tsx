"use client";

import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
    { name: 'Robótica', href: '#robotics', id: 'robotics' },
    { name: 'Experiencia', href: '#expertise', id: 'expertise' },
    { name: 'Proyectos', href: '#work', id: 'work' },
    { name: 'Impacto', href: '#activity', id: 'activity' },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Hardware');
    const pathname = usePathname();

    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            // Increased threshold for a more deliberate transition
            setScrolled(window.scrollY > 100);

            const scrollHeight = document.documentElement.scrollHeight;
            const scrollPos = window.innerHeight + window.scrollY;

            if (scrollPos >= scrollHeight - 150) {
                setActiveItem('Impact');
            }
        };

        window.addEventListener('scroll', handleScroll);

        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -60% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const item = navItems.find((nav) => nav.id === entry.target.id);
                    if (item) setActiveItem(item.name);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            navItems.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element) observer.unobserve(element);
            });
        };
    }, []);

    if (pathname?.startsWith('/estudio') || pathname?.startsWith('/links')) return null;

    return (
        <>
            <m.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none",
                    scrolled ? "pt-2" : "pt-6"
                )}
            >
                <div className={cn(
                    "w-[calc(100%-2rem)] max-w-7xl px-4 py-2 pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    "flex items-center justify-between relative",
                    scrolled
                        ? "bg-[#0A0A0A]/60 backdrop-blur-2xl border border-white/5 rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:max-w-6xl xl:max-w-7xl"
                        : "bg-transparent border border-transparent rounded-none max-w-full md:px-12"
                )}>
                    {/* Background Glow when scrolled */}
                    {scrolled && (
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50" />
                    )}

                    {/* Logo Area */}
                    <div className={cn("flex items-center relative z-10 shrink-0 transition-all duration-700", scrolled ? "gap-6" : "gap-10")}>
                        <m.a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="flex items-center gap-3 group"
                            aria-label="Ir al inicio"
                        >
                            <div className="relative">
                                <div className={cn(
                                    "w-8 h-8 rounded-sm transition-all duration-700 flex items-center justify-center",
                                    scrolled
                                        ? "bg-primary/20 border border-primary/40"
                                        : "bg-white/10 border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                )}>
                                    <Cpu size={16} className={cn(scrolled ? "text-primary" : "text-white")} />
                                </div>
                                <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] border border-black" />
                            </div>
                            <div className="flex flex-col">
                                <span className={cn(
                                    "font-black text-xs tracking-[0.4em] leading-none uppercase transition-all whitespace-nowrap",
                                    scrolled ? "text-white" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                                )}>ALX // SILVA</span>
                                <span className={cn(
                                    "hidden sm:block font-mono tracking-[0.4em] uppercase mt-1 transition-all whitespace-nowrap",
                                    scrolled ? "text-[6px] text-white/20" : "text-[7px] text-white/60 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                                )}>Estado: Operacional</span>
                            </div>
                        </m.a>

                        {/* High-end Telemetry */}
                        <div className={cn(
                            "hidden lg:flex items-center border-l transition-all shrink-0",
                            scrolled ? "gap-4 pl-6 border-white/5" : "gap-8 pl-10 border-white/20"
                        )}>
                            <div className="flex flex-col">
                                <span className={cn(
                                    "font-mono text-[8px] tracking-[0.3em] uppercase mb-0.5 whitespace-nowrap",
                                    scrolled ? "text-white/40" : "text-[#C5A059] font-bold"
                                )}>Hora_Local</span>
                                <span className={cn(
                                    "text-white font-mono text-[10px] tracking-widest uppercase whitespace-nowrap",
                                    !scrolled && "drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                                )}>{time} <span className="text-white/20">GMT-3</span></span>
                            </div>
                            <div className="flex flex-col">
                                <span className={cn(
                                    "font-mono text-[8px] tracking-[0.3em] uppercase mb-0.5 whitespace-nowrap",
                                    scrolled ? "text-white/40" : "text-[#C5A059] font-bold"
                                )}>Estabilidad.Sis</span>
                                <div className="flex gap-1 mt-1">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className={cn(
                                            "w-3 h-0.5 rounded-full overflow-hidden transition-all",
                                            scrolled ? "bg-emerald-500/20" : "bg-white/20"
                                        )}>
                                            <m.div
                                                className="w-full h-full bg-emerald-500"
                                                animate={{ x: i % 2 === 0 ? ['-100%', '100%'] : ['100%', '-100%'] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className={cn(
                        "hidden md:flex items-center relative z-10 py-1 shrink-0 transition-all duration-700",
                        scrolled
                            ? "bg-white/[0.02] border border-white/5 rounded-xl px-1 gap-1"
                            : "bg-black/20 border border-white/10 rounded-xl backdrop-blur-sm px-1.5 gap-2"
                    )}>
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById(item.id);
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                    setMobileMenuOpen(false);
                                }}
                                className={cn(
                                    "font-bold uppercase tracking-[0.3em] transition-all duration-500 relative group whitespace-nowrap",
                                    scrolled ? "px-3 py-1.5 text-[9px]" : "px-4 py-2 text-[10px]",
                                    activeItem === item.name
                                        ? "text-white"
                                        : scrolled ? "text-white/30 hover:text-white/60" : "text-white/70 hover:text-white"
                                )}
                            >
                                <span className={cn(
                                    "relative z-10",
                                    !scrolled && "drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                                )}>{item.name}</span>
                                {activeItem === item.name && (
                                    <m.div
                                        layoutId="nav-pill"
                                        className={cn(
                                            "absolute inset-0 border rounded-lg -z-10",
                                            scrolled ? "bg-white/[0.05] border-white/10" : "bg-white/10 border-white/20"
                                        )}
                                        transition={{ type: "spring", bounce: 0.15, duration: 0.8 }}
                                    />
                                )}
                            </a>
                        ))}
                    </nav>

                    {/* Action Area */}
                    <div className="flex items-center gap-4 relative z-10 shrink-0">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="md:hidden text-white/40 p-2 hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-white/5"
                            aria-label="Abrir menú de navegación"
                            aria-expanded={mobileMenuOpen}
                        >
                            <Menu size={18} />
                        </button>

                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById('contact');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className={cn(
                                "group hidden md:flex items-center gap-3 font-bold uppercase tracking-[0.4em] rounded-xl transition-all duration-700 whitespace-nowrap shrink-0",
                                scrolled
                                    ? "px-6 py-2.5 text-[9px] bg-white text-black hover:bg-primary hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                                    : "px-8 py-3 text-[10px] bg-white text-black hover:scale-105 shadow-[0_10px_30px_rgba(255,255,255,0.15)] ring-4 ring-white/10"
                            )}
                        >
                            <span className="relative z-10">Acceso_Portal</span>
                            <div className={cn(
                                "w-1.5 h-1.5 rounded-full animate-pulse transition-all",
                                scrolled ? "bg-black group-hover:bg-white" : "bg-[#C5A059]"
                            )} style={{ animationDuration: '2s' }} />
                        </a>
                    </div>
                </div>
            </m.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl md:hidden overflow-hidden flex flex-col"
                    >
                        <div className="p-8 flex justify-between items-center border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <Cpu size={20} className="text-primary" />
                                <span className="font-black text-sm tracking-[0.2em] text-white uppercase">Navegacion_Sistema</span>
                            </div>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-3 rounded-lg bg-white/5 text-white/60 hover:text-white"
                                aria-label="Cerrar menú de navegación"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-12 flex flex-col gap-10 flex-grow justify-center">
                            {navItems.map((item, i) => (
                                <m.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 + 0.2 }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const element = document.getElementById(item.id);
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                        setMobileMenuOpen(false);
                                    }}
                                    className={cn(
                                        "text-4xl font-black transition-all tracking-tighter uppercase flex items-center gap-4 group",
                                        activeItem === item.name ? "text-primary" : "text-white/20 hover:text-white"
                                    )}
                                >
                                    <span className="text-[12px] font-mono text-white/10 group-hover:text-primary transition-colors">0{i + 1}</span>
                                    {item.name}
                                </m.a>
                            ))}
                        </div>

                        <div className="p-12 border-t border-white/5">
                            <div className="text-[10px] font-mono text-white/20 tracking-[0.3em] uppercase mb-4">Telemetria_Core</div>
                            <div className="flex gap-8">
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-xs uppercase tracking-widest">Lat: 24ms</span>
                                    <span className="text-white/20 text-[8px] uppercase tracking-widest mt-1">Santiago, CL</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-emerald-500 font-bold text-xs uppercase tracking-widest">Activo</span>
                                    <span className="text-white/20 text-[8px] uppercase tracking-widest mt-1">Listo para escalar</span>
                                </div>
                            </div>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
};
