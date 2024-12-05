import React from "react";
import { useLocation } from "react-router-dom";
import { Nav } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg"; // Assets klasörü büyük harfle
import "../style/header.css"; // CSS dosyasını dahil ettik

const Header = () => {
  const location = useLocation();
  
  return (
    <div className="header-content">
      {/* Logo'yu doğru şekilde görüntülüyoruz */}
      <img className="header-content-img" src={logo} alt="Logo" />
      
      {/* /Form sayfasında Nav bar'ı gösteriyoruz */}
      {location.pathname === "/Form" && (
        <Nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Ana Sayfa
              </Link>
              <span> -</span>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Form">
                Sipariş Oluştur
              </Link>
            </li>
          </ul>
        </Nav>
      )}
    </div>
  );
};

export default Header;
