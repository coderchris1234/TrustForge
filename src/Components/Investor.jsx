import axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

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
    </div>
  );
};

export default Investor;
