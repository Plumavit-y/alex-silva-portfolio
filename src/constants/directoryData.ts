import { Globe, ShieldCheck, Mail, Linkedin, Github, Instagram, MessageSquare, Monitor } from 'lucide-react';

export interface DirectoryLink {
    id: string;
    title: string;
    description?: string;
    url: string;
    icon: any;
    priority?: boolean;
    category: 'primary' | 'social' | 'professional' | 'contact';
}

export const DIRECTORY_LINKS: DirectoryLink[] = [
    {
        id: 'portfolio',
        title: 'Portfolio Principal',
        description: 'Explora mis proyectos y trayectoria completa.',
        url: '/',
        icon: Globe,
        priority: true,
        category: 'primary'
    },
    {
        id: 'estudio',
        title: 'Bespoke Studio',
        description: 'Cotiza servicios exclusivos de ingeniería y diseño.',
        url: '/estudio',
        icon: ShieldCheck,
        priority: true,
        category: 'primary'
    },
    {
        id: 'linkedin',
        title: 'LinkedIn',
        description: 'Conectemos profesionalmente.',
        url: 'https://linkedin.com/in/alex-silva', // Placeholder, verify if needed
        icon: Linkedin,
        category: 'social'
    },
    {
        id: 'github',
        title: 'GitHub',
        description: 'Repositorios y contribuciones Open Source.',
        url: 'https://github.com/Manquilef', // Using the workspace name as hint if possible, or placeholder
        icon: Github,
        category: 'social'
    },
    {
        id: 'instagram',
        title: 'Instagram',
        description: 'El lado creativo de la tecnología.',
        url: 'https://instagram.com/alexsilva.estudio', // Placeholder
        icon: Instagram,
        category: 'social'
    },
    {
        id: 'certifications',
        title: 'Credenciales Técnicas',
        description: 'Certificaciones Platzi & Fundación Telefónica.',
        url: '/#credentials',
        icon: Monitor,
        category: 'professional'
    },
    {
        id: 'whatsapp',
        title: 'WhatsApp Directo',
        description: 'Hablemos sobre tu próximo legado digital.',
        url: 'https://wa.me/your-number', // Placeholder
        icon: MessageSquare,
        category: 'contact'
    },
    {
        id: 'email',
        title: 'Correo Profesional',
        description: 'Consultas directas para partners.',
        url: 'mailto:contacto@alexsilva.cl', // Placeholder
        icon: Mail,
        category: 'contact'
    }
];
