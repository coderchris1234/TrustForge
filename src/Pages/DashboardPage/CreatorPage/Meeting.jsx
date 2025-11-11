import React, { useEffect, useState } from "react";
import { MeetingContainer } from "./MeetingStyle";
import InvestorMeeting2 from "../../../Components/InvestorMeeting2";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";

const Meeting = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [allMeeting, setAllMeeting] = useState({});
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const user = useSelector((state) => state.TrustForge.user);
  const userId = user?.data?.id;
  const token = useSelector((state) => state.TrustForge.user?.token);

  const endpoint = `${BaseUrl}/user/${userId}`;

  const fetchData = async () => {
    try {
      const res = await axios.get(endpoint);
      setAllMeeting(res.data.data || {});
    } catch (err) {
      console.error("Error fetching overview data:", err);
    }
  };

  const approvedMeeting = async (id) => {
    try {
      const res = await axios.post(
        `${BaseUrl}/approve-meeting`,
        { meetingId: id },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res?.data?.message);
      fetchData();
      console.log(res);
    } catch (err) {
      console.log("this is error", err);
    }
  };
  const declineMeeting = async (id) => {
    try {
      const res = await axios.post(
        `${BaseUrl}/decline-meeting`,
        { meetingId: id },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res?.data?.message);
      fetchData();
      console.log(res);
    } catch (err) {
      console.log("this is error", err);
    }
  };
  const rescheduleMeeting = async (data) => {
    try {
      const res = await axios.post(`${BaseUrl}/reschedule-meeting`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success(res?.data?.message);
      fetchData();
      console.log(res);
    } catch (err) {
      console.log("this is error", err);
    }
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    try {
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

          {/* <div
            className={activeTab === "past" ? "active" : ""}
            onClick={() => setActiveTab("past")}
          >
            <p>Past ({allMeeting?.meetings?.length || 0})</p>
          </div> */}
        </div>
      </div>
      {allMeeting?.meetings?.length > 0 ? (
        allMeeting?.meetings?.map((biz) => (
          <InvestorMeeting2
            {...biz}
            key={biz.id}
            approvedMeeting={approvedMeeting}
            declineMeeting={declineMeeting}
            rescheduleMeeting={rescheduleMeeting}
          />
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
