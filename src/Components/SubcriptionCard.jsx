import React from "react";
import { SubscribeContainer } from "./SubscriptionCardStyle";

const SubcriptionCard = ({
  icon,
  name,
  tagline,
  price,
  metrics,
  features,
  isCurrent,
  plan,
}) => {
  return (
    <SubscribeContainer>
      <div className="subscriptionPlan">
        <div className="Subscriptions">
          <div className="subCard">
            <p>{plan}</p>
            <div className="topSection">
              <div
                style={{
                  backgroundColor: "#336bff",
                  borderRadius: "8px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                }}
              >
                {React.cloneElement(icon, { size: 20, color: "#fff" })}
              </div>

              <h2>{name}</h2>
              <span>{tagline}</span>
              <h3>
                {price} <span>/mo</span>
              </h3>
            </div>

            <div className="metricsSection">
              <div className="metricsHeader">
                <div>{metrics?.icon}</div>
                <h4>{metrics?.title}</h4>
              </div>

              <ul className="metric-lists">
                {metrics?.list?.map((item, index) => (
                  <li key={index} className="mb-1">
                    <strong>{item.label}:</strong> {item.value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="featureSection">
              <h4>Feature:</h4>
              <ul>
                {features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="actionBox">
              <button>{isCurrent ? "Current Plan" : "Upgrade"}</button>
            </div>
          </div>
        </div>
      </div>
    </SubscribeContainer>
  );
};

export default SubcriptionCard;
