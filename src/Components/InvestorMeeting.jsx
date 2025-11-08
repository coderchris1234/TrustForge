import React from "react";
import { InvestorMeeting_container } from "./InvestorMeetingStyle";
import { FaVideo } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { CiCalendar, CiClock2 } from "react-icons/ci";
const InvestorMeeting = ({
  meetingTitle,
  meetingType,
  note,
  time,
  meetingStatus,
  date,
  businessName,
  businessOwnerName,
  meetingLink,
  // approvedMeeting,
}) => {
  const InvestorStatus = "Awaiting Approval";
  const initials = businessOwnerName
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const userJoinMeeting = () => {
    window.location.href = meetingLink;
  };
  return (
    <InvestorMeeting_container>
      <div className="Invetor_wrapper">
        <div className="tittle">
          <div className="tittle_left">
            <div className="invest">{meetingTitle}</div>
            <div
              className={
                meetingStatus === "Awaiting Approval"
                  ? "pending"
                  : meetingStatus === "Approved and Upcoming"
                  ? "conf"
                  : InvestorStatus === "Reschedule Requested"
                  ? "Reschedule"
                  : InvestorStatus === "Declined"
                  ? "Decl"
                  : "cencl"
              }
            >
              {InvestorStatus}
            </div>
          </div>
          <div className="tittle_right">
            {InvestorStatus === "Approved and Upcoming" ? (
              <div className="join_meetings" onClick={userJoinMeeting}>
                Join Meeting
                <FaVideo size={15} />
              </div>
            ) : null}
            {InvestorStatus === "Awaiting Approval" ? (
              <div className="awaiting">
                Awaiting Response
                <CiClock2 />
              </div>
            ) : null}
            {InvestorStatus === "Awaiting Approval" ? (
              <div className="cancel" onClick={userJoinMeeting}>
                Cancel
              </div>
            ) : null}
            <div className="schedule_meetings">
              Reschedule
              <FiRefreshCw size={20} />
            </div>
          </div>
        </div>
        <div className="name_container">
          <div className="profile_text">{initials}</div>
          <div className="name_details">
            <div className="name">{businessOwnerName}</div>
            <div className="business">{businessName}</div>
            {/* <div className="solution">{i.solution}</div> */}
          </div>
        </div>
        <div className="calender">
          <div className="date_container">
            <div className="date">
              <CiCalendar size={20} />
              {date}
            </div>
          </div>
          <div className="video_call_continer">
            <div className="video_call">
              <FaVideo size={20} />
              {meetingType}
            </div>
            <div className="time_container">
              <div className="time">
                <CiClock2 />
                {time}
              </div>
            </div>
          </div>
        </div>
        <div className="discuss_text">{note}</div>
      </div>
    </InvestorMeeting_container>
  );
};

export default InvestorMeeting;
