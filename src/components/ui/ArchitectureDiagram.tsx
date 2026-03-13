"use client";

import React, { useCallback } from 'react';
import {
    ReactFlow,
    Background,
    Controls,
    useNodesState,
    useEdgesState,
    addEdge,
    Edge,
    Node,
    BackgroundVariant,
    Connection,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const commonNodeClass = '!bg-[#0C0B0A] !text-white/70 border border-white/20 rounded-sm font-mono text-[8px] uppercase font-black tracking-widest px-4 py-2 shadow-none';
const highlightNodeClass = '!bg-[#C5A059]/10 !text-[#C5A059] border border-[#C5A059]/50 rounded-sm font-mono text-[8px] uppercase font-black tracking-widest px-4 py-2 shadow-none';

const initialNodes: Node[] = [
    {
        id: 'cdn',
        type: 'input',
        data: { label: 'PUNTO_ACCESO_EDGE' },
        position: { x: 250, y: 0 },
        className: highlightNodeClass
    },
    {
        id: 'lb',
        data: { label: 'BALANCEADOR_CARGA' },
        position: { x: 250, y: 80 },
        className: commonNodeClass
    },
    {
        id: 'gateway',
        data: { label: 'PUERTA_ENLACE_API' },
        position: { x: 250, y: 160 },
        className: highlightNodeClass
    },
    {
        id: 'iam',
        data: { label: 'GESTIÓN_IDENTIDAD' },
        position: { x: 20, y: 160 },
        className: commonNodeClass
    },
    {
        id: 'worker',
        data: { label: 'PROCESADOR_ASÍNCRONO' },
        position: { x: 480, y: 160 },
        className: commonNodeClass
    },
    {
        id: 'core',
        data: { label: 'NÚCLEO_OPERATIVO' },
        position: { x: 250, y: 240 },
        className: highlightNodeClass
    },
    {
        id: 'redis',
        data: { label: 'MEMORIA_CACHE_REDIS' },
        position: { x: 20, y: 240 },
        className: commonNodeClass
    },
    {
        id: 'sql',
        type: 'output',
        data: { label: 'PERSISTENCIA_SQL' },
        position: { x: 250, y: 320 },
        className: highlightNodeClass
    },
    {
        id: 'kafka',
        type: 'output',
        data: { label: 'BUS_EVENTOS_KAFKA' },
        position: { x: 480, y: 240 },
        className: commonNodeClass
    },
];

const initialEdges: Edge[] = [
    { id: 'e-cdn-lb', source: 'cdn', target: 'lb', animated: true, type: 'step', style: { stroke: 'rgba(255,255,255,0.15)' } },
    { id: 'e-lb-gt', source: 'lb', target: 'gateway', animated: true, type: 'step', style: { stroke: 'rgba(255,255,255,0.15)' } },
    { id: 'e-gt-iam', source: 'gateway', target: 'iam', animated: true, type: 'step', style: { stroke: 'rgba(255,255,255,0.15)' } },
    { id: 'e-gt-core', source: 'gateway', target: 'core', animated: true, type: 'step', style: { stroke: 'rgba(197,160,89,0.3)', strokeWidth: 2 } },
    { id: 'e-gt-work', source: 'gateway', target: 'worker', animated: true, type: 'step', style: { stroke: 'rgba(255,255,255,0.15)' } },
    { id: 'e-core-redis', source: 'core', target: 'redis', animated: true, type: 'step', style: { stroke: 'rgba(255,255,255,0.15)' } },
    { id: 'e-core-sql', source: 'core', target: 'sql', animated: true, type: 'step', style: { stroke: 'rgba(197,160,89,0.3)', strokeWidth: 2 } },
    { id: 'e-core-kafka', source: 'core', target: 'kafka', animated: true, type: 'step', style: { stroke: 'rgba(255,255,255,0.15)' } },
];

export const ArchitectureDiagram = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    return (
        <div className="w-full h-full min-h-[320px] rounded-xl overflow-hidden bg-transparent relative">
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">Arquitectura en Vivo</span>
            </div>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                className="bg-transparent"
                nodesConnectable={false}
                nodesDraggable={true}
                elementsSelectable={false}
                panOnDrag={false}
                zoomOnScroll={false}
            >
                <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="rgba(255, 255, 255, 0.05)" />
            </ReactFlow>
        </div>
    );
};
