import { Globe, Bot, Zap, Server, Rocket, Lightbulb } from 'lucide-react';
import { StudioService } from '@/types';

export const STUDIO_SERVICES: StudioService[] = [
    {
        id: 'web',
        icon: <Globe size={24} />,
        title: "Desarrollo Web Full-Stack",
        subtitle: "De la idea a producción",
        stack: ["React", "Next.js", "Node.js", "PostgreSQL"],
        price: "Desde $800.000 CLP",
        basePrice: 800000,
        time: "2-8 semanas",
        features: [
            "Diseño responsive",
            "SEO optimizado",
            "Dashboard admin",
            "Deploy automatizado"
        ]
    },
    {
        id: 'ai',
        icon: <Bot size={24} />,
        title: "Orquestación de IA",
        subtitle: "Integra AI a tu producto",
        stack: ["OpenAI", "Anthropic", "LangChain", "Python"],
        price: "Desde $600.000 CLP",
        basePrice: 600000,
        time: "1-4 semanas",
        features: [
            "Integración LLMs",
            "Optimización de costos",
            "RAG systems",
            "Pipelines custom"
        ]
    },
    {
        id: 'api',
        icon: <Zap size={24} />,
        title: "Sistemas API Robustos",
        subtitle: "Backend que escala",
        stack: ["Node.js", "Express", "FastAPI", "Redis"],
        price: "Desde $500.000 CLP",
        basePrice: 500000,
        time: "1-4 semanas",
        features: [
            "RESTful o GraphQL",
            "JWT auth",
            "Rate limiting",
            "Docs automática"
        ]
    },
    {
        id: 'server',
        icon: <Server size={24} />,
        title: "Operaciones de Servidor",
        subtitle: "DevOps & cloud infra",
        stack: ["Docker", "Linux", "AWS/GCP", "CI/CD"],
        price: "Desde $400.000 CLP",
        basePrice: 400000,
        time: "1-2 semanas",
        features: [
            "Docker containerización",
            "CI/CD pipelines",
            "SSL/TLS setup",
            "Monitoring"
        ]
    },
    {
        id: 'mvp',
        icon: <Rocket size={24} />,
        title: "MVP para Startups",
        subtitle: "Idea a mercado en semanas",
        stack: ["Next.js", "Supabase", "Vercel", "Stripe"],
        price: "Desde $1.200.000 CLP",
        basePrice: 1200000,
        time: "3-6 semanas",
        features: [
            "Stack moderno",
            "Auth + payments",
            "Landing + app core",
            "Analytics básico"
        ]
    },
    {
        id: 'consulting',
        icon: <Lightbulb size={24} />,
        title: "Consultoría Técnica",
        subtitle: "Guía experta",
        stack: ["Expertise", "Best Practices", "Architecture"],
        price: "$50.000 CLP/hora",
        basePrice: 50000,
        time: "Por sesión",
        features: [
            "Code review",
            "Arquitectura",
            "Stack selection",
            "Mentoring"
        ]
    }
];
