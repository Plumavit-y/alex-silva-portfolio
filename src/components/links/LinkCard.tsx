"use client";

import React from 'react';
import { m } from 'framer-motion';
import { DirectoryLink } from '@/constants/directoryData';

interface LinkCardProps extends DirectoryLink {
    index: number;
}

export const LinkCard: React.FC<LinkCardProps> = ({ title, description, url, icon: Icon, priority, index }) => {
    return (
        <m.a
            href={url}
            target={url.startsWith('/') ? '_self' : '_blank'}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index, duration: 0.4, ease: "easeOut" }}
            className={`group flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 transition-all duration-300 border border-slate-200/50 rounded-[16px] sm:rounded-[20px] hover:border-slate-300/80 bg-white hover:bg-slate-50 shadow-sm hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] active:scale-[0.98] active:translate-y-0 active:shadow-sm relative overflow-hidden selection:bg-blue-100`}
        >
            {/* Clean Icon Container */}
            <div className={`p-2.5 sm:p-3 rounded-[12px] sm:rounded-[14px] shrink-0 transition-colors duration-300 flex items-center justify-center ${priority ? "bg-blue-50 text-blue-600 group-hover:bg-blue-100 group-hover:text-blue-700" : "bg-slate-50 text-slate-600 group-hover:bg-slate-100 group-hover:text-slate-900"}`}>
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
            </div>

            <div className="flex-grow pt-0.5 sm:pt-1 min-w-0">
                <div className="flex items-center justify-between gap-3 mb-1 sm:mb-1.5">
                    <h3 className={`text-[15px] sm:text-[16px] md:text-[18px] font-semibold tracking-tight transition-colors duration-300 truncate ${priority ? "text-slate-900 group-hover:text-blue-700" : "text-slate-800 group-hover:text-slate-900"}`}>
                        {title}
                    </h3>
                    
                    {/* Interaction Arrow */}
                    <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0">
                        <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                </div>

                {description && (
                    <p className="text-[13px] sm:text-[14px] md:text-[15px] text-slate-500 font-medium leading-relaxed sm:leading-relaxed line-clamp-2">
                        {description}
                    </p>
                )}
            </div>

            {/* Priority Accent Bar */}
            {priority && (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-400 to-blue-600 rounded-l-[16px] sm:rounded-l-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
        </m.a>
    );
};
