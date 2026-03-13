"use client";

import React from 'react';
import { m } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    container?: boolean;
}

export const Section = ({ children, className, id, container = true }: SectionProps) => {
    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24 px-6 md:px-12 relative scroll-mt-24 md:scroll-mt-32",
                className
            )}
        >
            <div className={cn(container && "max-w-7xl mx-auto")}>
                <m.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {children}
                </m.div>
            </div>
        </section>
    );
};
