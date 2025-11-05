import React from "react";
import { InvestorMeeting_container } from "./InvestorMeetingStyle";
import { meetings } from "../Config/Data";
const InvestorMeeting = () => {
  return (
    <InvestorMeeting_container>
      {meetings.map((i, index) => (
        <div className="Invetor_wrapper" key={index}>
          <div className="tittle">
            <div className="tittle_left">
              <div className="invest">{i.invest}</div>
              <div className="confirm">{i.confirm}</div>
              <div className="first">{i.first}</div>
            </div>
            <div className="tittle_right">
              <div className="join_meetings">
                {i.icon1}
                {i.join}
              </div>
              <div className="schedule_meetings">
                {i.icon2}
                {i.reschedule}
              </div>
            </div>
          </div>
          <div className="name_container">
            <div className="profile_text">{i.profile}</div>
            <div className="name_details">
              <div className="name">{i.name}</div>
              <div className="business">{i.supply}</div>
              <div className="solution">{i.solution}</div>
            </div>
          </div>
          <div className="calender">
            <div className="date_container">
              <div className="date">
                {i.calender}
                {i.date}
              </div>
            </div>
            <div className="video_call_continer">
              <div className="video_call">
                {i.icon3}
                {i.video}
              </div>
              <div className="time_container">
                <div className="time">
                  {i.icon4}
                  {i.time}
                </div>
              </div>
            </div>
          </div>
          <div className="discuss_text">{i.discussion}</div>
        </div>
      ))}
    </InvestorMeeting_container>
  );
};

export default InvestorMeeting;
