import React, { useState } from "react";

import LoginCSS from "./Login.module.css";

const Login = () => {
  return (
    <div>
      <h1 className="m-5">Login</h1>
      <form className="m-5">
        <div>
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
      </form>

      <div>
        <button className={LoginCSS.loginButton}></button>
      </div>
    </div>
  );
};

export default Login;
