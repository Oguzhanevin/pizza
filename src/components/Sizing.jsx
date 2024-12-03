import React from "react";
import "./Sizing.css";

function Sizing({ size, handleRadioChange, tickness, optionSelection }) {
  return (
    <div className="sizing-container">
      <div className="size-selection">
        <h3>
          Boyut Seç <span className="required">*</span>
        </h3>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="sizeRadio"
              value="sm"
              id="small"
              checked={size === "sm"}
              onChange={handleRadioChange}
            />
            Küçük
          </label>
          <label>
            <input
              type="radio"
              name="sizeRadio"
              value="md"
              id="medium"
              checked={size === "md"}
              onChange={handleRadioChange}
            />
            Orta
          </label>
          <label>
            <input
              type="radio"
              name="sizeRadio"
              value="lg"
              id="large"
              checked={size === "lg"}
              onChange={handleRadioChange}
            />
            Büyük
          </label>
        </div>
      </div>
      <div className="dough-selection">
        <h3>
          Hamur Seç <span className="required">*</span>
        </h3>
        <select
          value={tickness}
          onChange={optionSelection}
          id="ticknessDough"
          className="dough-dropdown"
        >
          <option value="" disabled>
            Hamur Kalınlığı
          </option>
          <option value="normal">Normal</option>
          <option value="thin">İnce</option>
          <option value="cheese">Peynirli</option>
        </select>
      </div>
    </div>
  );
}

export default Sizing;



