import React, { useState } from "react";
import { Link } from "react-router-dom";

import LoginCSS from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const proceedLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="m-5">
      <h1>Login</h1>

      <form onSubmit={proceedLogin}>
        <div className="mt-3">
          <input
            type="text"
            placeholder="Email"
            className={LoginCSS.inputBox}
          />
        </div>

        <div className="mt-3">
          <input
            type="text"
            placeholder="Password"
            className={LoginCSS.inputBox}
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
