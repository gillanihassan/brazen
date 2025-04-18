import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import imageOne from "../../../assets/images/affiliate/imageOne.png";
import imageTwo from "../../../assets/images/affiliate/imageTwo.png";
import imageThree from "../../../assets/images/affiliate/imageThree.png";

const AffiliateCompany = () => {
  return (
    <Container fluid className={`p-4 ${styles.mainContainer}`}>
      <Row>
        {/* LEFT SIDE TEXT */}
        <Col sm={12} md={12} lg={10} xl={10} xxl={10}>
          <p className={`${styles.paraOne}`}>
            At the direction of <strong>Igor Sechin</strong>, CEO of Russia’s
            largest state-owned petroleum company, Garayev and Eyyub built an
            underground network of shipping companies and a shadow fleet —
            poorly maintained ships that evade compliance and regulations — to
            fill the Kremlin’s coffers and circumvent sanctions against Russia.
          </p>
          <p className={`${styles.paraTwo}`}>
            A large part of this operation was controlled by a single, sprawling
            corporation named Coral Energy, based in Singapore and Dubai. It has
            caught international attention — the U.S. Office of Foreign Assets
            Control is investigating several firms suspected of illegally
            selling Russian oil. Documents obtained by Whale Hunting can reveal
            this includes Coral Energy and...
          </p>

          <h1 className={`text-uppercase ${styles.customHeading}`}>
            Five of its affiliated companies.
          </h1>
        </Col>

        {/* RIGHT SIDE IMAGES */}
        <Col
          sm={12}
          md={12}
          lg={2}
          xl={2}
          xxl={2}
          className="d-flex flex-column align-items-end align-items-md-center"
        >
          <div className="d-flex align-items-center mb-4">
            <div className="text-end me-3 fw-bold text-uppercase">Gutse</div>
            <Image src={imageOne} />
          </div>

          <div className="d-flex align-items-center mb-4">
            <div className="text-end me-3 fw-bold text-uppercase">Putin</div>
            <Image src={imageTwo} />
          </div>

          <div className="d-flex align-items-center">
            <div className="text-end me-3 fw-bold text-uppercase">Sechin</div>
            <Image src={imageThree} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AffiliateCompany;
