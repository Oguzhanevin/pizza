import React from "react";
import "./Order.css"; // CSS dosyasını bağladık

function Order({
  totalPrice = 0,
  tickPrice = 0,
  additionalPrice = 0,
  countUp,
  countDown,
  quantity = 1,
  submitHandler,
}) {
  // Toplam fiyatı hesaplamak için ayrı bir değişken
  const finalPrice = (totalPrice + tickPrice + additionalPrice) * quantity;

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
            <p className="summary-value">{additionalPrice.toFixed(2)}₺</p>
          </div>
          <div className="summary-row">
            <h4 className="summary-label">Toplam</h4>
            <p className="summary-value">{finalPrice.toFixed(2)}₺</p>
          </div>
        </div>
        <button
          type="button"
          onClick={submitHandler}
          id="order-button"
          className="order-submit-button"
        >
          SİPARİŞ VER
        </button>
      </div>
    </div>
  );
}

export default Order;