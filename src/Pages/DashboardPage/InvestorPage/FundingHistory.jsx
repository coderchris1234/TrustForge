import React, { useEffect, useState } from "react";
import { FundingHistory_contianer } from "./FundingHistoryStyle";
import FundingGoals from "../../../Components/FundingGoals";
import FundActivity from "../../../Components/FundActivity";
import { useSelector } from "react-redux";
import axios from "axios";

const FundingHistory = () => {
  const [funding, setFunding] = useState({
    totalInvestment: 0,
    activeInvestments: 0,
    investments: [],
  });

  const token = useSelector((state) => state.TrustForge.user?.token);
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  useEffect(() => {
    const fetchFundingData = async () => {
      if (!token) return;

      try {
        const res = await axios.get(`${BaseUrl}/fundHistory`, {
          headers: { authorization: `Bearer ${token}` },
        });

        console.log("raw response:", res.data);
        setFunding(res?.data); // store full response object
      } catch (error) {
        console.log("error fetching funding history", error);
      }
    };

    fetchFundingData();
  }, [token, BaseUrl]);

  return (
    <FundingHistory_contianer>
      <div className="funding_wrapper">
        <h1>Funding History</h1>
        <p>Track your investments and returns</p>
      </div>

      {/* Pass only the investments array to child components */}
      <FundingGoals funding={funding} />

      <div className="read_unread">
        <div className="active">Active ({funding.activeInvestments})</div>
      </div>

      <FundActivity funding={funding} />
    </FundingHistory_contianer>
  );
};

export default FundingHistory;
