

  import React, { useRef, useState } from "react";
  import { useGLTF } from "@react-three/drei";
import Metalpieces335 from "./Metalpieces335";
import MetalpiecesTele from "./MetalpiecesTele";
  
function Metalpieces() {

    // const { nodes, materials } = useGLTF("/products/product-metalpieces.glb", "/products/product-metalpiecesTele.glb");


    const [partModel, setPartModel] = useState("ES")



     
    return (
      <group dispose={null}>
      {partModel === "ES" ? (
        <Metalpieces335/>
      ): 
      partModel === "Tele" &&(
        <MetalpiecesTele/>
      )
      }
      </group>
    );
  }
  
  useGLTF.preload("/product-metalpieces.glb");
  

export default Metalpieces