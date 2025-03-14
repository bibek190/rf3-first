import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import "./style.css";
import ReactDOM from "react-dom/client";
import * as THREE from "three";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <Canvas
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      camera={{
        fov: 70,
        near: 0.1,
        far: 200,
        positions: [3, 2, 6],
      }}
    >
      <Experience />
    </Canvas>
  </>
);
