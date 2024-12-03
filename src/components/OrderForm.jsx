import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Sizing from "./Sizing";  
import Extra from "./Extra";
import Order from "./Order";
import Information from "./Information";
import "./Orderform.css";

const OrderForm = () => {
  const history = useHistory();

  const [textName, setTextName] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [totalPrice, setTotalPrice] = useState(20);  
  const [formError, setFormError] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const [tickness, setTickness] = useState("-");
  const [size, setSize] = useState("-");
  const [quantity, setQuantity] = useState(1);

  const handleItemSelection = (event) => {
    const { checked, name } = event.target;
    if (checked) {
      setSelectedItems((prev) => [...prev, name]);
    } else {
      setSelectedItems((prev) => prev.filter((item) => item !== name));
    }
  };

  const countUp = () => {
    setQuantity((prev) => prev + 1);
  };

  const countDown = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!textName) {
      setFormError({ fullName: "Adınızı girin." });
      return;
    }

    try {
      const response = await axios.post("/api/order", {
        textName,
        orderNote,
        totalPrice,
        selectedItems,
        tickness,
        size,
        quantity,
      });

      history.push("/thank-you"); 
    } catch (error) {
      setFormError({
        ...formError,
        total: "Sipariş gönderilemedi. Lütfen tekrar deneyin.",
      });
    }
  };

  return (
    <div className="orderform-container">
      <form onSubmit={submitHandler} className="orderform">
        <Sizing setSize={setSize} setTickness={setTickness} size={size} tickness={tickness} />
        <Extra 
          handleItemSelection={handleItemSelection} 
          selectedItems={selectedItems} 
          formError={formError} 
        />
        <Information sentData={{ textName, orderNote, totalPrice, tickness, selectedItems, size, quantity }} formError={formError} />
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

export default OrderForm;
