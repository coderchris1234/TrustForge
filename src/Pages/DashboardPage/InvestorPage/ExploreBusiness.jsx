import React from "react";
import { Explorecontainer, SearchContainer, Text } from "./ExploreBusStyle";
import { FiSearch } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";
import BusinessNewsFeed from "../../../Components/BusinessNewsFeed";
const ExploreBusiness = () => {
  return (
  <Explorecontainer>
    <div className="exploreText">
      <h1>Explore Business </h1>
      <p>Description of the Explore Business section.</p>
    </div>
    <SearchContainer>
      <div className="search">
          <FiSearch />
          <input type="text" placeholder="Search ideas..."  className="input"/>
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
    <Text>Showing 4 Businesses </Text>
    <BusinessNewsFeed />
  </Explorecontainer>
  );
};

export default ExploreBusiness;
