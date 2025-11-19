import React from "react";
import { BusinessContainer } from "./BusinessCardStyle";
import CustomButton from "./CustomButton";
import { GoTrash } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
// import { FiMessageSquare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addDeletedBusiness } from "../Pages/Global/Slice";
import { IoBusinessOutline } from "react-icons/io5";
import { TbChartBarPopular } from "react-icons/tb";
import { FaFire, FaStar } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

const BusinessCard = (props) => {
  const [loading, setLoading] = React.useState(false);
  const nav = useNavigate();
  const token = useSelector((state) => state.TrustForge.user?.token);

  const dispatch = useDispatch();
  const deletedList = useSelector(
    (state) => state.TrustForge.deletedBusinesses
  );
  const isDeleted = deletedList.includes(props.id);

  console.log("user from me", props.allBusiness.user.subscriptionTier);

  const getStatusClass = (status) => {
    if (!status) return "status";

    const lower = status.toLowerCase();
    if (lower === "verified") return "active status";
    if (lower === "under review") return "under-review status";

    return "status";
  };

  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const handleDelete = async () => {
    if (isDeleted) return;
    setLoading(true);
    try {
      const res = await axios.delete(`${BaseUrl}/request`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: {
          businessId: props.id,
          reason: "User requested deletion from business dashboard",
        },
      });
      console.log("Delete response:", res.data);
      toast.success(
        "Your support Ticket has been created, you should receive a response soon"
      );
      dispatch(addDeletedBusiness(props.id));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("An error occurred while deleting the business.");
      console.log("error", error);
    }
  };

  // props.allBusiness.user.subscriptionTier
  return (
    <BusinessContainer>
      <div className="businessContainer">
        <div className="businessContent">
          <div className="business">
            <div className="heading">
              <IoBusinessOutline size={30} />
              <p style={{ marginBottom: "2px" }}>{props.businessName}</p>
              {props?.allBusiness?.user?.subscriptionTier !== "free" ? (
                <span
                  className={
                    props.subscriptionTier === "growth"
                      ? "popular"
                      : props.subscriptionTier === "premium"
                      ? "trending"
                      : ""
                  }
                >
                  {props.subscriptionTier === "growth" ? (
                    <span className="flex items-center gap-1">
                      <FaStar /> Popular
                    </span>
                  ) : props.subscriptionTier === "premium" ? (
                    <span className="flex items-center gap-1">
                      <FaFire /> Trending
                    </span>
                  ) : null}
                </span>
              ) : null}
            </div>
            <div className="set">
              <span className="retail status">{props.industry}</span>
              <span className="seed status">{props.fundingStage}</span>
              <span className={getStatusClass(props.businessStatus)}>
                {props.businessStatus}
              </span>
            </div>
            <p style={{ paddingTop: "20px" }}>
              {props.description?.length > 73
                ? props.description.slice(0, 73) + "..."
                : props.description}
            </p>
          </div>
          <div className="btn">
            <CustomButton
              Btntext="View details"
              className="bt view"
              onClick={() =>
                nav(
                  `/dashboard/business_owner/mybusiness/${props.businessName}/${props.id}`
                )
              }
            />
            <CustomButton
              icon={<GoTrash />}
              Btntext={loading ? "deleting..." : "Delete"}
              className="deleteBtn bt"
              onClick={handleDelete}
              disabled={loading || isDeleted}
            />
          </div>
        </div>
        <div className="under">
          <div className="extra">
            <div>
              <IoEyeOutline /> {props.viewCount} views
            </div>
            <div>
              <CiHeart color="red" /> {props.likeCount} likes
            </div>
          </div>
          <div className="Date_posted">
            <span>
              {new Date(props.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </BusinessContainer>
  );
};

export default BusinessCard;
