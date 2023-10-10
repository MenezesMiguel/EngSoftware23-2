import React from "react";
import logo from "../../images/logo2.png";
import "./header.css";

function Header() {
  return (
    <div class="header">
      <div class="logo">
        <img src={logo} alt="Logo do site" />
      </div>
      <div class="menu">
        <ul>
          <li class="headerNavigation" href="google.com">
            Início
          </li>
          <li class="headerNavigation">Sobre</li>
          <li class="headerNavigation">Serviços</li>
          <li class="headerNavigation">Contato</li>
        </ul>
      </div>
      <div class="login-btn-header-container">
        <button class="login-header-btn" onClick={() => console.log("aha")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
