import React from "react";
import "./Information.css";

function Information({ textValue, textName, orderNote, orderNoteChange, formError }) {
  return (
    <div className="information-container">
      <div className="field-container">
        <h3 className="label">İsim Soyisim :</h3>
        <input
          id="name-input"
          type="text"
          className="input-field"
          placeholder="Siparişi teslim alacak kişi.."
          value={textName}
          onChange={textValue}
        />
        <p className="error-text">{formError.fullName}</p>
      </div>
      <div className="field-container">
        <h3 className="label">Sipariş Notu</h3>
        <input
          id="special-text"
          type="text"
          className="input-field"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          onChange={orderNoteChange}
          value={orderNote}
        />
      </div>
    </div>
  );
}

export default Information;