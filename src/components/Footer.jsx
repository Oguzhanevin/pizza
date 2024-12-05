import React from "react";
import styled from "styled-components";
import footerlogo from "../Assets/Iteration-2-aseets/footer/logo-footer.svg";
import icon1 from "../Assets/Iteration-2-aseets/footer/icons/icon-1.png";
import icon2 from "../Assets/Iteration-2-aseets/footer/icons/icon-2.png";
import icon3 from "../Assets/Iteration-2-aseets/footer/icons/icon-3.png";
import Instagram1 from "../Assets/Iteration-2-aseets/footer/insta/li-0.png";
import Instagram2 from "../Assets/Iteration-2-aseets/footer/insta/li-1.png";
import Instagram3 from "../Assets/Iteration-2-aseets/footer/insta/li-2.png";
import Instagram4 from "../Assets/Iteration-2-aseets/footer/insta/li-3.png";
import Instagram5 from "../Assets/Iteration-2-aseets/footer/insta/li-4.png";
import Instagram6 from "../Assets/Iteration-2-aseets/footer/insta/li-5.png";

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

export default function Footer() {
  return (
    <section className="footer">
      <section className="footer-left">
        <img className="footer-logo" src={footerlogo} alt="Footer" />
        <FooterLeft>
          <img className="footer-icon-1" src={icon1} alt="Logo" />
          <p>341 Londonderry Road, Istanbul Türkiye</p>
        </FooterLeft>
        <FooterLeft>
          <img className="footer-icon-1" src={icon2} alt="Logo" />
          <p>aciktim@teknolojikyemekler.com</p>
        </FooterLeft>
        <FooterLeft>
          <img className="footer-icon-1" src={icon3} alt="Logo" />
          <p>+90 216 123 45 67</p>
        </FooterLeft>
      </section>

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
