import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ProductItemForm from './ProductItemForm';
import { CartContext } from '../Cart/CartContext';

const ProductItem = (props) => {
  const { addToCart } = useContext(CartContext);

  const addToCartHandler = (amount) => {
    addToCart({ ...props, amount }); // Pass the product details and the amount to addToCart
  };

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={props.images} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{props.price}</small>
          <ProductItemForm addToCart={addToCartHandler} />
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProductItem;
