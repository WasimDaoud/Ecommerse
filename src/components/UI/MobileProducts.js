import myproducts from "../../assets/data/products";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "reactstrap";

const MobileProducts = () => {
  const mobile = myproducts.filter((item) => item.category === "mobile");

  return (
    <Container>
      <Row>
        {mobile.map((product) => (
          <Col
            lg="3"
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

export default MobileProducts;
