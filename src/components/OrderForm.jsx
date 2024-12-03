import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import Sizing from "./Sizing";
import Additional from "./Extra";
import GiveAnOrder from "./Order";
import Info from "./Information";
import "./OrderForm.css";
import { useHistory } from "react-router-dom";

const formData = {
  pizzaSize: "",
  pizzaDough: "",
  addItems: [],
  fullName: "",
  orderQuantity: "",
  totalBasket: "",
};

const OrderForm = ({ setSentData }) => {
  const history = useHistory();

  const [productInPrice, setProductInPrice] = useState(85.5);
  const [size, setSize] = useState("sm");
  const [tickness, setTickness] = useState("Normal");
  const [totalPrice, setTotalPrice] = useState(productInPrice);
  const [tickPrice, setTickPrice] = useState(0);
  const [itemsArr, setItemsArr] = useState([]);
  const [additionalPrice, setAdditionalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [textName, setTextName] = useState("");
  const [orderNote, setOrderNote] = useState("");

  const [formError, setFormError] = useState({
    pizzaSize: "",
    pizzaDough: "",
    addItems: [],
    fullName: "",
    orderQuantity: "",
    totalBasket: "",
  });

  const mainPage = () => {
    history.push("./");
  };

  const textValue = (event) => {
    setTextName(event.target.value);
  };

  const orderNoteChange = (event) => {
    setOrderNote(event.target.value);
  };

  const countUp = () => {
    setQuantity(quantity + 1);
  };

  const countDown = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRadioChange = (event) => {
    setSize(event.target.value);
  };

  const optionSelection = (event) => {
    setTickness(event.target.value);
  };

  const checkSelection = (event) => {
    const item = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      if (itemsArr.length < 10) {
        setItemsArr([...itemsArr, item]);
      } else {
        console.log("10'dan fazla malzeme seçemezsiniz.");
      }
    } else {
      const updatedItems = itemsArr.filter((i) => i !== item);
      setItemsArr(updatedItems);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    for (let key in formData) {
      checkValidationFor(key, formData[key]);
    }
  };

  const checkValidationFor = async (field, value) => {
    try {
      await Yup.reach(formDataSchema, field).validate(value);
      setFormError((prevFormErrors) => ({ ...prevFormErrors, [field]: "" }));
    } catch (err) {
      setFormError((prevFormErrors) => ({
        ...prevFormErrors,
        [field]: err.errors[0],
      }));
    }
  };

  useEffect(() => {
    let price = itemsArr.length * 5;
    setAdditionalPrice(price);
  }, [itemsArr]);

  useEffect(() => {
    let price = productInPrice;
    if (size === "md") {
      price += 15;
    } else if (size === "lg") {
      price += 25;
    }
    setTotalPrice(price);
  }, [size]);

  useEffect(() => {
    let price = 0;
    if (tickness === "thin") {
      price += 10;
    } else if (tickness === "cheese") {
      price += 20;
    }
    setTickPrice(price);
  }, [tickness]);

  useEffect(() => {
    formData.pizzaSize = size;
    formData.pizzaDough = tickness;
    formData.addItems = itemsArr;
    formData.fullName = textName;
    formData.orderQuantity = quantity;
    formData.totalBasket =
      (totalPrice + tickPrice + additionalPrice) * quantity;
  }, [size, tickness, itemsArr, textName, totalPrice, tickPrice, additionalPrice, quantity]);

  return (
    <form id="pizza-form" onSubmit={submitHandler}>
      <div className="order-form-container">
        <div className="header">
          <h1>Teknolojik Yemekler</h1>
          <nav>
            <a onClick={mainPage}>Anasayfa</a>
            <span>-</span>
            <a>Sipariş Oluştur</a>
          </nav>
        </div>
        <div className="content">
          <div className="product-details">
            <h3>Position Absolute Pizza</h3>
            <h1>{productInPrice}₺</h1>
            <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre...</p>
          </div>
          <Sizing size={size} handleRadioChange={handleRadioChange} tickness={tickness} optionSelection={optionSelection} />
          <Additional checkSelection={checkSelection} formError={formError} itemsArr={itemsArr} />
          <Info formError={formError} textValue={textValue} textName={textName} orderNoteChange={orderNoteChange} orderNote={orderNote} />
          <GiveAnOrder
            totalPrice={totalPrice}
            tickPrice={tickPrice}
            additionalPrice={additionalPrice}
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
