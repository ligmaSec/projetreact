import React from "react";
import ProductItem from "./ProductItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardGroup from 'react-bootstrap/CardGroup';
import classes from "./Product.module.css";
const products = [
  {
    _id: "611f6385628e64b6ff96393c",
    name: "Pontiac",
    price: "€13980,58",
    category: "Energy",
    images: "http://dummyimage.com/800x480.png/1619f0/ffffff"
  },
  {
    _id: "711f6385628e64b6ff96393c",
    name: "Pontiac",
    price: "€13077,47",
    category: "Technology",
    images: "http://dummyimage.com/800x480.png/1619f0/ffffff"
  },
  {
    _id: "811f6385628e64b6ff96393c",
    name: "Acura",
    price: "€26643,20",
    category: "Basic Industries",
    images: "http://dummyimage.com/800x480.png/1619f0/ff0000"
  },
  {
    _id: "911f6385628e64b6ff96393c",
    name: "Hyundai",
    price: "€16287,78",
    category: "Public Utilities",
    images: "http://dummyimage.com/800x480.png/1619f0/ffffff"
  },
  {
    _id: "921f6385628e64b6ff96393c",
    name: "Pontiac",
    price: "€27987,30",
    category: "Consumer Non-Durables",
    images: "http://dummyimage.com/800x480.png/1619f0/ffffff"
  },
  {
    _id: "922f6385628e64b6ff96393c",
    name: "Pontiac",
    price: "€27987,30",
    category: "Consumer Non-Durables",
    images: "http://dummyimage.com/800x480.png/1619f0/ffffff"
  },
  {
    _id: "926f6385628e64b6ff96393c",
    name: "Pontiac",
    price: "€27987,30",
    category: "Consumer Non-Durables",
    images: "http://dummyimage.com/800x480.png/1619f0/ffffff"
  }
];

export const Product = () => {
  const productjsx = products.map((item) => (
    <ProductItem
      key={item._id}
      name={item.name}
      images={item.images}
      price={item.price}
    />
  ));
  console.log(productjsx);
  return (
    <section className={classes.product}>
      <Row xs={1} md={2} className="g-4">
        {productjsx}
      </Row>
    </section>
  );
};
export default Product;
