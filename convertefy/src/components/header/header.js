import React from "react";
import logo from "../../images/logo2.png";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div class="header">
      <div class="logo">
        <Link to="/">
          <img src={logo} alt="Logo do site" />
        </Link>
      </div>
      <div class="menu">
        <ul>
          <li class="headerNavigation" href="google.com">
            <Link to="/">Início</Link>
          </li>
          <li class="headerNavigation" href="google.com">
            <Link to="/historico">Historico</Link>
          </li>
        </ul>
      </div>
      <div class="login-btn-header-container">
        <button class="login-header-btn" onClick={() => console.log("aha")}>
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
