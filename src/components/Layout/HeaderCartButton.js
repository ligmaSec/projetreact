import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { CartContext } from "../Cart/CartContext";
import { useContext } from "react";
function HeaderCartButton(props) {

    const { cartQuantity } = useContext(CartContext);
  return (
    <Button variant="primary" onClick={props.onClick}>
      your cart <Badge bg="secondary">{cartQuantity}</Badge>
      <span className="visually-hidden">your cart</span>
      <span>
        
      </span>
    </Button>
  );
}

export default HeaderCartButton;
