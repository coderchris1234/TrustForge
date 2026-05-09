import styled from "styled-components";

export const BlogPostCardStyle = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.25s ease;

  &:hover {
    border-color: #c7d7ff;
    box-shadow: 0 8px 32px rgba(0,70,255,0.07);
    transform: translateY(-3px);
  }

  .Insight_Card_image {
    width: 100%;
    height: 190px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    &:hover img {
      transform: scale(1.04);
    }
  }

  .Insight_card_contents {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1.5rem;
    gap: 1rem;

    .Insight_card_text_holder {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      flex: 1;

      span {
        width: fit-content;
        padding: 2px 10px;
        background: #eff6ff;
        border-radius: 100px;
        font-size: 0.7rem;
        color: #0046ff;
        font-weight: 700;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }

      h3 {
        font-size: 0.95rem;
        font-weight: 700;
        color: #04091a;
        line-height: 1.45;
        margin: 0;
      }

      .Read_me_blog p {
        font-size: 0.825rem;
        color: #6b7280;
        line-height: 1.65;
        margin: 0;

        .Read_More {
          color: #0046ff;
          font-weight: 600;
          text-decoration: none;
          margin-left: 4px;

          &:hover { text-decoration: underline; }
        }
      }
    }

    .Insight_card_footer {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding-top: 1rem;
      border-top: 1px solid #f3f4f6;

      .Profile_insight,
      .Profile_insight1 {
        display: flex;
        align-items: center;
        gap: 6px;

        p, span {
          font-size: 0.775rem;
          color: #9ca3af;
          margin: 0;
          background: none;
          padding: 0;
          border-radius: 0;
          text-transform: none;
          letter-spacing: 0;
          font-weight: 400;
        }
      }

      .Profile_insight1 { gap: 14px; }

      .Profile_icon_holder {
        display: flex;
        gap: 4px;
        align-items: center;
      }
    }
  }

  @media (max-width: 640px) {
    .Insight_Card_image { height: 170px; }
  }
`;
