import React, { useState } from 'react';
import Header from '../Layout/Header';
import Cart from '../Cart/Cart';
import { CartProvider } from '../Cart/CartContext';
import ProductDetail from '../Product/ProductDetail';
import { useParams } from 'react-router-dom';

const Home = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  // recup de l'id
  const { id } = useParams();
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
        <ProductDetail prodId={id} />
      </main>
    </CartProvider>
  );
};

export default Home;