import React, { useEffect, useState } from "react";
import { BusinessContainer } from "./BusinessDetailStyle";
import BusinessDetailPageHeader from "../../../Components/BusinessDetailPageHeader";
import InvestmentProgress from "../../../Components/InvestmentProgress";
import BusinessTabs from "../../../Components/BusinessTabs";
import { useParams } from "react-router-dom";
import axios from "axios";

const BusinessDetailPage = () => {
  const { id } = useParams();
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const [business, setBusiness] = useState(null);
  const [remain, setRemain] = useState(null);
  const [investorCount, setInvestorCount] = useState([]);
  console.log("id", id);

  useEffect(() => {
    const fetchBusiness = async () => {
      const res = await axios.get(`${BaseUrl}/Abusiness/${id}`);
      console.log("remain", res?.data);
      setBusiness(res?.data?.data);
      console.log("bus", business);
      setRemain(res?.data?.remaining);
      setInvestorCount(res?.data?.investorIntrests);
    };

    fetchBusiness();
  }, [id]);
  return (
    <BusinessContainer>
      <p>
        Hello, {business?.businessOwnerName} this is what is happening in your
        business
      </p>
      <BusinessDetailPageHeader data={business} />
      <InvestmentProgress
        data={business}
        remain={remain}
        investor={investorCount}
      />
      <BusinessTabs data={business} />
    </BusinessContainer>
  );
};

export default BusinessDetailPage;
