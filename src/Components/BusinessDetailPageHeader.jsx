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
  PosterDetails,
  PosterName,
  PosterRole,
  Stats,
  Stat,
  Date,
} from "./BusinessDetailPageHeaderStyle";
// import { data } from "react-router-dom";

const BusinessDetailPageHeader = ({ data }) => {
  const Initials = data?.businessOwnerName
    ? data?.businessOwnerName
        .split(" ")
        .map((namePart) => namePart.charAt(0).toUpperCase())
        .join("")
    : "";
  console.log("data", data);
  return (
    <Card>
      <TopRow>
        <Category>{data?.businessName}</Category>
        <Status>{data?.businessStatus}</Status>
      </TopRow>

      <div className="details">
        <RetailLabel>{data?.industry}</RetailLabel>
        <RetailLabel>{data?.businessModel}</RetailLabel>
      </div>

      {/* <Description>{data.description}</Description> */}

      <BottomRow>
        <Poster>
          <div className="Initials">{Initials}</div>
          <PosterDetails>
            <PosterName>{data?.businessOwnerName}</PosterName>
            <PosterRole>{data?.businessName}</PosterRole>
          </PosterDetails>
        </Poster>

        <Stats>
          <Stat>👁 {data?.viewCount}</Stat>
          <Stat>❤️ {data?.likeCount}</Stat>
        </Stats>

        <Date>{data?.postedDate}</Date>
      </BottomRow>
    </Card>
  );
};

export default BusinessDetailPageHeader;
