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
    transition: 0.2s;
  }

  button:hover {
    opacity: 0.9;
  }

  /* Tablet */
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    width: 92%;
    gap: 12px;

    button {
      width: auto;
    }
  }

  /* Mobile */
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 100%;

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
  margin-top: 1rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 8px;

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
      font-size: 15px;
    }
  }

  /* Tablet */
  @media (max-width: 900px) {
    flex-direction: column;
    width: 92%;
    gap: 1rem;

    select {
      width: 100%;
    }

    .searchContainer {
      width: 100%;
    }
  }

  /* Mobile */
  @media (max-width: 600px) {
    width: 100%;
    padding: 0.7rem;
    gap: 0.8rem;
    flex-direction: column;

    select {
      width: 100%;
      padding: 0.7rem;
      font-size: 14px;
    }

    .searchContainer {
      width: 100%;
      padding: 0.6rem;

      input {
        font-size: 14px;
      }
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
    text-align: center;
  }

  /* Tablet */
  @media (max-width: 900px) {
    width: 100%;
    padding: 1rem;
  }

  /* Mobile */
  @media (max-width: 600px) {
    padding: 0.8rem;
  }
`;
