import styled from "styled-components";
import HeroBg from "../assets/HeroBg.jpg";

export const HeroContainer = styled.div`
  width: 100%;
  height: 80vh;

  .Hero_page_wrapper {
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.71)),
      url(${HeroBg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;

    .Hero_content {
      width: 70%;
      height: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;
      /* background-color: red; */

      h3 {
        font-size: 64px;
        font-weight: 800;
        text-align: center;
        color: var(--main_white);
        line-height: 140%;
        margin: 0px;

        span {
          /* color: var(--primary_color_500); */
          background: linear-gradient(90deg, #0046ff, #0046ff, #042f6cff 70%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 1px white; /* outline color & thickness */
          text-stroke: 1px white; /* for Firefox (partial support) */
          background-clip: text;
          color: transparent;
        }
      }

      p {
        font-size: 18px;
        color: var(--main_white);
        text-align: center;
        line-height: 30px;
        font-weight: 400;
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
