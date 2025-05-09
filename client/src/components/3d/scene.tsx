'use client';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import { Door } from '@/components/3d/door';
import { useScroll, useTransform } from 'motion/react';

const Scene: React.FC = () => {
  // const { camera } = useThree();
  // const { scrollYProgress } = useScroll();

  // const interpolate = (n: number): number[] =>
  //   Array.from({ length: n + 1 }, (_, i) => i / n);

  // const px = useTransform(
  //   scrollYProgress,
  //   interpolate(17),
  //   [3, 6, -5, -8, 0, 2, 4, -3, 0, 3, 6, -5, -8, 0, 2, 4, -3, 4]
  // );

  // const py = useTransform(
  //   scrollYProgress,
  //   interpolate(17),
  //   [5, 8, 5, 0, -5, -3, 6, 7, 0, 5, 8, 5, 0, -5, -3, 6, 7, 0]
  // );

  // const pz = useTransform(
  //   scrollYProgress,
  //   interpolate(17),
  //   [0, 2, 0, -3, 0, 4, 2, 1, 0, 0, 2, 0, -3, 0, 4, 2, 1, 0]
  // );

  // const Lookx = useTransform(
  //   scrollYProgress,
  //   interpolate(17),
  //   [
  //     0, 0.5, 0, -0.5, -0.8, 0.3, 0, -0.4, 0, 0, 0.5, 0, -0.5, -0.8, 0.3, 0,
  //     -0.4, 0,
  //   ]
  // );

  // const Looky = useTransform(
  //   scrollYProgress,
  //   interpolate(17),
  //   [0, 0.2, 0.5, 0, 0, -0.5, 0.3, 0.7, 0, 0, 0.2, 0.5, 0, 0, -0.5, 0.3, 0.7, 0]
  // );

  // const Lookz = useTransform(
  //   scrollYProgress,
  //   interpolate(17),
  //   [
  //     0, 0, 0.3, -0.2, 0, 0.4, 0.1, -0.3, 0, 0, 0, 0.3, -0.2, 0, 0.4, 0.1, -0.3,
  //     0,
  //   ]
  // );

  // const cameraRoll = useTransform(
  //   scrollYProgress,
  //   interpolate(17),
  //   [
  //     0, 0.1, 0, -0.2, 0.15, 0, -0.1, 0.05, 0, 0, 0.1, 0, -0.2, 0.15, 0, -0.1,
  //     0.05, 0,
  //   ]
  // );

  // useFrame(() => {
  //   const xPos = px.get();
  //   const yPos = py.get();
  //   const zPos = pz.get();
  //   const xLook = Lookx.get();
  //   const yLook = Looky.get();
  //   const zLook = Lookz.get();
  //   const roll = cameraRoll.get();

  //   camera.position.set(xPos, zPos, yPos);

  //   camera.lookAt(xLook, zLook, yLook);
  //   camera.rotation.z = roll;
  // });

  // const [showMars, setShowMars] = useState(false);

  // useEffect(() => {
  //   const unsubscribe = scrollYProgress.onChange((value) => {
  //     if (value > 0.47228181099695155) {
  //       setShowMars(true);
  //     } else {
  //       setShowMars(false);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [scrollYProgress]);

  return (
    <>
      {/* <axesHelper args={[100]} /> */}
      <PerspectiveCamera makeDefault fov={window.innerWidth < 768 ? 40 : 20} />
      <Environment preset='city' environmentIntensity={0.2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />
      <directionalLight
        position={[-5, 5, -5]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />

      <Door castShadow receiveShadow />

      <ambientLight intensity={0.1} />
    </>
  );
};

export default Scene;
