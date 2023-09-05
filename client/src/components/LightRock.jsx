import {
  Cloud,
  MeshReflectorMaterial,
  Sparkles,
  SpotLight,
  Stars,
  Effects,
  Environment
} from "@react-three/drei";
import { extend } from "@react-three/fiber";
import React, { useContext, useRef } from "react";
import { ThemeContext } from "../App";
import * as THREE from "three";
import { BlurPass, Resizer, KernelSize } from "postprocessing";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  SelectiveBloom,
  Vignette, 
} from "@react-three/postprocessing";
import{ UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import PostProc from "./PostProc";
extend({ UnrealBloomPass })
function LightRock() {
  const torusRef = useRef();

  const themeContext = useContext(ThemeContext);
  const theme = themeContext.theme;

  const sparkleMat = new THREE.MeshLambertMaterial({
    color: "white",
    emissive: "white",
  });

  // const { focusDistance, focalLength, bokehScale } = useContr({
  //     focusDistance: {
  //       min: 0,
  //       max: 4,
  //       value: 2
  //     },
  //     focalLength: {
  //       min: 0,
  //       max: 1,
  //       value: 0.1
  //     },
  //     bokehScale: {
  //       min: 0,
  //       max: 10,
  //       value: 2
  //     }
  //   });
  const glowRed = new THREE.MeshBasicMaterial({ color: new THREE.Color(2, 1.5, 1.5), toneMapped: false })

  return (
    <>

      <SpotLight
        castShadow
        distance={5}
        color={"#fff5ff"}
        intensity={10}
        angle={0.65}
        penumbra={0.2}
        position={[0, 3, -0.5]}
        attenuation={4}
        anglePower={5}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
      />
       <Environment   files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']} blur={2} />

      <mesh
        ref={torusRef}
        position={[0, -1.3, 0]}
        rotation={[-Math.PI * 0.5, 0, 0]}
        material={glowRed}
      >
        <torusGeometry args={[2, 0.06, 16, 100]} />
        {/* <meshBasicMaterial
          color={"#ff0000"}
          toneMapped={false}
          // emissive={"#ffc5ff"}
          // emissiveIntensity={12}
        /> */}
      </mesh>

      <mesh position={[0, -1.4, 0]} rotation={[-Math.PI * 0.5, 0, 0]}>
        <circleGeometry args={[10, 10]} />
        {/* <meshLambertMaterial color={"#000"} /> */}
        <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#202020"
            metalness={0.8}
          />
      </mesh>

      <fog attach="fog" args={['#282828', 5, 15]}/>
      <color attach="background" args={['#242424']} />




      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </>
  );
}

export default LightRock;
