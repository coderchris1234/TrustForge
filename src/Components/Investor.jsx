import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { InvestorStyle } from "./InvestorStyle";

const Investor = ({ data }) => {
  const token = useSelector((state) => state.TrustForge.user?.token);
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const [investors, setInvestors] = useState([]);
  console.log("business ID", data?.id);

  console.log("tokennn", token);

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const res = await axios.get(`${BaseUrl}/fundingHistory/${data?.id}`, {
          headers: { authorization: `Bearer ${token}` },
        });
        console.log("investor", res?.data);
        setInvestors(res.data?.data || []);
      } catch (error) {
        toast.error(
          error?.response?.data?.message || "Error fetching investors"
        );
      }
    };
    fetchInvestors();
  }, []);
  return (
    <div>
      <h3>Investor Information</h3>
      <p>Look at the investors that have invested in your business</p>
      {investors?.length === 0 ? (
        <p>No investors found for this business.</p>
      ) : (
        <div>
          {investors?.map((investor) => (
            <div
              key={investor?.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <InvestorStyle>
                <div>
                  <strong>Name:</strong> {investor?.investorName}
                </div>
                <div>
                  <strong>Amount Invested:</strong> ₦
                  {Number(investor?.totalInvestment || 0).toLocaleString(
                    "en-NG",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }
                  )}
                </div>
                <div>
                  <strong>Date of Investment:</strong>
                  {new Date(investor?.investmentDate).toLocaleDateString()}
                </div>
              </InvestorStyle>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Investor;
