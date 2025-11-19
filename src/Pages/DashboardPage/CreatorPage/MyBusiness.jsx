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
  const [search, setSearch] = useState("");
  const [filteredBusiness, setFilteredBusiness] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");

  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const user = useSelector((state) => state.TrustForge.user);
  const userId = user?.data?.id;

  const SearchByIndustry = async (value) => {
    try {
      const res = await axios.get(`${BaseUrl}/business`, {
        params: { industry: value },
      });

      setFilteredBusiness(res?.data?.data || []);
      console.log("business", filteredBusiness);
    } catch (error) {
      console.log(error);
    }
  };

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
          console.log("omo", res);
          setAllBusiness(res.data.data || []);
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
  const displayBusiness = (allBusiness?.businesses || []).filter((biz) => {
    const statusMatch =
      !statusFilter ||
      biz.businessStatus.toLowerCase() === statusFilter.toLowerCase();

    const searchMatch =
      !search || biz.industry?.toLowerCase().includes(search.toLowerCase());

    return statusMatch && searchMatch;
  });
  const sortedBusiness = [...displayBusiness].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

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
          <input
            type="text"
            placeholder="Search by industry..."
            value={search}
            onChange={(e) => {
              const value = e.target.value;
              setSearch(value);

              if (value.trim() === "") {
                setFilteredBusiness([]);
                return;
              }
              SearchByIndustry(value);
            }}
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="under review">Under Review</option>
          <option value="verified">Verified</option>
        </select>
      </SearchBar>

      <BusinessWrapper>
        {sortedBusiness.length > 0 ? (
          sortedBusiness.map((biz) => (
            <BusinessCard allBusiness={allBusiness} key={biz.id} {...biz} />
          ))
        ) : (
          <p>No Business Found</p>
        )}
      </BusinessWrapper>
    </>
  );
};

export default MyBusiness;
