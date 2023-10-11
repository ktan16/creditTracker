import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserInfoCSS from "./UserInfo.module.css";
import EditBalance from "./EditBalance";

const UserInfo = () => {
  const { user_id } = useParams();
  const [account, setAccount] = useState(null);

  const signOut = (e) => {
    e.preventDefault();
    window.location = "/";
  };

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
  });

  return (
    <div>
      {account ? (
        <div>
          <div className={UserInfoCSS.subBox}>
            <div className={UserInfoCSS.sayHi}>Hi, {account.user_name}</div>
            <div className={UserInfoCSS.balanceContainer}>
              ${account.user_balance}
              <div className={UserInfoCSS.maxContainer}>
                Limit: ${account.user_max}
              </div>
            </div>
            <button className={UserInfoCSS.signOut} onClick={signOut}>
              Log Out
            </button>
          </div>

          <EditBalance account={account} />
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default UserInfo;
