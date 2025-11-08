import React from "react";
import { BusinessContainer } from "./BusinessCardStyle";
import CustomButton from "./CustomButton";
import { GoTrash } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const BusinessCard = (props) => {
  const nav = useNavigate();
  // const { mybusiness } = useParams();
  // console.log("wow", mybusiness);

  const getStatusClass = (status) => {
    if (!status) return "status";

    const lower = status.toLowerCase();
    if (lower === "active") return "active status";
    if (lower === "under review") return "under-review status";

    return "status";
  };

  // console.log(props);
  return (
    <BusinessContainer>
      <div className="businessContainer">
        <div className="businessContent">
          <div className="business">
            <p style={{ marginBottom: "2px" }}>{props.businessName}</p>
            <div className="set">
              <span className="retail status">{props.industry}</span>
              <span className={getStatusClass(props.businessStatus)}>
                {props.businessStatus}
              </span>
              <span className="seed status">{props.fundingStage}</span>
            </div>
            <p style={{ paddingTop: "20px" }}>
              {props.description?.length > 73
                ? props.description.slice(0, 73) + "..."
                : props.description}
            </p>
          </div>
          <div className="btn">
            <CustomButton
              Btntext="View Details"
              className="bt"
              onClick={() =>
                nav(
                  `/dashboard/business_owner/mybusiness/${props.businessName}/${props.id}`
                )
              }
            />
            <CustomButton
              icon={<GoTrash />}
              Btntext="Delete"
              className="deleteBtn bt"
            />
          </div>
        </div>
        <div className="under">
          <div className="extra">
            <div>
              <IoEyeOutline /> {props.views} views
            </div>
            <div>
              <CiHeart /> {props.likes} likes
            </div>
            <div>
              <FiMessageSquare /> {props.messages} Save
            </div>
          </div>
          <div>
            <p
              style={{
                paddingTop: "1rem",
              }}
            >
              {props.postedDate}
            </p>
          </div>
        </div>
      </div>
    </BusinessContainer>
  );
};

export default BusinessCard;
