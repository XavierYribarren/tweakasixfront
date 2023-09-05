/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

// import { Canvas } from '@react-three/fiber'
import {
  Backdrop,
  ContactShadows,
  OrbitControls,
  Stage,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cone from "./Cone";
import Base from "./Base";
import { Group } from "three";
import "./construction.css";

function Construction() {
  const coneOrange = "#ff8a00";

  return (
    <div className="cone-fullcanvas">
      <Canvas
        shadows={true}
        dpr={[1, 2]}
        camera={{ fov: 50, position: [0, 4, 12] }}
      >

          <directionalLight
            position={[5, 5, 6]}
            lookAt={[0, 3, 0]}
            intensity={2}
            castShadow
          />
          <ambientLight intensity={0.2} />
          <OrbitControls position0={[0, 4, 3]} maxPolarAngle={Math.PI*0.5}/>
          <group position={[0, 1.9, 0]} scale={0.1}>
            <Cone
              size={[2, 4, 10, 25]}
              position={[0, 10, 0, 32, 1, true]}
              coneCol={coneOrange}
              offsetx={20}
              offsety={20}
              offsetz={20}
            />
            <Cone
              size={[4, 5, 5, 25]}
              position={[0, 3, 0]}
              coneCol={"#ffffff"}
              offsetx={30}
              offsety={30}
              offsetz={30}
            />
            <Cone
              size={[5, 7, 10, 25]}
              position={[0, -4, 0]}
              coneCol={coneOrange}
              offsetx={30}
              offsety={35}
              offsetz={-35}
            />
            <Cone
              size={[7, 8, 5, 25]}
              position={[0, -11, 0]}
              coneCol={"#ffffff"}
              offsetx={-18}
              offsety={22}
              offsetz={24}
            />
            <Cone
              size={[8, 11, 15, 25]}
              position={[0, -21, 0]}
              coneCol={coneOrange}
              offsetx={28}
              offsety={13}
              offsetz={33}
            />
            <Base position={[0, -30, 0]} coneCol={coneOrange} />
          </group>
          <fog attach="fog" args={["#fbb9e8", 20, 70]} />

          <Ground />
     
      </Canvas>
    </div>
  );
}

export function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
      <circleGeometry args={[100, 100]} />
      <meshPhongMaterial color={"#f98ade"} />
    </mesh>
  );
}

export default Construction;
