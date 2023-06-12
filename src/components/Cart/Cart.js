import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { CartContext } from './CartContext';

const Cart = ({ onClose }) => {
  const { cartItems, totalAmount, removeFromCart } = useContext(CartContext);

  const cartItemsList = cartItems.map((item) => (
    <tr key={item.productId}>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.amount}</td>
      <td>
        <Button variant="danger" onClick={() => removeFromCart(item.productId)}>
          Remove
        </Button>
      </td>
    </tr>
  ));

  return (
    <Modal show={true} onHide={onClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{cartItemsList}</tbody>
        </Table>
      </Modal.Body>

      <Modal.Footer>
        <p>Total Amount: {totalAmount}</p>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary">Order</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
