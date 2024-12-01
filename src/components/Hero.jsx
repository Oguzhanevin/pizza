import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeImage from '../Interfaces/Home.png';  // Resim yolunu güncelledim
import './Hero.css';

function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/order');
  };

  return (
    <div className="hero">
      <img src={HomeImage} alt="Home" className="hero-image" />
      <h1>Lezzetli Teknolojik Yemekler</h1>
      <p>En hızlı ve en lezzetli pizzayı buradan sipariş edebilirsiniz!</p>
      <button onClick={handleClick}>Sipariş Ver</button>
    </div>
  );
}

export default Hero;
