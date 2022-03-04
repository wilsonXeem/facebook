import React, { useState } from "react";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    fetch("http://localhost:8000/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json)
      .then((json) => alert(json));
  };

  return (
    <>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="input"
        type="email"
        placeholder="Mobile number or email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="input"
        type="password"
        placeholder="Password"
      />
      <button className="button" onClick={handleClick()}>Log In</button>
      <p style={{ fontSize: "small" }}>Forgot password?</p>
      <article className="hr">
        <hr />
        <p style={{ margin: "14px" }}>or</p> <hr />
      </article>
      <button className="create">Create new account</button>
    </>
  );
}

export default SignUpForm;
