import { useFrame, extend, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { MeshStandardMaterial, TetrahedronGeometry } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CustomObject from "./CustomObject";
import * as THREE from "three";

extend({ OrbitControls });

const Experience = () => {
  const three = useThree();
  const { camera, gl } = three;

  const cubeRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta * 0.8;
    // rotate camera
    const angle = state.clock.elapsedTime * 0.5;
    state.camera.position.x = Math.sin(angle) * 5;
    state.camera.position.z = Math.cos(angle) * 5;
    state.camera.lookAt(0, 0, 0);
  });
  return (
    <>
      {/* <orbitControls args={[camera, gl.domElement]} /> */}
      <directionalLight position={[1, 2, 3]} />
      <ambientLight intensity={0.4} />
      <group>
        <mesh
          rotation-y={Math.PI * 0.25}
          position-x={1}
          scale={0.75}
          ref={cubeRef}
        >
          <boxGeometry />
          <meshStandardMaterial color="purple" />
        </mesh>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </group>
      <mesh scale={8} rotation-x={-Math.PI * 0.5} position-y={-1}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" side={THREE.DoubleSide} />
      </mesh>

      {/* Custom Obj */}
      <CustomObject />
    </>
  );
};

export default Experience;
