import styled from "styled-components";

export const BlogPostCardStyle = styled.div`
  width: 32%;
  height: 100%;
  /* min-height: 70%; */
  background-color: var(--main_white);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  /* overflow: hidden; */

  .Insight_Card_image {
    width: 100%;
    height: 50%;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
    }
  }

  .Insight_card_contents {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    gap: 10px;

    .Insight_card_text_holder {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: 60%;
      padding: 15px 20px 0px 20px;
      margin-top: 15px;

      .Read_me_blog {
        p {
          font-size: 18px;
          font-weight: 400;
          display: flex;
          flex-direction: column;

          .Read_More {
            text-decoration: none;
            font-size: 18px;
            font-weight: 500;
            color: var(--secondary_color_600);
          }
        }
      }

      span {
        width: fit-content;
        padding: 4px 12px;
        background-color: var(--neutral_gray_color_700);
        border-radius: 10px;
        font-size: 14px;
        color: var(--netural_black_color);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        height: 25px;
      }

      h3 {
        font-size: 20px;
        font-weight: 600;
        color: var(--netural_black_color);
        line-height: 130%;
      }

      p {
        font-size: 15px;
        font-weight: 400;
        color: var(--netural_black_color);
        line-height: 160%;
      }
    }

    .Insight_card_footer {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 15px;
      padding: 0 20px 20px 20px;

      .Profile_insight,
      .Profile_insight1 {
        display: flex;
        align-items: center;
        gap: 8px;

        p,
        span {
          font-size: 16px;
          font-weight: 400;
          color: var(--main_black);
          margin: 0;
        }
      }

      .Profile_icon_holder {
        display: flex;
        gap: 10px;
        align-items: center;
      }
    }
  }

  @media (max-width: 1024px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border-radius: 15px;
    margin-bottom: 1.5rem;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 0; /* remove gap between children */

    .Insight_card_contents {
      width: 100%;
      display: flex;
      flex-direction: column;

      .Insight_card_text_holder {
        padding: 16px 20px 0px 20px; /* remove bottom padding */
        margin-top: 0; /* remove top margin */
        gap: 0.5rem;
        height: auto;

        h3 {
          font-size: 18px;
          margin: 0;
        }

        p {
          font-size: 15px;
          margin: 0;
        }

        span {
          font-size: 14px;
          margin-top: 6px;
        }
      }

      .Insight_card_footer {
        margin-top: 0; /* remove top margin */
        padding: 12px 20px 16px 20px;
        gap: 8px;

        .Profile_insight,
        .Profile_insight1 {
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
        }

        .Profile_icon_holder {
          gap: 8px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .Insight_card_contents {
      width: 100%;
      .Insight_card_text_holder {
        padding: 18px;

        h3 {
          font-size: 16px;
        }

        p {
          font-size: 13px;
          line-height: 150%;
        }

        span {
          font-size: 11px;
          padding: 3px 10px;
          width: 30%;
          height: 25px;
          font-size: 13px;
        }
      }

      .Insight_card_footer {
        padding: 10px 18px 18px 18px;
        gap: 8px;

        p,
        span {
          font-size: 13px;
        }
      }
    }

    @media (max-width: 390px) {
      .Insight_card_contents {
        .Insight_card_text_holder {
          padding: 18px;
          span {
            font-size: 11px;
            padding: 3px 10px;
            width: 40%;
            height: 25px;
            font-size: 13px;
          }
          h3 {
            font-size: 16px;
          }

          p {
            font-size: 13px;
            line-height: 150%;
          }
        }
      }
    }
  }
`;
