import React from "react";
import styled from "styled-components";

export const ProfileStyle = styled.div`
  width: 80%;
  height: 85vh;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  gap: 10px;

  .Profile_heading {
    width: 100%;
    height: max-content;
    /* background-color: pink; */
    display: flex;
    flex-direction: column;

    h1 {
      margin: 0;
      font-size: 22px;
      font-weight: 600;
    }

    p {
      font-size: 16px;
      font-weight: 400;
    }

    .Profssional {
      width: 60%;
      height: 3rem;
      background-color: var(--neutral_gray_color_700);
      margin-top: 0.2rem;
      display: flex;
      gap: 10px;
      /* justify-content: space-around; */
      align-items: center;
      padding: 0.5rem;
      border-radius: 50px;

      .Personal_info {
        width: 50%;
        height: 100%;
        background-color: var(--main_white);
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          font-size: 18px;
          font-weight: 500;
          margin: 0;
        }
      }

      .Professional_info {
        width: 50%;
        height: 100%;
        /* background-color: var(--main_white); */
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          font-size: 18px;
          font-weight: 500;
          margin: 0;
        }
      }
    }
  }

  .Profile_info {
    width: 100%;
    height: 83%;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    gap: 10px;

    .Profile_image {
      width: 100%;
      height: max-content;
      background-color: #ffffff;
      border-radius: 12px;
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;
      /* background-color: red; */

      .Profile_img_holder {
        width: 20%;
        height: 100%;
        background-color: green;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        .Image_holder {
          width: 140px;
          height: 120px;
          background-color: pink;
          border-radius: 50%;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }

      .Profile_content_holder {
        width: 80%;
        height: max-content;
        background-color: yellow;
        display: flex;
        flex-direction: column;
        /* padding: 8px; */

        .Kyc_verified {
          width: 100%;
          height: 2rem;
          display: flex;
          /* justify-content: center; */
          align-items: center;
          gap: 20px;
          background-color: red;
          /* margin-top: 0.3rem; */

          h3 {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
          }

          span {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #c6f6a1;
            width: 117px;
            height: 30px;
            border-radius: 8px;
          }
        }

        .Profile_info_holder {
          width: 100%;
          height: 50%;
          background-color: pink;
          /* margin-top: 10px; */
          /* padding: 1rem; */
          /* margin-bottom: 1rem; */
          display: flex;
          flex-direction: column;
          justify-content: center;
          /* align-items: center; */
        }
      }
    }
    .Profile_content_info {
      width: 100%;
      height: 75%;
      background-color: #ffffff;
      border-radius: 12px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .Personal_infos {
        width: 100%;
        height: 3rem;
        display: flex;
        justify-content: space-between;
        /* background-color: red; */
        align-items: center;

        h4 {
          margin: 0;
          font-size: 22px;
          font-weight: 600;
          color: var(--neutral_black_color);
        }

        span {
          background-color: #ffffff;
          width: 89px;
          height: 32px;
          border: 1px solid var(--main_black);
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          font-weight: 400;
          color: var(--main_black);
        }
      }
    }

    .First_name {
      width: 100%;
      height: 80%;
      /* background-color: green; */
      display: flex;
      gap: 10px;

      .First {
        width: 50%;
        height: 100%;
        /* background-color: purple; */

        .First_informations {
          display: flex;
          flex-direction: column;
          /* gap: 5px; */

          span {
            font-size: 18px;
            font-weight: 400;
            color: #777777;
          }

          p {
            font-size: 18px;
            font-weight: 400;
            color: var(--neutral_black_color);
          }
        }
      }
    }

    .Update {
      width: 100%;
      height: 3rem;
      background-color: #eceffa;
      border-radius: 8px;
      display: flex;
      /* justify-content: center; */
      align-items: center;
      padding: 10px;

      p {
        font-size: 16px;
        font-weight: 400;
        color: #9c9c9c;
        margin: 0px;
      }
    }
  }
`;
