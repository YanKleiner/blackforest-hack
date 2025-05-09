'use client';
import React from 'react';
import Scene from '@/components/3d/scene';
import { Canvas } from '@react-three/fiber';

const SceneWrap = () => {
  return (
    <Canvas style={{ backgroundColor: 'white' }} shadows>
      <Scene />
    </Canvas>
  );
};

export default SceneWrap;
