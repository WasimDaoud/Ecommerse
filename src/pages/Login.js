import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";

import { motion } from "framer-motion";

import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Container>
        <Row className="flex-container">
          <Col lg="12" md="12" sm="12" className="login-main-col">
            <h1 className="main-address">Login</h1>
            <Form className="main-form">
              <div className="login-form">
                <FormGroup>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <motion.button type="submit" whileTap={{ scale: 1.2 }}>
                  Login
                </motion.button>
                <div className="create-account">
                  <h6>Don't have an account ?</h6>
                  <Link to="/signup">
                    <motion.span whileTap={{ scale: 1.2 }}>
                      Create an account
                    </motion.span>
                  </Link>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
