import React, { useState } from "react";

import LoginCSS from "./Login.module.css";

const Register = () => {
  return (
    <div>
      <h1 className="m-5">Register</h1>
      <form className="m-5">
        <div className="mt-3">
          <input type="text" placeholder="Name" className={LoginCSS.inputBox} />
        </div>

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
          <input
            type="text"
            placeholder="Initial Balance"
            className={LoginCSS.inputBox}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
