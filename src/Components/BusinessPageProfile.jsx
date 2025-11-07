import React from "react";
import {
  CardWrap,
  TopTags,
  Tag,
  Title,
  Subtitle,
  ProfileRow,
  Avatar,
  NameBlock,
  Name,
  Role,
  StatsRow,
  Stat,
  ActionColumn,
  LikeButton,
  SaveButton,
  ScheduleButton,
  InvestButton,
} from "./BusinessPageProfileStyle";

const BusinessPageProfile = () => {
  return (
    <CardWrap>
      <div>
        <TopTags>
          <Tag>AI & ML</Tag>
          <Tag active>Active</Tag>
          <Tag>Series A</Tag>
        </TopTags>

        <Title>SupplyChain AI Solutions</Title>
        <Subtitle>
          B2B SaaS platform providing AI-powered supply chain optimisation for
          manufacturing companies.
        </Subtitle>

        <ProfileRow>
          <Avatar>JS</Avatar>
          <NameBlock>
            <Name>John Startup</Name>
            <Role>CEO & Co-founder</Role>
          </NameBlock>
        </ProfileRow>

        <StatsRow>
          <Stat>👁️ 342 views</Stat>
          <Stat>❤️ 45 likes</Stat>
          <Stat>Posted 2025 - 10 - 15</Stat>
        </StatsRow>
      </div>

      <ActionColumn>
        <LikeButton>🤍 Like</LikeButton>
        <SaveButton>Save</SaveButton>
        <ScheduleButton>📅 Schedule meeting</ScheduleButton>
        <InvestButton>₦ Invest Now</InvestButton>
      </ActionColumn>
    </CardWrap>
  );
};

export default BusinessPageProfile;
