"use client";

import React from 'react';

/**
 * GlobalHUD Component
 * 
 * Provides consistent technical overlays (scanlines, noise, vignette, corners)
 * to maintain the "high-tech" aesthetic across different pages.
 */
export const GlobalHUD = () => {
    return (
        <div className="fixed inset-0 z-50 pointer-events-none select-none overflow-hidden">
            {/* 1. Subtle Luxury Grain Noise (Atmospheric) */}
            <div 
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" 
                aria-hidden="true"
            />

            {/* 2. Soft Radial Vignette (Focuses attention to center) */}
            <div 
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.05)_50%,rgba(5,5,5,0.4)_100%)]" 
                aria-hidden="true"
            />

            {/* 3. Luxury Framing - Minimalist Gold Pins */}
            <div className="absolute top-12 left-12 w-4 h-[1px] bg-studio/30" />
            <div className="absolute top-12 left-12 w-[1px] h-4 bg-studio/30" />
            
            <div className="absolute top-12 right-12 w-4 h-[1px] bg-studio/30" />
            <div className="absolute top-12 right-12 w-[1px] h-4 bg-studio/30" />
            
            <div className="absolute bottom-12 left-12 w-4 h-[1px] bg-studio/30" />
            <div className="absolute bottom-12 left-12 w-[1px] h-4 bg-studio/30" />
            
            <div className="absolute bottom-12 right-12 w-4 h-[1px] bg-studio/30" />
            <div className="absolute bottom-12 right-12 w-[1px] h-4 bg-studio/30" />

            {/* 4. Elegant Top Branding */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-6 px-4">
                <div className="h-[1px] w-8 bg-studio/20" />
                <div className="text-[9px] font-mono text-studio/40 tracking-[0.8em] uppercase">
                    Bespoke Craftsmanship
                </div>
                <div className="h-[1px] w-8 bg-studio/20" />
            </div>
            
            {/* 5. Minimal Bottom Accent (Subtle) */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 text-[7px] font-mono text-studio/20 tracking-[0.4em] uppercase">
                <span>Alex Silva Estudio</span>
                <span className="w-1 h-1 rounded-full bg-studio/20" />
                <span>Privé Selection</span>
            </div>
        </div>
    );
};
