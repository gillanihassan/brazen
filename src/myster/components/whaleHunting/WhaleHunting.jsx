import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import boatOne from "../../../assets/images/whale/boatOne.png";
import boatTwo from "../../../assets/images/whale/boatTwo.png";
import boatThree from "../../../assets/images/whale/boatThree.png";
import boatFour from "../../../assets/images/whale/boatFour.png";
import boatFive from "../../../assets/images/whale/boatFive.png";

function WhaleHunting() {
  return (
    <Container fluid className={`p-4 ${styles.mainDiv}`}>
      <Row>
        {/* Left Column */}
        <Col md={7} className="p-3 ">
          <h1 className={`${styles.customHeading}`}>WHALE HUNTING</h1>

          {/* Here you can replace this div with your image content */}
          <div className={`${styles.boatDiv}`}>
            <div className="d-flex align-items-center mb-3">
              <div className={`${styles.bgPrimaryOne}`}></div>
              <Image src={boatOne} className={`${styles.customImage}`} />
            </div>

            <div className="d-flex align-items-center mb-3">
              <div className={`${styles.bgPrimaryTwo}`}></div>
              <Image src={boatTwo} className={`${styles.customImage}`} />
            </div>

            <div className="d-flex align-items-center mb-3">
              <div className={`${styles.bgPrimaryThree}`}></div>
              <Image src={boatThree} className={`${styles.customImage}`} />
            </div>

            <div className="d-flex align-items-center mb-3">
              <div className={`${styles.bgPrimaryFour}`}></div>
              <Image src={boatFour} className={`${styles.customImage}`} />
            </div>

            <div className="d-flex align-items-center mb-3">
              <div className={`${styles.bgPrimaryFive}`}></div>
              <Image src={boatFive} className={`${styles.customImage}`} />
            </div>
          </div>
        </Col>

        {/* Right Column */}
        <Col md={5} className=" d-flex flex-column align-items-end">
          <div style={{ maxWidth: "555px" }}>
            <p className={`${styles.customPara}`}>
              Whale Hunting has also viewed dozens of internal documents which
              show how Coral and its key players have kept the Russian oil
              shipping market afloat despite their statements to the contrary —
              and has been working indirectly with Rosneft. Coral controls
              approximately 125 vessels, a number higher than previously
              reported. None of the ships bear the Russian flag.
            </p>
            <p className={`${styles.customPara}`}>
              While Coral might be shadowy, the lifestyle of its traders, many
              of whom are related, is not. They travel by private jet and hang
              out between the suburbs of Geneva in Switzerland and the
              skyscrapers of Dubai.
            </p>
            <p className={`${styles.customPara}`}>
              To understand the significance of Coral, one has to understand
              Russia’s complete dependence on oil. It is a linchpin of its
              economy, and oil exports generate substantial foreign currency,
              giving the Kremlin considerable influence over global trade.
              Estimates suggest that oil profits contribute to up to half of the
              Russian government’s annual revenue.
            </p>
            <p className={`${styles.customPara}`}>
              The world depends on it too: if Russian oil were to disappear, the
              short-term effects would be felt nearly everywhere. Demand would
              outstrip supply, and the cost of everyday purchases would soar.
            </p>
            <p className={`${styles.customPara}`}>
              When Ukraine was invaded in February 2022, Western governments had
              a difficult decision to make: how to punish Russia for its
              aggression without impacting the global economy.
            </p>
            <p className={`${styles.customPara}`}>
              The result was a variety of different sanctions, largely price
              caps which sought to dwindle the Kremlin’s resources. But the
              Russians found roundabout ways to supply oil through dark fleets,
              with Coral leading the charge.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default WhaleHunting;
