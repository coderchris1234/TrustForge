import styled from "styled-components";

export const MyBusinessHeader = styled.div`
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
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  /* Tablet */
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: 92%;
  }

  /* Mobile */
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    .heading h2 {
      font-size: 19px;
    }

    .heading span {
      font-size: 14px;
    }

    button {
      width: 100%;
      padding: 12px;
      font-size: 14px;
    }
  }
`;

export const SearchBar = styled.div`
  background-color: #fff;
  width: 95%;
  /* margin: 0 auto; */
  margin-top: 1rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  /* gap: 2rem; */

  select {
    width: 15%;
    background-color: rgba(227, 227, 227, 0.8);
    padding: 0.5rem;
    border-radius: 8px;
    color: #1b1b1b;
    outline: none;
    border: none;

    option {
      background-color: #fff;
    }
  }

  .searchContainer {
    background-color: #eceff4;
    width: 80%;
    display: flex;
    padding: 0.5rem;
    border-radius: 8px;
    gap: 1rem;
    align-items: center;

    input {
      flex: 1;
      background-color: #eceff4;
      border: none;
      outline: none;
    }
  }

  /* Tablet */
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
    width: 92%;

    .searchContainer {
      width: 100%;
    }

    select {
      width: 100%;
    }
  }

  /* Mobile */
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    padding: 0.7rem;

    .searchContainer {
      width: 100%;
      padding: 0.6rem;

      input {
        font-size: 14px;
      }
    }

    select {
      width: 100%;
      padding: 0.6rem;
      font-size: 14px;
    }
  }
`;

export const BusinessWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;

  p {
    color: gray;
  }

  @media (max-width: 600px) {
    padding: 0.8rem;
  }
`;
