import styled from "styled-components";

export const Notificationcontainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .notification_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    h1 {
      font-size: 22px;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
    }

    p {
      font-size: 16px;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }

    .mark {
      height: 2.4rem;
      min-width: 9rem;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      font-size: 14px;
    }
  }

  .read_unread {
    background-color: #c1c1c1;
    padding: 0.2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    width: 100%;
    max-width: 300px;
  }

  .all,
  .unread {
    flex: 1;
    background-color: #fff;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    .notification_top {
      flex-direction: column;
      align-items: flex-start;

      h1 {
        font-size: 18px;
      }

      p {
        font-size: 14px;
      }

      .mark {
        font-size: 13px;
        width: auto;
        padding: 0.4rem 0.8rem;
      }
    }

    .read_unread {
      font-size: 16px;
      flex-direction: column;
      align-items: stretch;
    }

    .all,
    .unread {
      width: 100%;
      font-size: 13px;
      margin-top: 0.4rem;
    }
  }

  @media (max-width: 480px) {
    .notification_top {
      h1 {
        font-size: 16px;
      }

      p {
        font-size: 13px;
      }

      .mark {
        font-size: 12px;
        padding: 0.3rem 0.6rem;
      }
    }

    .read_unread {
      font-size: 15px;
    }

    .all,
    .unread {
      font-size: 12px;
    }
  }
`;
