import React from "react";
import "./Extra.css";

function Extra({ handleItemSelection, selectedItems, formError }) {
  return (
    <>
      <div className="extra-header">
        <h3>Ek Malzemeler</h3>
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <p className="error">{formError.addItems}</p>
      </div>
      <div className="extra-options">
        {[
          "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan",
          "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber",
          "Salam", "Ananas", "Kabak"
        ].map((item) => (
          <div className="option" key={item}>
            <label>
              <input
                type="checkbox"
                name={item}
                onChange={handleItemSelection}
                disabled={selectedItems.length >= 10 && !selectedItems.includes(item)}
              />
              {item}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default Extra;
