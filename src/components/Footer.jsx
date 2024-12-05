import { Col, Row } from "reactstrap";

export default function Footer() {
  const addressDetails = [
    {
      icon: "Assets/Iteration-2-aseets/footer/icons/icon-1.png",
      text: "341 Londonerry Road, İstanbul Türkiye",
    },
    {
      icon: "Assets/Iteration-2-aseets/footer/icons/icon-2.png",
      text: "aciktim@teknolojikyemekler.com",
    },
    {
      icon: "Assets/Iteration-2-aseets/footer/icons/icon-3.png",
      text: "+90 216 123 45 67",
    },
  ];

  const menuItems = [
    "Terminal Pizza",
    "5 Kişilik Hackathlon Pizza",
    "useEffect Tavuklu Pizza",
    "Beyaz Console Frosty",
    "Testler Geçti Mutlu Burger",
    "Position Absolute Acı Burger",
  ];

  const instagramImages = [
    "Assets/Iteration-2-aseets/footer/insta/li-0.png",
    "Assets/Iteration-2-aseets/footer/insta/li-1.png",
    "Assets/Iteration-2-aseets/footer/insta/li-2.png",
    "Assets/Iteration-2-aseets/footer/insta/li-3.png",
    "Assets/Iteration-2-aseets/footer/insta/li-4.png",
    "Assets/Iteration-2-aseets/footer/insta/li-5.png",
  ];

  return (
    <Row className="footer-section g-0">
      {/* Contact Section */}
      <Col className="footer-contact">
        <img
          className="footer-logo"
          src="Assets/Iteration-2-aseets/logo.svg"
          alt="Logo"
        />
        {addressDetails.map((detail, index) => (
          <Col className="my-4" key={index}>
            <img className="home-icons" src={detail.icon} alt={`Icon ${index}`} />
            <span>{detail.text}</span>
          </Col>
        ))}
      </Col>

      {/* Menu Section */}
      <Col className="footer-menu">
        <h3 className="menu-title">Hot Menu</h3>
        {menuItems.map((item, index) => (
          <Col className="my-2" key={index}>
            <span>{item}</span>
          </Col>
        ))}
      </Col>

      {/* Instagram Section */}
      <Col className="footer-instagram">
        <h3 className="instagram-title">Instagram</h3>
        <Row className="my-2">
          {instagramImages.map((image, index) => (
            <Col className="image-list m-1 mx-auto" key={index}>
              <img src={image} alt={`Instagram ${index}`} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}
