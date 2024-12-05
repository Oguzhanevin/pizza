import { useEffect, useState } from "react";
import "./Order.css";
import logo from "../assets/pictures/logo.svg";
import axios from "axios";
import { Button, Card } from "reactstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";

const Order = ({ spars }) => {
  const [orderData, setOrderData] = useState({
    name: "",
    size: "",
    hamurKalinligi: "",
    malzemeler: [],
    notlar: "",
  });
  const [productCount, setProductCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const malzemePrice = 5;
  const totalMalzemePrice = orderData.malzemeler.length * malzemePrice;

  useEffect(() => {
    const newTotalPrice = totalMalzemePrice + productCount * 85.5;
    setTotalPrice(newTotalPrice);
  }, [orderData.malzemeler, productCount, totalMalzemePrice]);

  useEffect(() => {
    const { size, hamurKalinligi, name, malzemeler } = orderData;
    const isFormValid = productCount > 0 && size && hamurKalinligi && name.length >= 3 && malzemeler.length >= 4 && malzemeler.length <= 10;
    setIsValid(isFormValid);
  }, [orderData, productCount]);

  const history = useHistory();

  const playLoud = { ...orderData };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;

    spars({ ...orderData, totalPrice, totalMalzemePrice });
    axios
      .post("https://reqres.in/api/pizza", playLoud)
      .then((response) => {
        if (response) {
          history.push("/success");
        } else {
          history.push("/order");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const increaseCount = () => setProductCount(prevCount => prevCount + 1);
  const decreaseCount = () => setProductCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleMalzemelerChange = (e) => {
    const malzeme = e.target.value;
    setOrderData((prevState) => ({
      ...prevState,
      malzemeler: prevState.malzemeler.includes(malzeme)
        ? prevState.malzemeler.filter((item) => item !== malzeme)
        : [...prevState.malzemeler, malzeme],
    }));
  };

  return (
    <div className="order-page">
      <header className="header">
        <img className="logoImage" src={logo} alt="Logo" />
        <p>Anasayfa- <strong>Sipariş Oluştur</strong></p>
      </header>

      <form onSubmit={handleSubmit}>
        <input
          className="isim"
          type="text"
          name="name"
          placeholder="Minimum 3 karakter olacak şekilde isminizi giriniz.."
          minLength="3"
          value={orderData.name}
          onChange={handleInputChange}
          data-cy="isim-input"
        />

        <h4 className="pizzaName">Position Absolute Acı Pizza</h4>
        <p style={{ display: "inline-block", marginTop: "20px", marginRight: "200px", fontSize: "25px" }}>
          <b>85.5 ₺</b>
        </p>
        <span style={{ display: "inline-block", marginRight: "110px" }}>4.9</span>
        <span style={{ display: "inline-block" }}>(200)</span>
        <p className="pizzaDetail">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve diğer malzemelerle yapılan, yüksek sıcaklıkta pişirilen İtalyan kökenli bir yemektir.
        </p>

        <div className="boyut-hamur">
          <BoyutCard size={orderData.size} handleSizeChange={handleInputChange} />
          <HamurCard hamurKalinliği={orderData.hamurKalinliği} handleHamurChange={handleInputChange} />
        </div>

        <MalzemeCard malzemeler={orderData.malzemeler} handleMalzemelerChange={handleMalzemelerChange} />
        <NoteCard notlar={orderData.notlar} handleNotlarChange={handleInputChange} />

        <div className="counter">
          <button className="control__btn btn-1" style={{ fontSize: "30px", padding: "10px 13px", backgroundColor: "#FDC913" }} onClick={decreaseCount}>-</button>
          <span className="counter__output" style={{ fontSize: "30px" }}>{productCount}</span>
          <button className="control__btn btn-2" style={{ fontSize: "30px", padding: "10px 10px", backgroundColor: "#FDC913" }} onClick={increaseCount}>+</button>
        </div>

        <Card style={{ width: "18rem", marginLeft: "35vh", marginTop: "-55px", marginBottom: "10%", padding: "30px 11px 20px 15px" }}>
          <SiparisToplami malzemeler={orderData.malzemeler} totalMalzemePrice={totalMalzemePrice} productCount={productCount} />
          <Button className="order-contaButton" type="submit" style={{ padding: "10px 80px", backgroundColor: "#FDC913", color: "black", fontWeight: "bold" }} disabled={!isValid} data-cy="submit-input">SİPARİŞ VER</Button>
        </Card>
      </form>
    </div>
  );
};

const BoyutCard = ({ size, handleSizeChange }) => (
  <div className="boyut-card">
    <h4>Boyut Seç<span className="yildiz">*</span></h4>
    {["Küçük", "Orta", "Büyük"].map((sizeOption) => (
      <label key={sizeOption}>
        <input
          type="radio"
          value={sizeOption}
          checked={size === sizeOption}
          onChange={handleSizeChange}
          name="size"
        />
        {sizeOption}
      </label>
    ))}
    {size && <div className="secilen-boyut"><p>Seçilen Boyut: {size}</p></div>}
  </div>
);

const HamurCard = ({ hamurKalinliği, handleHamurChange }) => (
  <div className="hamur-card">
    <h4>Hamur Seç<span className="yildiz">*</span></h4>
    <select value={hamurKalinlığı} onChange={handleHamurChange} name="hamurKalinliği">
      <option value="">Hamur Kalınlığı</option>
      {["İnce", "Standart", "Kalın"].map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
    {hamurKalinlığı && <div className="secilen-hamur"><p>Seçilen Hamur: {hamurKalinlığı}</p></div>}
  </div>
);

const MalzemeCard = ({ malzemeler, handleMalzemelerChange }) => {
  const ingredients = ["Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas", "Sosis", "Soğan", "Sucuk", "Biber", "Kabak", "Kanada Jambonu", "Domates", "Jalepeno", "Mantar"];
  return (
    <div className="ek-malzeme">
      <h4>Ek Malzemeler</h4>
      <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
      <form>
        <div className="topping-container">
          {ingredients.map((topping, index) => (
            <div key={index} className="topping-item">
              <input
                type="checkbox"
                value={topping}
                checked={malzemeler.includes(topping)}
                onChange={handleMalzemelerChange}
                name="malzemeler"
              />
              <label htmlFor={topping}>{topping}</label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

const NoteCard = ({ notlar, handleNotlarChange }) => (
  <div className="note-card">
    <h4>Özel Notlar</h4>
    <input
      type="text"
      name="notlar"
      value={notlar}
      onChange={handleNotlarChange}
      placeholder="Özel isteklerinizi buraya yazınız"
    />
  </div>
);

const SiparisToplami = ({ malzemeler, totalMalzemePrice, productCount }) => (
  <div>
    <h5 style={{ marginLeft: "50px", marginBottom: "-18px", fontSize: "18px" }}>Sipariş Toplamı:</h5>
    <p style={{ fontSize: "18px", marginLeft: "50px", fontWeight: "bold" }}>Pizza Sayısı: {productCount} x 85.5 ₺</p>
    <p style={{ fontSize: "18px", marginLeft: "50px", fontWeight: "bold" }}>Malzeme Sayısı: {malzemeler.length} x 5 ₺</p>
    <p style={{ fontSize: "20px", marginLeft: "50px", fontWeight: "bold" }}>Toplam: {totalMalzemePrice + 85.5 * productCount} ₺</p>
  </div>
);

export default Order;
