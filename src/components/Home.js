import React from "react";
import SignUpForm from "./SignUpForm";

function Home() {
  return (
    <div className="body">
      <section className="top">
        <article>
          <h1>facebook</h1>
        </article>
        <SignUpForm />
      </section>
      <div className="language">
        <div className="left">
          <p>English (US)</p>
          <p>Francais (France)</p>
          <p>Portugues (Brazil)</p>
          <p>Italiano</p>
        </div>
        <div className="left">
          <p>Espanol</p>
          <p>中艾 (酷弟)</p>
          <p>Deutsch</p>
                  <p style={{ border: "solid black 1px", width:"10px"}}>+</p>
        </div>
      </div>
      <p style={{ textAlign: "center" }}>Facebook Inc.</p>
    </div>
  );
}

export default Home;
