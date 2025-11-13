import styled from "styled-components";

export const NotificationContainer = styled.div`
  width: 100%;

  .notification_top {
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    width: 95%;
    margin: 0 auto;
  }

  .read {
    background-color: brown;
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 2rem;
    margin-top: 1rem;
    border-radius: 8px;
  }
`;
