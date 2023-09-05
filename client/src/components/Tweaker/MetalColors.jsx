import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import "../css/Visualizer.css";
import { useDispatch, useSelector } from "react-redux";
import { addColor } from "../../features/ColorReducer";
import { ColorPicker } from "primereact/colorpicker";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import Sliders from "./Sliders";
import "./Choice-CustomPrimereact.css";
import silverIcon from "../../assets/img/Silver.jpg";
import goldIcon from "../../assets/img/Gold.jpg";
import copperIcon from "../../assets/img/Copper.jpg";

function MetalColors({
  colorList,
  setColorList,
  clickedPart,
  setPickupCover,
  setMetalType,
  pickupCover,
 metalType
}) {
  const dispatch = useDispatch();
  const metals = [
    { name: "Silver", value: "#d0cbc4", icon: silverIcon },
    { name: "Gold", value: "#caa449", icon: goldIcon },
    { name: "Copper", value: "#c07a50", icon: copperIcon },
  ];

  const handlePickups = (e) => {
    const selectedMetal = metals.find(
      (metals) => metals.name === e.target.name
    );

    if(selectedMetal !== pickupCover.name.toLowerCase()){
       setPickupCover(selectedMetal);
     
    }
  };

  const handleMetalSelect = (e) => {
    const selectedMetal = metals.find(
      (metals) => metals.name === e.target.name
    );
    if(selectedMetal !== metalType.name.toLowerCase()){

      setMetalType(selectedMetal);
     
    }
  };



  useEffect(() =>{  
 setColorList({ ...colorList, metal_pieces: metalType.value });
      dispatch(addColor(colorList));
  },[metalType])

  useEffect(() =>{  
    setColorList({ ...colorList, pickup_cover: pickupCover.value });
  dispatch(addColor(colorList));

},[ pickupCover])
  const op1 = useRef(null);
  const op2 = useRef(null);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexGrow: 0.2,
      }}
    >
      {" "}
      <div>
        <Button
          type="button"
          className="p-colorpicker-preview main-metal-button"
          onClick={(e) => op1.current.toggle(e)}
          tooltip="Pickup cover"
          tooltipoptions={{
            position: "bottom",
            mouseTrack: true,
            mouseTrackTop: 15,
            event: "hover",
          }}
        >
          {" "}
          <img
            className="metalIcons"
            src={pickupCover.icon}
            sizes="30px 30px"
          ></img>
        </Button>
        <OverlayPanel ref={op1} showCloseIcon id="metalIcons-parent">
          <Button
            tooltip="Silver"
            tooltipoptions={{
              position: "bottom",
              mouseTrack: true,
              mouseTrackTop: 15,
              event: "hover",
            }}
            onClick={(e) => handlePickups(e)}
          >
            <img
              name="Silver"
              className="metalIcons"
              src={silverIcon}
              sizes="32px 32px"
            ></img>
          </Button>
          <Button
            tooltip="Gold"
            tooltipoptions={{
              position: "bottom",
              mouseTrack: true,
              mouseTrackTop: 15,
              event: "hover",
            }}
            onClick={(e) => handlePickups(e)}
          >
            <img
              name="Gold"
              className="metalIcons"
              src={goldIcon}
              sizes="32px 32px"
            ></img>
          </Button>
          <Button
            tooltip="Copper"
            tooltipoptions={{
              position: "bottom",
              mouseTrack: true,
              mouseTrackTop: 15,
              event: "hover",
            }}
            onClick={(e) => handlePickups(e)}
          >
            <img
              name="Copper"
              className="metalIcons"
              src={copperIcon}
              sizes="32px 32px"
            ></img>
          </Button>
        </OverlayPanel>
      </div>
      <div>
        <Button
          tooltip="Metallic pieces"
          type="button"
          className="p-colorpicker-preview main-metal-button"
          onClick={(e) => op2.current.toggle(e)}
        >
          {" "}
          <img
            className="metalIcons"
            src={metalType.icon}
            sizes="30px 30px"
          ></img>
        </Button>
        <OverlayPanel ref={op2} showCloseIcon id="metalIcons-parent">
          <Button
            tooltip="Silver"
            tooltipoptions={{
              position: "bottom",
              mouseTrack: true,
              mouseTrackTop: 15,
              event: "hover",
            }}
            onClick={(e) => handleMetalSelect(e)}
          >
            <img
              name="Silver"
              className="metalIcons"
              src={silverIcon}
              sizes="32px 32px"
            ></img>
          </Button>
          <Button
            tooltip="Gold"
            tooltipoptions={{
              position: "bottom",
              mouseTrack: true,
              mouseTrackTop: 15,
              event: "hover",
            }}
            onClick={(e) => handleMetalSelect(e)}
          >
            <img
              name="Gold"
              className="metalIcons"
              src={goldIcon}
              sizes="32px 32px"
            ></img>
          </Button>
          <Button
            tooltip="Copper"
            tooltipoptions={{
              position: "bottom",
              mouseTrack: true,
              mouseTrackTop: 15,
              event: "hover",
            }}
            onClick={(e) => handleMetalSelect(e)}
          >
            <img
              name="Copper"
              className="metalIcons"
              src={copperIcon}
              sizes="32px 32px"
            ></img>
          </Button>
        </OverlayPanel>
      </div>
    </div>
  );
}

export default MetalColors;
