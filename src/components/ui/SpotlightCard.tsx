"use client";

import React, { useRef, useState } from "react";
import { m, useMotionValue, useSpring } from 'framer-motion';

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
}

export const SpotlightCard = ({ children, className = "", contentClassName = "" }: SpotlightCardProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
            className={`relative overflow-hidden ${className}`}
        >
            <m.div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-0"
                style={{
                    opacity: isFocused ? 1 : 0,
                    background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, var(--primary), transparent 80%)`,
                }}
                aria-hidden="true"
            />
            <div className={`relative z-10 ${contentClassName}`}>{children}</div>
        </div>
    );
};

export const MagneticWrapper = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set(clientX - centerX);
        y.set(clientY - centerY);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <m.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            className="flex items-center justify-center w-fit"
            style={{
                x: springX,
                y: springY,
            }}
        >
            {children}
        </m.div>
    );
};
