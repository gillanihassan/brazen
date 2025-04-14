import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import CoralImage from "../../../assets/images/coralRoots/coral.png";
import styles from "./styles.module.css";

const CoralRoots = () => {
  return (
    <Container fluid className={`p-3 ${styles.mainContainer}`}>
      <Row className=" px-4">
        {/* Left Column - Heading */}
        <Col md={6}>
          <h1 className={`${styles.customHeading}`}>
            CORAL’ <br /> ROOTS
          </h1>
        </Col>

        {/* Right Column - Image */}
        <Col md={6} className="text-end">
          <Image src={CoralImage} className={`${styles.customImage}`} />
        </Col>
      </Row>
    </Container>
  );
};

export default CoralRoots;
