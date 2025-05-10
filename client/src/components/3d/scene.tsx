// 'use client';
// import React from 'react';
// import Scene from '@/components/3d/scene';
// import { Canvas } from '@react-three/fiber';

// const SceneWrap = () => {
//   return (
//     <Canvas style={{ backgroundColor: 'black', height: '100vh' }} shadows>
//       <Scene />
//     </Canvas>
//   );
// };

// export default SceneWrap;

'use client';

import { Viewport } from 'next';

import { Canvas } from '@react-three/fiber';
import { Door } from '@/components/3d/door';
import { DoorTwo } from '@/components/3d/door_two';
import { CameraControls } from '@react-three/drei';

export default function Scene() {
  return (
    <div className='z-[-10] top-0 w-full h-screen'>
      <Canvas>
        {/* <axesHelper args={[5]} /> */}
        <CameraControls makeDefault />
        <ambientLight intensity={1} />
        {/* <Door /> */}
        <DoorTwo />
        <directionalLight position={[0, 0, 5]} color='white' />
      </Canvas>
    </div>
  );
}
