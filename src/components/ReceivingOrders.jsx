import React from "react";
import { useLocation } from "react-router-dom";
import "./ReceivingOrders.css";

const ReceivingOrders = () => {
  const location = useLocation();
  const sentData = location.state?.sentData || {};

  const {
    textName = "-",
    pizzaSize = "-",
    pizzaDough = "-",
    addItems = [],
    totalBasket = "-",
  } = sentData;

  return (
    <div className="receiving-container">
      <div className="receiving-content">
        <div className="receiving-header">
          <h1 className="receiving-title">Teknolojik Yemekler</h1>
          <div className="order-status-section">
            <p className="order-subtitle">Lezzetin yolda</p>
            <h2 className="order-confirmation">SİPARİŞ ALINDI</h2>
          </div>
        </div>
        <div className="pizza-details-section">
          <h3 className="pizza-name">{textName}</h3>
          <div className="pizza-info">
            <p>
              <span>Boyut:</span> <span className="info-value">{pizzaSize}</span>
            </p>
            <p>
              <span>Hamur:</span> <span className="info-value">{pizzaDough}</span>
            </p>
            <p>
              <span>Ek Malzemeler:</span>
              <span className="info-value">
                {addItems.length > 0 ? addItems.join(", ") : "Ek malzeme seçilmedi"}
              </span>
            </p>
          </div>
        </div>
        <div className="order-summary-section">
          <h3>Sipariş Toplamı</h3>
          <div className="summary-details">
            <p>
              <span>Toplam:</span> <span className="summary-value">{totalBasket}₺</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceivingOrders;