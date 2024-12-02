import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Sizing from "./Sizing";  // Buradaki yol doğru olmalı
import Extra from "./Extra";
import Order from "./Order";
import Information from "./Information";
import "./Orderform.css";
const OrderForm = () => {
  const history = useHistory();

  const [textName, setTextName] = useState("");
  const [totalPrice, setTotalPrice] = useState(85.5);
  const [orderNote, setOrderNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [tickness, setTickness] = useState("Normal");
  const [selectedItems, setSelectedItems] = useState([]);
  const [size, setSize] = useState("sm");

  const [formError, setFormError] = useState({
    pizzaSize: "",
    pizzaPastry: "",
    addItems: [],
    fullName: "",
    orderQuantity: "",
    total: "",
  });

  const mainPage = () => {
    history.push("/");
  };

  const textValue = (event) => {
    setTextName(event.target.value);
  };

  const orderNoteChange = (event) => {
    setOrderNote(event.target.value);
  };

  const countUp = () => {
    setQuantity((prev) => prev + 1);
    setTotalPrice((prev) => prev + 85.5);
  };

  const countDown = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      setTotalPrice((prev) => prev - 85.5);
    }
  };

  const handleRadioChange = (event) => {
    setSize(event.target.value);
  };

  const optionSelection = (event) => {
    setTickness(event.target.value);
  };

  const handleItemSelection = (event) => {
    const item = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      if (selectedItems.length < 10) {
        setSelectedItems((prev) => [...prev, item]);
      } else {
        alert("10'dan fazla malzeme seçemezsiniz!");
      }
    } else {
      setSelectedItems((prev) => prev.filter((i) => i !== item));
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    // Form validation
    if (!textName || textName.length < 3) {
      setFormError((prev) => ({
        ...prev,
        fullName: "Lütfen geçerli bir isim girin.",
      }));
      return;
    }

    const orderData = {
      textName,
      totalPrice,
      orderNote,
      quantity,
      tickness,
      selectedItems,
      size,
    };

    try {
      // Simulate API request
      const response = await axios.post(
        "https://your-api-endpoint.com/order",
        orderData
      );
      console.log("API Response:", response.data);

      // Redirect or update UI after successful submission
      setFormError({});
      alert("Sipariş başarıyla gönderildi!");
    } catch (error) {
      console.error("Sipariş gönderilemedi", error);
      setFormError((prev) => ({
        ...prev,
        total: "Sipariş gönderilemedi. Lütfen tekrar deneyin.",
      }));
    }
  };

  return (
    <form id="pizza-form" onSubmit={submitHandler}>
      <div className="container">
        <div className="header">
          <div className="header-inner">
            <h1 className="header-title">Teknolojik Yemekler</h1>
            <nav className="nav">
              <a onClick={mainPage}>Anasayfa</a>
              <p>-</p>
              <a>Sipariş Oluştur</a>
            </nav>
          </div>
        </div>
        <div className="content">
          <div className="title">{totalPrice.toFixed(2)}₺</div>
          <div className="sub-info">
            <p>4.9</p>
            <p>(200)</p>
          </div>
          <p className="description">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre.
          </p>
          <Sizing
            size={size}
            handleRadioChange={handleRadioChange}
            tickness={tickness}
            optionSelection={optionSelection}
          />
          <Extra
            handleItemSelection={handleItemSelection}
            formError={formError}
            selectedItems={selectedItems}
          />
          <Information
            formError={formError}
            textValue={textValue}
            textName={textName}
            orderNoteChange={orderNoteChange}
            orderNote={orderNote}
            sentData={{
              textName,
              totalPrice,
              orderNote,
              quantity,
              tickness,
              selectedItems,
              size,
            }}
          />
          {formError.total && <p className="error">{formError.total}</p>}
          <hr className="separator" />
          <Order
            totalPrice={totalPrice}
            countUp={countUp}
            countDown={countDown}
            quantity={quantity}
            submitHandler={submitHandler}
          />
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
