import React from "react";
import styled from "styled-components";
import "./Footer.css";

// Resim importları
import footerlogo from "../assets/insta/logo-footer.svg";
import icon1 from "../assets/icons/icon-1.png";
import icon2 from "../assets/icons/icon-2.png";
import icon3 from "../assets/icons/icon-3.png";
import Instagram1 from "../assets/insta/li-0.png";
import Instagram2 from "../assets/insta/li-1.png";
import Instagram3 from "../assets/insta/li-2.png";
import Instagram4 from "../assets/insta/li-3.png";
import Instagram5 from "../assets/insta/li-4.png";
import Instagram6 from "../assets/insta/li-5.png";

// Footer stil bileşenleri
const FooterLeft = styled.div`
  display: inline-flex;
  margin-bottom: 10px;
  vertical-align: top;
  
  img {
    width: 25px;
    height: 25px;
  }

  p {
    margin-left: 10px;
    color: white;
  }
`;

const FooterCenter = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  align-items: flex-start;
  vertical-align: top;

  h5 {
    margin-bottom: 30px;
    color: white;
  }

  p {
    color: white;
  }
`;

const FooterRight = styled.div`
  display: inline-flex;
  height: auto;
  flex-wrap: wrap;
  gap: 10px;
  vertical-align: top;
`;

// Footer bileşeni
export default function Footer() {
  return (
    <section className="footer">
      {/* Sol Kısım */}
      <section className="footer-left">
        <img className="footer-logo" src={footerlogo} alt="Footer" />
        <FooterLeft>
          <img src={icon1} alt="Address Icon" />
          <p>341 Londonderry Road, Istanbul Türkiye</p>
        </FooterLeft>
        <FooterLeft>
          <img src={icon2} alt="Email Icon" />
          <p>aciktim@teknolojikyemekler.com</p>
        </FooterLeft>
        <FooterLeft>
          <img src={icon3} alt="Phone Icon" />
          <p>+90 216 123 45 67</p>
        </FooterLeft>
      </section>

      {/* Ortada Menüler */}
      <section className="footer-center">
        <FooterCenter>
          <h5>SICCACIK MENÜLER</h5>
          <p>Terminal Pizza</p>
          <p>5 Kişilik Hackathlon Pizza</p>
          <p>useEffect Tavuklu Pizza</p>
          <p>Beyaz Console Frosty</p>
          <p>Testler Geçti Mutlu Burger</p>
          <p>Position Absolute Acı Burger</p>
        </FooterCenter>
      </section>

      {/* Sağ Kısım Instagram Resimleri */}
      <section className="footer-right">
        <p>Instagram</p>
        <FooterRight>
          <img src={Instagram1} alt="Instagram-1" />
          <img src={Instagram2} alt="Instagram-2" />
          <img src={Instagram3} alt="Instagram-3" />
          <img src={Instagram4} alt="Instagram-4" />
          <img src={Instagram5} alt="Instagram-5" />
          <img src={Instagram6} alt="Instagram-6" />
        </FooterRight>
      </section>
    </section>
  );
}
