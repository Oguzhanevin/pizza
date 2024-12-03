import React from "react";
import "./Information.css";

function Information({ sentData, formError = {} }) {
  const { textName = "-", orderNote = "-", totalPrice = "-", tickness = "-", selectedItems = [], size = "-", quantity = 1 } = sentData || {};

  return (
    <div className="information-container">
      <h2 className="information-heading">Sipariş Detayları</h2>
      <div className="information-section">
        <h3 className="information-subheading">İsim Soyisim:</h3>
        <p className="information-detail">{textName}</p>
        {formError.fullName && <p className="information-error-text">{formError.fullName}</p>}
      </div>
      <div className="information-section">
        <h3 className="information-subheading">Sipariş Notu:</h3>
        <p className="information-detail">{orderNote}</p>
      </div>
      <div className="information-section">
        <h3 className="information-subheading">Pizza Boyutu:</h3>
        <p className="information-detail">{size}</p>
      </div>
      <div className="information-section">
        <h3 className="information-subheading">Hamur Kalınlığı:</h3>
        <p className="information-detail">{tickness}</p>
      </div>
      <div className="information-section">
        <h3 className="information-subheading">Malzemeler:</h3>
        <ul className="information-list">
          {selectedItems.length > 0 ? (
            selectedItems.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>Seçim yapılmadı</li>
          )}
        </ul>
      </div>
      <div className="information-section">
        <h3 className="information-subheading">Adet:</h3>
        <p className="information-detail">{quantity}</p>
      </div>
      <div className="information-section">
        <h3 className="information-subheading">Toplam Fiyat:</h3>
        <p className="information-detail">{totalPrice !== "-" ? `${totalPrice}₺` : "Hesaplanmadı"}</p>
      </div>
    </div>
  );
}

export default Information;
