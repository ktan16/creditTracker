import React from "react";
import { Link } from "react-router-dom";

import HomeCSS from "./Home.module.css";

const Home = () => {
  const loginPage = (e) => {
    e.preventDefault();
    window.location = "/login";
  };

  const registerPage = (e) => {
    e.preventDefault();
    window.location = "/register";
  };

  return (
    <div className="text-center m-5">
      <h1>Credit Tracker</h1>

      <div className="mt-4">
        <button className={HomeCSS.loginButton} onClick={loginPage}>
          Login
        </button>
      </div>

      <div className="mt-4">
        <button className={HomeCSS.loginButton} onClick={registerPage}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;
