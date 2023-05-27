import ProductCard from "./ProductCard";
import { Container, Row, Col } from "reactstrap";

import myproducts from "../../assets/data/products";

const BestSales = () => {
  const bestSales = myproducts.filter((item) => item.category === "sofa");

  return (
    <Container>
      <Row>
        {bestSales.map((product) => (
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

export default BestSales;
