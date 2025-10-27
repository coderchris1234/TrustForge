import styled from "styled-components";

export const TargetContainer = styled.div`
  width: 100%;
  height: 75vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;

  .Target_wrapper {
    width: 90%;
    height: 90%;
    background-color: var(--main_white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 20px;

    .who_we_are {
      width: 100%;
      height: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin-top: 40px;

      h3 {
        font-size: 36px;
        font-weight: 600;
        color: var(--netural_black_color);
        margin-bottom: 15px;
      }

      p {
        font-size: 22px;
        color: var(--netural_black_color);
        font-weight: 400;
        text-align: center;
        margin: 0px;
      }
    }

    .Secure {
      width: 90%;
      height: 45%;
      display: flex;
      justify-content: space-around;

      .Secure_img {
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        .Secure_image_holder {
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

        h3 {
          font-size: 18px;
          font-weight: 500;
          color: var(--netural_black_color);
          margin: 0px;
        }

        p {
          font-size: 16px;
          font-weight: 400;
          color: var(--netural_black_color);
          text-align: center;
          line-height: 150%;
        }
      }
    }
  }
`;
