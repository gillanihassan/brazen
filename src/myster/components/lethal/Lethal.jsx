import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import shipImage from "../../../assets/images/lethal/shipimg.png";
import styles from "./styles.module.css";

const Lethal = () => {
  return (
    <Container fluid className={`p-3 ${styles.customContainer}`}>
      {/* Heading */}
      <div style={{ marginBottom: "20px", marginTop: "1.5rem" }}>
        <h1 className={`${styles.customHeading}`}>
          A LETHA <br /> MOSQUITO <br /> BITE{" "}
        </h1>
      </div>

      {/* Row with image + text */}
      <Row className="align-items-center">
        <Col md={6}>
          <Image src={shipImage} fluid />
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <p className={`px-5 ${styles.customPara}`}>
            Meanwhile Coral seemed to be moving money between its own companies.
            In January 2023, the company asked Petrokim’s Turkish bank account —
            the company also named Volition and affiliated with Coral — to
            refund them €13 million dollars. In June, Pontus Trading — another
            Coral-affiliated company — paid Volition over $30 million. Both were
            registered to the Jumeirah Lakes Tower in Dubai. The barrels were
            all over the cap at $68 and the ships headed to India with either
            Gabonese or Panamanian flags.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Lethal;
