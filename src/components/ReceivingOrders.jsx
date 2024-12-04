import React from "react";
import "./ReceivingOrders.css";

const ReceivingOrders = ({ sentData }) => {
  if (!sentData) return <p>Sipariş bilgisi bulunamadı!</p>;

  const { textName, orderNote, totalPrice, tickness, size, quantity, selectedItems } = sentData;

  return (
    <div className="receiving-container">
      <div className="receiving-content">
        <h1>Teknolojik Yemekler</h1>
        <h2>Sipariş Alındı</h2>
        <p>Lezzetin yolda!</p>

        <div className="order-summary">
          <h3>Pizza Detayları</h3>
          <p><strong>İsim:</strong> {textName}</p>
          <p><strong>Not:</strong> {orderNote}</p>
          <p><strong>Boyut:</strong> {size}</p>
          <p><strong>Hamur:</strong> {tickness}</p>
          <p><strong>Adet:</strong> {quantity}</p>
          <p><strong>Ek Malzemeler:</strong> {selectedItems.length > 0 ? selectedItems.join(", ") : "Ek malzeme seçilmedi"}</p>
          <h4>Toplam Fiyat: {totalPrice}₺</h4>
        </div>
      </div>
    </div>
  );
};

export default ReceivingOrders;
