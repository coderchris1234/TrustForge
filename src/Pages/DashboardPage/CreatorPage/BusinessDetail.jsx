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

  useEffect(() => {
    const fetchBusiness = async () => {
      const res = await axios.get(`${BaseUrl}/Abusiness/${id}`);
      console.log("remain", res?.data);
      setBusiness(res?.data?.data);
      setRemain(res?.data?.remaining);
      setInvestorCount(res?.data?.investorIntrests);
      console.log("bus", business);
    };

    fetchBusiness();
  }, [id]);
  return (
    <BusinessContainer>
      <BusinessDetailPageHeader data={business} />
      <InvestmentProgress data={business}  remain={remain}
        investor={investorCount} />
      <BusinessTabs data={business} />
    </BusinessContainer>
  );
};

export default BusinessDetailPage;
