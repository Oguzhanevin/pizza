import React from 'react';
import './Sizing.css';

function Sizing({ size, handleRadioChange, tickness, optionSelection }) {
  return (
    <div className="sizing-container">
      <div className="sizing-left">
        <h3 className="sizing-title">
          Boyut Seç <span className="required">*</span>
        </h3>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="myRadio"
              value="sm"
              id="small"
              checked={size === 'sm'}
              onChange={handleRadioChange}
            />
            Küçük
          </label>
          <label>
            <input
              type="radio"
              name="myRadio"
              value="md"
              id="medium"
              checked={size === 'md'}
              onChange={handleRadioChange}
            />
            Orta
          </label>
          <label>
            <input
              type="radio"
              name="myRadio"
              value="lg"
              id="large"
              checked={size === 'lg'}
              onChange={handleRadioChange}
            />
            Büyük
          </label>
        </div>
      </div>
      <div className="sizing-right">
        <h3 className="sizing-title">
          Hamur Seç <span className="required">*</span>
        </h3>
        <label>
          <select
            className="tickness-select"
            value={tickness}
            onChange={optionSelection}
            id="ticknessDough"
          >
            <option value="" disabled>
              Hamur Kalınlığı
            </option>
            <option value="normal">Normal</option>
            <option value="thin">İnce</option>
            <option value="cheese">Peynirli</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default Sizing;



