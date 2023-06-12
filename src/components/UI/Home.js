import React, { useState } from 'react';
import Header from '../Layout/Header';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { CartProvider } from '../Cart/CartContext';


const Home = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
     
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} show={cartIsShown} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Product />
      </main>
    </CartProvider>
  );
};

export default Home;