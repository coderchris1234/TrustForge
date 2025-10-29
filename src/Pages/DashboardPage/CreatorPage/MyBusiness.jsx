import React from "react";
import {
  MyBusinessHeader,
  SearchBar,
  BusinessContainer,
} from "./MyBusinessStyle";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

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
      <SearchBar>
        <div className="searchContainer">
          <CiSearch style={{ cursor: "pointer" }} />
          <input type="text" />
        </div>
        <select>
          <option value="">All Status</option>
          <option value="">Active</option>
          <option value="">Under Review</option>
          <option value="">Draft</option>
        </select>
      </SearchBar>

      <BusinessContainer>omo</BusinessContainer>
    </>
  );
};

export default MyBusiness;
