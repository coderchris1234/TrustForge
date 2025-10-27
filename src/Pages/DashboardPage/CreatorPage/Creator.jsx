import React from "react";
// import { DashboardLayout } from "./CreatorStyle";
import { Outlet } from "react-router-dom";
import { CreatorMenu } from "../../../Config/Data";
import DashBoardLayout from "../../../Components/DashBoardLayout";

const Creator = () => {
  return (
    <>
      <DashBoardLayout
        Menu={CreatorMenu}
        username="Mr Eze"
        title="Business Owner"
        dashboard="Business dashboard"
        Outlet={<Outlet />}
      />
    </>
  );
};

export default Creator;
