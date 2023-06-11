import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ProductItemForm from './ProductItemForm'
const ProductItem = (props) => {
  return (
    <Col>
    <Card>
        <Card.Img variant="top" src={props.images} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{props.price}</small>
          <ProductItemForm />
        </Card.Footer>
      </Card>
      </Col>
  )
}

export default ProductItem