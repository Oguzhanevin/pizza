import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/pictures/logo.svg";
import "./Success.css";

export default function Success() {
  const location = useLocation();
  const { currentOrder } = location.state || {};  // Get the order details passed via state

  const formatEkMalzemeler = (malzemeler) => malzemeler.join(",\n");

  return (
    <div className="overlay-1">
      <img className="success-image" src={logo} alt="Logo" />
      <p className="firsat2">Fırsatın Yolda</p>
      <h2>SİPARİŞİNİZ ALINDI!</h2>
      <h4>Position Absolute Acı Pizza</h4>
      
      <div>
        <p><strong>Boyut:</strong> {currentOrder?.size}</p>
        <p><strong>Hamur:</strong> {currentOrder?.hamurKalinlığı}</p>
        <p><strong>Ek Malzemeler:</strong> {formatEkMalzemeler(currentOrder?.malzemeler)}</p>
      </div>

      <div className="siparis-toplami-success">
        <h4>Sipariş Toplamı</h4>
        <p>
          <strong>Seçimler:</strong> 
          <span malzemeler={currentOrder?.malzemeler}>{currentOrder?.totalMalzemePrice}₺</span>
        </p>
        <p className="toplam-success">
          <strong>Toplam:</strong>
          <span>{currentOrder?.totalPrice}₺</span>
        </p>
      </div>
    </div>
  );
}