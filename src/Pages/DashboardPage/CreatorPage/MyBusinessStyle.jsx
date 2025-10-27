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

export const SearchBar = styled.div`
  background-color: #ffff;
  width: 95%;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  select {
    width: 15%;
    background-color: rgba(227, 227, 227, 0.8);
    padding: 0.5rem;
    border-radius: 8px;
    color: #1b1b1b;
    outline: none;
    border: none;

    option {
      background-color: #ffff;
    }
  }

  .searchContainer {
    background-color: #eceff4;
    width: 85%;
    display: flex;
    padding: 0.5rem;
    border-radius: 8px;
    gap: 1rem;
    align-items: center;

    input {
      display: flex;
      flex: 1;
      background-color: #eceff4;
      border: none;
      outline: none;
    }
  }
`;

export const BusinessContainer = styled.div`
  background-color: red;
  width: 95%;
  margin: 0 auto;
  margin-top: 2rem;
`;
