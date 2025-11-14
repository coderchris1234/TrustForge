import React, { useState, useEffect } from "react";
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

const MyPricingClean = () => {
  const [role, setRole] = useState("investor");
  const [mode, setMode] = useState("monthly");
  const [userData, setUserData] = useState(null);

  const nav = useNavigate();
  const user = useSelector((state) => state.TrustForge.user);
  const token = useSelector((state) => state.TrustForge.user?.token);
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const investorPlans = mode === "monthly" ? monthlyPlans : annualPlans;
  const businessPlans = SubscriptionPlans || [];

  const handleClick = async (plan) => {
    localStorage.setItem("selectedPlan", JSON.stringify(plan));
    if (!user) return nav("/signup");
    console.log("user", user?.data?.role);
    try {
      const endpoint =
        user?.data?.role === "Investor"
          ? `${BaseUrl}/subscribeInvestor`
          : `${BaseUrl}/subscribeBusinessOwner`;

      // const redirectUrl =
      //   user?.data?.role === "Investor"
      //     ? `${window.location.origin}/dashboard/investor/subscription-success`
      //     : `${window.location.origin}/dashboard/business_owner/subscription-success`;

      const res = await axios.post(
        endpoint,
        { price: plan.price },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data?.data?.url) window.location.href = res.data.data.url;
      else toast.error("Unable to initiate payment.");
    } catch (err) {
      console.error(err.response?.data || err);
      toast.error("Payment error occurred.");
    }
  };

  useEffect(() => {
    if (!user?.data?.id) return;

    const endpoint =
      user?.data?.role === "Investor"
        ? `${BaseUrl}/investor/${user.data.id}`
        : `${BaseUrl}/user/${user.data.id}`;

    const fetchData = async () => {
      try {
        const res = await axios.get(endpoint);
        setUserData(res?.data?.data?.user || null);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchData();
  }, [user, BaseUrl]);

  console.log("userr", userData);

  useEffect(() => {
    const roleStr = user?.data?.role;
    if (!roleStr) return;
    const r = roleStr.toString().toLowerCase();
    if (r.includes("business") || r.includes("owner") || r.includes("creator"))
      setRole("business");
    else setRole("investor");
  }, [user]);

  const renderInvestor = () => (
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
            {(() => {
              const isFreePlan =
                p.action === "Get started for free" ||
                p.price === 0 ||
                p.price === "0" ||
                p.free;
              if (isFreePlan && user) return null;

              if (p.action === "Current Plan")
                return (
                  <ActionButton variant="outline" disabled>
                    {p.action}
                  </ActionButton>
                );

              if (p.action === "Get started for free")
                return !user ? (
                  <ActionButton
                    variant={p.variant}
                    onClick={() => nav("/signup")}
                  >
                    {p.action}
                  </ActionButton>
                ) : null;

              return (
                <ActionButton
                  variant={p.variant}
                  onClick={() => handleClick(p)}
                >
                  {p.action}
                </ActionButton>
              );
            })()}
          </CardFooter>
        </Card>
      ))}
    </CardsRow>
  );

  const renderBusiness = () => (
    <CardsRow>
      {businessPlans.map((p) => {
        const normalize = (v) =>
          (v || "")
            .toString()
            .toLowerCase()
            .replace(/\s+/g, "")
            .replace(/[^a-z0-9]/g, "");
        const userTierRaw =
          userData?.subscriptionTier || user?.data?.subscriptionTier || null;
        const userTier = userTierRaw ? normalize(userTierRaw) : null;
        const candidates = [p.id, p.name, p.title, p.key, p.slug, p.tagline]
          .filter(Boolean)
          .map(normalize);
        const isUserPlan =
          userData?.subscribed && userTier && candidates.includes(userTier);

        const isFreePlan =
          p.action === "Get started for free" ||
          p.price === 0 ||
          p.price === "0" ||
          p.free;

        return (
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
              {mode === "monthly"
                ? `₦${p.price.toLocaleString()}`
                : `₦${p.yearlyPrice.toLocaleString()}`}{" "}
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
              {(() => {
                if (isUserPlan)
                  return (
                    <ActionButton variant="outline" disabled>
                      Renew
                    </ActionButton>
                  );

                if (p.isCurrent) {
                  if (!user)
                    return (
                      <ActionButton
                        variant="outline"
                        onClick={() => nav("/signup")}
                      >
                        Get started for free
                      </ActionButton>
                    );

                  if (isFreePlan && user) return null;

                  return (
                    <ActionButton variant="outline" disabled>
                      Current Plan
                    </ActionButton>
                  );
                }

                return (
                  <ActionButton
                    variant="primary"
                    onClick={() => handleClick(p)}
                  >
                    Upgrade
                  </ActionButton>
                );
              })()}
            </CardFooter>
          </Card>
        );
      })}
    </CardsRow>
  );

  return (
    <Page>
      {/* Role toggle: single read-only pill when logged in, otherwise allow choosing */}
      <ToggleRow style={{ marginBottom: 8, width: "fit-content" }}>
        {user ? (
          <ToggleButton
            as="div"
            active={role === "business"}
            style={{ cursor: "default" }}
          >
            {role === "business" ? "Business owner" : "Investor"}
          </ToggleButton>
        ) : (
          <>
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
          </>
        )}
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

      {role === "investor" ? renderInvestor() : renderBusiness()}
    </Page>
  );
};

export default MyPricingClean;
