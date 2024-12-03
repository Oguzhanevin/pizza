import React, { useEffect } from "react";
import "./Order.css";

function Order({
  totalPrice,
  tickPrice,
  additionalPrice,
  countUp,
  countDown,
  quantity,
  submitHandler,
}) {
  useEffect(() => {}, []);

  return (
    <div className="order-container">
      <div className="quantity-control">
        <button type="button" onClick={countDown} className="quantity-button">
          -
        </button>
        <p className="quantity-display">{quantity}</p>
        <button type="button" onClick={countUp} className="quantity-button">
          +
        </button>
      </div>
      <div className="order-details">
        <div className="summary">
          <h3 className="summary-title">Sipariş Toplamı</h3>
          <div className="summary-item">
            <h4>Seçimler</h4>
            <p>{additionalPrice}₺</p>
          </div>
          <div className="summary-item">
            <h4>Toplam</h4>
            <p>{(totalPrice + tickPrice + additionalPrice) * quantity}₺</p>
          </div>
        </div>
        <button onClick={submitHandler} id="order-button" className="order-button">
          SİPARİŞ VER
        </button>
      </div>
    </div>
  );
}

export default Order;
