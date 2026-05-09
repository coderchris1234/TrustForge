import styled from "styled-components";

export const BlogPostCardStyle = styled.div`
  background: #ffffff;
  border: 1px solid #e8e3d8;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.25s ease;

  &:hover {
    border-color: #191919;
    transform: translateY(-4px);
    box-shadow: 6px 6px 0 #191919;
  }

  .Insight_Card_image {
    width: 100%;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    &:hover img { transform: scale(1.04); }
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
        padding: 3px 12px;
        background: #191919;
        border-radius: 100px;
        font-size: 0.68rem;
        color: #b9ff66;
        font-weight: 700;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }

      h3 {
        font-size: 0.95rem;
        font-weight: 700;
        color: #191919;
        line-height: 1.45;
        margin: 0;
      }

      .Read_me_blog p {
        font-size: 0.825rem;
        color: #666;
        line-height: 1.65;
        margin: 0;

        .Read_More {
          color: #191919;
          font-weight: 700;
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
      border-top: 1px solid #e8e3d8;

      .Profile_insight,
      .Profile_insight1 {
        display: flex;
        align-items: center;
        gap: 6px;

        p, span {
          font-size: 0.775rem;
          color: #999;
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
`;
