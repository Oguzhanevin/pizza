import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './OrderForm.css';
import OrderPizzaImage from "../../Interfaces/Iteration-1/OrderPizza.png"; // Resim yolu güncellendi

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    size: '',
    toppings: [],
    notes: '',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        toppings: checked
          ? [...prevData.toppings, value]
          : prevData.toppings.filter((topping) => topping !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || formData.name.length < 3 || !formData.size) {
      setError('Lütfen tüm alanları doldurun!');
      setIsSubmitting(false);
      return;
    }

    axios
      .post('https://reqres.in/api/pizza', formData)
      .then(() => {
        navigate('/confirmation');
      })
      .catch((err) => {
        console.error(err);
        setError('Sipariş gönderilemedi. Lütfen tekrar deneyin.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="order-form">
      <img src={OrderPizzaImage} alt="Order Pizza" style={{ width: "100%" }} />
      <h2>Sipariş Formu</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Adınız:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Pizza Boyutu:
          <select name="size" value={formData.size} onChange={handleChange}>
            <option value="">Boyut Seç</option>
            <option value="small">Küçük</option>
            <option value="medium">Orta</option>
            <option value="large">Büyük</option>
          </select>
        </label>
        <label>Malzemeler:</label>
        <div>
          {['Peynir', 'Mantar', 'Zeytin', 'Biber'].map((ingredient) => (
            <label key={ingredient}>
              <input
                type="checkbox"
                value={ingredient}
                checked={formData.toppings.includes(ingredient)}
                onChange={handleChange}
              />
              {ingredient}
            </label>
          ))}
        </div>
        <label>
          Özel Notlar:
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Gönderiliyor...' : 'Sipariş Ver'}
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
