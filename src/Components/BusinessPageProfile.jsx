import React, { useState, useEffect } from "react";
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
  ModalBox,
  ModalOverLay,
} from "./BusinessPageProfileStyle";
import { useDispatch, useSelector } from "react-redux";
import MeetingModal from "./MeetingModal";
import {
  toggleSavedBusiness,
  toggleLikedBusiness,
} from "../Pages/Global/Slice";
import axios from "axios";
import toast from "react-hot-toast";
import { MdOutlineCancel } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BusinessPageProfile = ({ data }) => {
  const [form, setForm] = useState({ price: "", businessId: "" });
  const [form, setForm] = useState({
    price: "",
    businessId: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const [Modal, setModal] = useState(false);
  const [selected, setSelected] = useState(false);
  const [likeCount, setLikeCount] = useState(data?.likeCount || 0);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.TrustForge.user?.token);
  const savedList = useSelector((state) => state.TrustForge.savedBusinesses);
  const likedList = useSelector((state) => state.TrustForge.likedBusinesses);
  const liked = likedList.includes(data?.id);
  const isSavedUI = savedList.some((b) => b.id === data?.id);
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const isLoading = !data;

  useEffect(() => {
    if (data) setLikeCount(data.likeCount || 0);
  }, [data]);

  const savedList = useSelector((state) => state.TrustForge.savedBusinesses);
  const likedList = useSelector((state) => state.TrustForge.likedBusinesses);

  const liked = likedList.includes(data?.id);

  const BaseUrl = import.meta.env.VITE_BaseUrl;

  useEffect(() => {
    if (data) {
      setLikeCount(data?.likeCount || 0);
    }
  }, [data]);

  if (!data) {
    return <p>Loading business...</p>;
  }

  const handleLike = async () => {
    try {
      await axios.post(
        `${BaseUrl}/like`,
        { businessId: data.id },
        { headers: { authorization: `Bearer ${token}` } }
      );

      dispatch(toggleLikedBusiness(data.id));

      setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
    } catch (err) {
      console.error(err);
      toast.error("Could not update like");
    }
  };

  const handleSave = async () => {
    const isSaved = savedList.some((b) => b.id === data.id);
    try {
      await axios.post(
        `${BaseUrl}/save`,
        { businessId: data.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(toggleSavedBusiness(data));
      toast.success(isSaved ? "Business unsaved" : "Saved successfully");
    } catch (err) {
      console.error(err);
      toast.error("Could not save business");
    }
  };

  const initials = data?.businessOwnerName
    ?.split(" ")
    .map((m) => m[0])
    .join("")
    .toUpperCase();

  const data1 = {
    businessId: form.businessId,
    price: form.price,
    redirectUrl: `${window.location.origin}/payment-success`,
  };

  const handleInvest = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${BaseUrl}/makeInvestment`, data1, {
        headers: { authorization: `Bearer ${token}` },
      });

      if (res.data?.data?.url) {
        window.location.href = res.data.data.url;
      }
    } catch (err) {
      console.error(err);
      toast.error("Could not process investment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CardWrap>
        <div>
          <TopTags>
            <Tag>{isLoading ? <Skeleton width={80} /> : data.industry}</Tag>
            <Tag active>
              {isLoading ? <Skeleton width={100} /> : data.businessStatus}
            </Tag>
            <Tag>{isLoading ? <Skeleton width={80} /> : data.fundingStage}</Tag>
          </TopTags>

          <Title>
            {isLoading ? <Skeleton width={200} /> : data.businessName}
          </Title>
          <Subtitle>
            {isLoading ? <Skeleton count={3} /> : data.description}
          </Subtitle>

          <ProfileRow>
            <Avatar>
              {isLoading ? (
                <Skeleton circle width={40} height={40} />
              ) : (
                initials
              )}
            </Avatar>
            <NameBlock>
              <Name>
                {isLoading ? <Skeleton width={120} /> : data.businessOwnerName}
              </Name>
              <Role>
                {isLoading ? <Skeleton width={100} /> : data.businessName}
              </Role>
            </NameBlock>
          </ProfileRow>

          <StatsRow>
            <Stat>
              <CiHeart color={liked ? "red" : "gray"} />{" "}
              {isLoading ? <Skeleton width={30} /> : likeCount}
            </Stat>
            <Stat>
              {isLoading ? (
                <Skeleton width={100} />
              ) : (
                `Posted ${data.createdAt.slice(0, 10)}`
              )}
              <CiHeart color={liked ? "red" : "gray"} /> {likeCount}
            </Stat>
          </StatsRow>
        </div>

        <ActionColumn>
          <LikeButton onClick={handleLike} disabled={isLoading}>
            {isLoading ? (
              <Skeleton width={80} />
            ) : liked ? (
              "❤️ Liked"
            ) : (
              "🤍 Like"
            )}
          </LikeButton>

          <SaveButton onClick={handleSave} disabled={isLoading}>
            {isLoading ? (
              <Skeleton width={80} />
            ) : isSavedUI ? (
              "❤️ Unsave"
            ) : (
              "🤍 Save"
            )}
          </SaveButton>

          <ScheduleButton
            onClick={() => setOpenModal(true)}
            disabled={isLoading}
          >
            {isLoading ? <Skeleton width={140} /> : "📅 Schedule meeting"}
          </ScheduleButton>

          <InvestButton
            onClick={() => {
              setForm({ ...form, businessId: data.id });
              setModal(true);
            }}
            disabled={isLoading}
          >
            {isLoading ? <Skeleton width={120} /> : "₦ Invest Now"}
          </InvestButton>
        </ActionColumn>

        {Modal && (
          <ModalOverLay>
            <ModalBox>
              <div className="payment">
                <h3>How would you like to pay</h3>
                <MdOutlineCancel
                  style={{ cursor: "pointer" }}
                  size={30}
                  onClick={() => setModal(false)}
                />
              </div>

              <div className="amount">
                <p>How much do you want to invest</p>
                <input
                  type="number"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
              </div>

              <div className="options">
                <div
                  className={`option-box ${selected ? "selected" : ""}`}
                  onClick={() => setSelected(!selected)}
                >
                  <div className="option-row">
                    <RiSecurePaymentLine />
                    <div className={`circle ${selected ? "circle-active" : ""}`}>
                      {selected && <div className="inner-circle"></div>}
                    </div>
                    <span>Pay with Kora</span>
                  </div>
                </div>

                <button
                  className={`choose-btn ${selected ? "active" : ""}`}
                  disabled={!selected}
                  onClick={handleInvest}
                >
                  {loading ? "initializing payment..." : "Choose method"}
                </button>

                <p onClick={() => setModal(false)} className="go-back">
                  Go back
                </p>
              </div>
            </ModalBox>
          </ModalOverLay>
        )}
      </CardWrap>

      {!isLoading && (
        <MeetingModal open={openModal} close={() => setOpenModal(false)} />
      )}
    </>
  );
};

export default BusinessPageProfile;
