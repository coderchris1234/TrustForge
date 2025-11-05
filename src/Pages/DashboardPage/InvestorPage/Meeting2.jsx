import React from "react";
import { Meeting_container } from "./MeetingStyle";
import InvestorMeeting from "../../../Components/InvestorMeeting"
import InvestorMeeting2 from "../../../Components/InvestorMeeting2"
import InvestorMeeting3 from "../../../Components/InvestorMeeting3";
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
      <InvestorMeeting />
      <InvestorMeeting2 />
      <InvestorMeeting3 />
    </Meeting_container>
  );
};

export default Meeting2;
