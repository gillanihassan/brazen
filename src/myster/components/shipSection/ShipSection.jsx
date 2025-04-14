import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ShipImage from "../../../assets/images/shipImage/shipImage.png";

const ShipSection = () => {
  return (
    <div>
      <Col>
        <Image
          src={ShipImage}
          alt="Namoa Devi Ship"
          className="w-100"
          style={{ height: "857px" }}
        />
      </Col>
    </div>
  );
};

export default ShipSection;
