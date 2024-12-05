import logo from "../Assets/Iteration-1-assets/logo.svg";
import "./Success.css";
import SiparisToplami from "./Order.jsx";

export default function Success({ currentOrder }) {
  const formatEkMalzemeler = (malzemeler) => malzemeler.join(',\n');

  return (
    <div className="overlay-1">
      <img className="success-image" src={logo} alt="Logo" />
      <p className="firsat2">Fırsatın Yolda</p>
      <h2>SİPARİŞİNİZ ALINDI!</h2>
      <h4>Position Absolute Acı Pizza</h4>
      <div>
        <p>Boyut: {currentOrder.size}</p>
        <p>Hamur: {currentOrder.hamurKalinliği}</p>
        <p>Ek Malzemeler: {formatEkMalzemeler(currentOrder.malzemeler)}</p>
      </div>

      <div className="siparis-toplami-success">
        <h4>Sipariş Toplamı</h4>
        <p>
          Seçimler: <span>{currentOrder.totalMalzemePrice}₺</span>
        </p>
        <p className="toplam-success">
          Toplam: <span>{currentOrder.totalPrice}₺</span>
        </p>
      </div>
    </div>
  );
}
