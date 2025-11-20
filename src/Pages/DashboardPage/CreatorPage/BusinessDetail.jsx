import React, { useEffect, useState } from "react";
import { BusinessContainer, SkeletonWrapper } from "./BusinessDetailStyle";
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
  const [loading, setLoading] = useState(true);
  console.log("id", id);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BaseUrl}/Abusiness/${id}`);

        setBusiness(res?.data?.data);
        setRemain(res?.data?.remaining);
        setInvestorCount(res?.data?.investorIntrests);
      } catch (error) {
        console.error("Error fetching business:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBusiness();
  }, [id]);
  if (loading) {
    return (
      <SkeletonWrapper>
        <div className="skeleton header"></div>
        <div className="skeleton line"></div>
        <div className="skeleton line"></div>
        <div className="skeleton box"></div>
      </SkeletonWrapper>
    );
  }

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
