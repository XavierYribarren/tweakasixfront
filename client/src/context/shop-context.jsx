import React, { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAdd, cartRemove, addCustomToCart } from "../features/CartReducer";
export const ShopContext = createContext([]);

export const ShopContextProvider = (props) => {
 const cartItemsObj = useSelector((state) => state.cart_items.cartItems)

  const cartSpare = Object.values(cartItemsObj).filter(item => item && item !== null);
    const cartGuitarsObj = useSelector((state) => state.cart_items.cartGuitars)

  const cartGuitars = Object.values(cartGuitarsObj).filter(item => item && item !== null);

  const cartItems = cartSpare.concat(cartGuitarsObj);
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(cartAdd(item));
  };

  const removeFromCart = (item) => {
    dispatch(cartRemove(item));
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    if (cartItems.length >= 1) {
      for (const itemId in cartItems) {
        const cartItem = cartItems[itemId];

        if (cartItem && cartItem.item) {
          const item = cartItem.item;
          totalAmount += cartItem.qty * item.price;
        }
      }
    } 
     else if ( cartItems.length <= 0) {
      totalAmount = 0;
    }
    return totalAmount;
  };

  const addGuitarToCart = (guitarToAdd) => {
    dispatch(addCustomToCart(guitarToAdd))
  }

  const contextValue = { cartItems, addToCart, removeFromCart, getCartAmount, addGuitarToCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

