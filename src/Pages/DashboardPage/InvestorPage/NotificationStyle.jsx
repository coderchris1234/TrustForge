import styled from "styled-components";
export const Notification_container = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;

  .notification_top {
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 22px;
      font-family: "poppins" sans-serif;
      font-weight: 600;
    }
    p {
      font-size: 16px;
      font-family: "poppins" sans-serif;
      font-weight: 400;
    }
    .mark {
      height: 2.4rem;
      width: 9rem;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
    }
  }
  .read_unread {
    height: 2rem;
    width: 24%;
    background-color: #c1c1c1;
    padding: 0.2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-family: "poppins" sans-serif;
    font-weight: 500;
  }

  .all {
    height: 100%;
    width: 50%;
    background-color: #fff;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .unread {
    height: 100%;
    width: 50%;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
