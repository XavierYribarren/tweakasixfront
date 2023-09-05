import React from 'react'
import { Tooltip } from "primereact/tooltip";
import { SelectButton } from "primereact/selectbutton";
import { Slider } from "primereact/slider";
import { addColor } from '../../features/ColorReducer';

import "./CustomPrimereact.css";
import { useDispatch } from 'react-redux';

function Sliders({ colorList, setColorList, clickedPart }) {

  const dispatch = useDispatch()
  return (
   <><div className="gloss">
    Gloss finish
    <Tooltip
      target=".slider-gloss>.p-slider-handle"
      content={`${colorList.gloss}%`}
      position="top"
      event="focus"
    />
    <Slider
      className="slider-gloss"
      tooltip="gloss finish"
      tooltipoptions={{
        position: "bottom",
        mouseTrack: true,
        mouseTrackTop: 15,
      }}
      value={colorList.gloss}
      onChange={(e) => setColorList({ ...colorList, gloss: e.value })}
      onPointerUp={() => dispatch(addColor(colorList))}
      min={0}
      max={100}
    />
  </div>
  <div className="scratch">
    Scratched varnish
    <Tooltip
      target=".slider-scratch>.p-slider-handle"
      content={`${colorList.scratch}%`}
      position="top"
      event="focus"
    />
    <Slider
      className="slider-scratch"
      tooltip="scratch"
      tooltipoptions={{
        position: "bottom",
        mouseTrack: true,
        mouseTrackTop: 15,
      }}
      value={colorList.scratch}
      onChange={(e) => setColorList({ ...colorList, scratch: e.value })}
      onPointerUp={() => dispatch(addColor(colorList))}
      min={0}
      max={20}
      step={0.2}
    /></div>
     <div className="wood">
    Wood
    <Tooltip
      target=".slider-wood>.p-slider-handle"
      content={`${colorList.wood}%`}
      position="top"
      event="focus"
    />
    <Slider
      className="slider-wood"
      tooltip="wood"
      tooltipoptions={{
        position: "bottom",
        mouseTrack: true,
        mouseTrackTop: 15,
      }}
      defaultValue={0}
      value={colorList.wood}
      onChange={(e) => setColorList({ ...colorList, wood: e.value })}
      onPointerUp={() => dispatch(addColor(colorList))}
      min={0}
      max={20}
      step={0.2}
    /></div>
    </>
  )
}

export default Sliders