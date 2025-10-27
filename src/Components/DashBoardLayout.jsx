import React from "react";
import { DashboardLayout } from "./DashBoardLayoutStyle";
import { NavLink, Outlet } from "react-router-dom";

const DashBoardLayout = (props) => {
  return (
    <>
      <DashboardLayout>
        <aside className="aside">
          <div className="leftSidedContent">
            <div className="image-logo">
              <div className="image"></div>
              <h2 className="LogoName">TrustForge</h2>
            </div>
            <p className="DashboardName">{props.dashboard}</p>
          </div>
          <div className="sideBarContents">
            <div className="ItemList">
              {props?.Menu[0]?.map((section, index) => (
                <div key={index} className="businessContainer">
                  <NavLink to={section.link} end className="business">
                    <img src={section.Icon} alt="" />
                    <span>{section.label}</span>
                  </NavLink>
                </div>
              ))}
            </div>

            <div className="ItemList">
              {props?.Menu[1]?.map((section, index) => (
                <div key={index} className="businessContainer">
                  <NavLink to={section.link} end className="business">
                    <img src={section.Icon} alt="" />
                    <span>{section.label}</span>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          <div className="logout">
            <img src="/public/material-symbols_logout.svg" alt="" />
            <span>Logout</span>
          </div>
        </aside>

        <div className="LayoutPage">
          <header className="header">
            <div className="header-content">
              <div className="profile-content">
                <div className="image"></div>
                <div>
                  <p style={{ marginBottom: "0" }}>{props?.username}</p>
                  <span>{props?.title}</span>
                </div>
              </div>
              <div className="notification">
                <img src="/public/icon.svg" alt="" />
                <div className="rounded">{props?.notifcationCount || 0}</div>
              </div>
            </div>
          </header>
          {props.Outlet}
        </div>
      </DashboardLayout>
    </>
  );
};

export default DashBoardLayout;
