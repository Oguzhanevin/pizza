import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("./pizza");
  };

  return (
    <>
      <div className="home-header">
        <div>
          <h1 className="home-title">Teknolojik Yemekler</h1>
        </div>
        <div>
          <p className="home-subtitle">fırsatı kaçırma</p>
          <div className="home-main">
            KOD ACIKTIRIR
            <br />
            Pizza, DOYURUR
          </div>
          <button onClick={handleClick} className="home-button">
            ACIKTIM
          </button>
        </div>
        <div className="home-banner">
          <img src="Assets/Iteration-1-assets/home-banner.png" alt="Banner" />
        </div>
      </div>
      <div className="home-menu">
        <div className="home-menu-items">
          <div className="home-menu-item">
            <img src="Assets/Iteration-2-aseets/icons/1.svg" />
            <h1>YENİ! Kore</h1>
          </div>
          <div className="home-menu-item">
            <img src="Assets/Iteration-2-aseets/icons/2.svg" alt="Pizza" />
            <h1>Pizza</h1>
          </div>
          <div className="home-menu-item">
            <img src="Assets/Iteration-2-aseets/icons/3.svg" alt="Burger" />
            <h1>Burger</h1>
          </div>
        </div>
      </div>
      <div className="home-menu">
        <div className="home-menu-items">
          <div className="home-card">
            <img src="Assets/Iteration-2-aseets/pictures/food-1.png" alt="Terminal Pizza" />
            <h3>Terminal Pizza</h3>
            <div className="home-card-info">
              <p>4.9</p>
              <p>(200)</p>
              <p>60₺</p>
            </div>
          </div>
          <div className="home-card">
            <img src="Assets/Iteration-2-aseets/pictures/food-2.png" alt="Position Absolute Pizza" />
            <h3>Position Absolute Pizza</h3>
            <div className="home-card-info">
              <p>4.9</p>
              <p>(928)</p>
              <p>85₺</p>
            </div>
          </div>
          <div className="home-card">
            <img src="Assets/Iteration-2-aseets/pictures/food-3.png" alt="useEffect Burger" />
            <h3>useEffect Burger</h3>
            <div className="home-card-info">
              <p>4.9</p>
              <p>(462)</p>
              <p>75₺</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-footer-content">
          <h1>Teknolojik Yemekler</h1>
          <div className="home-footer-social">
            <img src="src/adv-aseets/icons/twitter.png" alt="Twitter" />
          </div>
        </div>
      </footer>
    </>
  );
}
