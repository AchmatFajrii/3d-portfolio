import React from "react";

import planeScane from "../assets/3d/plane.glb";
import { useGLTF } from "@react-three/drei";

const Plane = () => {
  const { scene, animations } = useGLTF(planeScane);
  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
