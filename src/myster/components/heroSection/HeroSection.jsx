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
        <Container className="d-flex justify-content-center align-items-center">
          <div className=""></div> {/* Empty left space */}
          <Navbar.Brand href="#" className={`mx-auto ${styles.customBrand}`}>
            MYSTERY SHIPS
          </Navbar.Brand>
          <div className="w-33 d-flex justify-content-end">
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
          <Col md={8} className="mt-5">
            <h1 className={`${styles.customHeading}`}>
              RUSSIA’S CORAL <br /> ENERGY OPERATION
            </h1>
          </Col>
          <Col md={4} className="text-end mt-5 ">
            <div className="mt-5">
              <span className={`${styles.customSpan}`}>SCROLL DOWN</span>
              <Image src={arrowImage} className={`${styles.arrowImage}`} />
            </div>
          </Col>
        </Row>
      </Container>

      <Image src={HeroImage} fluid className={`w-100 ${styles.heroImage}`} />

      {/* Hero Image */}
    </div>
  );
}

export default MysteryShips;
