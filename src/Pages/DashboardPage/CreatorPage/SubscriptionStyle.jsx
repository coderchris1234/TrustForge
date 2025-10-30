import styled from "styled-components";

export const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  p {
    font-size: 28px;
    font-weight: 500;
    line-height: 35px;
  }

  span {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
  }
`;

export const SubscriptionDate = styled.div`
  background-color: #c1c1c1;
  display: flex;
  gap: 1rem;
  border-radius: 8px;
  width: 20%;
  margin-bottom: 3rem;
  margin: 0 auto;
  margin-top: 2rem;
  cursor: pointer;

  p {
    display: flex;
    flex: 1;
    justify-content: center;
    /* background-color: white; */
    margin: 0.3rem 0.3rem;
    padding: 0.5rem;
    border-radius: 8px;
  }

  p.active {
    background-color: #ffff;
    color: #1b1b1b;
  }
`;

export const SubCon = styled.div`
  /* background-color: pink; */
  display: flex;
  gap: 1rem;
  padding: 2rem;
  /* align-items: center; */
`;

export const FrequentQue = styled.div`
  background-color: #ffff;
  width: 95%;
  margin: 0 auto;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 12px;

  h3 {
    font-size: 28px;
    font-weight: 600;
    line-height: 35px;
  }

  p {
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
  }
`;
