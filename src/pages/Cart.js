import React from "react";
import "../styles/Cart.css";
import { Container, Row, Col, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import image from "../assets/images/main-image2.jpg";

import products from "../assets/data/products";

import { useSelector, useDispatch } from "react-redux";

import { deleteProduct, clear } from "../RTK/CartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const suptotal = products.reduce((acc, product) => {
    return (acc += product.price * product.quantity);
  }, 0);

  return (
    <div>
      <section>
        <div className="cart-image-section">
          <img src={image} className="image" />
        </div>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="8" md="12" sm="12">
              <div className="table">
                <Table hover>
                  <thead>
                    <tr>
                      <th className="t-d">Image</th>
                      <th className="t-d">Title</th>
                      <th className="t-d">Price</th>
                      <th className="t-d">Qty</th>
                      <th className="t-d">Delete </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="t-row">
                        <th scope="row" className="table-image">
                          <img src={product.imgUrl} alt="picture" />
                        </th>
                        <td className="t-d">{product.productName}</td>
                        <td className="t-d">{product.price} $</td>
                        <td className="t-d">{product.quantity} px</td>
                        <td>
                          <i
                            onClick={() => dispatch(deleteProduct(product))}
                            className="ri-delete-bin-5-line"
                          ></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>

            <Col>
              <motion.button
                onClick={() => dispatch(clear())}
                whileTap={{ scale: 1.3 }}
                className="clear-btn"
              >
                Clear
              </motion.button>

              <div className="sutotle-price">
                <h6> Subtotle : {suptotal} $</h6>
              </div>
              <p className="p">
                Taxes and shipping will calculate in checkout ..
              </p>
              <div className="btn-container">
                <motion.button
                  whileTap={{ scale: 1.3 }}
                  className="checkout-btn"
                >
                  <Link to="/checkout">Checkout</Link>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 1.3 }}
                  className="shopping-btn"
                >
                  <Link to="/shop">Continue Shopping</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Cart;
