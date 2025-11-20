import React, { useEffect, useState } from "react";
import { MeetingContainer } from "./MeetingStyle";
import InvestorMeeting from "../../../Components/InvestorMeeting";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";

const Meeting2 = () => {
  const [allMeeting, setAllMeeting] = useState({});
  const user = useSelector((state) => state.TrustForge.user);
  const userId = user?.data?.id;
  const token = useSelector((state) => state.TrustForge.user?.token);
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("upcoming");

  const endpoint = `${BaseUrl}/user/${userId}`;

  const fetchData = async () => {
    try {
      const res = await axios.get(endpoint);
      setAllMeeting(res.data.data || {});
    } catch (err) {
      console.error("Error fetching overview data:", err);
    }
  };

  const upcomingMeetings =
    allMeeting?.meetings?.filter((m) => m.meetingStatus !== "Concluded") || [];

  const pastMeetings =
    allMeeting?.meetings?.filter(
      (m) => m.meetingStatus === "Concluded" || m.meetingStatus === "Declined"
    ) || [];

  const approvedMeeting = async (id) => {
    try {
      const res = await axios.post(
        `${BaseUrl}/approve-meeting`,
        { meetingId: id },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      toast.success(res?.data?.message);
      fetchData();
    } catch (err) {
      console.log("this is error", err);
    }
  };

  const rescheduleMeeting = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(`${BaseUrl}/reschedule-meeting`, data, {
        headers: { authorization: `Bearer ${token}` },
      });
      toast.success(res?.data?.message);
      fetchData();
    } catch (err) {
      console.log("this is error", err);
    } finally {
      setLoading(false);
    }
  };

  const endMeeting = async (id) => {
    try {
      const res = await axios.post(
        `${BaseUrl}/end-meeting`,
        { meetingId: id },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );

      toast.success(res?.data?.message);
      fetchData();
    } catch (err) {
      console.log("Error ending meeting:", err);
    }
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    try {
      fetchData();
      const interval = setInterval(fetchData, 1000); // every 5 seconds

      return () => clearInterval(interval);
    } catch (error) {
      console.error("Error reading persisted user:", error);
      // setLoading(false);
    }
  }, [userId]);

  return (
    <MeetingContainer>
      <div className="meeting">
        <div className="meeting_text">
          <h1>Meeting</h1>
          <p>Connect and Accept meeting with investors</p>
        </div>
      </div>

      <div className="tabs">
        <div
          className={`tab ${activeTab === "upcoming" ? "active" : ""}`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming <span>{upcomingMeetings.length}</span>
        </div>

        <div
          className={`tab ${activeTab === "past" ? "active" : ""}`}
          onClick={() => setActiveTab("past")}
        >
          Past <span>{pastMeetings.length}</span>
        </div>
      </div>

      {activeTab === "upcoming" && (
        <>
          {upcomingMeetings.length > 0 ? (
            [...upcomingMeetings]
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((biz) => (
                <InvestorMeeting
                  {...biz}
                  key={biz.id}
                  rescheduleMeeting={rescheduleMeeting}
                  approvedMeeting={approvedMeeting}
                  loading={loading}
                  endMeeting={endMeeting}
                />
              ))
          ) : (
            <p style={{ textAlign: "center", marginTop: "1rem" }}>
              No upcoming meetings.
            </p>
          )}
        </>
      )}

      {activeTab === "past" && (
        <>
          {pastMeetings.length > 0 ? (
            [...pastMeetings]
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((biz) => (
                <InvestorMeeting
                  {...biz}
                  key={biz.id}
                  rescheduleMeeting={rescheduleMeeting}
                  approvedMeeting={approvedMeeting}
                  loading={loading}
                  endMeeting={endMeeting}
                />
              ))
          ) : (
            <p style={{ textAlign: "center", marginTop: "1rem" }}>
              No past meetings.
            </p>
          )}
        </>
      )}
    </MeetingContainer>
  );
};

export default Meeting2;
