import React, { useEffect, useState } from "react";
import { DashboardLayoutContainer } from "./DashBoardLayoutStyle";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../Pages/Global/Slice";
import Logo from "../assets/Logo.png";
import axios from "axios";

const DashBoardLayout = (props) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const user = useSelector((state) => state.TrustForge.user);
  const userId = user?.data?.id;
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const [userDetails, setUserDetails] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const userLogout = () => {
    nav("/");
    dispatch(logOut());
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;
      const endpoints =
        user?.data?.role === "Investor"
          ? `${BaseUrl}/investor/${userId}`
          : `${BaseUrl}/user/${userId}`;
      try {
        const res = await axios.get(endpoints);
        setUserDetails(res?.data?.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUser();
  }, [userId]);

  return (
    <DashboardLayoutContainer showSidebar={showSidebar}>
      <aside className="aside">
        <div className="close-btn" onClick={() => setShowSidebar(false)}>
          &times;
        </div>

        <div className="leftSidedContent">
          <div className="image-logo">
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
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
          <span style={{ cursor: "pointer" }} onClick={userLogout}>
            Logout
          </span>
        </div>
      </aside>

      <div className="LayoutPage">
        <header className="header">
          <div className="top-bar">
            <div className="hamburger" onClick={() => setShowSidebar(true)}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>

            <div className="notification">
              <img src="/public/icon.svg" alt="" />
              <div className="rounded">{props?.notifcationCount || 0}</div>
            </div>
          </div>

          <div className="header-content">
            <div className="profile-content">
              <div className="image">{userDetails?.user.fullName[0]}</div>
              <div className="UserInfo">
                <p>{userDetails?.user?.fullName || "Loading..."}</p>
                <span>{userDetails?.user?.role}</span>
              </div>
            </div>
          </div>
        </header>
        {props.Outlet}
      </div>
    </DashboardLayoutContainer>
  );
};

export default DashBoardLayout;
