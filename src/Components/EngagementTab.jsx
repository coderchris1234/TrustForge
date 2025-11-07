import React from "react";
import styled from "styled-components";

const EngagementList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const EngagementItem = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f4f4f4;
  padding: 10px 14px;
  border-radius: 8px;
`;

const EngagementTab = () => (
  <EngagementList>
    {[
      { date: "2025-10-15", views: 30, likes: 12 },
      { date: "2025-10-18", views: 20, likes: 8 },
      { date: "2025-10-20", views: 32, likes: 10 },
      { date: "2025-10-24", views: 18, likes: 11 },
    ].map(({ date, views, likes }) => (
      <EngagementItem key={date}>
        <span>{date}</span>
        <span>
          👁 {views} ❤️ {likes}
        </span>
      </EngagementItem>
    ))}
  </EngagementList>
);

export default EngagementTab;
