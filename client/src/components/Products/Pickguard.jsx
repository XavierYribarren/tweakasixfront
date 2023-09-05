

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Pickguard(){
  const { nodes, materials } = useGLTF("/products/product-pickguard.glb");
  return (
    <group  dispose={null}>
           <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickguard001.geometry}
        material={materials["plastic.002"]}
      />
    </group>
  );
}

useGLTF.preload("/product-pickguard.glb");


export default Pickguard