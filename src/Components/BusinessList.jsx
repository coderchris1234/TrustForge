import React from "react";
import { RecentIdeas } from "./BusinessListStyle";
import { RecentBusiness } from "../Config/Data";
const BusinessList = () => {
  return (
    <RecentIdeas>
      {RecentBusiness.map((item) => (
        <div key={item.id} className="wow">
          <p className="title">{item.title}</p>
          <div className="ideaLabel">
            <p>{item.label}</p>
            <span>{item.isActive ? "active" : ""}</span>
          </div>
          <div className="cont">
            <div className="ideaIcons">
              <div className="icons">
                <img src={item.icon} alt="" />
                <span>{item.num}</span>
              </div>
              <div className="icons">
                <img src={item.icon2} alt="" />
                <span>{item.num2}</span>
              </div>
              <div className="icons">
                <img src={item.icon3} alt="" />
                <span>{item.num3}</span>
              </div>
            </div>
            <p
              style={{
                paddingTop: "10px",
              }}
            >
              {item.time}
            </p>
          </div>
        </div>
      ))}
    </RecentIdeas>
  );
};

export default BusinessList;
