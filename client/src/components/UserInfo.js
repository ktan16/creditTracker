import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserInfoCSS from "./UserInfo.module.css";
import EditBalance from "./EditBalance";

const UserInfo = () => {
  const { user_id } = useParams();
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);

  const getInfo = async () => {
    try {
      const response = await fetch(`http://localhost:5000/users/${user_id}`);
      const jsonData = await response.json();

      setAccount(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, [user_id]);

  return (
    <div>
      {account ? (
        <div>
          <h1>Hello, {account.user_name}</h1>

          <p>ID: {account.user_id}</p>
          <p>Email: {account.user_email}</p>
          <p>Password: {account.user_password}</p>
          <p>Balance: ${account.user_balance}</p>
          <p>Max: ${account.user_max}</p>

          <EditBalance account={account} />
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default UserInfo;
