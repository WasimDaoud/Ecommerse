import myproducts from "../../assets/data/products";
import ProductCard from "./ProductCard";
import { Col, Container, Row } from "reactstrap";

const TrandingProducts = () => {
  const trendingProducts = myproducts.filter(
    (item) => item.category === "chair"
  );
  return (
    <Container>
      <Row>
        {trendingProducts.map((product) => (
          <Col
            lg="3"
            md="6"
            sm="6"
            key={product.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ProductCard prop={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TrandingProducts;
