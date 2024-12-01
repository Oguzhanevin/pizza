import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/order');
  };

  return (
    <div className="hero">
      <h1>Lezzetli Teknolojik Yemekler</h1>
      <p>En hızlı ve en lezzetli pizzayı buradan sipariş edebilirsiniz!</p>
      <button onClick={handleClick}>Sipariş Ver</button>
    </div>
  );
}

export default Hero;
