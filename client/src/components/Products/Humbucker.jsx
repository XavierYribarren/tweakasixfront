import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three'
function Humbucker() {

  const { nodes, materials } = useGLTF("/products/product-humbucker.glb");

materials.brass = new THREE.MeshStandardMaterial({ color : "#746106", metalness: 1, roughness:0.1})
materials.hbcover = new THREE.MeshStandardMaterial({ color : "#c5a04e", metalness: 1, roughness:0.1})

  return (
    <group dispose={null}>
     <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.wireplastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve006.geometry}
        material={materials.wireplastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve007.geometry}
        material={materials.wireplastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup_screws.geometry}
        material={materials.hbcover}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["ply-base-plate001"].geometry}
        material={materials.brass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve005.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pickup_cover.geometry}
        material={materials.hbcover}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screw.geometry}
        material={materials.brass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve008.geometry}
        material={materials.wireplastic}
      />
    </group>
  );
}

useGLTF.preload("/product-humbucker.glb");

export default Humbucker;
