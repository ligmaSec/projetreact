import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ProductItemForm from './ProductItemForm';
import { CartContext } from '../Cart/CartContext';
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const { addToCart } = useContext(CartContext);

  const addToCartHandler = (amount) => {
    addToCart({ ...props, amount }); // Pass the product details and the amount to addToCart
  };

  return (
    <Col>
      <Card>
      <Link to={"/product/"+props.productId}>
      <Card.Img variant="top" src={props.images} />
      </Link>
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
