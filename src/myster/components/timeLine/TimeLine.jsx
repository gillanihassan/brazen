import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";

const Timeline = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <Container fluid className="p-4">
        {/* MARCH */}
        <Row className="text-center mb-5 mt-5">
          <Col className="mb-5">
            <h2 className={`${styles.customHeading}`}>MARCH</h2>
            <p className={`text-center ${styles.customPara}`}>
              This spring brought new challenges for Coral: in March, Dubai’s
              main state-owned bank Emirates NBD ordered the closure of accounts
              of Coral, Voliton, Pontus and another company associated with
              Eyvub.
            </p>
          </Col>
        </Row>

        {/* JUNE */}
        <Row className="text-center mb-5 mt-5 ">
          <Col className="mb-5">
            <h2 className={`${styles.customHeading}`}>JUNE</h2>
            <p className={`text-center ${styles.customPara}`}>
              In June, one of Coral’s vessels, named HANA, was <u>sanctioned</u>{" "}
              by the EU on June 25, 2024. But it seemingly still operates.
              Shipping data shows that after the sanctions it was renamed Kavya,
              and its flag was changed from Gabon to Tanzania.
            </p>
          </Col>
        </Row>

        {/* JULY */}
        <Row className="text-center  mb-5 mt-5">
          <Col>
            <h2 className={`${styles.customHeading}`}>JULY</h2>
            <p className={`text-center ${styles.customPara}`}>
              Mounting international pressures are what perhaps led to a
              rebranding. On July 29, Coral announced its rebranding to 2Rivers
              Group following the successful completion of a management buyout.
              The new management team included those previously involved in
              Coral operations: Anar Madatli, Talat Safarov and Ahmed Karimov.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Timeline;
