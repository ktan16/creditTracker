import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UserInfo from "../components/UserInfo";

const Dashboard = () => {
    return(
        <Fragment>
            <UserInfo />
        </Fragment>
    )
};

export default Dashboard;