import React from "react";
import {
  MyBusinessHeader,
  SearchBar,
  BusinessWrapper,
} from "./MyBusinessStyle";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import BusinessCard from "../../../Components/BusinessCard";
import { Business } from "../../../Config/Data";

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

      <BusinessWrapper>
        {Business.map((biz) => (
          <BusinessCard key={biz.id} {...biz} />
        ))}
      </BusinessWrapper>
    </>
  );
};

export default MyBusiness;
