import React from "react";
import Header from "../../Components/Header";
import MyPricing from "../../Components/MyPricing";
import Footer from "../../Components/Footer";

const Pricing = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          height: "max-content",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 20px",
        }}
      >
        <MyPricing />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
