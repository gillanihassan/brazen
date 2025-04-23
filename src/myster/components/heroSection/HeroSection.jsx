import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Image,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroImage from "../../../assets/images/heroSection/HeroSection.png";
import arrowImage from "../../../assets/images/heroSection/arrowDown.png";
import styles from "./styles.module.css";

function MysteryShips() {
  return (
    <div className={`${styles.mainContainer}`}>
      {/* Navbar */}
      <Navbar expand="" className={styles.customNavbar}>
        <Container
          fluid
          className="px-5 d-flex justify-content-between align-items-center position-relative"
        >
          {/* Centered Brand */}
          <Navbar.Brand
            href="#"
            className={`position-absolute start-50 translate-middle-x ${styles.customBrand}`}
          >
            MYSTERY SHIPS
          </Navbar.Brand>

          {/* Toggle on the right */}
          <div className="ms-auto">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
        </Container>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">{/* Nav links */}</Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Title & Scroll Section */}
      <Container fluid className="">
        <Row className="align-items-center mb-5">
          <Col xs={10} sm={10} md={8} className="mt-5">
            <h1 className={`${styles.customHeading}`}>
              RUSSIA’S CORAL <br /> ENERGY OPERATION
            </h1>
          </Col>
          <Col
            xs={2}
            sm={2}
            md={4}
            className="text-end mt-5 d-flex align-items-center justify-content-end"
          >
            <p className={`${styles.customSpan}`}>SCROLL DOWN</p>
            <Image src={arrowImage} className={`${styles.arrowImage}`} />
          </Col>
        </Row>
      </Container>

      <Image src={HeroImage} fluid className={`w-100 ${styles.heroImage}`} />

      {/* Hero Image */}
    </div>
  );
}

export default MysteryShips;
