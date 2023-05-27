import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

import { addProduct } from "../../RTK/CartSlice";
import { useDispatch } from "react-redux";

import { motion } from "framer-motion";

import "../../styles/ProductCard.css";
import { Link } from "react-router-dom";

import { toast, ToastContainer, Zoom } from "react-toastify";

const ProductCard = (props) => {
  // const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const notify = () => {
    toast.success("Product added Successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <Card
      className="product-card"
      color="light"
      outline
      style={{
        width: "16rem",
        border: "none",
        margin: "0px 0px",
      }}
    >
      <motion.img
        whileHover={{ scale: 0.9 }}
        alt="Sample"
        src={props.prop.imgUrl}
      />
      <CardBody className="card-body">
        <Link
          to={`/shop/${props.prop.id}`}
          tag="h5"
          style={{ fontWeight: 600 }}
        >
          {props.prop.productName}
        </Link>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {props.prop.category}
        </CardSubtitle>
        <div
          className="d-flex justify-content-between "
          style={{ marginTop: "30px" }}
        >
          <CardTitle tag="h5" style={{ fontWeight: 500 }}>
            {props.prop.price} $
          </CardTitle>
          <motion.span whileTap={{ scale: 1.2 }}>
            <i
              onClick={() => {
                dispatch(addProduct(props.prop));
                notify();
              }}
              className="ri-add-circle-fill"
            ></i>
          </motion.span>
        </div>
      </CardBody>
      <ToastContainer autoClose={2000} transition={Zoom} />
    </Card>
  );
};

export default ProductCard;
