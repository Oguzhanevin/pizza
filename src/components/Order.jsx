import { useEffect, useState } from "react";
import "./Order.css";
import logo from "../assets/pictures/logo.svg";
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

  // Herhangi bir şey değiştiğinde totalPrice'ı güncelle
  useEffect(() => {
    const newTotalPrice = totalMalzemePrice + productCount * 85.5;
    setTotalPrice(newTotalPrice);
  }, [malzemeler, productCount, totalMalzemePrice]);

  useEffect(() => {
    const isFormValid = !(
      !productCount ||
      !size ||
      !hamurKalinlığı ||
      name.length < 3 ||
      malzemeler.length < 4 ||
      malzemeler.length > 10
    );
    setIsValid(isFormValid);
  }, [size, hamurKalinlığı, name, malzemeler, productCount]);

  const history = useHistory();

  const playLoud = {
    name: name,
    size: size,
    hamur: hamurKalinlığı,
    malzemeler: malzemeler,
    not: notlar,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;

    spars({
      size: size,
      hamurKalinlığı: hamurKalinlığı,
      malzemeler: malzemeler,
      totalPrice: totalPrice,
      totalMalzemePrice: totalMalzemePrice,
    });

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

  const increaseCount = () => {
    setProductCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    if (productCount > 0) {
      setProductCount((prevCount) => prevCount - 1);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleHamurChange = (e) => {
    setHamurKalinlığı(e.target.value);
  };

  const handleMalzemelerChange = (e) => {
    const malzeme = e.target.value;
    if (malzemeler.includes(malzeme)) {
      setMalzemeler(malzemeler.filter((item) => item !== malzeme));
    } else {
      setMalzemeler([...malzemeler, malzeme]);
    }
  };

  const handleNotlarChange = (e) => {
    setNotlar(e.target.value);
  };

  return (
    <div className="order-page">
      <div className="header">
        <header>
          <img className="logoImage" src={logo} alt="Logo" />
          <p>
            Anasayfa- <strong>Sipariş Oluştur</strong>
          </p>
        </header>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="isim"
          type="text"
          placeholder="Minimum 3 karakter olacak şekilde isminizi giriniz.."
          minLength="3"
          value={name}
          onChange={handleNameChange}
          data-cy="isim-input"
        />

        <h4 className="pizzaName">Position Absolute Acı Pizza</h4>
        <p
          style={{
            display: "inline-block",
            marginTop: "20px",
            marginRight: "200px",
            fontSize: "25px",
          }}
        >
          <b>85.5 ₺</b>
        </p>
        <span style={{ display: "inline-block", marginRight: "110px" }}>
          4.9
        </span>
        <span style={{ display: "inline-block" }}>(200)</span>
        <p className="pizzaDetail">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre...
        </p>
        <div className="boyut-hamur">
          <BoyutCard size={size} handleSizeChange={handleSizeChange} />
          <HamurCard
            hamurKalinliği={hamurKalinliği}
            handleHamurChange={handleHamurChange}
          />
        </div>
        <MalzemeCard
          malzemeler={malzemeler}
          handleMalzemelerChange={handleMalzemelerChange}
        />
        <NoteCard notlar={notlar} handleNotlarChange={handleNotlarChange} />

        <div className="counter">
          <button
            className="control__btn btn-1"
            style={{
              fontSize: "30px",
              padding: "10px 13px",
              backgroundColor: " #FDC913",
            }}
            onClick={decreaseCount}
          >
            -
          </button>
          <span className="counter__output" style={{ fontSize: "30px" }}>
            {productCount}
          </span>
          <button
            className="control__btn btn-2"
            style={{
              fontSize: "30px",
              padding: "10px 10px",
              backgroundColor: " #FDC913",
            }}
            onClick={increaseCount}
          >
            +
          </button>
        </div>

        <Card
          style={{
            width: "18rem",
            marginLeft: "35vh",
            marginTop: "-55px",
            marginBottom: "10%",
            padding: "30px 11px 20px 15px",
          }}
        >
          <SiparisToplami
            malzemeler={malzemeler}
            totalMalzemePrice={totalMalzemePrice}
            productCount={productCount}
          />
          <Button
            className="order-contaButton"
            type="submit"
            style={{
              padding: "10px 80px",
              backgroundColor: "#FDC913",
              color: "black",
              fontSize: "bold",
            }}
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

// Components for size, dough, ingredients, notes, and total

const BoyutCard = ({ size, handleSizeChange }) => (
  <div className="boyut-card">
    <h4>
      Boyut Seç<span className="yildiz">*</span>
    </h4>
    <label>
      <input
        type="radio"
        value="Küçük"
        checked={size === "Küçük"}
        onChange={handleSizeChange}
      />
      Küçük
    </label>
    <label>
      <input
        type="radio"
        value="Orta"
        checked={size === "Orta"}
        onChange={handleSizeChange}
      />
      Orta
    </label>
    <label>
      <input
        type="radio"
        value="Büyük"
        checked={size === "Büyük"}
        onChange={handleSizeChange}
      />
      Büyük
    </label>
    {size && (
      <div className="secilen-boyut">
        <p>Seçilen Boyut: {size}</p>
      </div>
    )}
  </div>
);

const HamurCard = ({ hamurKalinlığı, handleHamurChange }) => (
  <div className="hamur-card">
    <h4>
      Hamur Seç<span className="yildiz">*</span>
    </h4>
    <select value={hamurKalinlığı} onChange={handleHamurChange}>
      <option value="">Hamur Kalınlığı</option>
      <option value="İnce">İnce</option>
      <option value="Kalın">Kalın</option>
    </select>
    {hamurKalinlığı && (
      <div className="secilen-hamur">
        <p>Seçilen Hamur: {hamurKalinlığı}</p>
      </div>
    )}
  </div>
);

const MalzemeCard = ({ malzemeler, handleMalzemelerChange }) => (
  <div className="malzeme-card">
    <h4>
      Malzeme Seç (Minimum 4, Maksimum 10) <span className="yildiz">*</span>
    </h4>
    <label>
      <input
        type="checkbox"
        value="Zeytin"
        checked={malzemeler.includes("Zeytin")}
        onChange={handleMalzemelerChange}
      />
      Zeytin
    </label>
    <label>
      <input
        type="checkbox"
        value="Sucuk"
        checked={malzemeler.includes("Sucuk")}
        onChange={handleMalzemelerChange}
      />
      Sucuk
    </label>
    <label>
      <input
        type="checkbox"
        value="Mantar"
        checked={malzemeler.includes("Mantar")}
        onChange={handleMalzemelerChange}
      />
      Mantar
    </label>
    <label>
      <input
        type="checkbox"
        value="Keçi Peyniri"
        checked={malzemeler.includes("Keçi Peyniri")}
        onChange={handleMalzemelerChange}
      />
      Keçi Peyniri
    </label>
    {malzemeler.length > 0 && (
      <div className="secilen-malzeme">
        <p>Seçilen Malzemeler: {malzemeler.join(", ")}</p>
      </div>
    )}
  </div>
);

const NoteCard = ({ notlar, handleNotlarChange }) => (
  <div className="note-card">
    <h4>Notlar</h4>
    <textarea
      value={notlar}
      onChange={handleNotlarChange}
      placeholder="Notlarınızı buraya girin..."
    />
  </div>
);

const SiparisToplami = ({ malzemeler, totalMalzemePrice, productCount }) => (
  <div className="siparis-toplami">
    <p>
      Toplam Malzeme Fiyatı: {totalMalzemePrice}₺
    </p>
    <p>
      Toplam Sipariş Fiyatı: {(productCount * 85.5) + totalMalzemePrice}₺
    </p>
  </div>
);

export default Order;
