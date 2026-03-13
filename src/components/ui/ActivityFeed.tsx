"use client";

import React, { useState, useEffect } from 'react';
import { GitCommit, GitPullRequest, GitMerge } from 'lucide-react';
import { m } from 'framer-motion';

type CommitData = {
    id: string;
    message: string;
    date: string;
    repo: string;
    type: 'commit' | 'pr' | 'merge';
};

// Simulated data to ensure reliability and no API limits, while feeling real
const dummyCommits: CommitData[] = [
    { id: 'a1b2c3d', message: 'feat: manejo robusto de errores en el servicio de telemetría', date: 'hace 10 mins', repo: 'manquilef/core', type: 'commit' },
    { id: 'f4e5d6c', message: 'Merge pull request #142 de missing-deps', date: 'hace 2 horas', repo: 'manquilef/core', type: 'merge' },
    { id: '9a8b7c6', message: 'refactor: desacoplar gateway de borde de la base de datos principal', date: 'hace 5 horas', repo: 'alexsilva/distributed-infra', type: 'commit' },
    { id: '1z2x3c4', message: 'fix: fuga de memoria concurrente en threads de trabajo', date: 'hace 1 día', repo: 'alexsilva/portfolio', type: 'commit' },
    { id: 'p0o9i8u', message: 'feat: implementación inicial de wireframe 3D', date: 'hace 1 día', repo: 'alexsilva/portfolio', type: 'pr' },
];

export const ActivityFeed = () => {
    const [commits, setCommits] = useState<CommitData[]>([]);

    useEffect(() => {
        // Simulating data fetch intentionally
        const timer = setTimeout(() => {
            setCommits(dummyCommits);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    const getIcon = (type: string) => {
        switch (type) {
            case 'merge': return <GitMerge size={14} className="text-purple-400" />;
            case 'pr': return <GitPullRequest size={14} className="text-emerald-400" />;
            default: return <GitCommit size={14} className="text-amber-400" />;
        }
    };

    return (
        <div className="w-full max-w-md bg-[#0a0a0a]/50 border border-white/5 rounded-2xl overflow-hidden font-mono text-xs">
            {/* Header */}
            <div className="px-4 py-3 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <span className="uppercase tracking-[0.2em] text-white/50">Registro de Actividad en Vivo</span>
                </div>
                <span className="text-white/20">alexx-silva</span>
            </div>

            {/* Commits List */}
            <div className="p-4 space-y-4">
                {commits.length === 0 ? (
                    <div className="animate-pulse space-y-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="flex gap-3 items-start opacity-20">
                                <div className="w-4 h-4 rounded-full bg-white/20" />
                                <div className="space-y-2 w-full">
                                    <div className="h-3 w-3/4 bg-white/20 rounded" />
                                    <div className="h-2 w-1/4 bg-white/20 rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    commits.map((commit, idx) => (
                        <m.div
                            key={commit.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex gap-3 items-start group relative"
                        >
                            {/* Vertical timeline line */}
                            {idx !== commits.length - 1 && (
                                <div className="absolute left-[7px] top-5 bottom-[-16px] w-[1px] bg-white/5" />
                            )}

                            <div className="mt-0.5 bg-[#1A1A1A] rounded p-0.5 border border-white/10 z-10">
                                {getIcon(commit.type)}
                            </div>

                            <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-white/80 line-clamp-1">{commit.message}</span>
                                    <span className="text-white/30 text-[9px] shrink-0 ml-2">{commit.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-white/40">
                                    <span className="text-primary font-semibold">{commit.id}</span>
                                    <span>•</span>
                                    <span>{commit.repo}</span>
                                </div>
                            </div>
                        </m.div>
                    ))
                )}
            </div>

            <div className="p-2 border-t border-white/5 bg-white/[0.02] flex justify-center group cursor-pointer transition-colors hover:bg-white/5">
                <span className="uppercase tracking-[0.2em] text-white/30 text-[9px] group-hover:text-white/80 transition-colors">
                    Ver Gráfico Completo
                </span>
            </div>
        </div>
    );
};
