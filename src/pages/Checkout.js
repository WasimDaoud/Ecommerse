import React from "react";
import "../styles/checkout.css";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Checkout = () => {
  const myState = useSelector((state) => state.cart);
  const totalQty = myState.reduce((acc, product) => {
    return (acc += product.quantity);
  }, 0);
  const subTotal = myState.reduce((acc, product) => {
    return (acc += product.price);
  }, 0);
  return (
    <div>
      <hr></hr>
      <section className="main-checkout-section">
        <Container>
          <Row>
            <Col lg="8" sm="12" className="form-container">
              <h5 className="main-address">Billing Information</h5>
              <Form className="form">
                <FormGroup className="form-group">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Your Name"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <input
                    className="input"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <input
                    className="input"
                    type="number"
                    placeholder="Enter Your Phone Number"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Your Street Address"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <input className="input" type="text" placeholder="City" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input
                    className="input"
                    type="text"
                    placeholder="Postal Code"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <input className="input" type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="3" md="6" sm="12" className="order">
              <div className="order-container">
                <div className="order-flex">
                  <h5>Total Qty :</h5>
                  <h5>{totalQty} items</h5>
                </div>
                <div className="order-flex">
                  <h5>Subtotal :</h5>
                  <h5>{subTotal} $</h5>
                </div>
                <div className="order-flex">
                  <div>
                    <h5 className="h5-h6">Shipping :</h5>
                  </div>
                  <h5>0 $</h5>
                </div>
                <hr className="order-hr"></hr>
                <div className="order-flex">
                  <h5>Total Cost</h5>
                  <h5>{subTotal} $</h5>
                </div>
                <motion.button whileTap={{ scale: 1.3 }} className="order-btn">
                  <Link to="/">Place an Order</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Checkout;
