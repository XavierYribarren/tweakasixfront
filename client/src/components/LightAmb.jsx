import { Environment } from '@react-three/drei'
import React, { useContext } from 'react'
import { ThemeContext } from '../App'

function LightAmb() {


  const themeContext = useContext(ThemeContext)
  const theme = themeContext.theme

  return (
    <>
            <Environment files="/decor_shop_2k.hdr" blur={2} />
        <ambientLight intensity={0.4} />
    <directionalLight
      castShadow
      intensity={3}
      position={[0, 5, 0.5]}
      lookAt={[0, 0, 0]}
      shadow-mapSize-height={2048}
      shadow-mapSize-width={2048}
     
      />

      </>
  )
}

export default LightAmb