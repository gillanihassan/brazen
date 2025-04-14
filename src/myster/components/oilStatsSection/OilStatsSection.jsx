import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";

const OilStatsSection = () => {
  return (
    <Container fluid className={`text-white  ${styles.mainContainer}`}>
      <Row className="text-center">
        <Col md={6} className={`${styles.columnLeft}`}>
          <h1 className={`${styles.customHeadingOne}`}>80%</h1>

          <p
            className={`text-uppercase  ${styles.customParaOne} mx-auto`}
            style={{ maxWidth: "50rem" }}
          >
            Of Russian Oil Is Transported <br /> By Shadow Fleets
          </p>
        </Col>

        <Col md={6} className={`${styles.columnRight}`}>
          <h1 className={`${styles.customHeadingOne}`}>$420</h1>
          <p
            className={`text-uppercase  ${styles.customParaTwo} mx-auto`}
            style={{ maxWidth: "50rem" }}
          >
            Billion Earned By Russia From Oil <br /> And Gas Exports During The
            War
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default OilStatsSection;
