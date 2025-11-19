import React, { useEffect, useState } from "react";
import BusinessPageProfile from "../../../Components/BusinessPageProfile";
import ProgressComponent from "../../../Components/InvestmentPage";
import DetailsSection from "../../../Components/DetailsSection";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BusinessCont } from "./BusinessPageStyle";

const BusinessPage = () => {
  const { id } = useParams();
  // const location = useLocation();
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const [business, setBusiness] = useState(null);
  const [remain, setRemain] = useState(null);
  const [investorCount, setInvestorCount] = useState([]);

  useEffect(() => {
    const fetchBusiness = async () => {
      const res = await axios.get(`${BaseUrl}/Abusiness/${id}`);
      console.log(res?.data?.data);
      setBusiness(res?.data?.data);
      setRemain(res?.data?.remaining);
      setInvestorCount(res?.data?.investorIntrests);
      console.log("bus", res);
    };

    fetchBusiness();
    const interval = setInterval(fetchBusiness, 1000); // every 5 seconds

    return () => clearInterval(interval);
  }, [id]);
  console.log("count", investorCount);
  return (
    <BusinessCont>
      <BusinessPageProfile data={business} />
      <ProgressComponent
        data={business}
        remain={remain}
        investor={investorCount}
      />
      <DetailsSection data={business} />
    </BusinessCont>
  );
};

export default BusinessPage;

// import React, { useEffect, useState, useRef } from "react";
// import BusinessPageProfile from "../../../Components/BusinessPageProfile";
// import ProgressComponent from "../../../Components/InvestmentPage";
// import DetailsSection from "../../../Components/DetailsSection";
// import { useParams, useLocation } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { BusinessCont } from "./BusinessPageStyle";

// const BusinessPage = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const BaseUrl = import.meta.env.VITE_BaseUrl;

//   const [business, setBusiness] = useState(null);
//   const [remain, setRemain] = useState(null);
//   const [investorCount, setInvestorCount] = useState([]);
//   const previousRaised = useRef(0); // store previous raised amount

//   const fetchBusiness = async () => {
//     try {
//       const res = await axios.get(`${BaseUrl}/Abusiness/${id}`);
//       const data = res?.data?.data;

//       // Compare previous raised with new raised
//       if (previousRaised.current && data?.fundRaised > previousRaised.current) {
//         toast.success("Investment updated successfully 🎉");
//       }

//       previousRaised.current = data?.fundRaised || 0;

//       setBusiness(data);
//       setRemain(res?.data?.remaining);
//       setInvestorCount(res?.data?.investorIntrests);
//     } catch (err) {
//       console.error("Failed to fetch business:", err);
//     }
//   };

//   // Initial fetch on mount
//   useEffect(() => {
//     fetchBusiness();
//   }, [id]);

//   // Re-fetch when redirected from payment
//   useEffect(() => {
//     const query = new URLSearchParams(location.search);
//     if (query.get("payment") === "success") {
//       fetchBusiness();
//     }
//   }, [location.search]);

//   // Re-fetch when user returns to tab
//   useEffect(() => {
//     const handleVisibility = () => {
//       if (document.visibilityState === "visible") {
//         fetchBusiness();
//       }
//     };
//     document.addEventListener("visibilitychange", handleVisibility);
//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibility);
//     };
//   }, []);

//   return (
//     <BusinessCont>
//       <BusinessPageProfile data={business} />
//       <ProgressComponent
//         data={business}
//         remain={remain}
//         investor={investorCount}
//       />
//       <DetailsSection data={business} />
//     </BusinessCont>
//   );
// };

// export default BusinessPage;
