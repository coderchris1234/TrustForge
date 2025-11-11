import React, { useEffect, useState } from "react";
import { Meeting_container } from "./MeetingStyle";
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

  console.log("userId", userId);

  const endpoint = `${BaseUrl}/investor/${userId}`;

  const fetchData = async () => {
    try {
      const res = await axios.get(endpoint);
      console.log(res);
      setAllMeeting(res.data.data || {});
      // console.log(allMeeting?.meetings);
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

  return (
    <Meeting_container>
      <div className="meeting">
        <div className="meeting_text">
          <h1>Meeting</h1>
          <p>Connect and Accept meeting with investors</p>
        </div>
      </div>
      <div className="upcoming_coming">
        <div className="upcoming">
          Upcoming <span>3</span>
        </div>
        {/* <div className="coming">
          Coming <span></span>
        </div> */}
      </div>
      {allMeeting?.meetings?.length > 0 ? (
        allMeeting?.meetings?.map((biz) => (
          <InvestorMeeting
            {...biz}
            key={biz.id}
            rescheduleMeeting={rescheduleMeeting}
          />
        ))
      ) : (
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          No meetings found.
        </p>
      )}
    </Meeting_container>
  );
};

export default Meeting2;
