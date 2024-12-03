import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("./pizza");
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">Teknolojik Yemekler</h1>
        <div className="header-subtitle">
          <p className="highlight-text">fırsatı kaçırma</p>
          <h2>KOD ACIKTIRIR<br />Pizza, DOYURUR</h2>
          <button className="order-button" onClick={handleClick}>
            ACIKTIM
          </button>
        </div>
      </header>

      {/* Image Banner */}
      <div className="banner-container">
        <img src="src/Components/banner.png" alt="Banner" />
      </div>

      {/* Category Section */}
      <section className="categories">
        {[
          { src: "src/img/kore.svg", label: "YENİ! Kore" },
          { src: "src/img/pizza.svg", label: "Pizza" },
          { src: "src/img/burger.svg", label: "Burger" },
          { src: "src/img/kizartma.svg", label: "Kızartmalar" },
          { src: "src/img/fast-food.svg", label: "Fast food" },
          { src: "src/img/icecek.svg", label: "Gazlı İçecek" },
        ].map((category, index) => (
          <div key={index} className="category-item">
            <img src={category.src} alt={category.label} />
            <h3>{category.label}</h3>
          </div>
        ))}
      </section>

      {/* Featured Section */}
      <section className="featured-section">
        <div className="featured-card">
          <img src="src/adv-aseets/kart-1.png" alt="Lezzetus" />
          <div className="card-info">
            <h3>Özel Lezzetus</h3>
            <p>Position: Absolute Acı Burger</p>
            <button className="card-button">SİPARİŞ VER</button>
          </div>
        </div>
        {/* Add more cards as needed */}
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h2>Teknolojik Yemekler</h2>
          <p>© 2023 Teknolojik Yemekler</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

