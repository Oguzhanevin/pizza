import React from "react";
import "./Supplementary.css"; 

function Supplementary({ handleItemSelection, selectedItems, formError }) {
  return (
    <>
      <div className="supplementary-header">
        <h3>Supplementary Ingredients</h3>
        <p>You can select up to 10 ingredients. 5₺ each.</p>
        <p className="error">{formError.addItems}</p>
      </div>
      <div className="supplementary-options">
        {[
          "Pepperoni",
          "Sausage",
          "Canadian Bacon",
          "Grilled Chicken",
          "Onion",
          "Tomato",
          "Corn",
          "Salami",
          "Jalapeno",
          "Garlic",
          "Bell Pepper",
          "Ham",
          "Pineapple",
          "Zucchini",
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

export default Supplementary;
