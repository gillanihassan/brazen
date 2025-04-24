import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import CoralImage from "../../../assets/images/coralRoots/coral.png";
import styles from "./styles.module.css";

const CoralRoots = () => {
  return (
    <Container fluid className={`p-4 ${styles.mainContainer}`}>
      <Row>
        <h1 className={`${styles.customHeading}`}>
          CORAL’S <br /> ROOTS
        </h1>
      </Row>

      <Row className="d-flex justify-content-end">
        <Image src={CoralImage} fluid className={`  ${styles.customImage}`} />
      </Row>
    </Container>
  );
};

export default CoralRoots;
