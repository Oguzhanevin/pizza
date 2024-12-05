import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../Assets/home-banner.png"; 
import "../style/homepage.css"; // Stil dosyasını dahil ettik

const HomePage = () => {
    let history = useHistory();
  
    function handleSubmit() {
      history.push("/Form"); // "Form" sayfasına yönlendirme
    }

    return (
        <div className="homepage-content">
            {/* Logo'nun görselini doğru yoldan alıyoruz */}
            <img className="homepage-content-img" src={logo} alt="Home Banner" />

            {/* Ana başlık */}
            <h1 className="homepage-content-text">
                KOD ACIKTIRIR 
                <br />
                PİZZA, DOYURUR
            </h1>

            <br />
            {/* "ACIKTIM" butonuna tıklanırsa Form sayfasına yönlendirilir */}
            <button className="homepage-content-btn" onClick={handleSubmit}>ACIKTIM</button>
        </div>
    );
};

export default HomePage;
