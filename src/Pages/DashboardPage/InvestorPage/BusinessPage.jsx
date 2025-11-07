import React, { useEffect, useState } from "react";
import BusinessPageProfile from "../../../Components/BusinessPageProfile";
import ProgressComponent from "../../../Components/InvestmentPage";
import DetailsSection from "../../../Components/DetailsSection";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BusinessCont } from "./BusinessPageStyle";

const BusinessPage = () => {
  const { id } = useParams();
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    const fetchBusiness = async () => {
      const res = await axios.get(`${BaseUrl}/Abusiness/${id}`);
      console.log(res?.data?.data);
      setBusiness(res?.data?.data);
      console.log("bus", business);
    };

    fetchBusiness();
  }, [id]);
  return (
    <BusinessCont>
      <BusinessPageProfile data={business} />
      <ProgressComponent data={business} />
      <DetailsSection data={business} />
    </BusinessCont>
  );
};

export default BusinessPage;
