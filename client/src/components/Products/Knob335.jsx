import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

function Knob335() {
  const { nodes, materials } = useGLTF("/products/product-knob.glb");

  return (
    <>
      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials["knobs.001"]}
        />
      </group>
    </>
  );
}

useGLTF.preload("/products/product-knob.glb");

export default Knob335;
