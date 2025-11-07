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

const BusinessDetailPageHeader = () => {
  return (
    <Card>
      <TopRow>
        <Category>Supermarket / Mini Mart</Category>
        <Status>Active</Status>
      </TopRow>

      <RetailLabel>Retail</RetailLabel>

      <Description>
        Neighborhood store selling groceries and daily essentials.
      </Description>

      <BottomRow>
        <Poster>
          <ProfileImage
            src="/images/james-victoria.jpg" // Replace with actual image path
            alt="James Victoria"
          />
          <PosterDetails>
            <PosterName>James Victoria</PosterName>
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
