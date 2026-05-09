import React, { useEffect, useState } from "react";
import { DashboardLayoutContainer } from "./DashBoardLayoutStyle";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../Pages/Global/Slice";
import axios from "axios";
import profileHolder from "../assets/profileHolder.png";

const DashBoardLayout = (props) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const token = useSelector((state) => state.TrustForge.user?.token);
  const [kyc, setKyc] = useState(null);
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const userId = useSelector((state) => state.TrustForge.user?.data?.id);
  useEffect(() => {
    if (!userId) return;

    const fetchKyc = async () => {
      try {
        const res = await axios.get(`${BaseUrl}/kyc/${userId}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setKyc(res?.data?.data);
        console.log("details:", res.data.data);
      } catch (error) {
        console.error("Error fetching KYC:", error);
      }
    };

    fetchKyc();
    // const interval = setInterval(fetchKyc, 1000);
    // return () => clearInterval(interval);
  }, [userId, token, BaseUrl]);

  const openLogoutModal = () => setShowLogoutModal(true);
  const closeLogoutModal = () => setShowLogoutModal(false);

  const confirmLogout = () => {
    dispatch(logOut());
    nav("/");
  };
  const dispatch = useDispatch();
  const nav = useNavigate();
  const user = useSelector((state) => state.TrustForge.user);

  const [userDetails, setUserDetails] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  // console.log("userDetails", userDetails?.user?.kycStatus);

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
    const interval = setInterval(fetchUser, 1000); // every 5 seconds

    return () => clearInterval(interval);
  }, [userId]);

  return (
    <DashboardLayoutContainer showSidebar={showSidebar}>
      <aside className="aside">
        <div className="close-btn" onClick={() => setShowSidebar(false)}>
          &times;
        </div>

        <div className="leftSidedContent">
          <div className="image-logo">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <span className="Dash_logo_text">TrustForge.</span>
            </Link>
          </div>
          <p className="DashboardName">{props.dashboard}</p>
        </div>

        <div className="sideBarContents">
          <div className="ItemList">
            {props?.Menu[0]?.map((section, index) => {
              const isKycIncomplete =
                userDetails?.user?.kycStatus.includes("not");
              const isKycRoute = section.link === "kycverification";
              const isDisabled = isKycIncomplete && !isKycRoute;

              return (
                <div
                  key={index}
                  className={`businessContainer`}
                  style={{ opacity: isDisabled ? 0.4 : 1 }}
                  onClick={() => { if (!isDisabled) setShowSidebar(false); }}
                >
                  {isDisabled ? (
                    <div className="business">
                      <div><section.Icon size={18} /></div>
                      <span>{section.label}</span>
                    </div>
                  ) : (
                    <NavLink to={section.link} end className="business">
                      <div><section.Icon size={18} /></div>
                      <span>{section.label}</span>
                    </NavLink>
                  )}
                </div>
              );
            })}
          </div>

          <div className="ItemList">
            {props?.Menu[1]?.map((section, index) => {
              const isKycIncomplete =
                userDetails?.user?.kycStatus.includes("not");
              const isKycRoute = section.link === "kycverification";
              const isDisabled = isKycIncomplete && !isKycRoute;

              return (
                <div
                  key={index}
                  className={`businessContainer`}
                  style={{ opacity: isDisabled ? 0.4 : 1 }}
                  onClick={() => { if (!isDisabled) setShowSidebar(false); }}
                >
                  {isDisabled ? (
                    <div className="business">
                      <div><section.Icon size={18} /></div>
                      <span>{section.label}</span>
                    </div>
                  ) : (
                    <NavLink to={section.link} end className="business">
                      <div><section.Icon size={18} /></div>
                      <span>{section.label}</span>
                    </NavLink>
                  )}
                </div>
              );
            })}
          </div>

          <div className="logout" onClick={openLogoutModal}>
            <img src="/public/material-symbols_logout.svg" alt="" />
            <span>Logout</span>
          </div>
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
              {/* <img src="/public/icon.svg" alt="" />
              <div className="rounded">{props?.notifcationCount || 0}</div> */}
            </div>
          </div>

          <div className="header-content">
            <div className="profile-content">
              <div className="imageContainer">
                <img
                  src={kyc?.profilePic ? kyc?.profilePic : profileHolder}
                  alt=""
                />
              </div>

              <div className="UserInfo">
                <p>{userDetails?.user?.fullName || "Loading..."}</p>
                <span>{userDetails?.user?.role}</span>
              </div>
            </div>
          </div>
        </header>
        {props.Outlet}
      </div>
      {showLogoutModal && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
            <h1>Logging out</h1>
            <p>
              Leaving so soon? You'll be logged out of your account. Do you want to continue?
            </p>
            <div className="buttons">
              <button className="logout-btn" onClick={confirmLogout}>
                Log me out
              </button>
              <button className="cancel-btn" onClick={closeLogoutModal}>
                Stay logged in
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayoutContainer>
  );
};

export default DashBoardLayout;
