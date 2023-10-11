import EditBalanceCSS from "./EditBalance.module.css";
import React, { useState } from "react";

const EditBalance = ({ account }) => {
  const user_id = account.user_id;
  const [change, setChange] = useState(0);

  // edit balance
  const updateBalance = async (e) => {
    e.preventDefault();

    try {
      const body = { change }; // get { change: x dollars} to send

      await fetch(`http://localhost:5000/users/${user_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error.message);
    }

    window.location.reload();
  };

  // handles if amount is for subtraction
  const handleInputChange = (e) => {
    let inputValue = parseFloat(e.target.value);

    if (e.target.name === "subtract") {
      inputValue = -Math.abs(inputValue);
    }

    setChange(inputValue);
  };

  // don't have to press submit, works when enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      updateBalance(e);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="add"
        className={EditBalanceCSS.addBox}
        placeholder="Spent"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      ></input>
      <input
        type="text"
        name="subtract"
        className={EditBalanceCSS.subtractBox}
        placeholder="Returned"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
};

export default EditBalance;
