import styled from "styled-components";
import InsightBg from "../assets/InsightBg.png";

export const InsightContainer = styled.div`
  width: 100%;
  height: 107vh;
  /* background: linear-gradient(to right, #f5b301, #8ab7f4, #8ab7f4); */
  background: url(${InsightBg});
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;

  .Insight_wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .Insight_texts {
      width: 100%;
      height: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 40px;
      gap: 20px;

      h3 {
        font-size: 36px;
        font-weight: 600;
        color: var(--netural_black_color);
        margin-bottom: 0px;
      }

      span {
        color: var(--primary_color_500);
      }

      p {
        font-size: 16px;
        font-weight: 400;
        color: var(--netural_black_color);
      }
    }

    .Insight_card_holder {
      width: 100%;
      height: 65%;
      display: flex;
      justify-content: space-between;
      /* background-color: red; */
    }

    .Insight_btn {
      width: 163px;
      height: 44px;
      margin-top: 20px;
      border-radius: 8px;
      cursor: pointer;
      background-color: var(--primary_color_500);
      border: none;
      color: var(--main_white);
    }
  }
`;
