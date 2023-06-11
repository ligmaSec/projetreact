import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
export const Cart = (props) => {

  const cartTab = [
    {
      _id: "611f6385628e64b6ff96393c",
      name: "Pontiac",
      price: "13980,58",
      amount: 2,
    },
  ];

  const cartItems = (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Reference</th>
          <th>Name</th>
          <th>Price</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {cartTab.map((item) => (
          <tr key={item._id}>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
  const totalAmount = cartTab.reduce((total, item) => {
    const price = parseFloat(item.price.replace(",", "."));
    return total + price * item.amount;
  }, 0).toFixed(2);
  return (
    <Modal
      show={props.show}
      onHide={props.onClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems}
      </Modal.Body>

      <Modal.Footer>
        <p>Total Amount: {totalAmount}</p>
        <Button variant="secondary" onClick={props.onClose}>
          Close
        </Button>
        <Button variant="primary">Order</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Cart;
