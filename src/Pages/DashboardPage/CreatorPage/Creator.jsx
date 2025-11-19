import React, { useState } from "react";
// import { DashboardLayout } from "./CreatorStyle";
import { Outlet } from "react-router-dom";
import { CreatorMenu } from "../../../Config/Data";
import DashBoardLayout from "../../../Components/DashBoardLayout";

const Creator = () => {
  const [notifcationCount, setNotifcationCount] = useState(0);
  return (
    <>
      <DashBoardLayout
        Menu={CreatorMenu}
        username="Mr Eze"
        title="Business Owner"
        dashboard="Business dashboard"
        Outlet={<Outlet context={{ setNotifcationCount }} />}
        notifcationCount={notifcationCount}
      />
    </>
  );
};

export default Creator;
