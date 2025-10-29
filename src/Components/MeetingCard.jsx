import React from "react";
import CustomButton from "./CustomButton";
import { IoVideocamOutline } from "react-icons/io5";
import { FaArrowsRotate } from "react-icons/fa6";
import { MeetingContainer } from "./MeetingCardStyle";
import { useNavigate } from "react-router-dom";

const MeetingCard = () => {
  const fullName = "Sarah Johnson";

  const initials = fullName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  const nav = useNavigate();
  return (
    <>
      <MeetingContainer>
        <div className="MeetingWrapper">
          <div className="meetingHeader">
            <div className="busTitle">
              <p>Investment Discussion</p>
              <p className="conf">Confirmed</p>
              <span></span>
            </div>
            <div className="btn">
              <CustomButton
                icon={<IoVideocamOutline />}
                Btntext="Join Meeting"
                className="button meeting"
              />
              <CustomButton
                icon={<FaArrowsRotate />}
                Btntext="Reschedule"
                className="button"
              />
            </div>
          </div>
          <div className="meetingDetails">
            <div className="contact">
              <div className="initials">{initials}</div>
              <div className="details">
                <p>Sarah Johnson</p>
                <span>SupplyChain AI</span>
                <span className="link" onClick={() => nav("")}>
                  SupplyChain AI Solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </MeetingContainer>
    </>
  );
};

export default MeetingCard;
