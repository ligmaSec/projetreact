import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import CartIcon from "../Cart/CartIcon";

function HeaderCartButton(props) {
  function addCart(){
    console.log("Add")
  }
  return (
    <Button variant="primary" onClick={props.onClick}>
      your cart <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">your cart</span>
      <span>
        
      </span>
    </Button>
  );
}

export default HeaderCartButton;
