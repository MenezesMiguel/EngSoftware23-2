import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./sign-in-wall.css";

function SignInWall() {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();
  const navigate = useNavigate();
  function handleTextChange(text) {
    setValue(text);

    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  useEffect(() => {
    fetch("http://localhost:3001/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(user);
        setUser(data);
      });
  }, []);

  function login() {
    user.some((user) => {
      if (user.email === email && user.password === password) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
        return true;
      }
    });
  }

  function redirect() {
    navigate("/cadastro");
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
                type="password"
                value={password}
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
          <button class="login-header-btn" onClick={(e) => redirect()}>
            Cadastro
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInWall;
