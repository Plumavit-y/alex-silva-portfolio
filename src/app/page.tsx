"use client";

import { m, useScroll, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';
import { WireframeModel } from '@/components/3d/WireframeModel';
const ActivityFeed = dynamic(() => import('@/components/ui/ActivityFeed').then(mod => mod.ActivityFeed), { ssr: false });
const Expertise = dynamic(() => import('@/components/sections/Expertise').then(mod => mod.Expertise));
const Projects = dynamic(() => import('@/components/sections/Projects').then(mod => mod.Projects));
const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => mod.Contact));
const Footer = dynamic(() => import('@/components/sections/Footer').then(mod => mod.Footer));

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Subtle Progress Indicator */}
      <m.div className="fixed bottom-0 left-0 right-0 h-1 bg-primary/20 origin-left z-50" style={{ scaleX }}>
        <div className="absolute bottom-full right-0 px-3 py-1 bg-primary text-[8px] font-bold text-white uppercase tracking-widest rounded-t shadow-sm">
          SYS.SYNC // ALX
        </div>
      </m.div>

      <div className="flex flex-col">
        {/* Main Hero Component with Cursor Tracking and 3D Accent Area later if needed */}
        <Hero />

        {/* 3D Wireframe / Background robotics concept section */}
        <section id="robotics" className="relative w-full border-y border-white/5 bg-[#050505] overflow-hidden scroll-mt-24 md:scroll-mt-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10 order-2 lg:order-1 relative">
              <WireframeModel />
            </div>
            <div className="z-10 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary text-[10px] uppercase font-bold tracking-[0.4em] opacity-80">SECCIÓN_01.5 // ROBÓTICA</span>
                <div className="h-[1px] w-12 bg-primary/30" />
              </div>
              <h2 className="mb-0 text-[40px] sm:text-[48px] md:text-[64px] tracking-tighter leading-none text-white font-black uppercase">
                HARDWARE x <br />
                <span className="text-white/20 italic font-light text-[24px] sm:text-[32px] md:text-[48px]">SOFTWARE</span>
              </h2>
              <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg font-mono tracking-wide">
                Como ex representante del World Robot Summit Tokyo, mi enfoque une las restricciones físicas extremas con soluciones de software escalables. Diseño código impulsado por la precisión, guiado por principios de la robótica industrial—donde el rendimiento no es opcional, es obligatorio.
              </p>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                </div>
                <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
                  Render 3D Interactivo [Usa el Mouse]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Arsenal with React Flow Architecture Diagram */}
        <Expertise />

        <Projects />

        {/* GitHub Live Feed Integrated into Contact or a Dedicated Section */}
        <section id="activity" className="py-16 md:py-24 bg-[#0B0908] relative border-b border-white/5 overflow-hidden scroll-mt-24 md:scroll-mt-32">
          {/* Ambient Background - Quiet Luxury Warmth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(197,160,89,0.03),transparent_70%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary text-[10px] uppercase font-bold tracking-[0.4em] opacity-80">SECCIÓN_04 // CONSISTENCIA</span>
                <div className="h-[1px] w-12 bg-primary/30" />
              </div>
              <h2 className="mb-0 text-[40px] sm:text-[48px] md:text-[64px] tracking-tighter leading-none text-white font-black uppercase">
                COMPROMISO <br />
                <span className="text-white/20 italic font-light text-[24px] sm:text-[32px] md:text-[48px]">TOTAL</span>
              </h2>
              <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg font-mono tracking-wide">
                Un verdadero ingeniero nunca deja de entregar. Entrega continua, optimización incansable y un historial escrito en commits.
              </p>
              <div className="pt-4">
                <a href="https://github.com/manquilef" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-gray-200 transition-colors">
                  Visitar Repositorio GitHub
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <ActivityFeed />
            </div>
          </div>
        </section>

        <Contact />
      </div>
      <Footer />
    </main>
  );
}
