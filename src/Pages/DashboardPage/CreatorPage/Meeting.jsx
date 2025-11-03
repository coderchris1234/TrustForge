import React, { useState } from "react";
import { MeetingContainer } from "./MeetingStyle";
import MeetingCard from "../../../Components/MeetingCard";
import { Meetings } from "../../../Config/Data";

const Meeting = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingMeetings = Meetings.filter((m) => m.status === "Confirmed");
  const pastMeetings = Meetings.filter((m) => m.status !== "Confirmed");

  const displayedMeetings =
    activeTab === "upcoming" ? upcomingMeetings : pastMeetings;

  return (
    <MeetingContainer>
      <div className="meetingHeading">
        <div className="meetingContent">
          <h3>Meeting</h3>
          <p>Connect and Accept meeting with investors</p>
        </div>
        <div className="meetingStats">
          <div
            className={activeTab === "upcoming" ? "active" : ""}
            onClick={() => setActiveTab("upcoming")}
          >
            <p>Upcoming ({upcomingMeetings.length})</p>
          </div>

          <div
            className={activeTab === "past" ? "active" : ""}
            onClick={() => setActiveTab("past")}
          >
            <p>Past ({pastMeetings.length})</p>
          </div>
        </div>
      </div>
      {displayedMeetings.length > 0 ? (
        displayedMeetings.map((biz) => <MeetingCard {...biz} key={biz.id} />)
      ) : (
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          No meetings found.
        </p>
      )}
    </MeetingContainer>
  );
};

export default Meeting;
