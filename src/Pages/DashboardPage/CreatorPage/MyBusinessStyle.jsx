import styled from "styled-components";

export const MyBusinessHeader = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  margin-top: 1rem;

  .heading {
    h2 {
      font-size: 22px;
      font-weight: 600;
      line-height: 28px;
    }
    span {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }
  button {
    padding: 10px;
    background-color: #0046ff;
    color: #ffff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
`;
