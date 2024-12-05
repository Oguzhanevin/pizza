import React from "react";
import styled from "styled-components";
import "./Home.css";
import home from "../Assets/Iteration-1-assets/home-banner.png";
import logo from "../Assets/Iteration-1-assets/logo.svg";
import { Link } from "react-router-dom";
import kore from "../Assets/Iteration-2-aseets/icons/1.svg";
import pizza from "../Assets/Iteration-2-aseets/icons/2.svg";
import burger from "../Assets/Iteration-2-aseets/icons/3.svg";
import kızartmalar from "../Assets/Iteration-2-aseets/icons/4.svg";
import fastfood from "../Assets/Iteration-2-aseets/icons/5.svg";
import gazlı from "../Assets/Iteration-2-aseets/icons/6.svg";
import food1 from "../Assets/Iteration-2-aseets/pictures/food-1.png";
import food2 from "../Assets/Iteration-2-aseets/pictures/food-2.png";
import food3 from "../Assets/Iteration-2-aseets/pictures/food-3.png";
import Kart1 from "../Assets/Iteration-2-aseets/cta/kart-1.png";
import Kart2 from "../Assets/Iteration-2-aseets/cta/kart-2.png";
import Kart3 from "../Assets/Iteration-2-aseets/cta/kart-3.png";

const AltBanner = styled.div`
  background-color: #faf7f2;
`;

// Diğer stil bileşenleri...

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
          <img alt="Kızartmalar" src={kızartmalar} /> Kızartmalar
        </StyledNavItem>
        <StyledNavItem>
          <img alt="Fast Food" src={fastfood} />
          Fast food
        </StyledNavItem>
        <StyledNavItem>
          <img alt="Gazlı İçecek" src={gazlı} />
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
        </Banner2>
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
            <img alt="Kızartmalar" src={kızartmalar} />
            French fries
          </Button>
          <Button>
            <img alt="Fast Food" src={fastfood} />
            Fast food
          </Button>
          <Button>
            <img alt="Gazlı İçecek" src={gazlı} />
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
