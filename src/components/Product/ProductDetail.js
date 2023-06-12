import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import classes from "./Product.module.css";

// Cart Context
const CartContext = React.createContext();

// Cart Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item._id !== action.payload);
    default:
      return state;
  }
};



export const ProductDetail = ({ prodId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, dispatch] = useReducer(cartReducer, []);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/product/${prodId}`)
      .then((response) => {
        setProducts(response.data.product);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      });
  }, [prodId]);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  if (loading) {
    return (
      <div className={classes.loading}>
        <Spinner animation="border" role="status" className={classes.spinner}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className={classes.error}>
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }
  const item = products
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      <section className={classes.product}>
        <Row xs={1} md={1} lg={1} className="g-4">
            <ProductItem
              key={item._id}
              productId={item._id}
              name={item.name}
              images={item.images}
              price={item.price + " €"}
              description={item.description}
              addToCart={() => addToCart(item)}
            />
        </Row>
      </section>
    </CartContext.Provider>
  );
};

export default ProductDetail;