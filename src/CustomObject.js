import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const CustomObject = () => {
  const geometryRef = useRef();

  const verticesCount = 100 * 3;

  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3);
    for (let i = 0; i < verticesCount; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }
    return positions;
  }, []);

  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, []);

  return (
    <>
      <mesh>
        <bufferGeometry ref={geometryRef}>
          <bufferAttribute
            attach="attributes-position"
            count={verticesCount}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        <meshStandardMaterial color="blue" side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default CustomObject;
