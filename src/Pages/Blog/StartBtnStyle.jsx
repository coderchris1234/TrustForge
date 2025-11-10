import styled from "styled-components";

export const StartBtnContainer = styled.div`
  width: 100%;
  height: 9vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .Startup_header {
    width: 100%;
    height: 95%;
    background-color: var(--main_white);
    display: flex;
    justify-content: center;
    align-items: center;

    .Startup_Header_btns {
      width: 35%;
      height: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding: 10px;

      .Startup_Header_btn1,
      .Startup_Header_btn2,
      .Startup_Header_btn3 {
        border-radius: 8px;
        transition: all 350ms ease-in-out;
        cursor: pointer;
        font-size: 18px;
        font-weight: 400;
        padding: 0.3rem;
      }

      .Startup_Header_btn1 {
        height: 45px;
        width: 50px;
        background-color: var(--main_white);
        border: 2px solid var(--neutral_gray_color_700);
        color: var(--main_black);

        &:hover {
          background-color: var(--main_black);
          color: var(--main_white);
          border: none;
        }
      }

      .Startup_Header_btn2 {
        height: 45px;
        width: 500px;

        background-color: var(--main_white);
        color: var(--main_black);
        border: 2px solid var(--neutral_gray_color_700);
        padding: 5px;

        &:hover {
          background-color: var(--main_black);
          color: var(--main_white);
          border: none;
        }
      }

      .Startup_Header_btn3 {
        width: 250px;
        height: 45px;
        background-color: var(--main_white);
        color: var(--main_black);
        border: 2px solid var(--neutral_gray_color_700);

        &:hover {
          background-color: var(--main_black);
          color: var(--main_white);
          border: none;
        }
      }

      .active_btn {
        background-color: var(--main_black);
        color: var(--main_white);
        border: none;
      }
    }
  }

  /* ✅ Tablet view */
  @media (max-width: 1024px) {
    height: auto;
    padding: 1.5rem 0;

    .Startup_header {
      .Startup_Header_btns {
        width: 70%;
        height: auto;
        gap: 15px;

        .Startup_Header_btn2 {
          width: 250px;
          font-size: 16px;
        }

        .Startup_Header_btn3 {
          width: 120px;
          font-size: 16px;
        }
      }
    }
  }

  /* ✅ Mobile view */
  @media (max-width: 768px) {
    height: auto;
    padding: 1.5rem 0;

    .Startup_header {
      .Startup_Header_btns {
        width: 90%;
        flex-direction: column;
        gap: 12px;

        .Startup_Header_btn1,
        .Startup_Header_btn2,
        .Startup_Header_btn3 {
          width: 100%;
          max-width: 350px;
          font-size: 16px;
        }

        .Startup_Header_btn1 {
          width: 60px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .Startup_header {
      .Startup_Header_btns {
        width: 100%;
        gap: 10px;

        .Startup_Header_btn2 {
          font-size: 15px;
          width: 100%;
        }

        .Startup_Header_btn3 {
          width: 40%;
          font-size: 15px;
        }
      }
    }
  }
`;
