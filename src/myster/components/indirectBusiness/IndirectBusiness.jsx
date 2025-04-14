import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import flagOne from "../../../assets/images/indirectBusiness/flagOne.png";
import flagTwo from "../../../assets/images/indirectBusiness/flagTwo.png";
import styles from "./styles.module.css";

const IndirectBusiness = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/Bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        position: "relative",
        padding: "0px 0",
      }}
    >
      {/* Blue overlay */}
      <div
        style={{
          backgroundColor: "rgba(0, 42, 107, 0.1)",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      />

      <Container fluid className={`p-4 ${styles.mainContainer}`}>
        <Row className="justify-content-between align-items-start">
          <Col md={8}>
            <h1 className={`${styles.customHeading}`}>
              INDIRECT <br />
              BUSI<span style={{ fontStyle: "italic" }}>NESS</span>
            </h1>
          </Col>
          <Col
            md={2}
            className="text-end d-flex flex-column align-items-end mt-5"
          >
            <Image src={flagOne} className={`${styles.flagOne}`} />
            <Image src={flagTwo} />
          </Col>
        </Row>

        <div style={{ marginTop: "20rem" }}>
          <Row className="mt-5">
            <Col md={4}>
              <p className={`${styles.customPara}`}>
                Coral built its dark fleet fast, buying rusty tankers that were
                built in the early 2000s from China, Turkey and Greece. They may
                be old but they aren’t cheap: one of these vessels typically
                costs $30 to 40 million dollars. Allegedly, they were largely
                financed by loans from Russian banks.
              </p>
              <p className={`${styles.customPara}`}>
                Coral’s new ships were given flags of countries with
                particularly lenient shipping regulations, making them hard to
                trace. Documents obtained by Whale Hunting show that 47 vessels
                have a Gabon flag. Others fly flags from Panama, Palau and the
                Cook Islands. It’s been reported that Coral usually forges
                documents of origin.
              </p>
            </Col>

            <Col md={8}>
              <p className={`${styles.customPara}`}>
                Despite its statements that it wasn’t trading with Rosneft,
                Coral was doing business with them indirectly. Documents
                obtained by Whale Hunting reveal that in October and November
                2022 the company spent over €100 million on fuel oil from
                Petrokim Trading Middle East and Asia DMCC in Dubai — also known
                as Volition and an affiliated Coral company based in Singapore.
              </p>
              <p className={`${styles.customPara}`}>
                Petrokim also had contracts with Nayara, an Indian petroleum
                company, in which Rosneft is the single largest stakeholder
                owning nearly 50%.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default IndirectBusiness;
