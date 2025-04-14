import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import BrandImage from "../../../assets/images/rebranding/rebrandingImage.png";
import styles from "./styles.module.css";

const Rebranding = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <Container fluid className="p-4">
        {/* Heading Row */}
        <Row className="mt-5">
          <Col md={12}>
            <h1 className={`${styles.customHeading}`}>
              THE
              <br />
              REBRANDING
            </h1>
          </Col>
        </Row>

        {/* Content Row */}
        <div style={{ marginTop: "18rem" }}>
          <Row className="mt-5">
            <Col md={6}>
              <p className={`${styles.customPara}`}>
                There were also{" "}
                <span style={{ color: "#cce0ff" }}>Europeans</span> involved in
                Coral’s operation. This year, Coral hired Swiss Patrick Cotasson
                who was previously at UniCredit bank in Geneva. The director of
                Coral affiliate Apeiron is a British man named Timothy Mark
                Peet, who was also formerly the nominal owner of Coral. From his
                LinkedIn profile, Peet has been at Apeiron since 2021 and
                working in Dubai for at least a decade.
              </p>
            </Col>

            {/* Image Column */}
            <Col md={6} className="d-flex justify-content-end align-items-end">
              <Image
                src={BrandImage}
                alt="Ship"
                className={`${styles.customImage}`}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Rebranding;
