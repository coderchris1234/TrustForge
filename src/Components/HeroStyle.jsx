import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 75vh;

  .Hero_page_wrapper {
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;

    .Hero_content {
      width: 55%;
      height: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;

      h3 {
        font-size: 36px;
        font-weight: 600;
        text-align: center;
        color: var(--main_white);
        line-height: 140%;
        margin: 0px;
      }

      p {
        font-size: 18px;
        color: var(--main_white);
        text-align: center;
        line-height: 120%;
      }

      .Hero_btn {
        width: 183px;
        height: 52px;
        border-radius: 12px;
        color: var(--main_white);
        border: none;
        background-color: var(--primary_color_500);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;

        .Hero_icon {
          font-size: 35px;
          font-weight: 100;
        }
      }
    }
  }
`;
