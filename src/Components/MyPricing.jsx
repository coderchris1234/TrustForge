import React, { useState } from "react";
import {
  Page,
  ToggleRow,
  ToggleButton,
  CardsRow,
  Card,
  CardHeader,
  CardIcon,
  CardTitle,
  Price,
  PriceUnit,
  Features,
  FeatureItem,
  CardFooter,
  ActionButton,
  PillSmall,
} from "./InvestorSubscriptionStyle";
import { monthlyPlans, annualPlans, SubscriptionPlans } from "../Config/Data";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import axios from "axios";

const MyPricing = () => {
  const [role, setRole] = useState("investor"); // 'investor' | 'business'
  const [mode, setMode] = useState("monthly"); // 'monthly' | 'annual'
  const nav = useNavigate();
  const user = useSelector((state) => state.TrustForge.user);
  const token = useSelector((state) => state.TrustForge.user?.token);
  console.log("omoooo", token);
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const investorPlans = mode === "monthly" ? monthlyPlans : annualPlans;

  // For business (creator) plans we have SubscriptionPlans with price/yearlyPrice
  const businessPlans = SubscriptionPlans || [];

  const handleClick = async (plan) => {
    localStorage.setItem("selectedPlan", JSON.stringify(plan));

    if (!user) {
      return nav("/signup");
    }

    try {
      const endpoint =
        user.role === "investor"
          ? `${BaseUrl}/subscribeInvestor`
          : `${BaseUrl}/subscribeBusinessOwner`;

      const res = await axios.post(
        endpoint,
        {
          price: plan.price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data?.data?.url) {
        window.location.href = res.data.data.url;
      } else {
        toast.error("Unable to initiate payment.");
      }
    } catch (err) {
      console.error(err.response?.data || err);
      toast.error("Payment error occurred.");
    }
  };
  const renderPlans = () => {
    if (role === "investor") {
      return (
        <CardsRow>
          {investorPlans.map((p) => (
            <Card key={p.id} featured={p.variant === "primary"}>
              <CardHeader>
                <CardIcon>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="3"
                      width="14"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </CardIcon>
                <div>
                  <CardTitle>{p.title}</CardTitle>
                  <PillSmall>{p.highlights?.[0]}</PillSmall>
                </div>
              </CardHeader>

              <Price>
                {p.price} <PriceUnit>{p.unit}</PriceUnit>
              </Price>

              <Features>
                {p.features.map((f, i) => (
                  <FeatureItem key={i}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{f}</span>
                  </FeatureItem>
                ))}
              </Features>

              <CardFooter>
                {p.action === "Get started for free" ? (
                  <ActionButton variant="outline" disabled>
                    {p.action}
                  </ActionButton>
                ) : (
                  <ActionButton
                    variant={p.variant}
                    onClick={() => handleClick(p.id)}
                  >
                    {p.action}
                  </ActionButton>
                )}
              </CardFooter>
            </Card>
          ))}
        </CardsRow>
      );
    }

    // Business role
    return (
      <CardsRow>
        {businessPlans.map((p) => (
          <Card key={p.id} featured={p.isCurrent}>
            <CardHeader>
              <CardIcon>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="14"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </CardIcon>
              <div>
                <CardTitle>{p.name}</CardTitle>
                <PillSmall>{p.tagline}</PillSmall>
              </div>
            </CardHeader>

            <Price>
              {mode === "monthly" ? p.price : p.yearlyPrice}{" "}
              <PriceUnit>{mode === "monthly" ? "/mo" : "/yr"}</PriceUnit>
            </Price>

            <Features>
              {p.features.map((f, i) => (
                <FeatureItem key={i}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{f}</span>
                </FeatureItem>
              ))}
            </Features>

            <CardFooter>
              <ActionButton
                variant={p.isCurrent ? "outline" : "primary"}
                disabled={p.isCurrent}
                onClick={() => handleClick(p.title)}
              >
                {p.isCurrent ? "Get started for free" : "14-Days Free Trial"}
              </ActionButton>
            </CardFooter>
          </Card>
        ))}
      </CardsRow>
    );
  };

  return (
    <Page>
      {/* Role toggle: Business owner / Investor */}
      <ToggleRow style={{ marginBottom: 8, width: "fit-content" }}>
        <ToggleButton
          active={role === "business"}
          onClick={() => setRole("business")}
        >
          Business owner
        </ToggleButton>
        <ToggleButton
          active={role === "investor"}
          onClick={() => setRole("investor")}
        >
          Investor
        </ToggleButton>
      </ToggleRow>

      {/* Billing toggle */}
      <ToggleRow>
        <ToggleButton
          active={mode === "monthly"}
          onClick={() => setMode("monthly")}
        >
          Monthly
        </ToggleButton>
        <ToggleButton
          active={mode === "annual"}
          onClick={() => setMode("annual")}
        >
          Annual
        </ToggleButton>
      </ToggleRow>

      {renderPlans()}
    </Page>
  );
};

export default MyPricing;
