import React from "react";
import { BusinessContainer } from "./BusinessCardStyle";
import CustomButton from "./CustomButton";
import { GoTrash } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
const BusinessCard = ({
  title,
  category,
  status,
  stage,
  description,
  views,
  likes,
  messages,
  postedDate,
}) => {
  return (
    <BusinessContainer>
      <div className="businessContainer">
        <div className="businessContent">
          <div className="business">
            <p style={{ marginBottom: "2px" }}>{title}</p>
            <div className="set">
              <span className="retail status">{category}</span>
              <span className="active status">{status}</span>
              <span className="seed status">{stage}</span>
            </div>
            <p style={{ paddingTop: "20px" }}>{description}</p>
          </div>
          <div className="btn">
            <CustomButton Btntext="View Details" className="bt" />
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
              <IoEyeOutline /> {views} views
            </div>
            <div>
              <CiHeart /> {likes} likes
            </div>
            <div>
              <FiMessageSquare /> {messages} messages
            </div>
          </div>
          <div>
            <p
              style={{
                paddingTop: "1rem",
              }}
            >
              {postedDate}
            </p>
          </div>
        </div>
      </div>
    </BusinessContainer>
  );
};

export default BusinessCard;
