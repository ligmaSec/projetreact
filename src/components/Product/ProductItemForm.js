import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ProductItemForm = ({ addToCart }) => {
  const [amount, setAmount] = useState(1);

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addToCart(parseInt(amount)); // Pass the amount as an integer to addToCart
    setAmount(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={amount} min="1" onChange={handleChange} />
      <Button type="submit" variant="primary">
        Add
      </Button>{' '}
    </form>
  );
};

export default ProductItemForm;
