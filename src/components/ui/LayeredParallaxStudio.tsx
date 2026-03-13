"use client";

import React, { useRef, useState, useEffect } from 'react';
import { m, useScroll, useTransform, useMotionValue, useSpring, MotionValue } from 'framer-motion';
import Image from 'next/image';

const SET_1 = [
    { src: '/images/art/studio/1.1.png', speedX: 0.015, speedY: 0.01, scrollSpeed: 0.04 }, // Background
    { src: '/images/art/studio/1.2.png', speedX: 0.03, speedY: 0.02, scrollSpeed: 0.08 }, // Clouds/Hills
    { src: '/images/art/studio/1.3.png', speedX: 0.07, speedY: 0.05, scrollSpeed: 0.18 }, // Village/Mountain
    { src: '/images/art/studio/1.4.png', speedX: 0.12, speedY: 0.10, scrollSpeed: 0.35 }, // Foreground Grass
];

const SET_2 = [
    { src: '/images/art/studio/2.1.png', speedX: 0.015, speedY: 0.01, scrollSpeed: 0.04 }, // Hallway Back
    { src: '/images/art/studio/2.2.png', speedX: 0.04, speedY: 0.03, scrollSpeed: 0.10 }, // Steps
    { src: '/images/art/studio/2.3.png', speedX: 0.08, speedY: 0.06, scrollSpeed: 0.20 }, // Pillar Right
    { src: '/images/art/studio/2.4.png', speedX: 0.12, speedY: 0.10, scrollSpeed: 0.35 }, // Woman
];

export const LayeredParallaxStudio = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Mouse Tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { damping: 50, stiffness: 200 });
    const springY = useSpring(mouseY, { damping: 50, stiffness: 200 });

    const [layers, setLayers] = useState<typeof SET_1>([]);

    // Prevent Hydration Mismatch
    useEffect(() => {
        const randomSet = Math.random() > 0.5 ? SET_1 : SET_2;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setLayers(randomSet);
    }, []);

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
            className="absolute inset-0 w-full h-[120vh] cursor-default overflow-hidden" // extended height for scroll
        >
            {layers.length > 0 && layers.map((layer, index) => (
                <ParallaxLayer
                    key={layer.src}
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
    layer: typeof SET_1[0];
    index: number;
    scrollY: MotionValue<number>;
    springX: MotionValue<number>;
    springY: MotionValue<number>;
}

// Extracted to avoid Rules of Hooks violation inside dynamic map
const ParallaxLayer = ({ layer, index, scrollY, springX, springY }: ParallaxLayerProps) => {
    const x = useTransform(springX, [-1, 1], [`${-layer.speedX * 120}px`, `${layer.speedX * 120}px`]);
    const mouseTranslateY = useTransform(springY, [-1, 1], [`${-layer.speedY * 120}px`, `${layer.speedY * 120}px`]);
    const scrollTranslateY = useTransform(scrollY, [0, 1000], [0, -layer.scrollSpeed * 300]);

    return (
        <m.div
            style={{
                x,
                y: mouseTranslateY,
                translateY: scrollTranslateY,
                zIndex: index,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                scale: 1.15,
                transformOrigin: "center center"
            }}
            initial={{ opacity: 0, scale: 1.4, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1.15, filter: 'blur(0px)' }}
            transition={{
                duration: 1.2,
                delay: index * 0.2, // Staggered entry from background to front
                ease: [0.16, 1, 0.3, 1] // Sharp, tactile ease
            }}
            className="w-full h-full pointer-events-none will-change-transform"
        >
            {/* Wave Animation Layer */}
            <m.div
                animate={{
                    y: [
                        index % 2 === 0 ? 6 : -6,
                        index % 2 === 0 ? -10 : 10,
                        index % 2 === 0 ? 6 : -6
                    ],
                    rotate: [
                        index % 2 === 0 ? 0.3 : -0.3,
                        index % 2 === 0 ? -0.3 : 0.3,
                        index % 2 === 0 ? 0.3 : -0.3
                    ]
                }}
                transition={{
                    y: {
                        duration: 12 + (index * 1.5),
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    rotate: {
                        duration: 16 + (index * 2),
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
                    priority={index === 0 || index === 1}
                    loading={index > 1 ? "lazy" : "eager"}
                />
            </m.div>
        </m.div>
    );
};
