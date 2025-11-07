import React from "react";
import {
  Card,
  TopRow,
  Category,
  Status,
  RetailLabel,
  Description,
  BottomRow,
  Poster,
  ProfileImage,
  PosterDetails,
  PosterName,
  PosterRole,
  Stats,
  Stat,
  Date,
} from "./BusinessDetailPageHeaderStyle";

const BusinessDetailPageHeader = ({ data }) => {
  return (
    <Card>
      <TopRow>
        <Category>{data.businessName}</Category>
        <Status>Active</Status>
      </TopRow>

      <RetailLabel>{data.industry}</RetailLabel>

      <Description>{data.description}</Description>

      <BottomRow>
        <Poster>
          <ProfileImage
            src="/images/james-victoria.jpg" // Replace with actual image path
            alt="James Victoria"
          />
          <PosterDetails>
            <PosterName>{data?.user?.fullName}</PosterName>
            <PosterRole>Fashion Designer</PosterRole>
          </PosterDetails>
        </Poster>

        <Stats>
          <Stat>👁 30</Stat>
          <Stat>❤️ 12</Stat>
          <Stat>💬 6</Stat>
        </Stats>

        <Date>2025-10-14</Date>
      </BottomRow>
    </Card>
  );
};

export default BusinessDetailPageHeader;
