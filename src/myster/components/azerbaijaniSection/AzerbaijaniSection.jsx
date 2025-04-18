import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import styles from "./styles.module.css";
import imageOne from "../../../assets/images/azerbaijan/imageOne.png";
import imageTwo from "../../../assets/images/azerbaijan/imageTwo.png";

const AzerbaijaniSection = () => {
  return (
    <Container fluid className={`p-4 ${styles.mainContainer}`}>
      {/* Heading */}
      <Row>
        <h2 className={`${styles.customHeadingOne}`}>
          OVER THE NEXT FEW YEARS, MORE <br />
          AZERBAIJANI NATIONALS WERE HIRED:
        </h2>
      </Row>

      {/* Profile and Description */}
      <div className={`${styles.customDiv}`}>
        <Row className="mt-4 align-items-start">
          {/* Left - Profiles */}
          <Col md={6}>
            <div className="d-flex align-items-center mb-3">
              <Image src={imageOne} className="me-4" />
              <h3 className={` ${styles.customHeadingTwo}`}>TALAT SAFAROV</h3>
            </div>

            <div className="d-flex align-items-center">
              <Image src={imageTwo} className="me-4" />
              <h3 className={` ${styles.customHeadingThree}`}>AHMED KARIMOV</h3>
            </div>
          </Col>

          {/* Right - Paragraph */}
          <Col md={6}>
            <p className={`${styles.customPara}`}>
              The company was just one cog in their enormous, well-rigged
              machine, designed to make sure that Russia’s oil industry could
              keep on running smoothly as it waged war on Ukraine.
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AzerbaijaniSection;
