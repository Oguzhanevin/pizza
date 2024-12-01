import React from 'react';
import { Link } from 'react-router-dom';
import SuccessImage from '../Interfaces/Success.png';  // Resim yolunu güncelledim

const OrderConfirmation = () => {
  return (
    <div className="confirmation" style={{ textAlign: 'center', margin: '50px' }}>
      <img src={SuccessImage} alt="Success" style={{ maxWidth: '100%', borderRadius: '10px' }} />
      <h2>Siparişiniz Başarıyla Alındı!</h2>
      <p>En kısa sürede pizzanız hazır!</p>
      <Link to="/order">
        <button>Sipariş Ver</button>
      </Link>
    </div>
  );
};

export default OrderConfirmation;
