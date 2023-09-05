import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Backplate from "./Products/Backplate";
import HBRing from "./Products/HBRing";
import Humbucker from "./Products/Humbucker";
import Knobs from "./Products/Knobs";
import Metalpieces from "./Products/Metalpieces";
import Pickguard from "./Products/Pickguard";
import SingleMetal from "./Products/SingleMetal";
import SinglePlastic from "./Products/SinglePlastic";

function Product({ item, activeItem }){


useEffect(() => {

},[])

  return (
    <>
      <Canvas camera={{
        fov: 30,
        position:[0,2,5]
      }}>
        {item === activeItem &&(

          <OrbitControls/>
        )}
   <ambientLight intensity={0.5}/>
   <Environment files="colorful_studio_2k.hdr" background blur={1}/>
      { item === 'Humbucker' &&
       ( <Humbucker key={item.id} />)
        } 
        {
        item === 'pickup_ring'&&
       ( <HBRing key={item.id} />)
        } 
        {
        item === 'backplate'&&
       ( <Backplate key={item.id} />)
        } 
        {
        item === 'single_plastic'&&
       ( <SinglePlastic key={item.id} />)
        }
        {
         item === 'single_metal'&&
       ( <SingleMetal key={item.id} />)
        } 
        {
        item === 'knobs'&&
       ( <Knobs key={item.id} />)
        } 
        {
        item === 'pickguard'&& 
       ( <Pickguard key={item.id} />)
        }
        {
         item === 'metal_pieces'&&
       ( <Metalpieces key={item.id} />)
        }
        
      

      </Canvas>
    </>
  );
}

export default Product;
