import React from "react";
import { RecentIdeas } from "./BusinessListStyle";
import BusinessCard from "./BusinessCard";
// import { RecentBusiness } from "../Config/Data";
const BusinessList = ({ overviewData }) => {
  console.log(overviewData);
  return (
    <RecentIdeas>
      {overviewData?.businesses?.length > 0
        ? overviewData.businesses.map((item) => (
            <div className="omo">
              <BusinessCard {...item} />
            </div>
          ))
        : "No Recent Ideas"}
    </RecentIdeas>
  );
};
export default BusinessList;
