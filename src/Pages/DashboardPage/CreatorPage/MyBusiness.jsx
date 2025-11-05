import React, { useEffect, useState } from "react";
import {
  MyBusinessHeader,
  SearchBar,
  BusinessWrapper,
} from "./MyBusinessStyle";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import BusinessCard from "../../../Components/BusinessCard";
import { Business } from "../../../Config/Data";
import { useSelector } from "react-redux";
import axios from "axios";

const MyBusiness = () => {
  // const nav = useNavigate();
  const [allBusiness, setAllBusiness] = useState({});
  // const [loading, setLoading] = useState(true);

  // console.log("overviewData", overviewData);

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
          setAllBusiness(res.data.data || {});
        } catch (err) {
          console.error("Error fetching overview data:", err);
        } finally {
          // setLoading(false);
        }
      };

      fetchData();
    } catch (error) {
      console.error("Error reading persisted user:", error);
      // setLoading(false);
    }
  }, [userId]);
  return (
    <>
      <MyBusinessHeader>
        <div className="heading">
          <h2>My Business</h2>
          <span>Manage and track all your business Profile</span>
        </div>
        <NavLink to={"/dashboard/business_owner/addbusiness"}>
          <button>Add Business Profile</button>
        </NavLink>
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
        {allBusiness?.businesses?.length > 0 ? (
          allBusiness?.businesses
            ?.reverse()
            .map((biz) => <BusinessCard key={biz.id} {...biz} />)
        ) : (
          <p>No Business Added</p>
        )}
      </BusinessWrapper>
    </>
  );
};

export default MyBusiness;
