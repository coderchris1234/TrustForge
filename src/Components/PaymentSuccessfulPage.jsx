import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentSuccessful = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const id = queryParams.get("id");
  const fullName = queryParams.get("fullName");
  const reference = queryParams.get("reference");
  const amount = queryParams.get("amount");
  const handleContinue = () => {
    navigate("/dashboard/investor");
  };

  return (
    <SuccessWrapper>
      <Card>
        <h1>🎉 Payment Successful</h1>
        <p>
          Thank you, <strong>{fullName}</strong>! Your payment has been
          confirmed.
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
            <label>Investor ID:</label>
            <span>{id}</span>
          </div>
        </Details>

        <button onClick={handleContinue}>Continue</button>
      </Card>
    </SuccessWrapper>
  );
};

export default PaymentSuccessful;

const SuccessWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #031019ff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
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
`;

const Details = styled.div`
  margin-bottom: 2rem;
  text-align: left;
  height: max-content;

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
`;
