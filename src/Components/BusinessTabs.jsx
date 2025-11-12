import React, { useState } from "react";
import {
  TabContainer,
  TabHeader,
  TabButton,
  TabContent,
} from "./BusinessTabsStyle";
import DetailsTab from "./DetailsTab";
import DocumentTab from "./DocumentTab";
import EngagementTab from "./EngagementTab";
import Investor from "./Investor";

const BusinessTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState("Details");

  return (
    <TabContainer>
      <TabHeader>
        {["Details", "Document", "Engagement", "Investors"].map((tab) => (
          <TabButton
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </TabButton>
        ))}
      </TabHeader>

      <TabContent>
        {activeTab === "Details" && <DetailsTab data={data} />}
        {activeTab === "Document" && <DocumentTab data={data} />}
        {activeTab === "Engagement" && <EngagementTab data={data} />}
        {activeTab === "Investors" && <Investor data={data} />}
      </TabContent>
    </TabContainer>
  );
};

export default BusinessTabs;
