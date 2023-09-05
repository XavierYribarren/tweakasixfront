

    import React, { useRef } from "react";
    import { useGLTF } from "@react-three/drei";
    
   function Backplate() {
      const { nodes, materials } = useGLTF("/products/product-backplate.glb");
      return (
        <group  dispose={null}>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["backplate.001"]}
      />
        </group>
      );
    }
    
    useGLTF.preload("/product-backplate.glb");
export default Backplate