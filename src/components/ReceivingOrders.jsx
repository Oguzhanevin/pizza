import React from "react";
import "./ReceivingOrders.css";

const ReceivingOrders = ({ sentData }) => {
  if (!sentData) return <div>Yükleniyor...</div>;

  return (
    <div className="receiving-container">
      <div className="receiving-content">
        <div className="receiving-header">
          <h1 className="receiving-title">Teknolojik Yemekler</h1>
          <div className="order-status-section">
            <p className="order-subtitle">Lezzetin Yolda</p>
            <h2 className="order-confirmation">Sipariş Alındı</h2>
          </div>
        </div>
        <div className="pizza-details-section">
          <h3 className="pizza-name">Position Absolute Acı Pizza</h3>
          <div className="pizza-info">
            <p>
              <span>Boyut:</span> <span className="info-value">{sentData.size}</span>
            </p>
            <p>
              <span>Hamur:</span> <span className="info-value">{sentData.tickness}</span>
            </p>
            <p>
              <span>Ek Malzemeler:</span>
              <span className="info-value">
                {sentData.selectedItems.length > 0
                  ? sentData.selectedItems.join(", ")
                  : "Ek malzeme seçilmedi"}
              </span>
            </p>
          </div>
        </div>
        <div className="order-summary-section">
          <h3>Sipariş Toplamı</h3>
          <div className="summary-details">
            <p>
              <span>Seçimler:</span> <span className="summary-value">{sentData.selectedItems.length * 5}₺</span>
            </p>
            <p>
              <span>Toplam:</span> <span className="summary-value">{sentData.totalPrice}₺</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceivingOrders;
