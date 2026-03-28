"use client";

import React from 'react';
import { m } from 'framer-motion';
import Image from 'next/image';
import { LinksParallaxBanner } from '@/components/links/LinksParallaxBanner';

export const ProfileHeader = () => {
    return (
        <div className="flex flex-col relative bg-white border-b border-slate-200">
            {/* 4-Layer Interactive Banner with Surgical White Fade */}
            <div className="relative">
                <LinksParallaxBanner />
                <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
            </div>
            
            <div className="px-4 md:px-8 pb-6 relative z-30">
                {/* Profile Picture overlapping the banner */}
                <div className="flex justify-between items-end -mt-10 sm:-mt-12 md:-mt-16 mb-4 px-1 sm:px-2">
                    <m.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative z-10 rounded-full border-[3px] sm:border-4 border-white bg-white shadow-sm ring-1 ring-slate-100"
                    >
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-slate-100 relative shadow-inner">
                            <Image 
                                src="/images/profile/alex-silva.webp" 
                                alt="Alex Silva Perfil" 
                                fill 
                                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 128px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </m.div>

                    {/* Quick Action Button (Like "Connect" or "Follow") */}
                    <m.a
                        href="mailto:contacto@manquilef.cl"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-1 sm:mb-2 px-6 sm:px-8 py-2 md:py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-[13px] sm:text-[14px] md:text-[16px] font-semibold rounded-full shadow-md shadow-blue-500/20 transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Contactar
                    </m.a>
                </div>

                {/* Profile Info */}
                <m.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="space-y-4"
                >
                    <div>
                        <div className="flex items-center gap-2 mb-1.5 px-1 sm:px-2">
                            <h1 className="text-[26px] sm:text-[28px] md:text-[32px] font-extrabold tracking-tight text-slate-900 leading-none">
                                Alex Silva
                            </h1>
                            {/* Trust Signal: Identity Verified */}
                            <div className="flex items-center justify-center p-[3px] md:p-1 rounded-full bg-blue-500 text-white shadow-sm ring-2 ring-white" title="Identidad Verificada">
                                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 16.172l-3.536-3.536-1.414 1.414L9 19l12-12-1.414-1.414z" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-[15px] sm:text-[16px] text-slate-500 font-medium tracking-tight px-1 sm:px-2">
                            Especialista en Digitalización y Arquitectura
                        </p>
                    </div>

                    <p className="text-[15px] sm:text-[18px] md:text-[20px] text-slate-700 leading-relaxed sm:leading-relaxed md:leading-relaxed max-w-lg px-1 sm:px-2">
                        Optimizo la operación de empresas mediante tecnología inteligente y diseño de alta precisión. Transformo procesos complejos en herramientas simples que impulsan el crecimiento.
                    </p>

                    {/* Premium Chips */}
                    <div className="flex flex-wrap items-center gap-2.5 pt-3 px-1 sm:px-2">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-full border border-slate-200/60 shadow-sm text-[12px] sm:text-[13px] md:text-[14px] font-medium text-slate-700">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            Santiago, Chile
                        </div>
                        <a href="https://manquilef.cl" className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 transition-colors rounded-full border border-blue-100 shadow-sm text-[12px] sm:text-[13px] md:text-[14px] font-medium text-blue-700 group">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 transition-transform group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                            manquilef.cl
                        </a>
                    </div>
                </m.div>
            </div>
        </div>
    );
};
