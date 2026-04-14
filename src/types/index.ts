import { ReactNode } from 'react';

export interface ProfileProject {
    title: string;
    tagline: string;
    analysis: string;
    execution: string;
    tech: string[];
    icon: ReactNode;
    featured?: boolean;
}

export interface SectionProject {
    title: string;
    category: string;
    desc: string;
    impact: string;
    tags: string[];
    size: 'large' | 'medium' | 'small';
    color: string;
    image?: string;
}

export interface ExtraItem {
    title: string;
    category: string;
    desc: string;
}

export interface DarkVeilProps {
    hueShift?: number;
    noiseIntensity?: number;
    scanlineIntensity?: number;
    speed?: number;
    scanlineFrequency?: number;
    warpAmount?: number;
    resolutionScale?: number;
}

export interface StudioService {
    id: string;
    icon: ReactNode;
    title: string;
    subtitle: string;
    stack: string[];
    price: string;
    basePrice: number;
    time: string;
    features: string[];
    isLocked?: boolean;
}

