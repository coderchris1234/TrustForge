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
        text-align: center;
      }

      span {
        color: var(--primary_color_500);
      }

      p {
        font-size: 18px;
        font-weight: 400;
        color: var(--netural_black_color);
        text-align: center;
        line-height: 1.5;
      }
    }

    .Insight_card_holder {
      width: 100%;
      height: 65%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
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

  @media (max-width: 1024px) {
    height: auto;
    padding: 2rem 1rem;
    background-size: cover;
    background-position: center;

    .Insight_wrapper {
      height: auto;

      .Insight_card_holder {
        justify-content: center;
        gap: 30px;
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 1rem 3rem 1rem;

    .Insight_wrapper {
      gap: 30px;

      .Insight_texts {
        margin-top: 20px;

        h3 {
          font-size: 28px;
          text-align: center;
        }

        p {
          font-size: 16px;
          text-align: center;
        }
      }

      .Insight_card_holder {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: auto;
        gap: 25px;
      }

      .Insight_btn {
        width: 150px;
        height: 42px;
        font-size: 15px;
      }
    }
  }

  @media (max-width: 480px) {
    .Insight_wrapper {
      .Insight_texts {
        h3 {
          font-size: 22px;
        }

        p {
          font-size: 14px;
        }
      }

      .Insight_card_holder {
        gap: 20px;
      }

      .Insight_btn {
        width: 140px;
        height: 40px;
        font-size: 14px;
      }
    }
  }
`;
