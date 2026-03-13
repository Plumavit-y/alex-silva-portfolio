import { SectionProject } from '@/types';

export const sectionProjects: SectionProject[] = [
    {
        title: 'MANQUILEF ENGINE',
        category: 'LA RESOLUCIÓN // NÚCLEO SaaS',
        desc: 'Arquitectura base para soluciones digitales corporativas. Sistemas modulares que previenen la deuda técnica desde el día cero.',
        impact: 'Reduce el Time-to-Feature (TTF) en 60% y disminuye costos de servidor mediante optimización concurrente.',
        tags: ['NEXT.JS', 'POSTGRESQL', 'REDIS'],
        size: 'large',
        color: 'from-primary/10 to-transparent',
        image: '/images/projects/manquilef-hero.webp'
    },
    {
        title: 'AI_LAB // ROBOTICS',
        category: 'EL DESCUBRIMIENTO // ML OPS',
        desc: 'Pipeline híbrido de visión artificial y LLMs para automatización industrial adaptativa.',
        impact: 'Procesamiento sub-segundo para toma de decisiones en hardware crítico.',
        tags: ['PYTHON', 'PYTORCH'],
        size: 'medium',
        color: 'from-secondary/10 to-transparent'
    },
    {
        title: 'SMART_ERP',
        category: 'ESCALA // FULL-STACK',
        desc: 'Sistema neural de gestión interna para operaciones retail de alto volumen.',
        impact: 'Soporta 10k+ transacciones diarias con latencia < 200ms.',
        tags: ['NODE.JS', 'DOCKER'],
        size: 'small',
        color: 'from-white/5 to-transparent'
    },
    {
        title: 'DATA_ARCHIVE',
        category: 'RESILIENCIA // INFRAESTRUCTURA',
        desc: 'Pipeline masivo de procesamiento de datos con sincronización redundante.',
        impact: 'Alta disponibilidad 99.99% garantizada.',
        tags: ['GO', 'SQLITE'],
        size: 'small',
        color: 'from-white/5 to-transparent'
    }
];
