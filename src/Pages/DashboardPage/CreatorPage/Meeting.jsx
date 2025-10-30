import React from "react";
import { MeetingContainer } from "./MeetingStyle";
import MeetingCard from "../../../Components/MeetingCard";
import { Meetings } from "../../../Config/Data";

const Meeting = () => {
  return (
    <MeetingContainer>
      <div className="meetingHeading">
        <div className="meetingContent">
          <h3>Meeting</h3>
          <p>Connect and Accept meeting with investors</p>
        </div>
        <div tabIndex="0" className="meetingStats">
          <div>
            <p>Upcoming</p>
          </div>

          <div>
            <p>Past</p>
          </div>
        </div>
      </div>
      {Meetings.map((biz) => (
        <MeetingCard {...biz} key={biz.id} />
      ))}
    </MeetingContainer>
  );
};

export default Meeting;
