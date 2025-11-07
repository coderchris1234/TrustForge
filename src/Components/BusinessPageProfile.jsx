import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
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
import { useSelector } from "react-redux";
import MeetingModal from "./MeetingModal";

const BusinessPageProfile = ({ data }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const token = useSelector((state) => state.TrustForge.user?.token);
  console.log(token);
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  // const [likes, setLikes] = React.useState(data?.likeCount);
  return (
    <>
      <CardWrap>
        <div>
          <TopTags>
            <Tag>{data?.industry}</Tag>
            <Tag active>{data?.businessStatus}</Tag>
            <Tag>{data?.fundingStage}</Tag>
          </TopTags>

          <Title>{data?.businessName}</Title>
          <Subtitle>{data?.description}</Subtitle>

          <ProfileRow>
            <Avatar>JS</Avatar>
            <NameBlock>
              <Name>John Startup</Name>
              <Role>CEO & Co-founder</Role>
            </NameBlock>
          </ProfileRow>

          <StatsRow>
            <Stat>
              <IoEyeOutline /> {data?.viewCount}
            </Stat>
            <Stat>
              <CiHeart /> {data?.likeCount}
            </Stat>
            <Stat>Posted {data?.createdAt.slice(0, 10)}</Stat>
          </StatsRow>
        </div>

        <ActionColumn>
          <LikeButton>🤍 Like</LikeButton>
          <SaveButton>Save</SaveButton>
          <ScheduleButton onClick={() => setOpenModal(true)}>
            📅 Schedule meeting
          </ScheduleButton>
          <InvestButton>₦ Invest Now</InvestButton>
        </ActionColumn>
      </CardWrap>
      <MeetingModal open={openModal} close={() => setOpenModal(false)} />
    </>
  );
};

export default BusinessPageProfile;
