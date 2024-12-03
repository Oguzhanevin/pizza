import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // useHistory'i import ettik
import axios from "axios";
import "./OrderForm.css";

const OrderForm = ({ setSentData }) => {
  const history = useHistory(); // useHistory hook'u ile history objesini alıyoruz
  const [textName, setTextName] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [totalPrice, setTotalPrice] = useState(20);
  const [formError, setFormError] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const [size, setSize] = useState("-");
  const [tickness, setTickness] = useState("-");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!textName) {
      setFormError({ fullName: "Adınızı girin." });
      return;
    }

    // Burada sipariş verileri API'ye gönderilebilir, ancak şimdilik sadece veriyi state'e kaydediyoruz
    const orderData = {
      textName,
      orderNote,
      totalPrice,
      selectedItems,
      size,
      tickness,
      quantity,
    };

    // Veriyi App.js'ye gönder
    setSentData(orderData);

    // Sipariş tamamlandıktan sonra ReceivingOrders sayfasına yönlendirme yapıyoruz
    history.push("/receiving-orders"); // Yönlendirme adresini /receiving-orders olarak değiştirdik
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Diğer form elemanları */}
      <button type="submit">Sipariş Ver</button>
    </form>
  );
};

export default OrderForm;
