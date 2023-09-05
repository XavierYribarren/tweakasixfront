/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import * as THREE from 'three'
import {motion} from 'framer-motion-3d'

function Cone({position, size, coneCol, offsetx, offsety, offsetz}) {
  return (
<>
<motion.mesh position={position} castShadow
 animate={{
  scale: [1, .8,.85, .3,.5, .86,.9,1],
  rotateX: [0,0, Math.random()*offsetx/8,Math.random()*offsetx/6,Math.random()*offsetx/7, 0,0,0],
  rotateY: [0,0,0, Math.random()*3,0,0, 0,0],
  rotateZ: [0,0, Math.random()*offsetz/4,Math.random()*offsetz/10,Math.random()*offsetz/10, 0,0,0],
  x : [0,offsetx*Math.random(),2*offsetx*Math.random(),-0.5*offsetx*Math.random(), 0,0,0],
  y : [],
  z : [0,offsetz*Math.random(),2*offsetz*Math.random(),-2*offsetz*Math.random(), 0,0,0,0]
}}
transition={{
  // type:"spring",
  duration:5 + (Math.random()*0.5),
  ease: "easeInOut",
  times: [0,0.08, 0.16, 0.25, 0.3, 0.5, 0.9, 1],
  repeat: Infinity,
  repeatDelay: 0}}
>

<cylinderGeometry args={size} receiveShadow />
<meshStandardMaterial color={coneCol} side={THREE.FrontSide} roughness={.7} />
</motion.mesh>
</>
  )
}

export default Cone