/// <reference types="@react-three/fiber" />
"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, Environment, Float, Wireframe, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const IcosahedronNode = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[2, 1]} />
                <meshStandardMaterial
                    color="#0A0A0A"
                    transparent
                    opacity={0.8}
                    roughness={0.1}
                    metalness={0.8}
                />
                <Wireframe
                    thickness={0.02}
                    stroke="#593F62"
                    fillOpacity={0}
                    strokeOpacity={0.8}
                />
            </mesh>
            {/* Inner Core */}
            <mesh>
                <icosahedronGeometry args={[1, 0]} />
                <meshBasicMaterial color="#76153C" wireframe opacity={0.3} transparent />
            </mesh>
        </Float>
    );
};

export const WireframeModel = () => {
    return (
        <div className="w-full h-[400px] sm:h-[500px] relative">
            {/* Overlay Grid */}
            <div className="absolute inset-0 z-10 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            />
            {/* Scanners */}
            <div className="absolute top-0 left-[10%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#76153C]/40 to-transparent animate-[pulse_4s_ease-in-out_Infinity] pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#593F62]/40 to-transparent animate-[pulse_5s_ease-in-out_Infinity] pointer-events-none" />

            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} className="cursor-grab active:cursor-grabbing">
                <ambientLight intensity={0.5} color="#ffffff" />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#593F62" />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#76153C" />
                <Environment preset="city" />
                <Center>
                    <IcosahedronNode />
                </Center>
                <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
            </Canvas>
        </div>
    );
};
