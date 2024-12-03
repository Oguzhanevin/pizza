import React, { useEffect, useState } from "react";
import axios from "axios";
import Sizing from "./Sizing";
import Additional from "./Extra";
import GiveAnOrder from "./Order";
import Info from "./Information";
import "./OrderForm.css";
import { useHistory } from "react-router-dom";
import Order from "./Order";
import Extra from "./Extra";
import Information from "./Information";

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

    // Form Validasyonu
    const errors = {};
    if (!size) errors.pizzaSize = "Boyut seçimi zorunludur.";
    if (!tickness) errors.pizzaDough = "Hamur seçimi zorunludur.";
    if (!textName.trim()) errors.fullName = "İsim alanı boş bırakılamaz.";
    if (!quantity || quantity <= 0) errors.orderQuantity = "Geçerli bir adet seçiniz.";

    if (Object.keys(errors).length > 0) {
      console.log("Form Hataları:", errors);
      return;
    }

    const formData = {
      pizzaSize: size,
      pizzaDough: tickness,
      addItems: itemsArr,
      fullName: textName,
      orderQuantity: quantity,
      totalBasket: (totalPrice + tickPrice + additionalPrice) * quantity,
    };

    setSentData(formData);

    // Veriyi sunucuya gönderme (isteğe bağlı)
    axios
      .post("https://example.com/api/order", formData)
      .then((response) => {
        console.log("Sipariş Başarıyla Alındı:", response.data);
        history.push("./order-received", { ...formData });
      })
      .catch((error) => console.error("Sipariş Hatası:", error));
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
            <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre...</p>
          </div>
          <Sizing size={size} handleRadioChange={handleRadioChange} tickness={tickness} optionSelection={optionSelection} />
          <Extra checkSelection={checkSelection} itemsArr={itemsArr} />
          <Information textValue={textValue} textName={textName} orderNoteChange={orderNoteChange} orderNote={orderNote} />
          <Order
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
