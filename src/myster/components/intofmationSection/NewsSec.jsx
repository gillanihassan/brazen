import React from "react";
import NewsImage from "../../../assets/images/newsSection/newSection.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";

function NewsSec() {
  return (
    <div className={`${styles.mainDiv}`}>
      <Container fluid className={`${styles.mainContainer}`}>
        <Row>
          <Col md={6}>
            <h3 className={`${styles.customHeading}`}>
              NINE DAYS BEFORE RUSSIA BEGAN ITS <br /> FULL-SCALE INVASION OF
              UKRAINE ON <br /> FEB. 24, 2022, A MAN FROM BELIZE <br />
              ESTABLISHED NORD AXIS, A NEW <br />
              SHIPPING COMPANY, IN HONG KONG.
            </h3>
            <p className={`${styles.customParaOne}`}>
              Coincidental timing? Maybe.
            </p>
            <p className={`${styles.customParaTwo}`}>
              Soon after, Nord Axis became a major player in the Russian oil
              trade. Meanwhile, the Belizean man had no idea what the company
              was or why it had been formed.
            </p>
          </Col>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Image src={NewsImage} className={`${styles.customImage}`} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewsSec;
