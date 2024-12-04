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
      {/* Adet arttırma/azaltma kontrolleri */}
      <div className="quantity-controls">
        <button
          type="button"
          onClick={countDown}
          className="quantity-button"
          aria-label="Adet azalt"
        >
          -
        </button>
        <p className="quantity-display">{quantity}</p>
        <button
          type="button"
          onClick={countUp}
          className="quantity-button"
          aria-label="Adet artır"
        >
          +
        </button>
      </div>

      {/* Sipariş özeti */}
      <div className="order-summary">
        <div className="order-details">
          <h3 className="summary-title">Sipariş Özeti</h3>
          <div className="summary-row">
            <h4 className="summary-label">Ek Malzemeler</h4>
            <p className="summary-value">{additionalPrice.toFixed(2)}₺</p>
          </div>
          <div className="summary-row">
            <h4 className="summary-label">Toplam Fiyat</h4>
            <p className="summary-value">{finalPrice.toFixed(2)}₺</p>
          </div>
        </div>

        {/* Sipariş Ver Butonu */}
        <button
          type="button"
          onClick={submitHandler}
          id="order-button"
          className="order-submit-button"
          aria-label="Sipariş ver"
        >
          SİPARİŞ VER
        </button>
      </div>
    </div>
  );
}

export default Order;
