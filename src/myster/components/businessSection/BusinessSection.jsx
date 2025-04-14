import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Tahir from "../../../assets/images/business/tahir.png";
import Etibar from "../../../assets/images/business/etibar.png";
import Card from "../../../assets/images/business/idCard.png";
import styles from "./styles.module.css";

function BusinessSection() {
  return (
    <Container className={`p-4 ${styles.mainContainer}`} fluid>
      <Row>
        <Col>
          <h2 className={`${styles.customHeading}`}>
            IN REALITY, BEHIND NORD AXIS WERE <br /> TWO AZERBAIJANI BUSINESMEN,
          </h2>
        </Col>
      </Row>

      <Row className="align-items-center mt-2">
        <Col xs="auto">
          <Image src={Tahir} className={`${styles.imageOne}`} />
        </Col>
        <Col xs="auto">
          <h2 className={`text-uppercase ${styles.headingOne}`}>
            Tahir Garayev <span className={styles.andColor}>And</span>
          </h2>
        </Col>

        <Col xs="auto">
          <Image src={Etibar} className={`${styles.imageTwo}`} />
        </Col>
        <Col xs="auto">
          <h2 className={`text-uppercase ${styles.headingTwo}`}>
            Etibar Eyyub.
          </h2>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={8}>
          <p className={`${styles.customPara}`}>
            The company was just one cog in their enormous, well-rigged machine,
            designed to make sure that Russia’s oil industry could keep on
            running smoothly as it waged war on Ukraine.
          </p>
        </Col>
        <Col md={4} className="text-end">
          <Image
            src={Card}
            fluid
            style={{ maxWidth: "398px", maxHeight: "250px", marginTop: "22px" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default BusinessSection;
