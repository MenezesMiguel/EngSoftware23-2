import React, { useEffect, useState } from "react";
import logo from "../../images/logo2.png";
import "./header.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Header() {
  const [user, setUser] = useState(localStorage.user);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(localStorage.user);
  });

  function logout() {
    localStorage.clear();
    setUser({});
    navigate("/login");
  }

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
        {user ? (
          <button class="login-header-btn" onClick={() => logout()}>
            <Link to="/">Logout</Link>
          </button>
        ) : (
          <button class="login-header-btn">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
