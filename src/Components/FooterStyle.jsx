import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0;

  /* ✅ DESKTOP VIEW (Restored Original) */
  .Footer_wrapper {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;

    .Footer_info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 40px;
      text-align: left;

      .Footer_text_logo {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;

        .Footer_logo {
          width: 180px;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: flex-start;

          .Logo_img_footer {
            width: 100%;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }

        p {
          font-size: 16px;
          font-weight: 300;
          color: var(--main_white);
          line-height: 150%;
          max-width: 350px;
        }
      }

      .Footer_text1 {
        flex: 1;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        gap: 25px;

        .Footer_text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;

          .Footer_text_header {
            h3 {
              margin: 0;
              font-size: 18px;
              font-weight: 500;
              color: var(--main_white);
            }
          }

          .Footer_text_footer {
            ul {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 10px;

              li {
                color: var(--main_white);
                font-size: 16px;
                font-weight: 300;
                cursor: pointer;
                position: relative;

                &:hover::after {
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 1px;
                  background-color: white;
                  bottom: -3px;
                  left: 0;
                }
              }
            }
          }
        }
      }

      .Footer_text2 {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;

        .Footer_text_header {
          h3 {
            margin: 0;
            font-size: 18px;
            font-weight: 500;
            color: var(--main_white);
          }
        }

        .Footer_text_footer {
          display: flex;
          flex-direction: column;
          gap: 10px;

          p {
            color: var(--main_white);
            font-size: 16px;
            font-weight: 300;
            cursor: pointer;
            position: relative;

            &:hover::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 1px;
              background-color: white;
              bottom: -3px;
              left: 0;
            }
          }
        }
      }
    }
  }

  .Footer_links {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 20px;
    gap: 15px;

    .Footer_link_media {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .Footer_link_text {
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--main_white);

        p {
          font-size: 14px;
          color: var(--main_white);
          font-weight: 400;
          margin: 0;
        }
      }

      .Footer_link_icon {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 15px;

        .Media_icon_link {
          font-size: 24px;
          color: var(--main_white);
          transition: 0.3s ease;

          &:hover {
            color: var(--primary_color_500);
          }
        }
      }
    }
  }

  /* ✅ MOBILE VIEW (Unchanged — your version) */
  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 2.5rem 1.5rem;

    .Footer_wrapper {
      width: 100%;
      align-items: flex-start;
      text-align: left;
      gap: 30px;

      .Footer_info {
        align-items: flex-start;
        text-align: left;
        flex-direction: column;
        gap: 25px;

        .Footer_text_logo,
        .Footer_text1,
        .Footer_text2 {
          align-items: flex-start;
          flex-direction: column;
          text-align: left;
          padding: 0.5rem 0;
        }

        .Footer_text {
          align-items: flex-start;

          .Footer_text_header {
            h3 {
              font-size: 16px;
            }
          }

          .Footer_text_footer ul {
            align-items: flex-start;
            justify-content: flex-start;
          }

          li {
            font-size: 15px;
          }
        }

        p {
          font-size: 15px;
        }
      }
    }

    .Footer_links {
      align-items: flex-start;
      text-align: left;
      width: 100%;
      padding-top: 15px;
      gap: 12px;

      .Footer_link_media {
        align-items: flex-start;
        flex-direction: column;

        gap: 10px;

        .Footer_link_text {
          justify-content: flex-start;
          color: var(--main_white);
        }

        .Footer_link_icon {
          justify-content: center;
          gap: 12px;
          width: 100%;
        }

        .Footer_link_text p {
          font-size: 13px;
        }

        .Footer_link_icon .Media_icon_link {
          font-size: 22px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;

    .Footer_wrapper {
      width: 100%;
      gap: 25px;
    }

    .Footer_links {
      width: 100%;
      gap: 10px;
    }
  }
`;
