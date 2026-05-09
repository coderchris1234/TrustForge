import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const StoriesContainer = styled.section`
  width: 100%;
  background: #04091a;
  padding: 7rem 1.5rem;
  display: flex;
  justify-content: center;

  .Story_wrapper {
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    animation: ${fadeUp} 0.8s ease forwards;
  }

  .Story_header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
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
      color: #4d8bff;
    }

    h3 {
      font-size: clamp(2rem, 4vw, 2.8rem);
      font-weight: 800;
      color: #ffffff;
      margin: 0;
      line-height: 1.15;
      letter-spacing: -1px;

      span { color: #4d8bff; }
    }

    p {
      font-size: 1rem;
      color: rgba(255,255,255,0.5);
      line-height: 1.75;
      margin: 0;
      padding-top: 0.5rem;
    }
  }

  .Story_card_holder {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    overflow: hidden;

    .Story_card {
      background: #0a1128;
      padding: 2.5rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      transition: background 0.2s ease;

      &:hover {
        background: #0d1535;
      }

      .Story_image {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid rgba(77,139,255,0.4);
        flex-shrink: 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .Story_contents {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        flex: 1;
      }

      .Story_cont1 {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        flex: 1;

        .Story_icon {
          font-size: 1.5rem;
          color: #4d8bff;
          opacity: 0.6;
        }

        p {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.7);
          line-height: 1.75;
          font-style: italic;
          margin: 0;
        }
      }

      .Story_cont2 {
        padding-top: 1.25rem;
        border-top: 1px solid rgba(255,255,255,0.08);

        h4 {
          font-size: 0.9rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 3px;
        }

        span {
          font-size: 0.78rem;
          color: #4d8bff;
          font-weight: 500;
          display: block;
        }

        p {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.35);
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
