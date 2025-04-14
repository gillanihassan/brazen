import { Container, Row, Col, Image } from "react-bootstrap";
import person from "../../../assets/images/trade/person.png";
import mapOne from "../../../assets/images/trade/mapOne.png";
import mapTwo from "../../../assets/images/trade/mapTwo.png";
import styles from "./styles.module.css";

export default function Trade() {
  return (
    <div style={{ backgroundColor: "#D9D9D9" }}>
      <Container fluid className={`p-5 ${styles.mainContainer}`}>
        {/* Top Row with 3 columns */}
        <Row>
          {/* Column 1 */}
          <Col md={4}>
            <Image src={person} alt="Person" className={`${styles.imageOne}`} />
            <div className={`${styles.paraDiv}`}>
              <p className={`${styles.customPara}`}>
                But later in 2023, as Garayev was holding meetings with Rosneft
                officials,the dark fleet operation was coming under increasing
                pressure. In November, shipowner Tonzip Maritime brought a
                million dollar claim against Coral in California. It claimed
                that Coral had chartered a vessel which was shipping oil from a
                company linked to Russian oil tycoon Mikhail Gutseriev, who is
                sanctioned by the EU for his ties to Belarus. Coral leadership
                had built a close relationship with Gutseriev.
              </p>
              <p className={`${styles.customPara}`}>
                In December, the U.S. sanctioned two Coral affiliated entities
                Volition DMCC and Bellatrix Energy Limited. The Treasury said
                that Bellatrix had “sharply increased its share of the trade
                since the price cap policy was implemented.”
              </p>
              <p className={`${styles.customPara}`}>
                An investigation by Le Monde recently found that between
                February 2023 and Feburary 2024 at least 41 cargoes of petroleum
                oil were sold by Coral to Swiss oil trading giant Trafigura
                Group, now headquartered in Singapore — and may have violated
                European and American sanctions, exceeding the price caps. Whale
                Hunting can also reveal that Coral and Trafigura have a close
                relationship and have even shared employees.
              </p>
              <p className={`${styles.customPara}`}>
                There’s one man with a lot of overlap named Otabek Karimov. A
                former top executive of Rosneft, he left in May 2022. Allegedly,
                he is responsible for building and running Coral’s trading
                operations. He then was hired by Trafigura in Dubai this June.
              </p>
            </div>
          </Col>

          {/* Column 2 */}
          <Col md={4}>
            <Image src={mapOne} alt="Map" className={`${styles.mapOne}`} />

            <div
              style={{
                textAlign: "center",
                marginTop: "5rem",
                borderLeft: "3px solid #E56028",
              }}
            >
              <h2 className={`${styles.headingOne}`}>
                russian ports of origin
              </h2>
              <p className={`${styles.paraOne}`}>
                Primorsk | Tuapse | Ust Luga
              </p>
            </div>
          </Col>

          <Col md={4}>
            <Image src={mapTwo} alt="Map" className={`${styles.mapTwo}`} />

            <div
              style={{
                textAlign: "center",
                marginTop: "5rem",
                borderLeft: "3px solid #376BD1",
              }}
            >
              <h2 className={`${styles.headingTwo}`}>
                COUNTRIES OF DESTINATION
              </h2>
              <p className={`${styles.paraTwo}`}>
                India | Greeece | Ghana <br /> China | Saudi Arabia | Benin
              </p>
            </div>
          </Col>

          {/* Column 3 */}
        </Row>
      </Container>
    </div>
  );
}
