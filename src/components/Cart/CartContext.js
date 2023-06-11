import React, { createContext, useState } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Create the CartProvider component
export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

// Function to add an item to the cart
 // Function to add an item to the cart
const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((prevItem) => prevItem.productId === item.productId);
  
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].amount += item.amount;
        return updatedItems;
      }
  
      return [...prevItems, item];
    });
  };
   
  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.productId !== itemId));
  };

  // Calculate the total amount
  const totalAmount = cartItems.reduce((total, item) => {
    const price = typeof item.price === 'number' ? item.price : parseFloat(item.price.replace(',', '.'));
    return total + price * item.amount;
  }, 0).toFixed(2);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalAmount,
        addToCart,
        removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
