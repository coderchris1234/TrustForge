import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background: #0a0f1e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 1.5rem 2rem;

  .Footer_wrapper {
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .Footer_info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 3rem;

      .Footer_text_logo {
        flex: 1.4;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        .Footer_logo {
          .Logo_img_footer {
            width: 160px;

            img {
              width: 100%;
              height: auto;
              object-fit: contain;
            }
          }
        }

        p {
          font-size: 0.9rem;
          font-weight: 300;
          color: #9ca3af;
          line-height: 1.75;
          max-width: 280px;
        }
      }

      .Footer_text1 {
        flex: 1;
        display: flex;
        justify-content: space-around;
        gap: 2rem;

        .Footer_text {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          .Footer_text_header h3 {
            margin: 0;
            font-size: 0.9rem;
            font-weight: 600;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .Footer_text_footer ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;

            li {
              color: #9ca3af;
              font-size: 0.9rem;
              font-weight: 300;
              cursor: pointer;
              transition: color 0.2s ease;

              &:hover {
                color: #ffffff;
              }
            }
          }
        }
      }

      .Footer_text2 {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .Footer_text_header h3 {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 600;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .Footer_text_footer {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;

          p {
            color: #9ca3af;
            font-size: 0.9rem;
            font-weight: 300;
            cursor: pointer;
            transition: color 0.2s ease;

            &:hover {
              color: #ffffff;
            }
          }
        }
      }
    }
  }

  .Footer_links {
    width: 100%;
    max-width: 1100px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 1.5rem;

    .Footer_link_media {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .Footer_link_text {
        display: flex;
        align-items: center;
        gap: 5px;
        color: #6b7280;

        p {
          font-size: 0.8rem;
          color: #6b7280;
          font-weight: 400;
          margin: 0;
        }

        .link_icons {
          font-size: 0.9rem;
        }
      }

      .Footer_link_icon {
        display: flex;
        align-items: center;
        gap: 12px;

        .Media_icon_link {
          font-size: 1.1rem;
          color: #6b7280;
          transition: color 0.2s ease;
          cursor: pointer;

          &:hover {
            color: #ffffff;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem 2rem;

    .Footer_wrapper {
      gap: 2.5rem;

      .Footer_info {
        flex-direction: column;
        gap: 2rem;

        .Footer_text_logo p {
          max-width: 100%;
        }

        .Footer_text1 {
          width: 100%;
          justify-content: flex-start;
          gap: 3rem;
        }

        .Footer_text2 {
          width: 100%;
        }
      }
    }

    .Footer_links {
      .Footer_link_media {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;

        .Footer_link_icon {
          width: 100%;
          justify-content: flex-start;
        }
      }
    }
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1.25rem 1.5rem;

    .Footer_wrapper {
      .Footer_info {
        .Footer_text1 {
          gap: 2rem;
        }
      }
    }
  }
`;
