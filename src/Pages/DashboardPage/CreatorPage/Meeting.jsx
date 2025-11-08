import React, { useEffect, useState } from "react";
import { MeetingContainer } from "./MeetingStyle";
import InvestorMeeting2 from "../../../Components/InvestorMeeting2";
import { useSelector } from "react-redux";
import axios from "axios";

const Meeting = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [allMeeting, setAllMeeting] = useState({});
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const user = useSelector((state) => state.TrustForge.user);
  const userId = user?.data?.id;

  useEffect(() => {
    if (!userId) {
      return;
    }
    try {
      const endpoint =
        user?.data?.role === "Investor"
          ? `${BaseUrl}/investor/${userId}`
          : `${BaseUrl}/user/${userId}`;

      const fetchData = async () => {
        try {
          const res = await axios.get(endpoint);
          setAllMeeting(res.data.data || {});
        } catch (err) {
          console.error("Error fetching overview data:", err);
        }
      };

      fetchData();
    } catch (error) {
      console.error("Error reading persisted user:", error);
      // setLoading(false);
    }
  }, [userId]);

  // const upcomingMeetings = Meetings.filter((m) => m.status === "Confirmed");
  // const pastMeetings = Meetings.filter((m) => m.status !== "Confirmed");

  // const displayedMeetings =
  //   activeTab === "upcoming" ? upcomingMeetings : pastMeetings;

  console.log("allMeeting", allMeeting.meetings);

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
            <p>Upcoming ({allMeeting?.meetings?.length || 0})</p>
          </div>

          <div
            className={activeTab === "past" ? "active" : ""}
            onClick={() => setActiveTab("past")}
          >
            {/* <p>Past ({allMeeting?.meetings?.length || 0})</p> */}
          </div>
        </div>
      </div>
      {allMeeting?.meetings?.length > 0 ? (
        allMeeting?.meetings?.map((biz) => (
          <InvestorMeeting2 {...biz} key={biz.id} />
        ))
      ) : (
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          No meetings found.
        </p>
      )}
    </MeetingContainer>
  );
};

export default Meeting;
