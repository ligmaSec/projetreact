import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/Cart/CartContext';

const App = () => {
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

export default App;
