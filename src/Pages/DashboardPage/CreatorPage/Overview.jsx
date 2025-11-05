import React, { useEffect, useState } from "react";
import { OverviewContent } from "./OverviewStyle";
import { getOverviewBusiness } from "../../../Config/Data";
import BusinessList from "../../../Components/BusinessList";
import { MdOutlineFileUpload } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import axios from "axios";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Overview = () => {
  const [overviewData, setOverviewData] = useState({});
  // const [loading, setLoading] = useState(true);

  // console.log("overviewData", overviewData);

  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const user = useSelector((state) => state.TrustForge.user);
  const userId = user?.data?.id;

  useEffect(() => {
    if (!userId) {
      return;
    }
    try {
      const endpoint =
        user?.data?.role === "Investor"
          ? `${BaseUrl}/investor/${userId}`
          : `${BaseUrl}/user/${userId}`;

      const fetchData = async () => {
        try {
          const res = await axios.get(endpoint);
          setOverviewData(res.data.data || {});
        } catch (err) {
          console.error("Error fetching overview data:", err);
        } finally {
          // setLoading(false);
        }
      };

      fetchData();
    } catch (error) {
      console.error("Error reading persisted user:", error);
      // setLoading(false);
    }
  }, [userId]);

  const overviewBusiness = getOverviewBusiness(overviewData);

  return (
    <OverviewContent>
      <div className="ContentTitle">
        <h1>Dashboard Overview</h1>
        <p>Welcome back, Here’s what is happening with your Business</p>
      </div>

      <div className="Overview-content">
        {overviewBusiness.map((section) => (
          <div key={section.id} className="box">
            <div>
              <p>{section.title}</p>
              <span>{section.num}</span>
            </div>
            <div
              style={{
                backgroundColor: section.bgColor,
                padding: "8px",
                color: section.color,
                borderRadius: "5px",
              }}
            >
              <img src={section.icon} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="recentIdeas">
        <div className="recent">
          <p>Recent Ideas</p>
          <NavLink to={"mybusiness"}>
            <button>View All</button>
          </NavLink>
        </div>
        <BusinessList overviewData={overviewData} />
      </div>

      <div className="QuickAction">
        <p>Quick Action</p>
        <div className="action">
          <div
            style={{
              backgroundColor: "#0046FF",
              color: "#fff",
            }}
            className="quick"
          >
            <MdOutlineFileUpload width={"20px"} />
            <p>Add Business Profile</p>
          </div>
          <div
            style={{
              border: "1px solid lightGrey",
            }}
            className="quick"
          >
            <CiCalendar width={"40px"} />
            <p style={{ color: "black" }}>Scheduled Meeting</p>
          </div>
        </div>
      </div>
    </OverviewContent>
  );
};

export default Overview;
