import React from "react";
import { useLocation } from "react-router-dom";
import "./ReceivingOrders.css";

const ReceivingOrders = () => {
  const location = useLocation();
  const { textName, orderNote, pizzaSize, pizzaDough, addItems, quantity, totalBasket } = location.state || {};

  return (
    <div className="receiving-container">
      <div className="receiving-content">
        <div className="receiving-header">
          <h1 className="receiving-title">Teknolojik Yemekler</h1>
          <div className="order-status-section">
            <p className="order-subtitle">Lezzetin yolda</p>
            <h2 className="order-confirmation">SİPARİŞ Alındı</h2>
          </div>
        </div>
        
        <div className="order-details-section">
          <h3 className="order-details-title">Sipariş Detayları</h3>
          <div className="order-info">
            <p><strong>İsim Soyisim:</strong> {textName}</p> {/* Kullanıcı adı burada gösterilecek */}
            <p><strong>Sipariş Notu:</strong> {orderNote || "Belirtilmedi"}</p>
            <p><strong>Pizza Boyutu:</strong> {pizzaSize}</p>
            <p><strong>Hamur Kalınlığı:</strong> {pizzaDough}</p>
            <p><strong>Malzemeler:</strong> {addItems.length > 0 ? addItems.join(", ") : "Ek malzeme seçilmedi"}</p>
            <p><strong>Adet:</strong> {quantity}</p>
            <p><strong>Toplam Fiyat:</strong> {totalBasket}₺</p>
          </div>
        </div>
        
        <div className="thank-you-message">
          <h3>Şu an siparişiniz alındı, yakın bir zamanda lezzetli pizzalarınız yolda olacak!</h3>
        </div>
      </div>
    </div>
  );
};

export default ReceivingOrders;
