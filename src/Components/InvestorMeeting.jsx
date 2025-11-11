import React, { useState } from "react";
import { InvestorMeeting_container } from "./InvestorMeetingStyle";
import { FaVideo } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { ModalBox, ModalOverLay } from "./InvestorMeeting2Style";
import { MdOutlineCancel } from "react-icons/md";
const InvestorMeeting = ({
  id,
  meetingTitle,
  meetingType,
  note,
  time,
  meetingStatus,
  date,
  businessName,
  businessOwnerName,
  meetingLink,
  rescheduleMeeting,
  loading,
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

  const initials = businessOwnerName
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const userJoinMeeting = () => {
    window.location.href = meetingLink;
  };
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const minDate = `${year}-${month}-${day}`;
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
                  : meetingStatus === "Reschedule Requested"
                  ? "Reschedule"
                  : meetingStatus === "Declined"
                  ? "Decl"
                  : "cencl"
              }
            >
              {meetingStatus}
            </div>
          </div>
          <div className="tittle_right">
            {meetingStatus === "Approved and Upcoming" ? (
              <div className="join_meetings" onClick={userJoinMeeting}>
                Join Meeting
                <FaVideo size={15} />
              </div>
            ) : null}
            {meetingStatus === "Awaiting Approval" ? (
              <div className="awaiting">
                Awaiting Response
                <CiClock2 />
              </div>
            ) : null}
            {meetingStatus === "Awaiting Approval" ? (
              <div className="cancel" onClick={userJoinMeeting}>
                Cancel
              </div>
            ) : null}
            {meetingStatus === "Declined" ? null : (
              <div
                onClick={() => setOpenModal(true)}
                className="schedule_meetings"
              >
                Reschedule
                <FiRefreshCw size={20} />
              </div>
            )}
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
                  min={minDate}
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
              style={{
                cursor: "pointer",
              }}
              disabled={loading}
            >
              {loading ? "submiting" : "Send Re-schedule Request"}
            </button>
          </ModalBox>
        </ModalOverLay>
      )}
    </InvestorMeeting_container>
  );
};

export default InvestorMeeting;
