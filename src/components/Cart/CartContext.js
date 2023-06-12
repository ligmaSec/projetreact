import React, { createContext, useState } from 'react';

// context du cart
export const CartContext = createContext();

// composant cart provider
export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

// ajout item dans le cart
const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((prevItem) => prevItem.productId === item.productId); //verification produit existant
  
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].amount += item.amount;
        return updatedItems;
      }
  
      return [...prevItems, item];
    });
  };
   
  // enlever item du cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.productId !== itemId));
  };
  const cartQuantity = cartItems.reduce((total, item) => total + item.amount, 0);// calcul de la quantite d'items
  // calcul du total
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
        cartQuantity
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
