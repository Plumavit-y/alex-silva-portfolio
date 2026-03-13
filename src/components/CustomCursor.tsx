"use client";

import React, { useEffect, useState } from 'react';
import { m, useSpring } from 'framer-motion';

export const CustomCursor = () => {
    const [hovered, setHovered] = useState(false);

    const cursorX = useSpring(0, { damping: 25, stiffness: 400 });
    const cursorY = useSpring(0, { damping: 25, stiffness: 400 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleHover = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a, button, .cursor-pointer');
            setHovered(!!target);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHover);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <m.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/10 pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: hovered ? 1.5 : 1,
                    backgroundColor: hovered ? "rgba(255, 255, 255, 0.05)" : "transparent",
                }}
                transition={{ duration: 0.3 }}
            />
            <m.div
                className="fixed top-0 left-0 w-1 h-1 rounded-full bg-primary pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
};
