import logo from "../assets/logo.svg";
import "./Success.css";
import SiparisToplami from "./Order.jsx";

export default function Success({currentOrder}) {
  const formatEkMalzemeler = (malzemeler) => {
     return malzemeler.join(',\n');
     }
 
 
  return (
    <div className="overlay-1">
      <img className="success-image" src={logo} />
      <p className="firsat2">fırsatın yolda</p>
      <h2>SİPARİŞİNİZ ALINDI!</h2>
      <h4>Position Absolute Acı Pizza</h4>
      <div>
        <br />
        Boyut: {currentOrder.size}
        <br />
        Hamur: {currentOrder.hamurKalinliği}
        <br />
        Ek Malzemeler: {formatEkMalzemeler(currentOrder.malzemeler)}
      </div>

      <div className="siparis-toplami-success">
      <h4>Sipariş Toplamı</h4>
      <p>
        Seçimler:
        <span malzemeler={currentOrder.malzemeler}>{currentOrder.totalMalzemePrice}₺</span>
      </p>
      <p className="toplam-success">
        Toplam:
        <span>{currentOrder.totalPrice}₺</span>
      </p>
    </div>
     
    </div>
  );
}