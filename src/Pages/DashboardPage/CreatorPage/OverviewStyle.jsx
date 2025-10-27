import styled from "styled-components";

export const OverviewContent = styled.div`
  width: 95%;
  height: 100vh;
  margin: 0 auto;

  .ContentTitle {
    padding-top: 2rem;
    h1 {
      font-size: 22px;
      font-weight: 600;
      font-style: normal;
      line-height: 28px;
      margin-bottom: 0;
    }
    p {
      color: #1b1b1b;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }

  .Overview-content {
    width: 100%;
    margin-top: 0;
    gap: 18px;
    height: 20%;
    display: flex;
    justify-content: space-around;

    .box {
      width: 25%;
      height: 16vh;
      border-radius: 15px;
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 12px;

      img {
        width: 24px;
        height: 24px;
      }
      span {
        color: var(--netural_black_color);
        font-size: 22px;
        font-weight: 600;
        line-height: 28px;
      }
    }
  }

  .recentIdeas {
    width: 100%;
    background-color: #fff;
    padding: 2rem;
    /* height: 55%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;

    .recent {
      width: 98%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        background-color: transparent;
        border: 1px solid lightgrey;
        padding: 8px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: #c7c6c6;
        }
      }
    }
  }

  .QuickAction {
    background-color: #fff;
    margin-top: 15px;
    height: 30vh;
    padding: 1rem 1.5rem;
    border-radius: 15px;
    margin-bottom: 50px;

    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 23px;
      color: #1b1b1b;
    }

    .action {
      /* background-color: red; */
      width: 100%;
      height: 55%;
      display: flex;
      gap: 20px;

      .quick {
        /* background-color: pink; */
        border-radius: 10px;
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        color: #fff;
      }
    }
  }
`;
