import React from "react";
import { OverviewContent } from "./OverviewStyle";
import { overviewBusiness } from "../../../Config/Data";
import BusinessList from "../../../Components/BusinessList";
// import add from "../../../../public/material-symbols_upload-rounded.svg";
import { MdOutlineFileUpload } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";

const Overview = () => {
  return (
    <OverviewContent>
      <div className="ContentTitle">
        <h1>Dashboard Overview</h1>
        <p>Welcome back, Here’s what is happening with your Busines</p>
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
                borderRadius: "5PX",
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
