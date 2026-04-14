import { Globe, Bot, Zap, Server, Rocket, Lightbulb, Mail } from 'lucide-react';
import { StudioService } from '@/types';

export const STUDIO_SERVICES: StudioService[] = [
    {
        id: 'emails',
        icon: <Mail size={24} />,
        title: "Instalación de Correos Corporativos",
        subtitle: "Comunicaciones empresariales confiables y listas para usarse.",
        stack: ["Google Workspace", "Microsoft 365", "DNS", "Seguridad DMARC"],
        price: "Inversión desde $-- CLP",
        basePrice: 0,
        time: "1-3 Semanas",
        features: [
            "Configuración de Servidores MX de Alta Entrega",
            "Migración Completa de Cuentas / Bandejas Antiguas",
            "Dominio Personalizado Corporativo",
            "Protección Antispam, SPF, DKIM y DMARC"
        ],
        isLocked: false
    },
    {
        id: 'web',
        icon: <Globe size={24} />,
        title: "Arquitectura Web de Vanguardia",
        subtitle: "Donde la estética se encuentra con la ingeniería de precisión.",
        stack: ["React", "Next.js", "Node.js", "PostgreSQL"],
        price: "Inversión desde $800.000 CLP",
        basePrice: 800000,
        time: "4-12 Semanas",
        features: [
            "Diseño de Interfaz Impecable",
            "Optimización para buscadores de élite",
            "Paneles de Control Intuitivos",
            "Infraestructura de Despliegue Robusta"
        ],
        isLocked: true
    },
    {
        id: 'ai',
        icon: <Bot size={24} />,
        title: "Sistemas de Inteligencia Elevada",
        subtitle: "Orquestación de modelos avanzados para productos visionarios.",
        stack: ["OpenAI", "Anthropic", "LangChain", "Python"],
        price: "Consultoría desde $600.000 CLP",
        basePrice: 600000,
        time: "3-8 Semanas",
        features: [
            "Integración de Modelos de Lenguaje",
            "Arquitecturas RAG Especializadas",
            "Automatización de Flujos Cognitivos",
            "Optimización de Precisión y Costos"
        ],
        isLocked: true
    },
    {
        id: 'api',
        icon: <Zap size={24} />,
        title: "Sistemas de Datos Implacables",
        subtitle: "Backends diseñados para la escalabilidad global.",
        stack: ["Node.js", "Express", "FastAPI", "Redis"],
        price: "Desde $500.000 CLP",
        basePrice: 500000,
        time: "2-6 Semanas",
        features: [
            "Interfaces REST o GraphQL",
            "Seguridad y Cifrado de Grado Militar",
            "Sistemas de Caché de Alta Velocidad",
            "Documentación Técnica Técnica Exhaustiva"
        ],
        isLocked: true
    },
    {
        id: 'server',
        icon: <Server size={24} />,
        title: "Infraestructura de Misión Crítica",
        subtitle: "Garantía de disponibilidad y rendimiento absoluto.",
        stack: ["Docker", "Linux", "AWS/GCP", "CI/CD"],
        price: "Desde $400.000 CLP",
        basePrice: 400000,
        time: "2-4 Semanas",
        features: [
            "Orquestación de Contenedores",
            "Automatización de Integración Continua",
            "Blindaje de Seguridad SSL/TLS",
            "Monitorización Predictiva"
        ],
        isLocked: true
    },
    {
        id: 'mvp',
        icon: <Rocket size={24} />,
        title: "Lanzamientos Estratégicos (MVP)",
        subtitle: "Convertimos su visión en un producto listo para el mercado.",
        stack: ["Next.js", "Supabase", "Vercel", "Stripe"],
        price: "Protocolo desde $1.200.000 CLP",
        basePrice: 1200000,
        time: "6-10 Semanas",
        features: [
            "Stack Moderno y Escalable",
            "Gestión de Identidad y Pagos",
            "App core optimizada para inversores",
            "Analítica de Comportamiento Integrada"
        ],
        isLocked: true
    },
    {
        id: 'consulting',
        icon: <Lightbulb size={24} />,
        title: "Asesoría Arquitectónica Privada",
        subtitle: "Guía estratégica para decisiones de alta complejidad.",
        stack: ["Expertise", "Best Practices", "Architecture"],
        price: "$50.000 CLP / Sesión de Elite",
        basePrice: 50000,
        time: "Sesión Programada",
        features: [
            "Revisión de Código Rigurosa",
            "Selección de Stack Estratégico",
            "Mentoring de Ingeniería Avanzada",
            "Planificación de Escalabilidad"
        ],
        isLocked: true
    }
];
