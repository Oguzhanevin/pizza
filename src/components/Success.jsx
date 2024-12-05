import logo from "../assets/pictures/logo.svg";
import "./Success.css";
import SiparisToplami from "./Order.jsx";

export default function Success({ currentOrder }) {
  const formatEkMalzemeler = (malzemeler) => malzemeler.join(',\n');

  return (
    <div className="overlay-1">
      <img className="success-image" src={logo} alt="Logo" />
      <p className="firsat2">fırsatın yolda</p>
      <h2>SİPARİŞİNİZ ALINDI!</h2>
      <h4>Position Absolute Acı Pizza</h4>
      
      <div>
        <p><strong>Boyut:</strong> {currentOrder.size}</p>
        <p><strong>Hamur:</strong> {currentOrder.hamurKalinlığı}</p>
        <p><strong>Ek Malzemeler:</strong> {formatEkMalzemeler(currentOrder.malzemeler)}</p>
      </div>

      <div className="siparis-toplami-success">
        <h4>Sipariş Toplamı</h4>
        <p>
          <strong>Seçimler:</strong> 
          <span malzemeler={currentOrder.malzemeler}>{currentOrder.totalMalzemePrice}₺</span>
        </p>
        <p className="toplam-success">
          <strong>Toplam:</strong>
          <span>{currentOrder.totalPrice}₺</span>
        </p>
      </div>
    </div>
  );
}
