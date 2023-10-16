import React, { useState } from "react";
import "./registerWall.css";

function RegisterWall() {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  const [email, setEmail] = useState();
  const [emailConfirm, setEmailConfirm] = useState();
  const [password, setPassword] = useState();
  const user = {};

  function handleTextChange(text) {
    setValue(text);

    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function register() {
    user.email = email;
    user.password = password;

    fetch("http://localhost:3001/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }
  return (
    <div class="signIncontainer">
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-header">Cadastre-se</div>
        <div class="card-body">
          <div class="line">
            <div id="float-label">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  handleTextChange(e.target.value);
                }}
              />
              <label className={isActive ? "Active" : ""} htmlFor="email">
                E-mail
              </label>
            </div>
          </div>
          <div class="line">
            <div id="float-label">
              <input
                type="email2"
                value={emailConfirm}
                onChange={(e) => {
                  setEmailConfirm(e.target.value);
                  handleTextChange(e.target.value);
                }}
              />
              <label className={isActive ? "Active" : ""} htmlFor="email">
                Confirme seu E-mail
              </label>
            </div>
          </div>
          <div class="line">
            <div id="float-label">
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  handleTextChange(e.target.value);
                }}
              />
              <label className={isActive ? "Active" : ""} htmlFor="senha">
                Senha
              </label>
            </div>
          </div>
          <button class="login-header-btn" onClick={() => register()}>
            Junte-se
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterWall;
