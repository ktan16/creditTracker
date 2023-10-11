import React, { useState } from "react";
import { Link } from "react-router-dom";

import LoginCSS from "./Login.module.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [max, setMax] = useState("");

  const uploadUser = async (e) => {
    e.preventDefault();

    try {
      const body = { name, email, password, max };
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="m-5">
      <h1>Register</h1>
      <form onSubmit={uploadUser}>
        <div className="mt-3">
          <input
            type="text"
            placeholder="Name"
            className={LoginCSS.inputBox}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <input
            type="text"
            placeholder="Email"
            className={LoginCSS.inputBox}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <input
            type="text"
            placeholder="Password"
            className={LoginCSS.inputBox}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <input
            type="text"
            placeholder="Max Limit"
            className={LoginCSS.inputBox}
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <button className={LoginCSS.loginButton}>Submit</button>
        </div>
      </form>

      <div className="mt-3">
        Already have an account?
        <Link to="/login"> Click here to login.</Link>
      </div>
    </div>
  );
};

export default Register;
