

  import React, { useRef, useState } from "react";
  import { useGLTF } from "@react-three/drei";
  
function MetalpiecesTele() {

     const { nodes, materials } = useGLTF("/products/product-metalpiecesTele.glb") 

    return (
      <group dispose={null}>
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.selector002.geometry}
        material={materials["plastic.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.selector_arm001.geometry}
        material={materials["metalpieces.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.selector_plate001.geometry}
        material={materials["metalpieces.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.selectscrews003.geometry}
        material={materials["metalpieces.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tailscrews002.geometry}
        material={materials["metalpieces.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mechs002.geometry}
        material={materials["metalpieces.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tailpiece001.geometry}
        material={materials["metalpieces.003"]}
      />
      </group>
    );
  }
  
  useGLTF.preload("/product-metalpiecesTele.glb");
  

export default MetalpiecesTele