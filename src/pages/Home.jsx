import { useState } from "react";
import { Container, Row, Col, Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import MenuButtons from "../components/MenuButtons";
import MenuCard from "../components/MenuCard";

export default function Home() {
  const [category, setCategory] = useState("pizza");

  const handleCategory = (category) => {
    setCategory(category);
  };

  const homeBannerStyle = {
    height: "40rem",
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url("./assets/mile1-assets/home-banner.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
  };

  return (
    <Container fluid className="home-container">
      {/* Banner Section */}
      <Row className="g-0" style={homeBannerStyle}>
        <img className="home-logo" src="./assets/mile1-assets/logo.svg" alt="Logo" style={{ marginTop: "2.5rem" }} />
        <Row style={{ height: "70%" }}>
          <Col className="home-header-section">
            <h4 className="h4-home-1">fırsatı kaçırma</h4>
            <h2 className="h2-home">KOD ACIKTIRIR<br />PIZZA, DOYURUR</h2>
            <Link to="/order">
              <button className="button-banner">ACIKTIM</button>
            </Link>
          </Col>
        </Row>
      </Row>

      {/* Icon Section */}
      <Row className="icon-section g-0 mx-auto">
        {["Kore", "Pizza", "Burger", "Kızartmalar", "Fast Food", "Gazlı İçecek"].map((item, index) => (
          <Col key={index}>
            <img className="home-icons" src={`./assets/mile2-aseets/icons/${index + 1}.svg`} alt={`${item} Icon`} />
            <span className="icon-text">{item}</span>
          </Col>
        ))}
      </Row>

      {/* Main Section */}
      <Row className="main-section g-0">
        <Container style={{ width: "110rem" }}>
          {/* Campaign Section */}
          <Row className="campaign-section">
            <Col>
              <Card inverse style={{ display: "flex", position: "relative" }}>
                <CardImg alt="Card image cap" src="./assets/mile2-aseets/cta/kart-1.png" style={{ height: "25rem" }} />
                <CardImgOverlay className="campaign-card" style={{ width: "53%", position: "absolute" }}>
                  <CardTitle tag="h1" className="campaign-card-title">Özel Lezzettus</CardTitle>
                  <CardText>Position:Absolute Acı Burger</CardText>
                  <Link to="/order">
                    <button className="button-campaign">SİPARİŞ VER</button>
                  </Link>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col>
              {[2, 3].map((index) => (
                <Row key={index} className="g-0">
                  <Card inverse>
                    <CardImg
                      alt={`Card image cap ${index}`}
                      src={`./assets/mile2-aseets/cta/kart-${index}.png`}
                      style={{ height: "12.5rem" }}
                    />
                    <CardImgOverlay className="campaign-card" style={{ width: "50%", position: "absolute" }}>
                      <CardTitle tag="h3">{index === 2 ? "Hackathlon Burger Menü" : "Çoooook hızlı npm gibi kurye"}</CardTitle>
                      <Link to="/order">
                        <button className="button-campaign">SİPARİŞ VER</button>
                      </Link>
                    </CardImgOverlay>
                  </Card>
                </Row>
              ))}
            </Col>
          </Row>

          {/* Menu Section */}
          <Row style={{ marginTop: "5rem" }}>
            <h4 className="h4-home-2" style={{ color: "#CE2829" }}>en çok paketlenen menüler</h4>
            <h3 className="h3-home">Acıktıran Kodlara Doyuran Lezzetler</h3>
          </Row>
          <MenuButtons handleCategory={handleCategory} />
          <Row className="menu-cards g-0">
            <MenuCard category={category} />
          </Row>
        </Container>
      </Row>

      {/* Footer */}
      <Footer />
    </Container>
  );
}
