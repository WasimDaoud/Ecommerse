import React from "react";

import { useDispatch } from "react-redux";

import { addProduct } from "../RTK/CartSlice";

import { Col, Row, Container } from "reactstrap";

import { useParams } from "react-router-dom";

import products from "../assets/data/products";

import { motion } from "framer-motion";

import { toast, ToastContainer } from "react-toastify";

import "../styles/ProductCard.css";

import image from "../assets/images/bedroom.jpg";

const ProductDetails = () => {
  const { id } = useParams();
  const myProduct = products.find((item) => item.id === id);

  const dispatch = useDispatch();

  return (
    <div className="g">
      <section className="commone-image-section">
        <img src={image} className="commone-image" />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="details">
              <div className="details-image-div">
                <img src={myProduct.imgUrl} alt="picture" />
              </div>
            </Col>
            <Col lg="6" md="6" sm="12">
              <div className="details-field">
                <h1>{myProduct.productName}</h1>
                <div className="rating">
                  <span>
                    <i className="ri-star-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-half-line"></i>
                  </span>
                  <span>{myProduct.avgRating} ratings</span>
                </div>
                <h3>{myProduct.price} $</h3>
                <p>{myProduct.description}</p>
                <motion.button
                  whileTap={{ scale: 1.3 }}
                  className="button"
                  onClick={() => {
                    dispatch(addProduct(myProduct));
                    toast.success("Product added Successfully");
                  }}
                >
                  Add To Cart
                </motion.button>
                <ToastContainer autoClose={2000} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProductDetails;
