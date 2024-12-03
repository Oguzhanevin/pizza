import React, { useState } from "react";
import Information from "./Information";
// ... diğer importlar

const OrderForm = () => {
  const [textName, setTextName] = useState(""); // ismi tutan state
  const [orderNote, setOrderNote] = useState(""); // sipariş notunu tutan state

  // ... diğer kodlar

  return (
    <div className="orderform-container">
      <form onSubmit={submitHandler} className="orderform">
        <Sizing setSize={setSize} setTickness={setTickness} size={size} tickness={tickness} />
        <Extra 
          handleItemSelection={handleItemSelection} 
          selectedItems={selectedItems} 
          formError={formError} 
        />
        <Information 
          sentData={{ textName, orderNote, totalPrice, tickness, selectedItems, size, quantity }} 
          formError={formError} 
          setTextName={setTextName}  // setTextName fonksiyonu gönderildi
          setOrderNote={setOrderNote}  // setOrderNote fonksiyonu gönderildi
        />
        <Order 
          totalPrice={totalPrice} 
          countUp={countUp} 
          countDown={countDown} 
          quantity={quantity} 
          submitHandler={submitHandler}
        />
      </form>
    </div>
  );
};
