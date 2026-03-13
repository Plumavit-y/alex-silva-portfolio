"use client";

import React from 'react';

const tech = [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Python', icon: '🐍' },
    { name: 'FastAPI', icon: '⚡' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Linux', icon: '🐧' },
];

export const TechPills = () => {
    return (
        <section>
            <h2>Tecnologías</h2>
            <div className="flex flex-wrap gap-2">
                {tech.map((item) => (
                    <span key={item.name} className="pill">
                        <span className="text-sm opacity-80">{item.icon}</span>
                        <span>{item.name}</span>
                    </span>
                ))}
            </div>
        </section>
    );
};
