import React, { useEffect, useState } from "react";
import { OverviewContent } from "./OverviewStyle";
import { getOverviewBusiness } from "../../../Config/Data";
import BusinessList from "../../../Components/BusinessList";
import { MdOutlineFileUpload } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import axios from "axios";

const Overview = () => {
  const [overviewData, setOverviewData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const BaseUrl = import.meta.env.VITE_BaseUrl;

    try {
      const root = localStorage.getItem("persist:root");
      if (!root) {
        setLoading(false);
        return;
      }

      const parsedRoot = JSON.parse(root);
      const trustForgeData = parsedRoot.TrustForge
        ? JSON.parse(parsedRoot.TrustForge)
        : null;

      const userData = trustForgeData?.user?.data;
      const token = userData?.token;
      const userId = userData?.id;
      const role = userData?.role;

      if (!userId || !token) {
        setLoading(false);
        return;
      }

      const endpoint =
        role === "Investor"
          ? `${BaseUrl}/investor/${userId}`
          : `${BaseUrl}/user/${userId}`;

      const fetchData = async () => {
        try {
          const res = await axios.get(endpoint, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setOverviewData(res.data.data || {});
        } catch (err) {
          console.error("Error fetching overview data:", err);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    } catch (error) {
      console.error("Error reading persisted user:", error);
      setLoading(false);
    }
  }, []);

  const overviewBusiness = getOverviewBusiness(overviewData);

  return (
    <OverviewContent>
      <div className="ContentTitle">
        <h1>Dashboard Overview</h1>
        <p>Welcome back, Here’s what is happening with your Business</p>
      </div>

      <div className="Overview-content">
        {loading ? (
          <p>Loading overview...</p>
        ) : (
          overviewBusiness.map((section) => (
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
          ))
        )}
      </div>

      <div className="recentIdeas">
        <div className="recent">
          <p>Recent Ideas</p>
          <button>View All</button>
        </div>
        <BusinessList />
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
