"use client";

import React, { useRef } from 'react';
import { m, useScroll, useTransform, useMotionValue, useSpring, MotionValue } from 'framer-motion';
import Image from 'next/image';

const LAYERS = [
    { src: '/images/art/4.png', speedX: 0.015, speedY: 0.01, scrollSpeed: 0.04 }, // Background Sky
    { src: '/images/art/5.png', speedX: 0.03, speedY: 0.02, scrollSpeed: 0.08 }, // Mountains
    { src: '/images/art/2.png', speedX: 0.07, speedY: 0.05, scrollSpeed: 0.18 }, // Rock
    { src: '/images/art/3.png', speedX: 0.07, speedY: 0.05, scrollSpeed: 0.18 }, // Man (SYNCED with Rock to keep feet on ground)
    { src: '/images/art/6.png', speedX: 0.12, speedY: 0.10, scrollSpeed: 0.35 }, // Bird (Frontmost)
];

// Helper Type
type LayerDef = typeof LAYERS[0];

export const LayeredParallax = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Mouse Tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { damping: 50, stiffness: 200 });
    const springY = useSpring(mouseY, { damping: 50, stiffness: 200 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const { width, height, left, top } = containerRef.current.getBoundingClientRect();
        const mousePosX = (e.clientX - left - width / 2) / (width / 2);
        const mousePosY = (e.clientY - top - height / 2) / (height / 2);
        mouseX.set(mousePosX);
        mouseY.set(mousePosY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="absolute inset-0 w-full h-full cursor-pointer overflow-hidden"
        >
            {LAYERS.map((layer, index) => (
                <ParallaxLayer
                    key={index}
                    layer={layer}
                    index={index}
                    scrollY={scrollY}
                    springX={springX}
                    springY={springY}
                />
            ))}
        </div>
    );
};

interface ParallaxLayerProps {
    layer: LayerDef;
    index: number;
    scrollY: MotionValue<number>;
    springX: MotionValue<number>;
    springY: MotionValue<number>;
}

const ParallaxLayer = ({ layer, index, scrollY, springX, springY }: ParallaxLayerProps) => {
    const x = useTransform(springX, [-1, 1], [`${-layer.speedX * 120}px`, `${layer.speedX * 120}px`]);
    const mouseTranslateY = useTransform(springY, [-1, 1], [`${-layer.speedY * 120}px`, `${layer.speedY * 120}px`]);
    const scrollTranslateY = useTransform(scrollY, [0, 1000], [0, -layer.scrollSpeed * 300]);

    // Ajustes de posición específicos para composición
    let yOffset = 0;
    if (layer.src.includes('2.png')) yOffset = -60; // Roca arriba
    if (layer.src.includes('3.png')) yOffset = 0;   // Hombre en su sitio

    return (
        <m.div
            style={{
                x,
                y: mouseTranslateY,
                translateY: scrollTranslateY,
                zIndex: index,
                position: 'absolute',
                top: yOffset,
                left: 0,
                right: 0,
                bottom: 0,
                scale: 1.15,
                transformOrigin: "center center"
            }}
            initial={{ opacity: 0, scale: 1.4, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1.15, filter: 'blur(0px)' }}
            transition={{
                duration: 0.8,
                delay: index * 0.2, // Staggered entry from background to bird
                ease: [0.16, 1, 0.3, 1] // Sharp, tactile ease
            }}
            className="w-full h-full pointer-events-none will-change-transform"
        >
            {/* Wave Animation Layer */}
            <m.div
                animate={{
                    y: [
                        index % 2 === 0 ? 8 : -8,
                        index % 2 === 0 ? -12 : 12,
                        index % 2 === 0 ? 8 : -8
                    ],
                    rotate: [
                        index % 2 === 0 ? 0.4 : -0.4,
                        index % 2 === 0 ? -0.4 : 0.4,
                        index % 2 === 0 ? 0.4 : -0.4
                    ]
                }}
                transition={{
                    y: {
                        duration: 11 + (index * 1.5),
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    rotate: {
                        duration: 15 + (index * 2),
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
                className="w-full h-full relative"
            >
                <Image
                    src={layer.src}
                    alt={`Art Layer ${index + 1}`}
                    fill
                    quality={85}
                    sizes="(max-width: 768px) 150vw, (max-width: 1200px) 120vw, 100vw"
                    className="object-cover"
                    priority={index === 0 || index === 1} // Only prioritize background and main midground
                    loading={index > 1 ? "lazy" : "eager"} // Lazy load front layers
                />
            </m.div>
        </m.div>
    );
};
