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

  p {
    display: flex;
    flex: 1;
    justify-content: center;
    background-color: white;
    margin: 0.3rem 0.3rem;
    padding: 0.5rem;
    border-radius: 8px;
  }

  .an {
    color: black;
    background-color: transparent;
  }
`;

export const SubCon = styled.div`
  /* background-color: pink; */
  display: flex;
  gap: 1rem;
  padding: 2rem;
  /* flex-direction: column; */
  /* align-items: center; */
`;
