import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import WeiredImage from "../../../assets/images/weired/weiredBg.png";
import styles from "./styles.module.css";
import flag from "../../../assets/images/weired/flag.png";

const Weird = () => {
  return (
    <div className={`${styles.mainDiv}`}>
      <Container fluid className="p-4">
        <Row>
          <Col md={9}>
            <div style={{ marginBottom: "40px", marginTop: "1rem" }}>
              <h1 className={`${styles.customHeadingOne}`}>THEN, IT GOT</h1>
              <h1 className={`${styles.customHeadingTwo}`}>
                PARTICULARLY WEIRD:
              </h1>
            </div>
          </Col>
          <Col md={3}>
            <div style={{ textAlign: "right" }}>
              <Image
                src={flag}
                alt="Description"
                className={`${styles.customImage}`}
              />
            </div>
          </Col>
        </Row>
        {/* Heading */}

        {/* Text + Image */}
        <Row className="align-items-center">
          <Col md={7}>
            <p className={`${styles.customPara}`}>
              Russian trader Ilya Pereguda was mysteriously struck down by
              pneumonia in Dubai a few months after being tasked with helping
              Coral enter the Tanzanian market. The official narrative was that
              he died of an illness caused by a mosquito bite, but Africa
              Intelligence reported that there was speculation he had been
              poisoned.
            </p>

            <p className={`${styles.customPara}`}>
              Either way, Coral’s business with Tanzania took off. It won at
              least six contracts to supply fuel to the East African country.
            </p>

            <p className={`${styles.customPara}`}>
              In May, according to documents, another shell company popped up.
              Pura Vida Holding Limited was incorporated in the United Arab
              Emirates. It became the ultimate parent company of Coral and its
              related companies. The shareholders who signed were two of Coral’s
              existing team — Talat Safarov, Ahmed Karimov — and a new face
              called Azar Madatli, the son of Azerbaijan’s former ambassador to
              the Ukraine and the brother-in-law of Coral’s founder Garayev.
            </p>

            <p className={`${styles.customPara}`}>
              Coral also had new customers out of the G7: it was now also
              supplying to Tunisia and South Africa. It was building
              relationships while ships allegedly tied with Garayev travelled to
              India and China with Sechin. Shipping data obtained by Whale
              Hunting shows journeys charted by Coral to Chinese, Indian and
              West African ports.
            </p>
          </Col>

          {/* Image Column */}
          <Col md={5}>
            <Image
              src={WeiredImage}
              alt="City skyline"
              fluid
              className={`${styles.customImageTwo}`}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Weird;
