import { House } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import logo from "../assets/img/tweakasix.png";

import "./css/Navbar.css";

function Navbar() {
  const isHomePage = window.location.pathname == '/' || '';
  const [mobSize, setMobSize] = useState(false)
const [itemsQty, setItemsQty] = useState(0)
const cartItemsObj = useSelector((state) => state.cart_items.cartItems)

const cartSpare = Object.values(cartItemsObj).filter(item => item && item !== null);
  const cartGuitarsObj = useSelector((state) => state.cart_items.cartGuitars)

const cartGuitars = Object.values(cartGuitarsObj).filter(item => item && item !== null);
const toPascalCase = str => (str.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join(' ');

const cartItemsAll = cartSpare.concat(cartGuitarsObj);
  const cartItems = Object.values(cartItemsAll).filter(
    (item) => item && item !== null
    );

const getItemsQty = () => {
let qty = 0
for(let i = 0 ; i< cartItems.length; i++){
 qty += cartItems[i].qty
 setItemsQty(qty)
}

}

function getSize(){

  if (window.innerWidth < 1223){
    setMobSize(true)
  } else setMobSize(false)
}
window.addEventListener('resize', getSize);

useEffect(() => {
  getItemsQty()

},[cartItemsObj])

useEffect(() => {
getSize()
},[])

  return (
    <div className="navbar">
 {!mobSize && (
    <a href="/"><img src={logo} alt="logo" className={`navbar-logo ${isHomePage ? 'hidden' : 'visible'}`} /></a>
 )}
    <div className="navbar-main">
      <div className="navbar-triangle">
            <div id="triangle-code"></div>
        <ul className="navbar-cont">
          {mobSize  &&(
            <li className="home"> <a href="/"><House className="house-logo" size={36} weight="light" /></a>
            </li>
          )}
          <li className="indiv-parts-link"  ><a href="/parts" >Spare parts</a></li>
          <li className="account-link"> <a href="/account"> My Account</a></li>
          <li className="cart-link"><a href="/cart">My Cart <span className="itemsqty">{itemsQty}</span></a></li>
        </ul>
        <div></div>
      </div>
    </div>
   </div>
  );
}

export default Navbar;
