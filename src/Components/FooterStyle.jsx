import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  .Footer_wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .Footer_info {
      width: 95%;
      height: 70%;
      display: flex;
      gap: 10px;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;

      .Footer_text_logo {
        width: 27%;
        height: 70%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        p {
          font-size: 16px;
          font-weight: 300;
          color: var(--main_white);
          line-height: 150%;
        }

        .Footer_logo {
          width: 100%;
          height: 20%;
          display: flex;
          align-items: center;
          gap: 10px;

          .Logo_img_footer {
            width: 35px;
            height: 100%;
            background-color: red;
          }

          h3 {
            color: var(--main_white);
            margin: 0px;
            font-size: 28px;
            font-weight: 600;
          }
        }
      }

      .Footer_text1 {
        width: 40%;
        height: 70%;
        display: flex;
        gap: 20px;

        .Footer_text {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;

          .Footer_text_header {
            width: 100%;
            height: 20%;
            display: flex;
            align-items: center;

            h3 {
              margin: 0px;
              font-size: 16px;
              font-weight: 500;
              color: var(--main_white);
            }
          }

          .Footer_text_footer {
            display: flex;
            flex-direction: column;

            p {
              color: var(--main_white);
              font-size: 16px;
              font-weight: 300;
              display: flex;
              gap: 20px;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }

      .Footer_text2 {
        width: 25%;
        height: 70%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        .Footer_text_header {
          width: 100%;
          height: 20%;
          display: flex;
          align-items: center;

          h3 {
            margin: 0px;
            font-size: 16px;
            font-weight: 500;
            color: var(--main_white);
          }
        }

        .Footer_text_footer {
          display: flex;
          flex-direction: column;

          p {
            color: var(--main_white);
            font-size: 16px;
            font-weight: 300;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  .Footer_links {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: flex-end;
    padding-top: 30px;

    .Footer_link_media {
      width: 100%;
      height: 30%;
      display: flex;
      gap: 20px;

      .Footer_link_text {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;

        .link_icons {
          font-size: 14px;
          color: var(--main_white);
          font-weight: 400;
        }

        p {
          font-size: 14px;
          color: var(--main_white);
          font-weight: 400;
          margin: 0px;
        }
      }

      .Footer_link_icon {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;

        .Media_icon_link {
          font-size: 24px;
          color: var(--main_white);
        }
      }
    }
  }
`;
