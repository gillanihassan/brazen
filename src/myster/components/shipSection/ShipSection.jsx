import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ShipImage from "../../../assets/images/shipImage/shipImage.png";
import styles from "./styles.module.css";

const ShipSection = () => {
  return (
    <Container fluid className="p-0">
      <Image
        src={ShipImage}
        alt="Namoa Devi Ship"
        className={`w-100 ${styles.customImage}`}
      />
    </Container>
  );
};

export default ShipSection;
