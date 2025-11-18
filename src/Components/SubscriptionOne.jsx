import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SubscriptionSuccessOne = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const id = queryParams.get("id");
  const fullName = queryParams.get("fullName");
  const reference = queryParams.get("reference");
  const amount = queryParams.get("amount");
  const handleContinue = () => {
    navigate("/dashboard/business_owner");
  };

  return (
    <SuccessWrapper>
      <Card>
        <h1>🎉 Subscription Successful</h1>
        <p>
          Thank you, <strong>{fullName}</strong>! Your subscription has been
          confirmed
        </p>
        <Details>
          <div>
            <label>Reference:</label>
            <span>{reference}</span>
          </div>
          <div>
            <label>Amount:</label>
            <span>₦{amount}</span>
          </div>
          <div>
            <label>Business_owner ID:</label>
            <span>{id}</span>
          </div>
        </Details>
        <button onClick={handleContinue}>Continue</button>
      </Card>
    </SuccessWrapper>
  );
};

export default SubscriptionSuccessOne;

const breakpoints = {
  mobile: "480px",
  mobileLarge: "768px",
  tablet: "1024px",
};

const SuccessWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #031019ff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    padding: 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.8rem;
  }
`;

const Card = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 800px;
  width: 100%;
  height: max-content;

  h1 {
    font-size: 24px;
    color: #00a3ff;
    margin-bottom: 1rem;
  }

  p {
    font-size: 16px;
    color: #1b1b1b;
    margin-bottom: 2rem;
  }

  button {
    background-color: #00a3ff;
    color: #fff;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-size: 16px;
    width: 40%;
    height: 50px;
    cursor: pointer;

    &:hover {
      background-color: #007acc;
    }
  }

  /* Tablet (≤1024px) */
  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.8rem;

    h1 {
      font-size: 22px;
    }

    p {
      font-size: 15px;
    }

    button {
      width: 50%;
      font-size: 15px;
    }
  }

  /* Mobile Large (≤768px) */
  @media (max-width: ${breakpoints.mobileLarge}) {
    padding: 1.5rem;

    h1 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }

    button {
      width: 70%;
      height: 45px;
      font-size: 14px;
    }
  }

  /* Mobile (≤480px) */
  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.2rem;

    h1 {
      font-size: 18px;
    }

    p {
      font-size: 13px;
    }

    button {
      width: 100%;
      height: 45px;
      font-size: 14px;
    }
  }
`;

const Details = styled.div`
  margin-bottom: 2rem;
  text-align: left;

  div {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;

    label {
      font-weight: 500;
      color: #555;
    }

    span {
      font-weight: 600;
      color: #1b1b1b;
    }
  }

  /* Tablet */
  @media (max-width: ${breakpoints.tablet}) {
    div {
      label,
      span {
        font-size: 14px;
      }
    }
  }

  /* Mobile Large */
  @media (max-width: ${breakpoints.mobileLarge}) {
    div {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;

      label,
      span {
        font-size: 13px;
      }
    }
  }

  /* Mobile */
  @media (max-width: ${breakpoints.mobile}) {
    div {
      label,
      span {
        font-size: 12px;
      }
    }
  }
`;
