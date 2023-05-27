import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";

import { motion } from "framer-motion";

import "../styles/signUp.css";

import { toast, ToastContainer } from "react-toastify";

import { createUserWithEmailAndPassword } from "firebase/auth"; /* Authentication */
import { auth } from "../firebase.config";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [file, setFile] = useState(null);

  const signUp = async (e) => {
    e.preventDefault();

    try {
      const userAccount = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userAccount.user;
      toast.success("Account is created successfully");
      console.log(user);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <Container>
        <Row className="flex-container">
          <Col lg="12">
            <h1 className="main-address">SignUp</h1>
            <Form onSubmit={signUp}>
              <div className="login-form">
                <FormGroup>
                  <input
                    type="text"
                    placeholder="User Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </FormGroup>
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
                <FormGroup>
                  <input
                    className="chose-file"
                    type="file"
                    onChange={(e) => setFile(setFile(e.target.files[0]))}
                  />
                </FormGroup>
                <motion.button
                  className="signup-button"
                  type="submit"
                  whileTap={{ scale: 1.2 }}
                >
                  Create an account
                </motion.button>
                <div className="create-account">
                  <h6>Already have an account ?</h6>
                  <Link to="/login">
                    <motion.span whileTap={{ scale: 1.2 }}>Login</motion.span>
                  </Link>
                </div>
              </div>
            </Form>
            <ToastContainer autoClose={2000} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
