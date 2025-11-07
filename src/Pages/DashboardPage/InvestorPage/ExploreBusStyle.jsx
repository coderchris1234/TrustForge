import styled from "styled-components";

export const Explorecontainer = styled.div`
  width: 100%;
  padding: 1rem;

  .exploreText {
    max-width: 100%;
    margin-bottom: 1rem;

    h1 {
      color: #1b1b1b;
      font-family: Poppins;
      font-size: 22px;
      font-weight: 600;
      line-height: 125%;
    }

    p {
      color: #1b1b1b;
      font-family: Poppins;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
    }
  }

  @media (max-width: 768px) {
    .exploreText {
      h1 {
        font-size: 18px;
      }

      p {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 480px) {
    .exploreText {
      h1 {
        font-size: 16px;
      }

      p {
        font-size: 13px;
      }
    }
  }
`;

export const SearchContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;

  .search {
    background-color: rgba(227, 227, 227, 0.8);
    /* flex: 1 1 300px; */
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.6rem 10px;
    border-radius: 0.4rem;
    /* background-color: green; */
    height: 50px;

    .input {
      background-color: transparent;
      outline: none;
      border: none;
      width: 100%;
      font-size: 1rem;
    }
  }

  .trending {
    background-color: rgba(227, 227, 227, 0.8);
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 0.4rem;
    padding: 0.6rem 0.7rem;
    height: 50px;
    /* background-color: red; */

    p {
      margin: 0;
      line-height: 1;
      white-space: nowrap;
      font-size: 0.95rem;
    }
  }

  .filter {
    background-color: rgba(227, 227, 227, 0.8);

    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 0.4rem;
    padding: 0.6rem 0.8rem;
    height: 50px;

    p {
      margin: 0;
      line-height: 1;
      white-space: nowrap;
      font-size: 0.95rem;
      color: 000;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .search,
    .trending,
    .filter {
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0.6rem 0.8rem;
    }
  }

  @media (max-width: 480px) {
    .search,
    .trending,
    .filter {
      padding: 0.5rem;
      gap: 0.5rem;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .input {
      font-size: 14px;
    }

    p {
      font-size: 13px;
    }
  }
`;

export const Text = styled.div`
  margin-top: 20px;
  width: 100%;
`;
