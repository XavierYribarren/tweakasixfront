
    import React, { useRef } from "react";
    import { useGLTF } from "@react-three/drei";
    
    function SingleMetal() {
      const { nodes, materials } = useGLTF("/products/product-singlemetal.glb");
      return (
        <group  dispose={null}>
             <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve020.geometry}
        material={materials["wireplastic.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve021.geometry}
        material={materials["wireplastic.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve022.geometry}
        material={materials["wireplastic.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials["metalpieces.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["26e7b720-5b71-4937-a8d6-8a7c0a176ab9_1"].geometry}
        material={materials["metalpieces.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["26e7b720-5b71-4937-a8d6-8a7c0a176ab9_2"].geometry}
        material={materials["plastic.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.springs.geometry}
        material={materials["metalpieces.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["metalpieces.006"]}
      />
        </group>
      );
    }
    
    useGLTF.preload("/product-singlemetal.glb");
    

export default SingleMetal