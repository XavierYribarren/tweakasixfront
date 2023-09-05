import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import Knob335 from "./Knob335";
import KnobTele from "./KnobTele";



function Knobs() {
  const [partModel, setPartModel] = useState("ES");

useEffect(() => {


}, [])
  return (
    <>
   
      <group dispose={null}>
        {partModel == "ES" ? (
      <Knob335/>
      ) :
       partModel == "Tele" && (
         <KnobTele/>
        )} 
      </group>
   
    </>
  );
}



export default Knobs;
