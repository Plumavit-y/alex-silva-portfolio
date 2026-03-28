"use client";

import React, { useRef } from 'react';
import { m, useScroll, useTransform, useMotionValue, useSpring, MotionValue } from 'framer-motion';
import Image from 'next/image';

const LAYERS = [
    { src: '/images/art/links/1.png', speedX: 0.015, speedY: 0.015, scrollSpeed: 0.04 },  // Fondo Total
    { src: '/images/art/links/2.png', speedX: 0.035, speedY: 0.035, scrollSpeed: 0.08 },  // Capa 2
    { src: '/images/art/links/3.png', speedX: 0.065, speedY: 0.065, scrollSpeed: 0.15 },  // Capa 3
    { src: '/images/art/links/4.png', speedX: 0.1,   speedY: 0.1,   scrollSpeed: 0.25 }, // Capa Superior Completa
];

type LayerDef = typeof LAYERS[0];

export const LinksParallaxBanner = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Mouse Tracking para interactividad en Desktop
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { damping: 40, stiffness: 150 });
    const springY = useSpring(mouseY, { damping: 40, stiffness: 150 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const { width, height, left, top } = containerRef.current.getBoundingClientRect();
        // Normalizamos la posición de -1 a 1
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
            className="w-full h-48 md:h-[300px] relative overflow-hidden bg-slate-100 cursor-crosshair"
        >
            {LAYERS.map((layer, index) => (
                <BannerLayer 
                    key={index} 
                    layer={layer} 
                    index={index} 
                    scrollY={scrollY}
                    springX={springX}
                    springY={springY}
                />
            ))}
            
            {/* Opcional: Filtro suave sobre el banner para proteger la legibilidad en capas muy luminosas */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/30 pointer-events-none z-10" />
        </div>
    );
};

interface BannerLayerProps {
    layer: LayerDef;
    index: number;
    scrollY: MotionValue<number>;
    springX: MotionValue<number>;
    springY: MotionValue<number>;
}

const BannerLayer = ({ layer, index, scrollY, springX, springY }: BannerLayerProps) => {
    // Calculamos el desplazamiento interactivo según el nivel de profundidad
    const x = useTransform(springX, [-1, 1], [`${-layer.speedX * 80}px`, `${layer.speedX * 80}px`]);
    const y = useTransform(springY, [-1, 1], [`${-layer.speedY * 80}px`, `${layer.speedY * 80}px`]);
    
    // Parallax de Scroll Vertical (el fondo baja menos, el frente sube)
    const scrollTranslateY = useTransform(scrollY, [0, 500], [0, layer.scrollSpeed * 200]);

    return (
        <m.div
            style={{
                x,
                y,
                translateY: scrollTranslateY,
                zIndex: index,
            }}
            // Hacemos el div más grande que el contenedor (escala) para que al moverse no exponga bordes
            className="absolute -inset-[15%] pointer-events-none will-change-transform" 
        >
            {/* Animación "Idle" de respiración orgánica MÁS VIVA */}
            <m.div
                animate={{
                    scale: [1, 1.05, 1],
                    y: [0, index % 2 === 0 ? 15 : -12, 0],
                    x: [0, index % 2 === 0 ? -10 : 8, 0],
                    rotate: [0, index % 2 === 0 ? 0.5 : -0.5, 0]
                }}
                transition={{
                    duration: 8 + index * 1.5, // Más rápido y vivo
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="w-full h-full relative"
            >
                <Image
                    src={layer.src}
                    alt={`Parallax Layer ${index + 1}`}
                    fill
                    priority={index === 0 || index === 3} // Priorizar render del fondo y el frente visual
                    sizes="(max-width: 768px) 120vw, 100vw"
                    className="object-cover object-bottom" // object-bottom suele ser mejor para mantener "piso" en el artwork
                />
            </m.div>
        </m.div>
    );
};
