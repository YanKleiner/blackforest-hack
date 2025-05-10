import * as THREE from 'three';
import React, { useRef } from 'react';
import { Center, useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    mesh0_mesh: THREE.Mesh;
    mesh0_mesh_1: THREE.Mesh;
    mesh0_mesh_2: THREE.Mesh;
    mesh0_mesh_3: THREE.Mesh;
    mesh0_mesh_4: THREE.Mesh;
    mesh0_mesh_5: THREE.Mesh;
    mesh0_mesh_6: THREE.Mesh;
    mesh0_mesh_7: THREE.Mesh;
    mesh0_mesh_8: THREE.Mesh;
    mesh0_mesh_9: THREE.Mesh;
    mesh0_mesh_10: THREE.Mesh;
    mesh0_mesh_11: THREE.Mesh;
    mesh0_mesh_12: THREE.Mesh;
    mesh0_mesh_13: THREE.Mesh;
    mesh0_mesh_14: THREE.Mesh;
    mesh0_mesh_15: THREE.Mesh;
    mesh0_mesh_16: THREE.Mesh;
    mesh0_mesh_17: THREE.Mesh;
    mesh0_mesh_18: THREE.Mesh;
    mesh0_mesh_19: THREE.Mesh;
    mesh0_mesh_20: THREE.Mesh;
    mesh0_mesh_21: THREE.Mesh;
    mesh0_mesh_22: THREE.Mesh;
    mesh0_mesh_23: THREE.Mesh;
    mesh0_mesh_24: THREE.Mesh;
    mesh0_mesh_25: THREE.Mesh;
    mesh0_mesh_26: THREE.Mesh;
    mesh0_mesh_27: THREE.Mesh;
    mesh0_mesh_28: THREE.Mesh;
    mesh0_mesh_29: THREE.Mesh;
    mesh0_mesh_30: THREE.Mesh;
    mesh0_mesh_31: THREE.Mesh;
    mesh0_mesh_32: THREE.Mesh;
    mesh0_mesh_33: THREE.Mesh;
    mesh0_mesh_34: THREE.Mesh;
    mesh0_mesh_35: THREE.Mesh;
    mesh0_mesh_36: THREE.Mesh;
    mesh0_mesh_37: THREE.Mesh;
    mesh0_mesh_38: THREE.Mesh;
    mesh0_mesh_39: THREE.Mesh;
    mesh0_mesh_40: THREE.Mesh;
    mesh0_mesh_41: THREE.Mesh;
    mesh0_mesh_42: THREE.Mesh;
    mesh0_mesh_43: THREE.Mesh;
    mesh0_mesh_44: THREE.Mesh;
    mesh0_mesh_45: THREE.Mesh;
    mesh0_mesh_46: THREE.Mesh;
    mesh0_mesh_47: THREE.Mesh;
    mesh0_mesh_48: THREE.Mesh;
    mesh0_mesh_49: THREE.Mesh;
    mesh50_mesh: THREE.Mesh;
    mesh50_mesh_1: THREE.Mesh;
    mesh50_mesh_2: THREE.Mesh;
    mesh50_mesh_3: THREE.Mesh;
    mesh50_mesh_4: THREE.Mesh;
    mesh50_mesh_5: THREE.Mesh;
    mesh50_mesh_6: THREE.Mesh;
    mesh50_mesh_7: THREE.Mesh;
    mesh50_mesh_8: THREE.Mesh;
    mesh50_mesh_9: THREE.Mesh;
    mesh50_mesh_10: THREE.Mesh;
    mesh50_mesh_11: THREE.Mesh;
    mesh50_mesh_12: THREE.Mesh;
    mesh50_mesh_13: THREE.Mesh;
    mesh50_mesh_14: THREE.Mesh;
    mesh50_mesh_15: THREE.Mesh;
    mesh50_mesh_16: THREE.Mesh;
    mesh50_mesh_17: THREE.Mesh;
    mesh50_mesh_18: THREE.Mesh;
    mesh50_mesh_19: THREE.Mesh;
    mesh50_mesh_20: THREE.Mesh;
    mesh50_mesh_21: THREE.Mesh;
    mesh50_mesh_22: THREE.Mesh;
    mesh50_mesh_23: THREE.Mesh;
    mesh50_mesh_24: THREE.Mesh;
    mesh50_mesh_25: THREE.Mesh;
    mesh50_mesh_26: THREE.Mesh;
    mesh50_mesh_27: THREE.Mesh;
    mesh50_mesh_28: THREE.Mesh;
    mesh50_mesh_29: THREE.Mesh;
    mesh50_mesh_30: THREE.Mesh;
    mesh50_mesh_31: THREE.Mesh;
    mesh50_mesh_32: THREE.Mesh;
    mesh50_mesh_33: THREE.Mesh;
    mesh50_mesh_34: THREE.Mesh;
    mesh50_mesh_35: THREE.Mesh;
    mesh50_mesh_36: THREE.Mesh;
    mesh50_mesh_37: THREE.Mesh;
    mesh50_mesh_38: THREE.Mesh;
    mesh50_mesh_39: THREE.Mesh;
    mesh50_mesh_40: THREE.Mesh;
    mesh50_mesh_41: THREE.Mesh;
    mesh50_mesh_42: THREE.Mesh;
    mesh50_mesh_43: THREE.Mesh;
    mesh50_mesh_44: THREE.Mesh;
    mesh50_mesh_45: THREE.Mesh;
    mesh50_mesh_46: THREE.Mesh;
    mesh50_mesh_47: THREE.Mesh;
    mesh50_mesh_48: THREE.Mesh;
    mesh50_mesh_49: THREE.Mesh;
    mesh50_mesh_50: THREE.Mesh;
    mesh50_mesh_51: THREE.Mesh;
    mesh50_mesh_52: THREE.Mesh;
    mesh50_mesh_53: THREE.Mesh;
    mesh50_mesh_54: THREE.Mesh;
    mesh50_mesh_55: THREE.Mesh;
    mesh50_mesh_56: THREE.Mesh;
    mesh50_mesh_57: THREE.Mesh;
    mesh50_mesh_58: THREE.Mesh;
    mesh50_mesh_59: THREE.Mesh;
    mesh50_mesh_60: THREE.Mesh;
    mesh50_mesh_61: THREE.Mesh;
    mesh50_mesh_62: THREE.Mesh;
    mesh50_mesh_63: THREE.Mesh;
    mesh50_mesh_64: THREE.Mesh;
    mesh50_mesh_65: THREE.Mesh;
    mesh50_mesh_66: THREE.Mesh;
    mesh50_mesh_67: THREE.Mesh;
    mesh50_mesh_68: THREE.Mesh;
    mesh50_mesh_69: THREE.Mesh;
    mesh50_mesh_70: THREE.Mesh;
    mesh50_mesh_71: THREE.Mesh;
    mesh50_mesh_72: THREE.Mesh;
    mesh50_mesh_73: THREE.Mesh;
    mesh50_mesh_74: THREE.Mesh;
    mesh50_mesh_75: THREE.Mesh;
    mesh50_mesh_76: THREE.Mesh;
    mesh50_mesh_77: THREE.Mesh;
    mesh50_mesh_78: THREE.Mesh;
    mesh50_mesh_79: THREE.Mesh;
    mesh50_mesh_80: THREE.Mesh;
    mesh50_mesh_81: THREE.Mesh;
    mesh50_mesh_82: THREE.Mesh;
    mesh50_mesh_83: THREE.Mesh;
    mesh50_mesh_84: THREE.Mesh;
    mesh50_mesh_85: THREE.Mesh;
    mesh50_mesh_86: THREE.Mesh;
    mesh50_mesh_87: THREE.Mesh;
    mesh50_mesh_88: THREE.Mesh;
    mesh50_mesh_89: THREE.Mesh;
    mesh50_mesh_90: THREE.Mesh;
    mesh50_mesh_91: THREE.Mesh;
    mesh50_mesh_92: THREE.Mesh;
    mesh50_mesh_93: THREE.Mesh;
    mesh50_mesh_94: THREE.Mesh;
    mesh50_mesh_95: THREE.Mesh;
    mesh50_mesh_96: THREE.Mesh;
    mesh50_mesh_97: THREE.Mesh;
    mesh50_mesh_98: THREE.Mesh;
    mesh50_mesh_99: THREE.Mesh;
    mesh50_mesh_100: THREE.Mesh;
    mesh50_mesh_101: THREE.Mesh;
    mesh50_mesh_102: THREE.Mesh;
    mesh50_mesh_103: THREE.Mesh;
    mesh50_mesh_104: THREE.Mesh;
    mesh50_mesh_105: THREE.Mesh;
    mesh50_mesh_106: THREE.Mesh;
    mesh50_mesh_107: THREE.Mesh;
    mesh50_mesh_108: THREE.Mesh;
    mesh50_mesh_109: THREE.Mesh;
    mesh50_mesh_110: THREE.Mesh;
    mesh50_mesh_111: THREE.Mesh;
    mesh50_mesh_112: THREE.Mesh;
    mesh50_mesh_113: THREE.Mesh;
    mesh50_mesh_114: THREE.Mesh;
    mesh50_mesh_115: THREE.Mesh;
    mesh50_mesh_116: THREE.Mesh;
    mesh50_mesh_117: THREE.Mesh;
    mesh50_mesh_118: THREE.Mesh;
    mesh50_mesh_119: THREE.Mesh;
    mesh50_mesh_120: THREE.Mesh;
    mesh50_mesh_121: THREE.Mesh;
    mesh50_mesh_122: THREE.Mesh;
    mesh50_mesh_123: THREE.Mesh;
    mesh50_mesh_124: THREE.Mesh;
    mesh50_mesh_125: THREE.Mesh;
    mesh50_mesh_126: THREE.Mesh;
    mesh50_mesh_127: THREE.Mesh;
    mesh50_mesh_128: THREE.Mesh;
    mesh50_mesh_129: THREE.Mesh;
    mesh50_mesh_130: THREE.Mesh;
    mesh50_mesh_131: THREE.Mesh;
    mesh50_mesh_132: THREE.Mesh;
    mesh50_mesh_133: THREE.Mesh;
    mesh50_mesh_134: THREE.Mesh;
    mesh50_mesh_135: THREE.Mesh;
  };
  materials: {
    ['0.615686_0.811765_0.929412_0.000000_0.000000']: THREE.MeshStandardMaterial;
    ['0.647059_0.647059_0.647059_0.000000_0.000000']: THREE.MeshStandardMaterial;
  };
};

export function Door(props: React.JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/door/door.gltf') as GLTFResult;

  return (
    <Center
      scale={350}
      position={[0, 0, 0]}
      rotation={[Math.PI / 2, Math.PI, 0]}>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_1.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_2.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_3.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_4.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_5.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_6.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_7.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_8.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_9.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_10.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_11.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_12.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_13.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_14.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_15.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_16.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_17.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_18.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_19.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_20.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_21.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_22.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_23.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_24.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_25.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_26.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_27.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_28.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_29.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_30.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_31.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_32.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_33.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_34.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_35.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_36.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_37.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_38.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_39.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_40.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_41.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_42.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_43.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_44.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_45.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_46.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_47.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_48.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh0_mesh_49.geometry}
          material={materials['0.615686_0.811765_0.929412_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_1.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_2.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_3.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_4.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_5.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_6.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_7.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_8.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_9.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_10.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_11.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_12.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_13.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_14.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_15.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_16.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_17.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_18.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_19.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_20.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_21.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_22.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_23.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_24.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_25.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_26.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_27.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_28.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_29.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_30.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_31.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_32.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_33.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_34.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_35.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_36.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_37.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_38.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_39.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_40.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_41.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_42.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_43.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_44.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_45.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_46.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_47.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_48.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_49.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_50.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_51.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_52.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_53.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_54.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_55.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_56.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_57.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_58.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_59.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_60.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_61.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_62.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_63.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_64.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_65.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_66.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_67.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_68.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_69.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_70.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_71.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_72.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_73.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_74.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_75.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_76.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_77.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_78.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_79.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_80.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_81.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_82.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_83.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_84.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_85.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_86.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_87.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_88.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_89.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_90.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_91.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_92.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_93.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_94.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_95.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_96.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_97.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_98.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_99.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_100.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_101.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_102.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_103.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_104.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_105.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_106.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_107.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_108.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_109.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_110.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_111.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_112.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_113.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_114.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_115.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_116.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_117.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_118.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_119.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_120.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_121.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_122.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_123.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_124.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_125.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_126.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_127.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_128.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_129.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_130.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_131.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_132.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_133.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_134.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh50_mesh_135.geometry}
          material={materials['0.647059_0.647059_0.647059_0.000000_0.000000']}
        />
      </group>
    </Center>
  );
}

useGLTF.preload('/door/door.gltf');
