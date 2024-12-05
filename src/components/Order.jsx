import { useEffect, useState } from "react";
import "./Order.css";
import logo from "../Assets/Iteration-1-assets/logo.svg";
import axios from "axios";
import { Button, Card } from "reactstrap";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

const Order = ({ spars }) => {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [hamurKalinliği, setHamurKalinlığı] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [notlar, setNotlar] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const malzemePrice = 5;
  const totalMalzemePrice = malzemeler.length * malzemePrice;

  // Update totalPrice when dependencies change
  useEffect(() => {
    setTotalPrice(totalMalzemePrice + productCount * 85.5);
  }, [malzemeler, productCount, totalMalzemePrice]);

  // Validate form inputs
  useEffect(() => {
    setIsValid(
      productCount &&
        size &&
        hamurKalinlığı &&
        name.length >= 3 &&
        malzemeler.length >= 4 &&
        malzemeler.length <= 10
    );
  }, [size, hamurKalinlığı, name, malzemeler, productCount]);

  const history = useHistory();
  const playLoud = { name, size, hamur: hamurKalinlığı, malzemeler, not: notlar };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;

    spars({ size, hamurKalinlığı, malzemeler, totalPrice, totalMalzemePrice });

    axios
      .post("https://reqres.in/api/pizza", playLoud)
      .then(() => history.push("/success"))
      .catch(console.error);
  };

  const increaseCount = () => setProductCount((prevCount) => prevCount + 1);
  const decreaseCount = () => productCount > 0 && setProductCount((prevCount) => prevCount - 1);

  const handleChange = (setter) => (e) => setter(e.target.value);
  const handleMalzemelerChange = (e) => {
    const malzeme = e.target.value;
    setMalzemeler(malzemeler.includes(malzeme)
      ? malzemeler.filter((item) => item !== malzeme)
      : [...malzemeler, malzeme]);
  };

  return (
    <div className="order-page">
      <div className="header">
        <header>
          <img className="logoImage" src={logo} alt="Logo" />
          <p>Anasayfa- <strong>Sipariş Oluştur</strong></p>
        </header>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="isim"
          type="text"
          placeholder="Minimum 3 karakter olacak şekilde isminizi giriniz.."
          minLength="3"
          value={name}
          onChange={handleChange(setName)}
          data-cy="isim-input"
        />

        <h4 className="pizzaName">Position Absolute Acı Pizza</h4>
        <p className="pizzaPrice">
          <b>85.5 ₺</b>
        </p>

        <div className="rating">
          <span>4.9</span>
          <span>(200)</span>
        </div>

        <p className="pizzaDetail">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre...
        </p>

        <div className="boyut-hamur">
          <BoyutCard size={size} handleSizeChange={handleChange(setSize)} />
          <HamurCard hamurKalinliği={hamurKalinlığı} handleHamurChange={handleChange(setHamurKalinliği)} />
        </div>

        <MalzemeCard malzemeler={malzemeler} handleMalzemelerChange={handleMalzemelerChange} />
        <NoteCard notlar={notlar} handleNotlarChange={handleChange(setNotlar)} />

        <div className="counter">
          <button className="control__btn btn-1" onClick={decreaseCount}>-</button>
          <span className="counter__output">{productCount}</span>
          <button className="control__btn btn-2" onClick={increaseCount}>+</button>
        </div>

        <Card className="order-summary-card">
          <SiparisToplami malzemeler={malzemeler} totalMalzemePrice={totalMalzemePrice} productCount={productCount} />
          <Button
            type="submit"
            style={{ padding: "10px 80px", backgroundColor: "#FDC913", color: "black", fontSize: "bold" }}
            disabled={!isValid}
            data-cy="submit-input"
          >
            SİPARİŞ VER
          </Button>
        </Card>
      </form>
    </div>
  );
};

const BoyutCard = ({ size, handleSizeChange }) => (
  <div className="boyut-card">
    <h4>Boyut Seç<span className="yildiz">*</span></h4>
    {["Küçük", "Orta", "Büyük"].map((option) => (
      <label key={option}>
        <input type="radio" value={option} checked={size === option} onChange={handleSizeChange} />
        {option}
      </label>
    ))}
    {size && <div className="secilen-boyut"><p>Seçilen Boyut: {size}</p></div>}
  </div>
);

const HamurCard = ({ hamurKalinlığı, handleHamurChange }) => (
  <div className="hamur-card">
    <h4>Hamur Seç<span className="yildiz">*</span></h4>
    <select value={hamurKalinlığı} onChange={handleHamurChange}>
      <option value="">Hamur Kalınlığı</option>
      <option value="İnce">İnce</option>
      <option value="Standart">Standart</option>
      <option value="Kalın">Kalın</option>
    </select>
    {hamurKalinlığı && <div className="secilen-hamur"><p>Seçilen Hamur: {hamurKalinlığı}</p></div>}
  </div>
);

const MalzemeCard = ({ malzemeler, handleMalzemelerChange }) => {
  const ingredients = [
    "Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas", "Sosis",
    "Soğan", "Sucuk", "Biber", "Kabak", "Kanada Jambonu", "Domates", "Jalepeno", "Mantar"
  ];

  return (
    <div className="ek-malzeme">
      <h4>Ek Malzemeler</h4>
      <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
      <div className="topping-container">
        {ingredients.map((topping) => (
          <div key={topping} className="topping-item">
            <input
              type="checkbox"
              value={topping}
              checked={malzemeler.includes(topping)}
              onChange={handleMalzemelerChange}
              data-cy="malzeme-input"
            />
            <label>{topping}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

const NoteCard = ({ notlar, handleNotlarChange }) => (
  <div className="siparis-notu">
    <h4>Sipariş Notu</h4>
    <textarea
      rows="2"
      cols="50"
      value={notlar}
      placeholder="Siparişine eklemek istediğin bir not var mı?"
      onChange={handleNotlarChange}
    />
  </div>
);

const SiparisToplami = ({ malzemeler, totalMalzemePrice, productCount }) => {
  const totalPrice = totalMalzemePrice + productCount * 85.5;

  return (
    <div className="siparis-toplami">
      <h4>Sipariş Toplamı</h4>
      <p>Seçimler: <span>{totalMalzemePrice}₺</span></p>
      <p className="toplam">Toplam: <span>{totalPrice}₺</span></p>
    </div>
  );
};

export default Order;
