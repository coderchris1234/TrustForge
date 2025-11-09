import React from "react";
// import { meetings2 } from "../Config/Data";
import { CiCalendar, CiClock2 } from "react-icons/ci";

import { InvestorMeeting_container } from "./InvestorMeeting2Style";
import { MdOutlineCancel } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
const InvestorMeeting2 = ({
  id,
  meetingTitle,
  meetingType,
  note,
  time,
  meetingStatus,
  date,
  hostName,
  businessName,
  meetingLink,
  approvedMeeting,
  declineMeeting,
}) => {
  // const textMeetingStatus = "Approved and Upcoming";

  console.log(meetingStatus);

  const userJoinMeeting = () => {
    window.location.href = meetingLink;
  };

  const initials = hostName
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    // 'Awaiting Approval','Approved and Upcoming','Reschedule Requested','Declined','Concluded'
    <InvestorMeeting_container>
      <div className="Invetor_wrapper">
        <div className="tittle">
          <div className="tittle_left">
            <div className="invest">{meetingTitle}</div>
            <div
              className={
                meetingStatus === "Awaiting Approval"
                  ? "await"
                  : meetingStatus === "Approved and Upcoming"
                  ? "conf"
                  : meetingStatus === "Reschedule Requested"
                  ? "Reschedule"
                  : meetingStatus === "Declined"
                  ? "Decl"
                  : "cencl"
              }
            >
              {meetingStatus}
            </div>
            {/* <div className="first">{}</div> */}
          </div>
          <div className="tittle_right">
            {meetingStatus === "Approved and Upcoming" ? (
              <div className="join_meetings" onClick={userJoinMeeting}>
                Join Meeting
                <FaVideo size={15} />
              </div>
            ) : null}
            {meetingStatus !== "Awaiting Approval" ? null : (
              <div
                className="accept_meetings"
                onClick={() => {
                  approvedMeeting(id);
                }}
              >
                Accept Meeting
                <CiClock2 />
              </div>
            )}

            {meetingStatus === "Declined" ? null : (
              <div className="schedule_meetings">
                Reschedule
                <FiRefreshCw size={15} />
              </div>
            )}
            {meetingStatus !== "Awaiting Approval" ? null : (
              <div
                className="decline_button"
                onClick={() => {
                  declineMeeting(id);
                }}
              >
                Decline
                <MdOutlineCancel size={15} />
              </div>
            )}
          </div>
        </div>
        <div className="name_container">
          <div className="profile_text">{initials}</div>
          <div className="name_details">
            <div className="name">{hostName}</div>
            <div className="business">{businessName}</div>
            {/* <div className="solution"></div> */}
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

export default InvestorMeeting2;
