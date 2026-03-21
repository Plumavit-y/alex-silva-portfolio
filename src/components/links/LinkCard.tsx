"use client";

import React from 'react';
import { m } from 'framer-motion';
import { DirectoryLink } from '@/constants/directoryData';
import { LucideIcon } from 'lucide-react';

interface LinkCardProps extends DirectoryLink {
    index: number;
}

export const LinkCard: React.FC<LinkCardProps> = ({ title, description, url, icon: Icon, priority, index }) => {
    return (
        <m.a
            href={url}
            target={url.startsWith('/') ? '_self' : '_blank'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`group block w-full relative p-5 transition-all duration-500 rounded-none border-b border-white/5 hover:bg-studio/[0.03] ${priority ? "bg-studio/[0.02] border-studio/20" : ""}`}
        >
            {/* Hover Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-studio/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative flex items-center justify-between gap-6">
                <div className="flex items-center gap-5 translate-x-0 group-hover:translate-x-2 transition-transform duration-700">
                    <div className={`p-3 rounded-none flex items-center justify-center transition-all duration-700 ${priority ? "text-studio" : "text-white/30 group-hover:text-studio"}`}>
                        <Icon size={22} strokeWidth={1} />
                    </div>
                    <div className="text-left">
                        <h3 className={`text-base font-medium tracking-tight mb-0.5 transition-all duration-700 ${priority ? "text-white" : "text-white/80 group-hover:text-white"}`}>
                            {title}
                        </h3>
                        {description && (
                            <p className="text-[10px] text-white/30 font-light italic tracking-wide group-hover:text-white/50 transition-colors uppercase">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
                
                {/* Visual Accent for Priority/Hover */}
                <div className={`w-8 h-[1px] transition-all duration-1000 ${priority ? "bg-studio/40 w-12" : "bg-white/5 group-hover:bg-studio/40 group-hover:w-12 opacity-0 group-hover:opacity-100"}`} />
            </div>

            {/* Micro-border for continuity */}
            {priority && (
                <div className="absolute top-0 right-0 w-[2px] h-full bg-studio/20" />
            )}
        </m.a>
    );
};
