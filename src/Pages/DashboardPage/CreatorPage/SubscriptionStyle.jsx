import styled from "styled-components";

export const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  p {
    font-size: 28px;
    font-weight: 600;
    max-width: 820px;
    padding-left: 2rem;
  }

  span {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    max-width: 820px;
  }

  @media (max-width: 900px) {
    p {
      font-size: 24px;
    }
    span {
      font-size: 15px;
      padding: 0 12px;
    }
  }

  @media (max-width: 480px) {
    margin-top: 1.2rem;

    p {
      font-size: 18px;
      line-height: 24px;
      text-align: left; 
      width: 100%;
      padding-left: 8px;
    }

    span {
      font-size: 13px;
      line-height: 16px;
      text-align: left;
      width: 100%;
      padding-left: 8px;
      margin-top: 6px;
    }
  }
`;

export const SubscriptionDate = styled.div`
  background-color: #c1c1c1;
  display: flex;
  border-radius: 8px;
  width: 20%;
  margin: 0 auto;
  margin-top: 2rem;
  cursor: pointer;
  width: 20rem;

  p {
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 0.3rem 0.3rem;
    padding: 0.5rem;
    border-radius: 8px;
  }

  p.active {
    background-color: #ffff;
    color: #1b1b1b;
    width:50%;
  }

  @media (max-width: 900px) {
    width: 40%;
  }

  @media (max-width: 480px) {
    width: 77%;
    margin: 1rem auto;
    padding: 6px;

    display: flex;
    justify-content: space-between;

    p {
      flex: 1;
      margin: 0 6px;
      padding: 10px 12px;
      text-align: center;
      font-size: 14px;
    }
  }
`;

export const SubCon = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: stretch; 
  gap: 2rem;

 
  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 23px;
    align-items: stretch;
  }
`;

export const FrequentQue = styled.div`
  background-color: #ffff;
  width: 95%;
  margin: 1.25rem auto 2rem;
  padding: 1rem;
  border-radius: 12px;

  h3 {
    font-size: 28px;
    font-weight: 600;
    line-height: 35px;
    margin: 0 0 8px 0;
  }

  p {
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
    margin: 10px 0 4px 0;
  }

  span {
    display: block;
    color: #4b5563;
    margin-bottom: 10px;
    font-size: 15px;
    line-height: 20px;
  }

  @media (max-width: 900px) {
    width: 94%;
    padding: 12px;
    h3 {
      font-size: 22px;
    }
    p {
      font-size: 16px;
    }
    span {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    width: 96%;
    padding: 12px;
    border-radius: 10px;

    h3 {
      font-size: 18px;
      line-height: 24px;
    }

    p {
      font-size: 15px;
      line-height: 20px;
      margin-top: 10px;
      margin-bottom: 6px;
    }

    span {
      font-size: 13px;
      line-height: 18px;
      margin-bottom: 10px;
    }
  }
`;
