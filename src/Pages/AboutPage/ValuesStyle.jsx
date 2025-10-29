import styled from "styled-components";

export const ValuesContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-color: var(--main_white);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  .Value_wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .Value_header_text {
      width: 100%;
      height: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
      margin-top: 10px;

      h1 {
        margin: 0px;
        font-size: 36px;
        font-weight: 600;
        color: var(--netural_black_color);
      }

      p {
        font-size: 22px;
        font-weight: 400;
        color: var(--netural_black_color);
      }
    }

    .Value_card {
      width: 100%;
      height: 70%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .Value_card_item {
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        padding-top: 20px;

        h3 {
          font-size: 24px;
          font-weight: 600;
          color: var(--netural_black_color);
          margin: 0px;
        }

        p {
          font-size: 16px;
          text-align: center;
        }

        .Value_image_holder {
          width: 58px;
          height: 58px;
          border-radius: 50px;
          background-color: var(--primary_color_200);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary_color_500);
          font-size: 28px;
        }
      }
    }
  }
`;
