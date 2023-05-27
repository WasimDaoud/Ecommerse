import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6">
            <h6>Multimart</h6>
            <p>
              lorem loremloremloremlorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              lorem lorem lorem lorem lorem{" "}
            </p>
          </Col>

          <Col lg="3" md="6">
            <h6>Top Category</h6>
            <p>Mobile Phones</p>
            <p>Modern Sofa</p>
            <p>Arm Chair</p>
            <p>Smart Watches</p>
          </Col>

          <Col lg="3" md="6">
            <h6>Useful Links</h6>
            <Link to="/shop" className="link">
              Shop
            </Link>
            <Link to="/cart" className="link">
              Cart
            </Link>
            <Link to="login" className="link">
              Login
            </Link>
            <p>Privacy Policy</p>
          </Col>

          <Col lg="3" md="6">
            <h6>Contact</h6>
            <div className="d-flex align-items-center ">
              <i class="ri-map-pin-line text-white"></i>
              <p>123 Lattakia - Syria</p>
            </div>
            <div className="d-flex align-items-center">
              <i class="ri-phone-line text-white"></i>
              <p>096 0968823794</p>
            </div>
            <div className="d-flex align-items-center">
              <i class="ri-mail-send-line text-white"></i>
              <p>wasimdaoud97@gmail.com</p>
            </div>
          </Col>
        </Row>

        <Row className="copyright">
          <p>
            Copyright 2023 developed by Eng.Wassem Daoud. All rights reserved
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
