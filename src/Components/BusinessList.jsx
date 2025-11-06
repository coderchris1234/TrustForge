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
              <BusinessCard
                key={item.id}
                id={item.id}
                title={item.businessName}
                industry={item.industry}
                businessStatus={item.businessStatus}
                fundingStage={item.fundingStage}
                description={item.description}
                views={item.views}
                likes={item.likes}
                messages={item.messages}
                postedDate={new Date(item.createdAt).toDateString()}
              />
            </div>
          ))
        : "No Recent Ideas"}
    </RecentIdeas>
  );
};
export default BusinessList;
