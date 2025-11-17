import React, { useEffect, useState } from "react";
import { Explorecontainer, SearchContainer, Text } from "./ExploreBusStyle";
import { FiSearch } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";
import BusinessNewsFeed from "../../../Components/BusinessNewsFeed";
import axios from "axios";
import { MdOutlineCancel } from "react-icons/md";

const ExploreBusiness = () => {
  const [businesses, setBusinesses] = useState([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const toggleIndustry = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((x) => x !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const industries = [
    "AI",
    "FinTech",
    "HealthTech",
    "EdTech",
    "Green Tech / Agriculture",
    "E-commerce",
    "Manufacturing",
    "Retail/Marketing",
  ];

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const res = await axios.get(`${BaseUrl}/businesses`);
        setBusinesses(res?.data?.data || []);
        console.log("businessLand", businesses);
      } catch (error) {
        console.error("Error fetching businesses:", error);
      }
    };

    fetchBusinesses();
  }, []);

  const tierOrder = {
    premium: 1,
    growth: 2,
    free: 3,
  };

  const displayBusinesses = businesses
    .filter((biz) => {
      const industryMatch =
        selected.length === 0 || selected.includes(biz.industry);

      const searchTerm = search.toLowerCase();
      const searchMatch =
        !searchTerm ||
        biz.businessName?.toLowerCase().includes(searchTerm) ||
        biz.industry?.toLowerCase().includes(searchTerm);

      // Sorting filter logic
      if (sortBy === "trending" && biz.subscriptionTier !== "premium")
        return false;

      if (sortBy === "popular" && biz.subscriptionTier !== "growth")
        return false;

      if (sortBy === "free" && biz.subscriptionTier !== "free") return false;

      return industryMatch && searchMatch;
    })
    .sort((a, b) => {
      // Only use sorting when no sortBy is applied
      if (!sortBy) {
        return tierOrder[a.subscriptionTier] - tierOrder[b.subscriptionTier];
      }
      return 0; // no sorting needed when filter is active
    });

  return (
    <Explorecontainer>
      <div className="exploreText">
        <h1>Explore Business</h1>
        <p>Description of the Explore Business section.</p>
      </div>

      <SearchContainer>
        <div className="search">
          <FiSearch />
          <input
            type="text"
            placeholder="Search ideas..."
            className="input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <select
            className="mind"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">All</option>
            <option value="trending">Trending</option>
            <option value="popular">Popular</option>
            <option value="free">Free</option>
          </select>
        </div>

        <div className="filter" onClick={() => setOpen(true)}>
          <FiFilter size={20} />
          <p>Filter</p>
        </div>
        {open && <div className="backdrop" onClick={() => setOpen(false)} />}

        <div className={`drawer ${open ? "show" : ""}`}>
          <div className="drawerHeader">
            <h2>Filter Businesses</h2>
            <button className="closeBtn" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>

          <p className="sub">Refine your search with filters</p>

          <h3 className="title">Industries</h3>

          <div className="list">
            {industries.map((item) => (
              <label className="checkbox" key={item}>
                <input
                  type="checkbox"
                  checked={selected.includes(item)}
                  onChange={() => toggleIndustry(item)}
                />
                {item}
              </label>
            ))}
          </div>

          <button className="clearBtn" onClick={() => setSelected([])}>
            Clear filter
          </button>
        </div>
      </SearchContainer>

      <Text>
        {displayBusinesses.length > 0
          ? `Showing ${displayBusinesses.length} Businesses`
          : "No business showing"}
      </Text>

      {displayBusinesses.length > 0 ? (
        <BusinessNewsFeed data={displayBusinesses} />
      ) : (
        <p style={{ textAlign: "center", marginTop: 20, color: "#555" }}>
          No business uploaded yet.
        </p>
      )}
    </Explorecontainer>
  );
};

export default ExploreBusiness;
