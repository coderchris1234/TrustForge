import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background: #191919;
  display: flex;
  justify-content: center;
  padding: 5rem 1.5rem 2.5rem;

  .Footer_wrapper {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .Footer_info {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr;
      gap: 4rem;
      align-items: start;

      .Footer_text_logo {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        .Footer_logo .Logo_img_footer {
          .Footer_logo_text {
            font-size: 1.4rem;
            font-weight: 900;
            color: #ffffff;
            letter-spacing: -0.5px;
            font-family: "Poppins", sans-serif;
            text-decoration: none;
          }
        }

        p {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.75;
          max-width: 280px;
        }
      }

      .Footer_text1 {
        display: flex;
        gap: 3rem;

        .Footer_text {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;

          .Footer_text_header h3 {
            font-size: 0.72rem;
            font-weight: 700;
            color: rgba(255,255,255,0.35);
            text-transform: uppercase;
            letter-spacing: 2px;
            margin: 0;
          }

          .Footer_text_footer ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;

            li {
              color: rgba(255,255,255,0.6);
              font-size: 0.875rem;
              font-weight: 400;
              cursor: pointer;
              transition: color 0.2s ease;

              &:hover { color: #b9ff66; }
            }
          }
        }
      }

      .Footer_text2 {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        .Footer_text_header h3 {
          font-size: 0.72rem;
          font-weight: 700;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0;
        }

        .Footer_text_footer {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;

          p {
            color: rgba(255,255,255,0.6);
            font-size: 0.875rem;
            cursor: pointer;
            transition: color 0.2s ease;

            &:hover { color: #b9ff66; }
          }
        }
      }
    }
  }

  .Footer_links {
    border-top: 1px solid rgba(255,255,255,0.08);
    padding-top: 1.5rem;

    .Footer_link_media {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .Footer_link_text {
        display: flex;
        align-items: center;
        gap: 5px;

        p {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.3);
          margin: 0;
        }

        .link_icons {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.3);
        }
      }

      .Footer_link_icon {
        display: flex;
        align-items: center;
        gap: 14px;

        .Media_icon_link {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: color 0.2s ease;

          &:hover { color: #b9ff66; }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 4rem 1.5rem 2rem;

    .Footer_wrapper .Footer_info {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;

      .Footer_text_logo {
        grid-column: 1 / -1;
      }
    }
  }

  @media (max-width: 640px) {
    padding: 3rem 1.25rem 2rem;

    .Footer_wrapper .Footer_info {
      grid-template-columns: 1fr;
      gap: 2rem;

      .Footer_text_logo { grid-column: auto; }

      .Footer_text1 { gap: 2rem; }
    }

    .Footer_links .Footer_link_media {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
`;
