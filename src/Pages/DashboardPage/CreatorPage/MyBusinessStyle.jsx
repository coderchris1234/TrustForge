import styled from "styled-components";

export const MyBusinessHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 2rem 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;
  flex-wrap: wrap;

  .heading {
    h2 {
      font-size: 1.4rem;
      font-weight: 800;
      color: #04091a;
      letter-spacing: -0.5px;
      margin: 0 0 4px;
    }

    span {
      font-size: 0.875rem;
      color: #6b7280;
    }
  }

  button {
    height: 40px;
    padding: 0 20px;
    background: #0046ff;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    transition: all 0.2s ease;

    &:hover {
      background: #002da3;
      transform: translateY(-1px);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 0;

    button { width: 100%; }
  }
`;

export const SearchBar = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 1rem auto 0;
  padding: 0 2rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;

  select {
    height: 44px;
    padding: 0 14px;
    border: 1.5px solid #e5e7eb;
    border-radius: 10px;
    background: #ffffff;
    font-size: 0.875rem;
    font-family: "Poppins", sans-serif;
    color: #374151;
    outline: none;
    cursor: pointer;
    transition: border-color 0.2s ease;
    appearance: none;
    padding-right: 32px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;

    &:focus { border-color: #0046ff; }
  }

  .searchContainer {
    flex: 1;
    height: 44px;
    background: #ffffff;
    border: 1.5px solid #e5e7eb;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 14px;
    transition: border-color 0.2s ease;

    &:focus-within {
      border-color: #0046ff;
      box-shadow: 0 0 0 3px rgba(0,70,255,0.08);
    }

    input {
      flex: 1;
      border: none;
      outline: none;
      background: transparent;
      font-size: 0.875rem;
      font-family: "Poppins", sans-serif;
      color: #04091a;

      &::placeholder { color: #9ca3af; }
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    flex-direction: column;

    select, .searchContainer { width: 100%; }
  }
`;

export const BusinessWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 1.5rem auto 3rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #9ca3af;
    text-align: center;
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;
