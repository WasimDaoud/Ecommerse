import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

import TrandingProducts from "../components/UI/TrandingProducts";
import BestSales from "../components/UI/BestSales";
import MobileProducts from "../components/UI/MobileProducts";
import WirelessProducts from "../components/UI/WirelessProducts";
import WatchProducts from "../components/UI/watchProducts";

import heroImg from "../assets/images/hero-img.png";
import Services from "../services/services";
import "../styles/home.css";

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <div className="main-container">
      <section className="heroSection">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="heroContent">
                <p className="heroSubtitle">Trending Product In {year}</p>
                <h1>Make Your Interior More Minimalistic & Modern</h1>
                <p>
                  lorem ipsom dolor sit amet consecteture lorem ipsom dolor sit
                  amet consecteture lorem ipsom dolor sit amet consecteture
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buyBtn">
                  <Link to={"/shop"}>SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6" className="container-of-heroimage">
              <div className="heroImg">
                <img src={heroImg} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className="trendingProducts">
        <Container>
          <Row>
            <Col lg="12" className="text-center trendText">
              <h2 className="sectionTitle" style={{ marginBottom: "20px" }}>
                Trending Products
              </h2>
            </Col>
          </Row>
          <section>
            <TrandingProducts />
          </section>
          <Row>
            <Col lg="12" className="text-center trendText">
              <h2 className="sectionTitle" style={{ marginTop: "40px" }}>
                Best Sales
              </h2>
            </Col>
          </Row>
          <section>
            <BestSales />
          </section>
        </Container>

        <section>
          <Row>
            <Col lg="12" className="text-center trendText">
              <h2 className="sectionTitle" style={{ marginTop: "40px" }}>
                Mobile Phones
              </h2>
            </Col>
          </Row>
        </section>

        <section>
          <MobileProducts />
          <section />

          <section style={{ marginBottom: "30px" }}>
            <Row>
              <Col lg="12" className="text-center trendText">
                <h2 className="sectionTitle" style={{ marginTop: "40px" }}>
                  Smart Watches
                </h2>
              </Col>
            </Row>
          </section>

          <WatchProducts />

          <section>
            <Row>
              <Col lg="12" className="text-center trendText">
                <h2 className="sectionTitle" style={{ marginTop: "40px" }}>
                  Wireless HeadPhones
                </h2>
              </Col>
            </Row>
          </section>
          <WirelessProducts />
        </section>
      </section>
    </div>
  );
};

export default Home;
