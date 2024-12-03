import React from "react";
import "./ReceivingOrders.css";

const ReceivingOrders = ({ sentData }) => {
  return (
    <div className="receiving-orders">
      <div className="orders-container">
        <header className="header">
          <h1>Teknolojik Yemekler</h1>
        </header>
        <div className="order-status">
          <p className="order-tagline">lezzetin yolda</p>
          <h1 className="order-title">SİPARİŞ Alındı</h1>
        </div>
        <div className="order-summary">
          <h2>Position Absolute Acı Pizza</h2>
          <div className="details">
            <p>
              Boyut: <span>{sentData.pizzaSize.toUpperCase()}</span>
            </p>
            <p>
              Hamur: <span>{sentData.pizzaDough.toUpperCase()}</span>
            </p>
            <p>
              Ek Malzemeler:
              <span>
                {sentData.addItems.map((item, index) => (
                  <span key={index}>
                    {item}
                    {index < sentData.addItems.length - 1 ? ", " : ""}
                  </span>
                ))}
              </span>
            </p>
          </div>
        </div>
        <div className="order-total">
          <div className="summary-box">
            <h3>Sipariş Toplamı</h3>
            <div className="cost-detail">
              <p>Seçimler</p>
              <span>{sentData.addItems.length * 5}₺</span>
            </div>
            <div className="cost-detail">
              <p>Toplam</p>
              <span>{sentData.totalBasket}₺</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceivingOrders;
