import { Container, Row, Col } from "reactstrap";
import "../styles/Shop.css";
import React, { useState } from "react";

import ProductCard from "../components/UI/ProductCard";

import products from "../assets/data/products";

import { motion } from "framer-motion";

import image from "../assets/images/main-image2.jpg";

const Shop = () => {
  const [productsList, setProductsList] = useState(products);

  const filterHundler = (e) => {
    const type = e.target.value;
    if (type === "Sofa") {
      const filteredProducts = products.filter(
        (product) => product.category === "sofa"
      );
      setProductsList(filteredProducts);
    } else if (type === "Mobile") {
      const filteredProducts = products.filter(
        (product) => product.category === "mobile"
      );
      setProductsList(filteredProducts);
    } else if (type === "Chair") {
      const filteredProducts = products.filter(
        (product) => product.category === "chair"
      );
      setProductsList(filteredProducts);
    } else if (type === "Watch") {
      const filteredProducts = products.filter(
        (product) => product.category === "watch"
      );
      setProductsList(filteredProducts);
    } else if (type === "Wireless") {
      const filteredProducts = products.filter(
        (product) => product.category === "wireless"
      );
      setProductsList(filteredProducts);
    }
  };

  const searchHandler = (e) => {
    const searchVal = e.target.value;
    const resaultOfSearch = products.filter(
      (product) =>
        product.category.toLowerCase().includes(searchVal.toLowerCase()) ||
        product.productName.toLowerCase().includes(searchVal.toLowerCase())
    );
    setProductsList(resaultOfSearch);
  };

  return (
    <section>
      <section>
        <div className="shop-img-section">
          <img src={image} className="image" />
        </div>
      </section>

      <section>
        <Container>
          <Row className="filter-sort-container">
            <Col lg="6" md="6" sm="6">
              <select onChange={filterHundler} className="filter-products">
                <option>Felter By Category</option>
                <option value="Sofa">Sofa</option>
                <option value="Mobile">Mobile</option>
                <option value="Wireless">Wireless</option>
                <option value="Chair">Chair</option>
                <option value="Watch">Watch</option>
              </select>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="search-products">
                <input
                  onChange={searchHandler}
                  type="text"
                  placeholder=" Search By Category Or Specific Product Name ..."
                />
                <span>
                  <i className="ri-search-2-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="filteredProducts">
        <Container>
          <Row>
            {productsList.length === 0 ? (
              <div className="no-products-found">
                <motion.h1 whileInView={{ scale: 1.5 }}>
                  Sorry No Products are Found !
                </motion.h1>
              </div>
            ) : (
              productsList.map((product) => {
                return (
                  <Col
                    key={product.id}
                    lg="3"
                    md="6"
                    sm="12"
                    className="shop-product-card"
                  >
                    <ProductCard prop={product} />
                  </Col>
                );
              })
            )}
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default Shop;
