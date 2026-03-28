"use client";

import React from 'react';
import { DIRECTORY_LINKS } from '@/constants/directoryData';
import { LinkCard } from '@/components/links/LinkCard';
import { ProfileHeader } from '@/components/links/ProfileHeader';

export default function LinksPage() {
    return (
        <main className="min-h-screen bg-slate-50 relative text-slate-900 font-sans antialiased p-4 sm:p-6 md:py-12 flex flex-col items-center selection:bg-blue-100 overflow-x-hidden">
            {/* Background ambient glow setup */}
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none -z-10" />

            {/* Main Central Column (Boutique Card Style) */}
            <div className="w-full max-w-2xl mx-auto bg-white rounded-[24px] sm:rounded-[32px] border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-shadow duration-500 overflow-hidden flex flex-col relative z-10">
                
                {/* Profile Banner and Bio */}
                <ProfileHeader />

                {/* Directory Content Area */}
                <div className="flex flex-col">
                    
                    {/* Primary/Featured Section */}
                    <div className="pt-4 sm:pt-6 px-3 sm:px-5 pb-4 sm:pb-5 flex flex-col gap-3 sm:gap-4">
                        {DIRECTORY_LINKS.filter(l => l.category === 'primary').map((link, i) => (
                            <LinkCard key={link.id} {...link} index={i} />
                        ))}
                    </div>

                    {/* Technical / Professional Section */}
                    <div className="mt-2 sm:mt-4 border-t border-slate-100/80">
                        <div className="px-5 sm:px-7 pt-5 sm:pt-6 pb-3 flex items-center justify-between">
                            <h2 className="text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-slate-500">
                                Credenciales & Verificación
                            </h2>
                        </div>
                        <div className="flex flex-col gap-3 sm:gap-4 px-3 sm:px-5 pb-4 sm:pb-5">
                            {DIRECTORY_LINKS.filter(l => l.category === 'professional').map((link, i) => (
                                <LinkCard key={link.id} {...link} index={i + 2} />
                            ))}
                        </div>
                    </div>

                    {/* Social Section */}
                    <div className="mt-1 border-t border-slate-100/80">
                        <div className="px-5 sm:px-7 pt-5 sm:pt-6 pb-3 flex items-center justify-between">
                            <h2 className="text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-slate-500">
                                Conexión Social
                            </h2>
                        </div>
                        <div className="flex flex-col gap-3 sm:gap-4 px-3 sm:px-5 pb-4 sm:pb-5">
                            {DIRECTORY_LINKS.filter(l => l.category === 'social').map((link, i) => (
                                <LinkCard key={link.id} {...link} index={i + 4} />
                            ))}
                        </div>
                    </div>

                    {/* Direct Contact Section */}
                    <div className="mt-1 border-t border-slate-100/80">
                        <div className="px-5 sm:px-7 pt-5 sm:pt-6 pb-3 flex items-center justify-between">
                            <h2 className="text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-slate-500">
                                Contacto Directo
                            </h2>
                        </div>
                        <div className="flex flex-col gap-3 sm:gap-4 px-3 sm:px-5 pb-4 sm:pb-6">
                            {DIRECTORY_LINKS.filter(l => l.category === 'contact').map((link, i) => (
                                <LinkCard key={link.id} {...link} index={i + 7} />
                            ))}
                        </div>
                    </div>

                </div>

                {/* Footer of the column */}
                <div className="px-6 py-10 bg-slate-50 flex flex-col items-center justify-center border-t border-slate-200 mt-auto">
                    <p className="text-[13px] sm:text-sm font-medium text-slate-500 mb-1.5">
                        © {new Date().getFullYear()} Alex Silva System
                    </p>
                    <p className="text-[11px] sm:text-[12px] text-slate-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                        Santiago, Chile // 2026
                    </p>
                </div>

            </div>
        </main>
    );
}
