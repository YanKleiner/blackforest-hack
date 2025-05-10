'use client';

import React, { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  Connection,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import AnnotationNode from '../pdf/_[id]/_nodes/AnnotationNode';
import InfoNode from '../pdf/_[id]/_nodes/InfoNode';
import FloatingEdge from '../pdf/_[id]/_edges/FloatingEdge';
import CenterNode from '../pdf/_[id]/_nodes/CenterNode';
import RoadmapNode from '../pdf/_[id]/_nodes/RoadmapNode';
import { useStore } from '@/lib/store';

const nodeTypes = {
  annotation: AnnotationNode,
  custom: InfoNode,
  center: CenterNode,
  roadmap: RoadmapNode,
};

const edgeTypes = {
  floating: FloatingEdge,
};

// PDF processing pipeline nodes
const initialNodes = [
  {
    id: '1',
    type: 'roadmap',
    data: {
      color: '#8BFFAC',
      title: 'PDF Upload',
      info: 'Initial ingestion of PDF documents into the system.',
    },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    type: 'roadmap',
    data: {
      color: '#FFD700',
      title: 'Document Parsing',
      info: 'Extract text, structure, and metadata from the PDF.',
    },
    position: { x: 400, y: -100 },
  },
  {
    id: '3',
    type: 'roadmap',
    data: {
      color: '#FFD700',
      title: 'Image Extraction',
      info: 'Identify and extract images from the PDF document.',
    },
    position: { x: 400, y: 100 },
  },
  {
    id: '4',
    type: 'roadmap',
    data: {
      color: '#FF6347',
      title: 'Text Preprocessing',
      info: 'Clean, normalize, and prepare text for further analysis.',
    },
    position: { x: 800, y: -150 },
  },
  {
    id: '5',
    type: 'roadmap',
    data: {
      color: '#FF6347',
      title: 'Image Analysis',
      info: 'Process and analyze extracted images for content and context.',
    },
    position: { x: 800, y: 150 },
  },
  {
    id: '6',
    type: 'roadmap',
    data: {
      color: '#87CEEB',
      title: 'Entity Recognition',
      info: 'Identify named entities, key concepts, and important information.',
    },
    position: { x: 1200, y: -100 },
  },
  {
    id: '7',
    type: 'roadmap',
    data: {
      color: '#87CEEB',
      title: 'Content Classification',
      info: 'Categorize document sections by content type and relevance.',
    },
    position: { x: 1200, y: 100 },
  },
  {
    id: '8',
    type: 'roadmap',
    data: {
      color: '#32CD32',
      title: 'Annotation & Labeling',
      info: 'Apply labels, tags, and annotations to document content.',
    },
    position: { x: 1600, y: 0 },
  },
  {
    id: '9',
    type: 'roadmap',
    data: {
      color: '#FF69B4',
      title: 'Knowledge Extraction',
      info: 'Generate structured knowledge and insights from the processed document.',
    },
    position: { x: 2000, y: -100 },
  },
  {
    id: '10',
    type: 'roadmap',
    data: {
      color: '#FF69B4',
      title: 'Document Indexing',
      info: 'Index processed content for efficient search and retrieval.',
    },
    position: { x: 2000, y: 100 },
  },
];

// PDF processing pipeline connections
const initialEdges = [
  { id: '1-2', source: '1', target: '2', animated: true },
  { id: '1-3', source: '1', target: '3', animated: true },
  { id: '2-4', source: '2', target: '4', animated: true },
  { id: '3-5', source: '3', target: '5', animated: true },
  { id: '4-6', source: '4', target: '6', animated: true },
  { id: '4-7', source: '4', target: '7', animated: true },
  { id: '5-7', source: '5', target: '7', animated: true },
  { id: '6-8', source: '6', target: '8', animated: true },
  { id: '7-8', source: '7', target: '8', animated: true },
  { id: '8-9', source: '8', target: '9', animated: true },
  { id: '8-10', source: '8', target: '10', animated: true },
];

export default function Roadmap() {
  const { setSelectedNode } = useStore();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Handle node click
  const onNodeClick = useCallback(
    (event: React.MouseEvent, node: any) => {
      console.log('Node clicked:', node.data.title);

      // Set the selected node in the store
      setSelectedNode({
        id: node.id,
        title: node.data.title,
        color: node.data.color,
        type: node.type,
        details: {
          // info: node.data.info,
        },
      });
    },
    [setSelectedNode]
  );

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        proOptions={{ hideAttribution: true }}
        fitView>
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
