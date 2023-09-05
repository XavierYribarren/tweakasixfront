import React, { useEffect, useState } from "react";
import logo from "../assets/img/tweakasix.png";
import plank from "../assets/img/plankHorNoShadow-min.png";
import axios from "axios";
import "./css/Home.css";
import Selector from "./Selector";
import { useDispatch, useSelector } from "react-redux";
import { addColor } from "../features/ColorReducer";
import Navbar from "./Navbar";




function Home() {

  const dispatch = useDispatch();

  return (
    <>
      <Selector />
      <>
      <div className="title-overlay">
        <div className="home">
          <h1>
            
            Welcome <br /> <span className="to">to</span>
          </h1>
        </div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="concept">
        <div className="concept-prediv"></div>
        <div className="steps">
          <h1 className="concept-title">THE CONCEPT</h1>

          <div className="concept-step1">
            <span id="step-1">1</span>

            <div>
          
              Select a model, select the colors, the metal types*, the
              varnish... and you can even download the blueprint, make a design,
              and upload it! 
              <br/>
              Tweak that six the way you want, it's going to be
              yours!
            </div>
          </div>
          <div className="concept-step2">
            <span id="step-2">2</span>

            <div>
          
              Pick a partner guitar maker, calculate shipping costs, launch the
              production!
            </div>
          </div>
          <div className="concept-step3">
            <span id="step-3">3</span>

            <div>
          
              Do your best to be patient while we work hard on it and look
              closely every detail.<br/>
               We'll send you a status update between every
              major step!
            </div>
          </div>
          <div className="concept-step4">
            <span id="step-4">4</span>

            <div> Unpack it, be happy, play it and fall in love !</div>
          </div>
        </div>
      </div>
      </>
    </>
  );
}

export default Home;
