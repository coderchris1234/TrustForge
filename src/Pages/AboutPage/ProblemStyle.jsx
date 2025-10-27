import styled from "styled-components";

export const ProblemContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-color: var(--main_white);
  display: flex;
  justify-content: center;
  align-items: center;

  .Problem_wrapper {
    width: 90%;
    height: 95%;
    display: flex;
    gap: 10px;

    .Problem_section {
      width: 50%;
      height: 100%;

      .Problem_text_holder {
        width: 90%;
        height: 60%;
        padding-top: 55px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        h3 {
          font-size: 36px;
          font-weight: 600;
          color: var(--netural_black_color);
        }

        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 167%;
          color: var(--netural_black_color);
        }

        span {
          font-size: 16px;
          font-weight: 400;
          line-height: 167%;
          color: var(--netural_black_color);
        }
      }
    }
    .Problem_section1 {
      width: 50%;
      height: 95%;
      background-color: pink;
      margin-top: 30px;
      border-radius: 15px;
    }
  }
`;
