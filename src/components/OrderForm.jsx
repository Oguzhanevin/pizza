import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sizing from "./Sizing";
import Extra from "./Extra";
import Information from "./Information";
import Order from "./Order";
import "./Orderform.css";

const OrderForm = ({ setSentData }) => {
  const navigate = useNavigate();

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
    setSelectedItems((prev) =>
      checked ? [...prev, name] : prev.filter((item) => item !== name)
    );
  };

  const countUp = () => setQuantity((prev) => prev + 1);
  const countDown = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  const submitHandler = async () => {
    if (!textName) {
      setFormError({ fullName: "Adınızı girin." });
      return;
    }

    const orderData = {
      textName,
      orderNote,
      totalPrice,
      selectedItems,
      tickness,
      size,
      quantity,
    };

    try {
      await axios.post("/api/order", orderData); // API çağrısı
      setSentData(orderData); // Veriyi gönder
      navigate("/receiving-orders"); // Yönlendir
    } catch (error) {
      setFormError({
        ...formError,
        total: "Sipariş gönderilemedi. Lütfen tekrar deneyin.",
      });
    }
  };

  return (
    <div className="orderform-container">
      <form className="orderform">
        <Sizing setSize={setSize} setTickness={setTickness} size={size} tickness={tickness} />
        <Extra handleItemSelection={handleItemSelection} selectedItems={selectedItems} formError={formError} />
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
