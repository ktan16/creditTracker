import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserInfo = () => {
    const { user_id } = useParams();
    const [account, setAccount] = useState(null);

    const getInfo = async () => {
        try {
            const response = await fetch(`http://localhost:5000/users/${user_id}`);
            const jsonData = await response.json();

            console.log("Response: ", response);
            console.log("jsonData: ", jsonData);
            setAccount(jsonData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getInfo();
    }, [user_id]);


    return(
        <div className="m-5">

            {account ? (
                <div>
                    <h1>Name: {account.user_name}</h1>
                    
                    <p>ID: {account.user_id}</p>
                    <p>Email: {account.user_email}</p>
                    <p>Password: {account.user_password}</p>
                    <p>Balance: {account.user_balance}</p>
                    <p>Max: {account.user_max}</p>
                    </div>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    )
};

export default UserInfo;