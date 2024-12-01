import React from 'react';
import { Link } from 'react-router-dom';
import SuccessImage from "../../Interfaces/Iteration-1/Success.png"; // Resim yolu güncellendi

const OrderConfirmation = () => {
  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <img src={SuccessImage} alt="Success" style={{ width: "100%" }} />
      <h2>Siparişiniz Başarıyla Alındı!</h2>
      <p>En kısa sürede pizzanız hazır!</p>
      <Link to="/order">
        <button>Sipariş Ver</button>
      </Link>
    </div>
  );
};

export default OrderConfirmation;
