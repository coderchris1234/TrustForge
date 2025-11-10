import React, { useEffect, useState } from "react";
import { Explorecontainer, SearchContainer, Text } from "./ExploreBusStyle";
import { FiSearch } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";
import BusinessNewsFeed from "../../../Components/BusinessNewsFeed";
import axios from "axios";
const ExploreBusiness = () => {
  const [businesses, setBusinesses] = useState([]);
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const res = await axios.get(`${BaseUrl}/businesses`);
        console.log("all", res?.data);
        setBusinesses(res?.data?.data || []);
      } catch (error) {
        console.error("Error fetching businesses:", error);
      }
    };

    fetchBusinesses();
  }, []);
  return (
    <Explorecontainer>
      <div className="exploreText">
        <h1>Explore Business </h1>
        <p>Description of the Explore Business section.</p>
      </div>
      <SearchContainer>
        <div className="search">
          <FiSearch />
          <input type="text" placeholder="Search ideas..." className="input" />
        </div>
        <div className="trending">
          <p>Trending</p>
          <RiArrowDropDownLine size={25} />
        </div>
        <div className="filter">
          <FiFilter size={20} />
          <p>Filter</p>
        </div>
      </SearchContainer>
      <Text>Showing {businesses.length} Businesses </Text>
      <BusinessNewsFeed data={businesses} />
    </Explorecontainer>
  );
};

export default ExploreBusiness;
