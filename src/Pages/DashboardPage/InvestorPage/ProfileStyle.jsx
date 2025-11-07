import styled from "styled-components";

export const ProfileStyle = styled.div`
  width: 80%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .Profile_heading {
    width: 100%;
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
      align-items: center;
      padding: 0.5rem;
      border-radius: 50px;

      .Personal_info,
      .Professional_info {
        width: 50%;
        height: 100%;
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

      .Personal_info {
        background-color: var(--main_white);
      }
    }
  }

  .Profile_info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .Profile_image {
      width: 100%;
      background-color: #ffffff;
      border-radius: 12px;
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      height: 12rem;

      .Profile_img_holder {
        width: 180px;
        height: 170px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        .Image_holder {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .Profile_content_holder {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .Kyc_verified {
          display: flex;
          align-items: center;
          gap: 20px;

          h3 {
            margin: 0;
          }

          span {
            background-color: #c6f6a1;
            width: 117px;
            height: 30px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        .Profile_info_holder {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }

    .Profile_content_info {
      background-color: #ffffff;
      border-radius: 12px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;
      box-sizing: border-box;

      .Personal_infos {
        display: flex;
        justify-content: space-between;
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
          font-size: 18px;
          font-weight: 400;
          color: var(--main_black);
        }
      }

      .First_name {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        .First {
          flex: 1;
          min-width: 250px;

          .First_informations {
            display: flex;
            flex-direction: column;

            span {
              font-size: 18px;
              font-weight: 400;
              color: #777777;
            }

            p {
              font-size: 18px;
              font-weight: 400;
              color: var(--neutral_black_color);
              margin: 0;
            }
          }
        }
      }

      .Update {
        background-color: #eceffa;
        border-radius: 8px;
        display: flex;
        align-items: center;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;

        p {
          font-size: 16px;
          font-weight: 400;
          color: #9c9c9c;
          margin: 0;
          word-wrap: break-word;
          overflow-wrap: break-word;
          white-space: normal;
          line-height: 1.4;
        }
      }
    }
  }

  @media (max-width: 768px) {
    width: 95%;

    .Profile_heading {
      .Profssional {
        width: 100%;
        flex-direction: column;
        height: auto;
        padding: 0.5rem;

        .Personal_info,
        .Professional_info {
          width: 80%;
          height: 40px;
          padding: 0.4rem 0;
        }
      }
    }

    .Profile_info {
      .Profile_image {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .Profile_img_holder {
          width: 30%;
          justify-content: flex-start;
        }

        .Profile_content_holder {
          width: 100%;
          margin-top: 2rem;
        }
      }

      .Profile_content_info {
        gap: 2rem;
        .First_name {
          flex-direction: column;
          gap: 2rem;

          .First {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
        }

        .Update {
          padding: 0.8rem;

          p {
            font-size: 14px;
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    .Profile_heading {
      h1 {
        font-size: 18px;
      }

      p {
        font-size: 14px;
      }

      .Profssional {
        .Personal_info p,
        .Professional_info p {
          font-size: 16px;
        }
      }
    }

    .Profile_info {
      .Profile_content_info {
        .Personal_infos {
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;

          h4 {
            font-size: 18px;
          }

          span {
            font-size: 14px;
            width: auto;
            padding: 0.4rem 0.8rem;
          }
        }

        .Update {
          padding: 0.6rem;

          p {
            font-size: 13px;
            line-height: 1.5;
          }
        }
      }
    }
  }
`;
