import React, { useState } from "react";
import "./Information.css";

function Information({ sentData, formError = {}, onDataChange }) {
  const {
    textName = "-",
    orderNote = "-",
    totalPrice = "-",
    tickness = "-",
    selectedItems = [],
    size = "-",
    quantity = 1,
  } = sentData || {};

  // State for editing
  const [editedTextName, setEditedTextName] = useState(textName);
  const [editedOrderNote, setEditedOrderNote] = useState(orderNote);

  const handleTextNameChange = (e) => {
    setEditedTextName(e.target.value);
    if (onDataChange) {
      onDataChange("textName", e.target.value); // Notify parent component for update
    }
  };

  const handleOrderNoteChange = (e) => {
    setEditedOrderNote(e.target.value);
    if (onDataChange) {
      onDataChange("orderNote", e.target.value); // Notify parent component for update
    }
  };

  return (
    <div className="information-container">
      <h2 className="information-heading">Sipariş Detayları</h2>
      <div className="information-section">
        <h3 className="information-subheading">İsim Soyisim:</h3>
        <input
          className="information-input"
          type="text"
          value={editedTextName}
          onChange={handleTextNameChange}
        />
        {formError.fullName && <p className="information-error-text">{formError.fullName}</p>}
      </div>
      <div className="information-section">
        <h3 className="information-subheading">Sipariş Notu:</h3>
        <textarea
          className="information-input"
          value={editedOrderNote}
          onChange={handleOrderNoteChange}
        />
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
