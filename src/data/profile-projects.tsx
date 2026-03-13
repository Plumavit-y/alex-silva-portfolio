import React from 'react';
import { Shield, Layout, Zap } from 'lucide-react';
import { ProfileProject } from '@/types';

export const profileProjects: ProfileProject[] = [
    {
        title: 'Manquilef Infraestructura',
        tagline: 'Resiliencia de Sistemas a Nivel Corporativo',
        analysis: 'Detección de ineficiencias críticas en flujos de datos para ecosistemas técnicos de alto crecimiento.',
        execution: 'Arquitectura de sistemas distribuidos con despliegue de precisión, logrando una reducción del 94% en fallos de producción.',
        tech: ['Next.js Core', 'Distributed Node.js', 'High-Load SQL'],
        icon: <Zap size={18} />,
        featured: true
    },
    {
        title: 'Logística Táctica ERP',
        tagline: 'Optimización de Procesos y Flujo Operacional',
        analysis: 'Desincronización de inventario global bajo condiciones de alta concurrencia y estrés operativo táctico.',
        execution: 'Implementación de capas de persistencia asíncrona y orquestación de mensajes industriales para sincronización en tiempo real.',
        tech: ['FastAPI Backend', 'Redis Ecosystem', 'Kubernetes / Docker'],
        icon: <Shield size={18} />
    },
    {
        title: 'Intelligence Suite para Directorios',
        tagline: 'Despliegues de Datos Estratégicos y Análisis',
        analysis: 'Fragmentación de datos no estructurados que impedía la toma de decisiones a nivel ejecutivo y la visión estratégica.',
        execution: 'Integración de modelos NLP de alta densidad en pipelines de BI para obtener insights estratégicos accionables.',
        tech: ['Data Engineering', 'LLM Orchestration', 'React Dashboards'],
        icon: <Layout size={18} />
    }
];
