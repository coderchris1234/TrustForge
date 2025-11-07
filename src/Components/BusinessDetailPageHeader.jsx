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
  console.log("data", data);
  return (
    <Card>
      <TopRow>
        <Category>{data?.businessName}</Category>
        <Status>{data?.businessStatus}</Status>
      </TopRow>

      <RetailLabel>{data?.industry}</RetailLabel>

      {/* <Description>{data.description}</Description> */}

      <BottomRow>
        <Poster>
          <ProfileImage
            src="/images/james-victoria.jpg" // Replace with actual image path
            alt="James Victoria"
          />
          <PosterDetails>
            <PosterName>{data?.fullName}</PosterName>
            <PosterRole>{data?.businessName}</PosterRole>
          </PosterDetails>
        </Poster>

        <Stats>
          <Stat>👁 {data?.viewCount}</Stat>
          <Stat>❤️ {data?.likeCount}</Stat>
          <Stat>💬 6</Stat>
        </Stats>

        <Date>2025-10-14</Date>
      </BottomRow>
    </Card>
  );
};

export default BusinessDetailPageHeader;
