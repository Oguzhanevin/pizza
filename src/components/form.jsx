import React, { useEffect, useState } from "react";
import axios from "axios";
import "./form.css";
import { useHistory } from "react-router-dom";

const FormArea = ({ setMevcutSipariş }) => {
  const initialFormData = {
    isim: "",
    boyut: "",
    hamurTipi: "",
    toppings: [],
    extraNotes: "",
    adet: 1,
  };

  const history = useHistory();
  const [formData, setFormData] = useState(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [total, setTotal] = useState(0);

  const pizzaBasePrice = 85.5;
  const extraToppingPrice = 5;
  const pizzaBoyut = ["S", "M", "L"];
  const pizzaToppings = [
    { id: 1, name: "Pepperoni" },
    { id: 2, name: "Tavuk Izgara" },
    { id: 3, name: "Mısır" },
    { id: 4, name: "Sarımsak" },
    { id: 5, name: "Ananas" },
    { id: 6, name: "Sosis" },
    { id: 7, name: "Soğan" },
    { id: 8, name: "Sucuk" },
    { id: 9, name: "Biber" },
    { id: 10, name: "Kabak" },
    { id: 11, name: "Kanada Jambonu" },
    { id: 12, name: "Domates" },
    { id: 13, name: "Jalepeno" },
  ];

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = ({ target: { value, checked } }) => {
    setFormData((prev) => {
      const newToppings = checked
        ? [...prev.toppings, value]
        : prev.toppings.filter((topping) => topping !== value);
      return { ...prev, toppings: newToppings };
    });
  };

  const handleCounterChange = (increment) => {
    setFormData((prev) => ({
      ...prev,
      adet: increment ? prev.adet + 1 : Math.max(prev.adet - 1, 1),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sonSipariş = { ...formData, total };
    axios
      .post("https://reqres.in/api/pizza", sonSipariş)
      .then((response) => {
        setMevcutSipariş(sonSipariş);
        history.push("/Onay");
        console.log("Sipariş Özeti:", response.data);
      })
      .catch((error) => console.error("Sipariş Gönderim Hatası:", error));
  };

  const isFormValid = () => {
    const { isim, boyut, hamurTipi, toppings } = formData;
    return isim && boyut && hamurTipi && toppings.length >= 4 && !submitting;
  };

  const totalToppingPrice = formData.toppings.length * extraToppingPrice;
  const totalPrice = (pizzaBasePrice + totalToppingPrice) * formData.adet;

  useEffect(() => {
    setTotal(totalPrice);
  }, [formData.toppings, formData.adet]);

  return (
    <main>
      <section className="pizza-section">
        <h2>Position Absolute Acı Pizza</h2>
        <div className="pizza-info">
          <h3>{pizzaBasePrice}₺</h3>
          <div className="pizza-rating">
            <p>4.9</p>
            <p>(200)</p>
          </div>
        </div>
        <p>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
          Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.
        </p>
        <div className="formAlani">
          <form onSubmit={handleSubmit}>
            <label>
              İsim:
              <input
                type="text"
                name="isim"
                value={formData.isim}
                onChange={handleInputChange}
                minLength={3}
                required
                disabled={submitting}
              />
            </label>
            <br />
            <div className="options">
              <label className="pizzaboyut-container">
                Boyut Seç:<span style={{ color: "red" }}>*</span>
                {pizzaBoyut.map((size) => (
                  <label key={size}>
                    <input
                      type="radio"
                      name="boyut"
                      value={size}
                      onChange={handleInputChange}
                      required
                      checked={formData.boyut === size}
                      disabled={submitting}
                    />
                    {size.toUpperCase()}
                  </label>
                ))}
              </label>
              <label className="pizzahamur-container">
                Hamur Tipi:<span style={{ color: "red" }}>*</span>
                <select
                  name="hamurTipi"
                  value={formData.hamurTipi}
                  onChange={handleInputChange}
                  required
                  disabled={submitting}
                >
                  <option disabled value="">
                    Hamur Tipi Seçiniz
                  </option>
                  <option value="ince">İnce</option>
                  <option value="standart">Standart</option>
                  <option value="kalin">Kalın</option>
                </select>
              </label>
            </div>
            <br />
            <h2>Ek Malzemeler</h2>
            <br />
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <label>Pizza Toppings:</label>
            <div className="toppings">
              {pizzaToppings.map((topping) => (
                <label key={topping.id}>
                  <input
                    type="checkbox"
                    name="toppings"
                    value={topping.name}
                    onChange={handleCheckboxChange}
                    checked={formData.toppings.includes(topping.name)}
                    disabled={submitting}
                  />
                  {topping.name}
                </label>
              ))}
            </div>
            <br />
            <label>
              Ek Notlar:
              <textarea
                name="extraNotes"
                value={formData.extraNotes}
                onChange={handleInputChange}
                disabled={submitting}
              ></textarea>
            </label>
            <hr />
            <div className="order-summary">
              <div className="counter">
                <button type="button" onClick={() => handleCounterChange(false)}>
                  -
                </button>
                <div className="counter-value">{formData.adet}</div>
                <button type="button" onClick={() => handleCounterChange(true)}>
                  +
                </button>
              </div>
              <div className="order-total">
                <div>Pizza Price: {pizzaBasePrice} TL</div>
                <div>Extra Topping Price: {totalToppingPrice} TL</div>
                <div>Order Total: {totalPrice} TL</div>
                <button type="submit" disabled={!isFormValid()}>
                  Sipariş Ver
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default FormArea;
