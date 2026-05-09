import styled from "styled-components";

export const Notificationcontainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: "Poppins", sans-serif;

  .notification_top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;

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
      margin: 0;
    }

    .mark {
      height: 40px;
      padding: 0 16px;
      background: #ffffff;
      border: 1.5px solid #e5e7eb;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      font-weight: 600;
      color: #374151;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        border-color: #0046ff;
        color: #0046ff;
      }
    }
  }

  .read_unread {
    background: #f0f2f8;
    padding: 4px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    width: fit-content;
    gap: 2px;
  }

  .all, .unread {
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

    &.active_tab {
      background: #0046ff;
      color: #ffffff;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 3rem;
  }
`;
