import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ImageDec from "../../../assets/images/december/stakesimage .png";
import styles from "./styles.module.css";

const DecemberStakes = () => {
  return (
    <Container fluid className={`p-4 ${styles.mainContainer}`}>
      {/* Heading */}
      <h1 className={` ${styles.customHeading}`}>
        IN DECEMBER, THE STAKES <br />
        GOT MUCH HIGHER:
      </h1>

      {/* Content */}
      <div className={`${styles.customParaDiv}`}>
        <Row className={`${styles.customRow}`}>
          <Col md={7}>
            <p className={`${styles.customPara}`}>
              A price cap imposed by G7 nations and its allies on Russian crude
              oil took effect. Russia could continue selling Western oil
              insurers and reinsurance companies but only if the oil sold for
              below $60 a barrel – which was substantially below benchmark
              prices. On 5 February, a similar sanctions on petroleum-based came
              into effect.
            </p>
            <p className={`${styles.customPara}`}>
              A contract between Primedeal and Nayara for over $64 million in
              January 2023 showed crude oil sold for over $74 a barrel — above
              the new price cap. The oil used was also marked Deyrneh by a haul
              of Panama flag ships.
            </p>
            <p className={`${styles.customPara}`}>
              Coral continued to find ways around the price cap. They were
              working with ship management companies in India and Turkey who
              reflagged cargo, as the reflagged tankers continue in the Indian
              ocean. Many were even docked in the Marshall Islands.
            </p>
            <p className={`${styles.customPara}`}>
              Coral also had new customers out of the G7: it was now also
              supplying to Turkey and South Asia, using freshly reflagged ships
              from Gabon. Some ships even loaded oil from Tuapse, transiting
              through the Black Sea and eventually reaching India and West
              African ports.
            </p>
          </Col>

          <Col md={5}>
            <Image src={ImageDec} className={`${styles.customImage}`} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default DecemberStakes;
