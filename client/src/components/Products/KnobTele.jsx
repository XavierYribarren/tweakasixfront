import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

function KnobTele() {
  const { nodes, materials } = useGLTF("/products/product-knobTele.glb");
  return (
    <>
      <group dispose={null} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.knobs003.geometry}
          material={materials["metalpieces.007"]}
        />
      </group>
    </>
  );
}

useGLTF.preload("/products/product-knobTele.glb");

export default KnobTele;
