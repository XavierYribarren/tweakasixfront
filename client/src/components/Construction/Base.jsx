/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import * as THREE from 'three'
import { RoundedBox } from '@react-three/drei'
import {motion} from 'framer-motion-3d'

function Base({coneCol, position}) {
  return (
<>
<motion.mesh position={position} 
 animate={{
  scale: [1,1],
  rotateX: [0,0, 0,0,0,0],
  rotateY: [0,0,0, Math.random()*3,0,0, Math.PI*1.5,0],
  rotateZ: [0,0, 0,0,0],
  x : [0, 34,-24,-20,0,0,0],
  y : [],
  z : [0, 5,-7,0,0,0,0,0]
}}
transition={{
  // type:"spring",
  duration:5 + (Math.random()*0.5),
  ease: "easeInOut",
  times: [0,0.08, 0.16, 0.25, 0.3, 0.5, 0.9, 1],
  repeat: Infinity,
  repeatDelay: 0}}>
  <RoundedBox  args={[30,2,30]} radius={1} smoothness={3} receiveShadow>
  <meshStandardMaterial color={coneCol}  roughness={.7} shadowSide={THREE.DoubleSide}/>
</RoundedBox>
</motion.mesh>
</>
  )
}

export default Base