"use client";

import React from 'react';
import { m } from 'framer-motion';
import { GlobalHUD } from '@/components/ui/GlobalHUD';
import { TelemetryPanel } from '@/components/studio/TelemetryPanel';
import { DIRECTORY_LINKS } from '@/constants/directoryData';
import { LinkCard } from '@/components/links/LinkCard';
import { ProfileHeader } from '@/components/links/ProfileHeader';
import { StudioFooter } from '@/components/studio/StudioFooter';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4
    }
  }
};

export default function LinksPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-studio/30 font-sans relative flex flex-col items-center justify-between pb-12 overflow-x-hidden">
            {/* Ambient Background Structure */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.03),transparent_70%)] animate-pulse transition-all duration-10000" />
            </div>

            {/* CONTENT AREA */}
            <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col gap-10 py-12">
                <ProfileHeader />

                {/* LINKS LISTING BY CATEGORIES */}
                <div className="flex flex-col border-y border-white/5 bg-black/50 backdrop-blur-2xl transition-all duration-1000">
                    <div className="px-10 py-5 border-b border-white/5 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.5em] text-white/10">
                        <span>Directorio Privado</span>
                        <span>v1.0.5</span>
                    </div>

                    {/* PRIMARY SECTION */}
                    <div className="pt-2">
                        {DIRECTORY_LINKS.filter(l => l.category === 'primary').map((link, i) => (
                            <LinkCard key={link.id} {...link} index={i} />
                        ))}
                    </div>

                    {/* SOCIALS SECTION */}
                    <div className="border-t border-white/5 mt-4">
                        <div className="px-10 py-4 text-[7px] uppercase font-mono tracking-[0.6em] text-studio/30 flex items-center gap-4">
                            Social Connect
                            <div className="flex-grow h-[1px] bg-white/5" />
                        </div>
                        {DIRECTORY_LINKS.filter(l => l.category === 'social').map((link, i) => (
                            <LinkCard key={link.id} {...link} index={i + 2} />
                        ))}
                    </div>

                    {/* PROFESSIONAL SECTION */}
                    <div className="border-t border-white/5 mt-4">
                        <div className="px-10 py-4 text-[7px] uppercase font-mono tracking-[0.6em] text-studio/30 flex items-center gap-4">
                            Technical Verification
                            <div className="flex-grow h-[1px] bg-white/5" />
                        </div>
                        {DIRECTORY_LINKS.filter(l => l.category === 'professional').map((link, i) => (
                            <LinkCard key={link.id} {...link} index={i + 5} />
                        ))}
                    </div>

                    {/* CONTACT SECTION */}
                    <div className="border-t border-white/5 mt-4">
                        <div className="px-10 py-4 text-[7px] uppercase font-mono tracking-[0.6em] text-studio/30 flex items-center gap-4">
                            Direct Liaison
                            <div className="flex-grow h-[1px] bg-white/5" />
                        </div>
                        {DIRECTORY_LINKS.filter(l => l.category === 'contact').map((link, i) => (
                            <LinkCard key={link.id} {...link} index={i + 7} />
                        ))}
                    </div>

                    <div className="px-10 py-8 flex flex-col gap-4 font-mono text-[8px] uppercase tracking-[0.5em] text-white/10 text-center bg-white/[0.01]">
                        <div className="flex items-center justify-center gap-4 opacity-50">
                            SANTIAGO, CHILE // OPS CENTER
                        </div>
                    </div>
                </div>

                {/* MINIMAL FOOTER */}
                <div className="flex flex-col items-center gap-8 py-12 text-center">
                    <div className="h-[1px] w-12 bg-studio/20" />
                    <p className="text-[9px] font-mono tracking-[0.4em] text-white/20 uppercase">
                        © {new Date().getFullYear()} Alex Silva // Digital Architect
                    </p>
                </div>
            </div>
        </main>
    );
}
