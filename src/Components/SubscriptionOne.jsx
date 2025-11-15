import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const SubscriptionSuccessOne = () => {
  const navigate = useNavigate();
  const { referenceId, amount, fullName } = useParams();
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
            <span>{referenceId}</span>
          </div>
          <div>
            <label>Amount:</label>
            <span>₦{amount}</span>
          </div>
        </Details>
        <button onClick={handleContinue}>Continue</button>
      </Card>
    </SuccessWrapper>
  );
};

export default SubscriptionSuccessOne;

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
  height: 30%;

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
