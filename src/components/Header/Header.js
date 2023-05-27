import { Container, Row } from "reactstrap";

import { Link, NavLink } from "react-router-dom";

import { motion } from "framer-motion";

import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";

import { useSelector } from "react-redux";
import { useState } from "react";

import "./Header.css";

const navActive = [
  {
    path: "home",
    element: "home",
  },
  {
    path: "shop",
    element: "shop",
  },
  {
    path: "cart",
    element: "cart",
  },
];

const Header = () => {
  const [nav, setNav] = useState(false);
  const products = useSelector((state) => state.cart);
  const quantity = products.reduce((acc, product) => {
    return (acc += product.quantity);
  }, 0);
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav-wrapper">
            <div className="logo">
              <img src={logo} />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>

            <div className="navegation">
              <ul className="menu">
                {navActive.map((item, index) => (
                  <li className="navItem" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "navActive" : " "
                      }
                    >
                      {item.element}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav-icons">
              <motion.span whileTap={{ scale: 1.4 }} className="cart-icon">
                <Link to="/cart" className="ri-shopping-cart-2-line"></Link>
                <span className="badge">{quantity}</span>
              </motion.span>
              <motion.span whileTap={{ scale: 1.3 }}>
                <Link to="/signup">
                  <img src={userIcon} alt="picture" />
                </Link>
              </motion.span>
            </div>
            <i
              className="ri-menu-line"
              onClick={() => {
                setNav(!nav);
              }}
            ></i>
          </div>
        </Row>
      </Container>
      {nav ? (
        <div className="overlay">
          <div className="mobile-icon">
            <ul className="mob-menu">
              {navActive.map((item, index) => (
                <li className="navItem" key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "navActive" : " "
                    }
                  >
                    {item.element}
                  </NavLink>
                </li>
              ))}
            </ul>

            <i
              className="ri-menu-line"
              onClick={() => {
                setNav(!nav);
              }}
            ></i>
          </div>
        </div>
      ) : (
        " "
      )}
    </header>
  );
};

export default Header;
