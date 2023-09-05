
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function HBRing() {
  const { nodes, materials } = useGLTF("/products/product-HBring.glb");
  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup_mounting_ring.geometry}
        material={materials["plastic.005"]}
      />
    </group>
  );
}

useGLTF.preload("/product-HBring.glb");


export default HBRing