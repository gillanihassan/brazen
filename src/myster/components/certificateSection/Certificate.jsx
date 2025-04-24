import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";

const CertificateSection = () => {
  return (
    <div className={`${styles.customDiv}`}>
      <Container fluid className="p-4">
        {/* Heading */}
        <Row className="mb-5">
          <Col>
            <h1 className={`${styles.customHeading}`}>
              ACCORDING TO A CERTIFICATE <br /> OBTAINED BY WHALE HUNTING
            </h1>
          </Col>
          <Row className="mt-4">
            <p className={`${styles.paraOne}`}>
              Just two weeks before the rebranding, Pura Vida, Coral’s parent
              company...
            </p>
          </Row>
        </Row>

        {/* Description + Percentage */}
        <Row className="align-items-start">
          {/* Left Column */}
          <Col md={6}></Col>

          {/* Right Column */}
          <Col md={6} className="d-flex flex-column align-items-center">
            <h1 className={`${styles.customHeadingTwo}`}>85%</h1>

            <p className={` ${styles.customParaTwo}`}>
              ...became the 85% shareholder of Novus Middle East, another
              company affiliated with Coral and was known to be Garayev’s
              holding company.
            </p>
            <p className={`${styles.customParaThree}`}>
              But in the press release, Karimov stressed 2Rivers was a new
              venture.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CertificateSection;
