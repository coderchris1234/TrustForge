import React from "react";
import { Meeting_container } from "./MeetingStyle";
import MeetingCard from "../../../Components/MeetingCard";
const Meeting2 = () => {
  return (
    <Meeting_container>
      <div className="meeting">
        <div className="meeting_text">
          <h1>NDA Management</h1>
          <p>Manage your non-disclosure agreements with startups</p>
        </div>
      </div>
      <div className="upcoming_coming">
        <div className="upcoming">
          Upcoming <span>3</span>
        </div>
        <div className="coming">
          Coming <span></span>
        </div>
      </div>
      <MeetingCard />
    </Meeting_container>
  );
};

export default Meeting2;
