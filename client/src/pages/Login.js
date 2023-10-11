import React, { useState } from "react";
import { Link } from "react-router-dom";

import LoginCSS from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const tryLogin = async (e) => {
    e.preventDefault();

    try {
      const body = { email, password };
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      // if response success, response will contain user_id
      if (response.status === 200) {
        const data = await response.json(); // { user_id: x }
        const { user_id } = data;

        console.log("User ID: ", user_id);
        window.location = `/users/${user_id}`;
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="m-5">
      <h1>Login</h1>

      <form onSubmit={tryLogin}>
        <div className="mt-3">
          <input
            type="email"
            placeholder="Email"
            className={LoginCSS.inputBox}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <input
            type="password"
            placeholder="Password"
            className={LoginCSS.inputBox}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <button className={LoginCSS.loginButton}>Submit</button>
        </div>
      </form>

      <div className="mt-3">
        New user?
        <Link to="/register"> Click here to register.</Link>
      </div>
    </div>
  );
};

export default Login;
