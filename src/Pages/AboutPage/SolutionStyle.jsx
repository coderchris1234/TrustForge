import styled from "styled-components";

export const SolutionContainer = styled.div`
  width: 100%;
  height: 70vh;
  background-color: var(--main_white);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  .Solution_wrapper {
    width: 90%;
    height: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    .Solution_section {
      width: 50%;
      height: 90%;
      border-radius: 15px;

      img {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: contain;
        border-radius: 15px;
      }
    }

    .Section_section1 {
      width: 45%;
      height: 90%;

      .Solution_text_holder {
        width: 100%;
        height: 70%;
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: flex-end;

        h3 {
          font-size: 36px;
          font-weight: 600;
          color: var(--netural_black_color);
          margin: 0px;
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
  }
`;
