// Pricing.jsx
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
import { annualPlans } from "../Config/Data"
import { monthlyPlans } from "../Config/Data"
const InvestorSubscription = () => {
  const [mode, setMode] = useState("monthly"); // "monthly" | "annual"
  const plans = mode === "monthly" ? monthlyPlans : annualPlans;

  return (
    <Page>
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

      <CardsRow>
        {plans.map((p, idx) => (
          <Card key={p.id} featured={p.variant === "primary"}>
            <CardHeader>
              <CardIcon>
                {/* simple box icon, similar to your screenshot */}
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
                <PillSmall>{p.highlights[0]}</PillSmall>
              </div>
            </CardHeader>

            <Price>
              {p.price} <PriceUnit>{p.unit}</PriceUnit>
            </Price>

            <Features>
              {p.features.map((f, i) => (
                <FeatureItem key={i}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
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
              {p.action === "Current Plan" ? (
                <ActionButton variant="outline" disabled>
                  {p.action}
                </ActionButton>
              ) : (
                <ActionButton variant={p.variant}>{p.action}</ActionButton>
              )}
            </CardFooter>
          </Card>
        ))}
      </CardsRow>
    </Page>
  );
}
export default InvestorSubscription
 
