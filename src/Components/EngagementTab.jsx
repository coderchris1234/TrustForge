import React from "react";
import styled from "styled-components";
import { FaRegEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const breakpoints = {
  mobile: "480px",
  mobileLarge: "768px",
  tablet: "1024px",
};

export const EngagementList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 9px;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    gap: 8px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 6px;
  }
`;

export const EngagementItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f4f4f4;
  padding: 10px 14px;
  border-radius: 8px;
  gap: 10px;

  /* Tablet: reduce padding slightly */
  @media (max-width: ${breakpoints.tablet}) {
    padding: 9px 12px;
  }

  /* Small Tablets & Large Phones */
  @media (max-width: ${breakpoints.mobileLarge}) {
    flex-direction: column; /* Stack content vertically */
    align-items: flex-start;
    padding: 8px 10px;
    gap: 8px;
  }

  /* Mobile Phones */
  @media (max-width: ${breakpoints.mobile}) {
    padding: 7px 8px;
    gap: 6px;
  }
`;

const EngagementTab = ({ data }) => (
  <EngagementList>
    {[{ views: data?.viewCount, likes: data?.likeCount }].map(
      ({ views, likes }) => (
        <EngagementItem key={views + likes}>
          {/* <span>{date}</span> */}
          <span>
            <FaRegEye /> {views} <FaRegHeart /> {likes}
          </span>
        </EngagementItem>
      )
    )}
  </EngagementList>
);

export default EngagementTab;
