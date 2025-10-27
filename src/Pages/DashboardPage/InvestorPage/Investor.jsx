import React from "react";
import { Outlet } from "react-router-dom";
import { InvestorMenu } from "../../../Config/Data";
import DashBoardLayout from "../../../Components/DashBoardLayout";

const Creator = () => {
  return (
    <>
      <DashBoardLayout
        Menu={InvestorMenu}
        username="Mr christobel"
        title="Investor"
        dashboard="Investor dashboard"
        Outlet={<Outlet />}
      />
    </>
  );
};

export default Creator;
