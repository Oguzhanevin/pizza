import React from "react";
import styled from "styled-components";
import "./Home.css";
import home from "../assets/pictures/home-banner.png";
import logo from "../assets/pictures/logo.svg";
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

const AltBannerContainer = styled.div`
  background-color: #faf7f2;
  padding: 30px 0;
`;

const MenuHeader = styled.p`
  color: #ce2829;
  font-size: 25px;
  font-family: "Satisfy", sans-serif;
  margin-bottom: 20px;
`;

const MenuTitle = styled.h2`
  color: #292929;
  font-weight: bold;
  margin-bottom: 30px;
`;

const MenuNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const MenuButton = styled.button`
  background-color: white;
  padding: 5px 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  border: 2px solid transparent;

  &:hover {
    background-color: #292929;
    color: white;
    border-color: #292929;
  }

  img {
    margin-right: 10px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const StyledCard = styled(Card)`
  width: 21rem;
  height: 27rem;
  border-color: #faf7f2;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    border-radius: 10px;
  }

  .card-p {
    font-size: 18px;
    margin-top: 10px;
  }

  span {
    font-size: 14px;
    margin-right: 5px;
  }
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 30px;

  img {
    width: 500px;
    height: 400px;
    border-radius: 8px;
  }
`;

const BannerText = styled.div`
  text-align: left;
  color: #faf7f2;

  h2 {
    font-size: 40px;
    font-family: "Quattrocento", sans-serif;
  }

  p {
    font-size: 16px;
    margin-top: 10px;
  }

  a {
    background-color: #ce2829;
    color: white;
    padding: 10px 30px;
    border-radius: 30px;
    text-decoration: none;

    &:hover {
      background-color: #a02121;
    }
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
          <h1>KOD ACIKTIRIR PİZZA, DOYURUR</h1>
          <button>
            <Link to="/order">ACIKTIM</Link>
          </button>
        </div>
      </div>

      <AltBannerContainer>
        <MenuHeader>en çok paketlenen menüler</MenuHeader>
        <MenuTitle>Acıktıran Kodlara Doyuran Lezzetler</MenuTitle>
        <MenuNav>
          <MenuButton>
            <img alt="Kore" src={kore} />
            Ramen
          </MenuButton>
          <MenuButton>
            <img alt="Pizza" src={pizza} />
            Pizza
          </MenuButton>
          <MenuButton>
            <img alt="Burger" src={burger} />
            Burger
          </MenuButton>
          <MenuButton>
            <img alt="Kızartmalar" src={kızartmalar} />
            French fries
          </MenuButton>
          <MenuButton>
            <img alt="Fastfood" src={fastfood} />
            Fast food
          </MenuButton>
          <MenuButton>
            <img alt="Gazlı İçecek" src={gazlı} />
            Soft drinks
          </MenuButton>
        </MenuNav>

        <CardContainer>
          <StyledCard>
            <img alt="Sample" src={food1} />
            <CardBody>
              <h5>Terminal Pizza</h5>
              <span>4.9</span>
              <span>(200)</span>
              <p className="card-p">
                <b>85.5 ₺</b>
              </p>
            </CardBody>
          </StyledCard>
          <StyledCard>
            <img alt="Sample" src={food2} />
            <CardBody>
              <h5>Position Absolute Acı Pizza</h5>
              <span>4.9</span>
              <span>(200)</span>
              <p className="card-p">
                <b>85.5 ₺</b>
              </p>
            </CardBody>
          </StyledCard>
          <StyledCard>
            <img alt="Sample" src={food3} />
            <CardBody>
              <h5>useEffect Tavuklu Burger</h5>
              <span>4.9</span>
              <span>(200)</span>
              <p className="card-p">
                <b>85.5 ₺</b>
              </p>
            </CardBody>
          </StyledCard>
        </CardContainer>
      </AltBannerContainer>
    </>
  );
}
