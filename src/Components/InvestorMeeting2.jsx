import React, { useState } from "react";
// import { meetings2 } from "../Config/Data";
import { CiCalendar, CiClock2 } from "react-icons/ci";

import { InvestorMeeting_container } from "./InvestorMeeting2Style";
import { MdOutlineCancel } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { ModalBox, ModalOverLay } from "./InvestorMeeting2Style";
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
  rescheduleMeeting,
}) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [form, setForm] = useState({
    date: "",
    time: "",
    note: "",
    meetingId: id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
            {meetingStatus !== "Awaiting Approval" &&
            meetingStatus !== "Reschedule Requested" ? null : (
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

            {meetingStatus === "Declined" ||
            meetingStatus === "Reschedule Requested" ? null : (
              <div
                onClick={() => setOpenModal(true)}
                className="schedule_meetings"
              >
                Reschedule
                <FiRefreshCw size={15} />
              </div>
            )}

            {meetingStatus !== "Awaiting Approval" &&
            meetingStatus !== "Reschedule Requested" ? null : (
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
              <div className="time" style={{display: "flex",width:"4rem", height:"2rem"}}>
                <CiClock2 size={20} />
                {time}
              </div>
            </div>
          </div>
        </div>
        <div className="discuss_text">{note}</div>
      </div>
      {openModal && (
        <ModalOverLay>
          <ModalBox>
            <div className="workin">
              <div>
                <h3>Re-schedule Meeting</h3>
                <p>Set up a meeting with the Investor.</p>
              </div>

              <MdOutlineCancel
                style={{ cursor: "pointer" }}
                size={30}
                onClick={() => setOpenModal(false)}
              />
            </div>

            <div className="InputContainer">
              <div>
                <label>New Date</label>
                <input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  value={form.date}
                />
              </div>

              <div>
                <label>New Time</label>
                <input
                  type="time"
                  name="time"
                  onChange={handleChange}
                  value={form.time}
                />
              </div>
            </div>
            <label>Notes (optional)</label>
            <input
              type="text"
              value={form.note}
              placeholder="Add agenda or notes for the meeting"
              name="note"
              onChange={handleChange}
            />

            <button
              onClick={() => {
                rescheduleMeeting(form);
              }}
            >
              Send Re-schedule Request
            </button>
          </ModalBox>
        </ModalOverLay>
      )}
    </InvestorMeeting_container>
  );
};

export default InvestorMeeting2;
