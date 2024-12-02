import React from "react";
import "./Order.css"; // CSS dosyasını bağladık

function Order({
  totalPrice,
  tickPrice,
  additionalPrice,
  countUp,
  countDown,
  quantity,
  submitHandler,
}) {
  return (
    <div className="order-container">
      <div className="quantity-controls">
        <button type="button" onClick={countDown} className="quantity-button">
          -
        </button>
        <p className="quantity-display">{quantity}</p>
        <button type="button" onClick={countUp} className="quantity-button">
          +
        </button>
      </div>
      <div className="order-summary">
        <div className="order-details">
          <h3 className="summary-title">Sipariş Toplamı</h3>
          <div className="summary-row">
            <h4 className="summary-label">Seçimler</h4>
            <p className="summary-value">{additionalPrice}₺</p>
          </div>
          <div className="summary-row">
            <h4 className="summary-label">Toplam</h4>
            <p className="summary-value">
              {(totalPrice + tickPrice + additionalPrice) * quantity}₺
            </p>
          </div>
        </div>
        <button onClick={submitHandler} id="order-button">
          SİPARİŞ VER
        </button>
      </div>
    </div>
  );
}

export default Order;
