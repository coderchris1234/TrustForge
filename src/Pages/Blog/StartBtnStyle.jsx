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
      width: 36%;
      height: 70%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .Startup_Header_btn1 {
        height: 41px;
        width: 40px;
        background-color: var(--main_black);
        color: var(--main_white);
        border-radius: 8px;
        font-size: 18px;
        font-weight: 400;
        border: none;
        cursor: pointer;
      }

      .Startup_Header_btn2 {
        height: 41px;
        width: 315px;
        background-color: var(--main_white);
        color: var(--main_black);
        border: 2px solid var(--neutral_gray_color_700);
        border-radius: 8px;
        font-size: 18px;
        cursor: pointer;
        font-weight: 400;
        padding: 5px;
        transition: all 350ms ease-in-out;

        &:hover {
          background-color: var(--main_black);
          color: var(--main_white);
          border: none;
        }
      }

      .Startup_Header_btn3 {
        width: 133px;
        height: 41px;
        background-color: var(--main_white);
        color: var(--main_black);
        border: 2px solid var(--neutral_gray_color_700);
        border-radius: 8px;
        font-size: 18px;
        cursor: pointer;
        font-weight: 400;
        transition: all 350ms ease-in-out;

        &:hover {
          background-color: var(--main_black);
          color: var(--main_white);
          border: none;
        }
      }
    }
  }
`;
