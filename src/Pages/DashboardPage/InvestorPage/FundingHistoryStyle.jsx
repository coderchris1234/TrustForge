import styled from "styled-components";

export const FundingHistory_contianer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem 4rem;
  font-family: "Poppins", sans-serif;

  h1 {
    font-size: 1.4rem;
    font-weight: 800;
    color: #04091a;
    letter-spacing: -0.5px;
    margin: 0 0 4px;
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;
    margin: 0 0 1.5rem;
  }

  .read_unread {
    display: flex;
    align-items: center;
    background: #f0f2f8;
    padding: 4px;
    border-radius: 100px;
    width: fit-content;
    gap: 2px;
    margin-top: 1.5rem;

    .active, .pending, .completed {
      height: 36px;
      padding: 0 20px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 500;
      color: #6b7280;
      transition: all 0.2s ease;
      background: transparent;
      white-space: nowrap;
    }

    .active {
      background: #0046ff;
      color: #ffffff;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 3rem;

    .read_unread {
      width: 100%;
      border-radius: 12px;
      flex-direction: column;
      padding: 6px;

      .active, .pending, .completed {
        width: 100%;
        border-radius: 8px;
      }
    }
  }
`;
