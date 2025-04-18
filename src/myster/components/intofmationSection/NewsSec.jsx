import React from "react";
import NewsImage from "../../../assets/images/newsSection/newSection.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";

function NewsSec() {
  return (
    <Container fluid className={`p-5 ${styles.mainContainer}`}>
      <Row>
        <Col
          sm={12}
          md={6}
          className="d-flex flex-column justify-content-center mt-5"
        >
          <p className={`${styles.topPara}`}>
            NINE DAYS BEFORE RUSSIA BEGAN ITS <br /> FULL-SCALE INVASION OF
            UKRAINE ON <br /> FEB. 24, 2022, A MAN FROM BELIZE <br />
            ESTABLISHED NORD AXIS, A NEW <br />
            SHIPPING COMPANY, IN HONG KONG.
          </p>
          <p className={`mt-3 ${styles.customParaOne}`}>
            Coincidental timing? Maybe.
          </p>
          <p className={`${styles.customParaTwo}`}>
            Soon after, Nord Axis became a major player in the Russian oil
            trade. Meanwhile, the Belizean man had no idea what the company was
            or why it had been formed.
          </p>
        </Col>
        <Col
          sm={12}
          md={6}
          className="d-flex d-md-block align-items-center justify-content-center"
        >
          <Image
            src={NewsImage}
            fluid
            className={`${styles.customImage} respon`}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default NewsSec;
