import React, { Fragment, useEffect, useState } from "react";

import UserInfo from "../components/UserInfo";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="m-5">
        <UserInfo />
      </div>
    </Fragment>
  );
};

export default Dashboard;
