import React from "react";
import styled from "styled-components";
import "./Home.css";
import home from "../assets/home-banner.png";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import kore from "../assets/icons/1.svg";
import pizza from "../assets/icons/2.svg";
import burger from "../assets/icons/3.svg";
import kızartmalar from "../assets/icons/4.svg";
import fastfood from "../assets/icons/5.svg";
import gazlı from "../assets/icons/6.svg";
import food1 from "../assets/pictures/food-1.png";
import food2 from "../assets/pictures/food-2.png";
import food3 from "../assets/pictures/food-3.png";
import { Card, CardBody } from "reactstrap";

import Kart1 from "../assets/cta/kart-1.png";
import Kart2 from "../assets/cta/kart-2.png";
import Kart3 from "../assets/cta/kart-3.png";

const AltBanner = styled.div`
  background-color: #faf7f2;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 120px;
  margin-top: 35px;
  margin-bottom: 10px;
`;

const StyledNavItem = styled.div`
  color: #292929;
  font-weight: bold;
  gap: 30px;
  img {
    margin-right: 5px;
  }
`;
const PrefferedMenu = styled.p`
  color: #ce2829;
  margin-top: 30px;
  text-align: center;
  font-size: 25px;
  font-family: "Satisfy", sans-serif !important;
`;
const Lezzetler = styled.h2`
color: #292929
margin-top: 30px;
font-weight: bold;
`;

const Button = styled.button`
  background-color: white;
  padding: 5px 20px;
  border-radius: 30px;

  &:hover,
  &:focus,
  &:active {
    background-color: #292929;
    border-color: #292929;
    color: white;
  }

  img {
    margin-right: 10px;
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
`;

const StyledCardTitle = styled.p`
  text-align: left;
  font-weight: bold;
  color: #292929;
`;

const SiparisButton = styled.button`
  background-color: #faf7f2;
  padding: 8px 40px;
  font-size: 0.8em;
  border: none;
  border-radius: 30px;
  a {
    color: #ce2829;
    text-decoration: none;
    -webkit-text-stroke: medium;
  }
`;

const SiparisButton1 = styled.button`
  background-color: #faf7f2;
  padding: 3px 30px;
  font-size: 0.8em;
  border: none;
  border-radius: 30px;
  margin-left: -65px;
  a {
    color: #ce2829;
    text-decoration: none;
    -webkit-text-stroke: medium;
  }
`;

const SiparisButton2 = styled.button`
  background-color: #faf7f2;
  padding: 3px 30px;
  font-size: 0.8em;
  border: none;
  border-radius: 30px;
  margin-left: -65px;
  margin-bottom: 38px;
  a {
    color: #ce2829;
    text-decoration: none;
    -webkit-text-stroke: medium;
  }
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-right: 2%;
  margin-left: 20%;
  img {
    width: 500px;
    height: 400px;
    border-radius: 8px;
  }
`;

const Banner2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  margin-top: 50px;
  margin-left: auto;

  img {
    margin-bottom: 20px;
    width: 450px;
    height: 190px;
    border-radius: 8px;
  }
`;

const BannerImage1 = styled.div`
  margin-right: 60px;
  position: absolute;
  margin-right: 16%;
  margin-top: 4%;
  text-align: left;
  color: #faf7f2;
  text-weight: bold;
  p {
    font-size: 16px;
  }
  h2 {
    font-size: 40px;
    font-family: "Quattrocento";
  }
`;

const BannerImage2 = styled.div`
  margin-left: 60px;
  position: absolute;
  margin-top: 18%;
  margin-right: 20px;

  p {
    color: #black;
    font-size: 20px;
    width: 154px;
    height: 58px;
    margin-left: -25px;
    margin-top: -230%;
    font-weight: bold;
  }
`;

const BannerImage3 = styled.div`
  margin-left: 60px;
  position: absolute;
  margin-top: 18%;
  margin-right: 20px;
  p {
    color: #faf7f2;
    font-size: 20px;
    width: 150px;
    height: 50px;
    margin-left: -25px;
    margin-bottom: 45%;
    font-weight: bold;
  }

  span {
    color: #ce2829;
    font-weight: bold;
  }
`;

export default function Home() {
  return (
    <>
      <div className="home-image">
        <img className="fullscreen-image" src={home} alt="Home Banner" />
        <div className="overlay">
          <img src={logo} alt="Logo" />
          <p className="firsat">fırsatı kaçırma</p>
          <h1>KOD ACIKTIRIR PİZZA,DOYURUR</h1>
          <button>
            <Link to="/order">ACIKTIM</Link>
          </button>
        </div>
      </div>

      <StyledNav pills>
        <StyledNavItem>
          <img alt="Kore" src={kore} />
          YENİ! Kore
        </StyledNavItem>
        <StyledNavItem>
          <img alt="Pizza" src={pizza} /> Pizza
        </StyledNavItem>
        <StyledNavItem>
          <img alt="Burger" src={burger} /> Burger
        </StyledNavItem>
        <StyledNavItem>
          <img alt="Burger" src={kızartmalar} /> Kızartmalar
        </StyledNavItem>
        <StyledNavItem>
          <img alt="Burger" src={fastfood} />
          Fast food
        </StyledNavItem>
        <StyledNavItem>
          <img alt="Burger" src={gazlı} />
          Gazlı İçecek
        </StyledNavItem>
      </StyledNav>

      <div style={{ display: "flex", maxInlineSize: "fit-content" }}>
        <Banner>
          <img alt="Kart1" src={Kart1} />
          <BannerImage1>
            <h2>Özel Lezzetus</h2>
            <p>Position Absolute Acı Pizza</p>
            <SiparisButton>
              <Link to="/order">SİPARİŞ VER</Link>
            </SiparisButton>
          </BannerImage1>
        </Banner>
        <Banner2>
          <img alt="Kart2" src={Kart2} />
          <BannerImage2>
            <p>Hackathlon Burger Menü</p>
            <SiparisButton1>
              <Link to="/order">SİPARİŞ VER</Link>
            </SiparisButton1>
          </BannerImage2>

          <img alt="Kart3" src={Kart3} />
          <BannerImage3>
            <p>
              <span>Çoooook</span> hızlı npm gibi kurye
            </p>
            <SiparisButton2>
              <Link to="/order">SİPARİŞ VER</Link>
            </SiparisButton2>
          </BannerImage3>
        </Banner2>{" "}
      </div>

      <AltBanner>
        <PrefferedMenu>en çok paketlenen menüler</PrefferedMenu>
        <Lezzetler>Acıktıran Kodlara Doyuran Lezzetler</Lezzetler>

        <StyledNav pills>
          <Button>
            <img alt="Kore" src={kore} />
            Ramen
          </Button>
          <Button>
            <img alt="Pizza" src={pizza} />
            Pizza
          </Button>
          <Button>
            <img alt="Burger" src={burger} />
            Burger
          </Button>
          <Button>
            <img alt="Burger" src={kızartmalar} />
            French fries
          </Button>
          <Button>
            <img alt="Burger" src={fastfood} />
            Fast food
          </Button>
          <Button>
            <img alt="Burger" src={gazlı} />
            Soft drinks
          </Button>
        </StyledNav>

        <StyledCardContainer style={{ marginBottom: "30px" }}>
          <Card
            style={{
              width: "21rem",
              height: "27rem",
              borderColor: "#FAF7F2",
            }}
          >
            <img alt="Sample" src={food1} />
            <CardBody>
              <StyledCardTitle tag="h5">Terminal Pizza</StyledCardTitle>
              <span>4.9</span>
              <span>(200)</span>
              <p className="card-p">
                <b>85.5 ₺</b>
              </p>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "21rem",
              height: "27rem",
              borderColor: "#FAF7F2",
            }}
          >
            <img alt="Sample" src={food2} />
            <CardBody>
              <StyledCardTitle tag="h5">
                Position Absolute Acı Pizza
              </StyledCardTitle>
              <span>4.9</span>
              <span>(200)</span>
              <p className="card-p">
                <b>85.5 ₺</b>
              </p>
            </CardBody>
          </Card>

          <Card
            style={{
              width: "21rem",
              height: "27rem",
              borderColor: "#FAF7F2",
            }}
          >
            <img alt="Sample" src={food3} />
            <CardBody>
              <StyledCardTitle tag="h5">
                useEffect Tavuklu Burger
              </StyledCardTitle>
              <span>4.9</span>
              <span>(200)</span>
              <p className="card-p">
                <b>85.5 ₺</b>
              </p>
            </CardBody>
          </Card>
        </StyledCardContainer>
      </AltBanner>
    </>
  );
}