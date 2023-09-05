

    import React, { useRef } from "react";
    import { useGLTF } from "@react-three/drei";
    
  function SinglePlastic() {
      const { nodes, materials } = useGLTF("/products/product-singleplastic.glb");
      return (
        <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.polepieces}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.pickupplastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.polepieces}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve016.geometry}
        material={nodes.BezierCurve016.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve012.geometry}
        material={materials["plastic.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve014.geometry}
        material={materials["plastic.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeleBridgeRoutingTemplate.geometry}
        material={materials["plastic.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeleBridgeRoutingTemplate001.geometry}
        material={nodes.TeleBridgeRoutingTemplate001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SocleB.geometry}
        material={nodes.SocleB.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TopB.geometry}
        material={materials.pickupplastic}
      />
    </group>
      );
    }
    
    useGLTF.preload("/product-singleplastic.glb");
export default SinglePlastic