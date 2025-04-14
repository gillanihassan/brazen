import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import styles from "./styles.module.css";
import imageOne from "../../../assets/images/azerbaijan/imageOne.png";
import imageTwo from "../../../assets/images/azerbaijan/imageTwo.png";

const AzerbaijaniSection = () => {
  return (
    <Container fluid className={`p-3 ${styles.mainContainer}`}>
      {/* Heading */}
      <Row>
        <Col>
          <h2 className={`${styles.customHeadingOne}`}>
            OVER THE NEXT FEW YEARS, MORE <br />
            AZERBAIJANI NATIONALS WERE HIRED:
          </h2>
        </Col>
      </Row>

      {/* Profile and Description */}
      <div style={{ marginTop: "11.25rem" }}>
        <Row className="mt-4 align-items-start">
          {/* Left - Profiles */}
          <Col md={6}>
            <Row className="align-items-center mb-3">
              <Col xs={2}>
                <Image src={imageOne} />
              </Col>
              <Col>
                <h3 className={`${styles.customHeadingTwo}`}>TALAT SAFAROV</h3>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col xs={2}>
                <Image src={imageTwo} />
              </Col>
              <Col>
                <h3 className={`${styles.customHeadingThree}`}>
                  AHMED KARIMOV
                </h3>
              </Col>
            </Row>
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
