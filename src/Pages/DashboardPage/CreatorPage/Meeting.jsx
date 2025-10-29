import React from "react";
import { MeetingContainer } from "./MeetingStyle";
import MeetingCard from "../../../Components/MeetingCard";

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
      <MeetingCard />
    </MeetingContainer>
  );
};

export default Meeting;
