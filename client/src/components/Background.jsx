import { Backdrop } from '@react-three/drei'
import React from 'react'

function Background() {
  return (
   <>
 <Backdrop scale={[50, 10, 10]} floor={1.5} position={[0, -1.6, -2]}>

<meshStandardMaterial color="#efefef" />
  </Backdrop></>
  )
}

export default Background