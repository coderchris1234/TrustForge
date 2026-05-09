import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const StoriesContainer = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 7rem 1.5rem;
  display: flex;
  justify-content: center;

  .Story_wrapper {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    animation: ${fadeUp} 0.8s ease forwards;
  }

  /* ── Header ── */
  .Story_header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: end;

    .left_head {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .section_label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: #191919;
      opacity: 0.4;
    }

    h3 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 900;
      color: #191919;
      margin: 0;
      line-height: 1.0;
      letter-spacing: -2px;

      span { color: #191919; }
    }

    p {
      font-size: 1rem;
      color: #666;
      line-height: 1.8;
      margin: 0;
      padding-top: 0.5rem;
    }
  }

  /* ── Cards ── */
  .Story_card_holder {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    .Story_card {
      border: 1px solid #e8e3d8;
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all 0.25s ease;
      background: #fafaf7;

      &:hover {
        border-color: #191919;
        transform: translateY(-4px);
        box-shadow: 6px 6px 0 #191919;
      }

      .Story_image {
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

      .Story_contents {
        padding: 1.75rem;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        flex: 1;
      }

      .Story_cont1 {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        flex: 1;

        .Story_icon {
          font-size: 1.5rem;
          color: #b9ff66;
          background: #191919;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        p {
          font-size: 0.9rem;
          color: #444;
          line-height: 1.75;
          font-style: italic;
          margin: 0;
        }
      }

      .Story_cont2 {
        padding-top: 1.25rem;
        border-top: 1px solid #e8e3d8;

        h4 {
          font-size: 0.9rem;
          font-weight: 700;
          color: #191919;
          margin: 0 0 3px;
        }

        span {
          font-size: 0.78rem;
          color: #888;
          font-weight: 500;
          display: block;
        }

        p {
          font-size: 0.75rem;
          color: #aaa;
          margin: 2px 0 0;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 5rem 1.5rem;

    .Story_header {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .Story_card_holder {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 640px) {
    padding: 4rem 1.25rem;

    .Story_card_holder {
      grid-template-columns: 1fr;
    }
  }
`;
