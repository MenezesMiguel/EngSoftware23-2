import React, { useState } from "react";
import "./sign-in-wall.css";

function SignInWall() {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleTextChange(text) {
    setValue(text);

    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function login() {
    console.log(email, password);
  }

  return (
    <div class="signIncontainer">
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-header">Login</div>
        <div class="card-body">
          <div class="line">
            <div id="float-label">
              <input
                type="email"
                value={value}
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
          <button class="login-header-btn" onClick={() => login()}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInWall;
