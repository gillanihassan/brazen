import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Image,
} from "react-bootstrap";
import HeroImage from "../../../assets/images/heroSection/HeroSection.png";

function MysteryShips() {
  return (
    <div
      style={{ backgroundColor: "#3273dc", minHeight: "100vh", color: "white" }}
    >
      {/* Navbar */}
      <Navbar expand="lg" className="bg-light">
        <Container>
          <Navbar.Brand
            href="#"
            style={{ fontWeight: "bold", letterSpacing: "2px" }}
          >
            MYSTERY SHIPS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="#">
                <span style={{ fontSize: "24px" }}>☰</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Title Section */}
      <Container fluid>
        <Row>
          <Col md={8}>
            <h1
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                lineHeight: "1.2",
              }}
            >
              RUSSIA’S CORAL
              <br />
              ENERGY OPERATION
            </h1>
          </Col>
          {/* <Col md={4} className="d-flex align-items-center justify-content-end">
            <Button
              variant="outline-light"
              style={{ borderRadius: "50%", padding: "15px 20px" }}
            >
              ↓
            </Button>
          </Col> */}
        </Row>
      </Container>

      {/* Image Section */}
      <Container fluid className="p-0">
        <div
          style={{
            position: "relative",
            textAlign: "center",
            color: "black",
          }}
        >
          <Image src={HeroImage} alt="Ship" style={{ width: "1366px" }} fluid />
          <h1
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "70px",
              fontWeight: "bold",
              letterSpacing: "4px",
            }}
          >
            MYSTERY SHIPS
          </h1>
        </div>
      </Container>
    </div>
  );
}

export default MysteryShips;
