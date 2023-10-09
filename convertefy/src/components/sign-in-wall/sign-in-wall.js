import React, { useState, setValue } from "react";
import "./sign-in-wall.css";

function SignInWall() {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");

  function handleTextChange(text) {
    setValue(text);

    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
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
                onChange={(e) => handleTextChange(e.target.value)}
              />
              <label className={isActive ? "Active" : ""} htmlFor="email">
                E-mail
              </label>
            </div>
          </div>
          <div class="line">
            <div id="float-label">
              <input type="password" />
              <label className={isActive ? "Active" : ""} htmlFor="senha">
                Senha
              </label>
            </div>
          </div>
          <button class="login-header-btn" onClick={() => console.log("aha")}>
            Login
          </button>
          {/* <button type="submit" class="btn btn-primary">
            Submit
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default SignInWall;
