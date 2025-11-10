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

const EngagementTab = ({ data }) => (
  <EngagementList>
    {[
      { date: "2025-10-15", views: data?.viewCount, likes: data?.likeCount },
      { date: "2025-10-18", views: data?.viewCount, likes: data?.likeCount },
      { date: "2025-10-20", views: data?.viewCount, likes: data?.likeCount },
      { date: "2025-10-24", views: data?.viewCount, likes: data?.likeCount },
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
