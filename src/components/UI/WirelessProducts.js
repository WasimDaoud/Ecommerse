import ProductCard from "./ProductCard";
import { Container, Row, Col } from "reactstrap";
import myproducts from "../../assets/data/products";

const WirelessProducts = () => {
  const wireless = myproducts.filter((item) => item.category === "wireless");
  return (
    <Container>
      <Row>
        {wireless.map((product) => (
          <Col
            lg="4"
            md="6"
            sm="6"
            key={product.id}
            className="bestSalesProduct"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ProductCard prop={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WirelessProducts;
