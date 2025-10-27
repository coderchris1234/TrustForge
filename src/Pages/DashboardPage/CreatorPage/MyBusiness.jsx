import React from "react";
import { MyBusinessHeader } from "./MyBusinessStyle";
import { useNavigate } from "react-router-dom";

const MyBusiness = () => {
  const nav = useNavigate();
  return (
    <>
      <MyBusinessHeader>
        <div className="heading">
          <h2>My Business</h2>
          <span>Manage and track all your business Profile</span>
        </div>
        <button onClick={() => nav("/dashboard/creator/addbusiness")}>
          Add Business Profile
        </button>
      </MyBusinessHeader>
    </>
  );
};

export default MyBusiness;
