import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const InsightContainer = styled.section`
  width: 100%;
  background: #f5f0e8;
  padding: 7rem 1.5rem;
  display: flex;
  justify-content: center;

  .Insight_wrapper {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    animation: ${fadeUp} 0.8s ease forwards;
  }

  /* ── Header ── */
  .Insight_texts {
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

    .right_head {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 1rem;
      padding-bottom: 0.25rem;

      p {
        font-size: 1rem;
        color: #666;
        line-height: 1.8;
        margin: 0;
      }
    }
  }

  /* ── Cards ── */
  .Insight_card_holder {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  /* ── CTA button ── */
  .Insight_btn {
    width: fit-content;
    height: 52px;
    padding: 0 32px;
    border-radius: 100px;
    cursor: pointer;
    background: #191919;
    border: none;
    color: #ffffff;
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    transition: all 0.2s ease;
    align-self: flex-start;

    &:hover {
      background: #b9ff66;
      color: #191919;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 1024px) {
    padding: 5rem 1.5rem;

    .Insight_texts {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .Insight_card_holder {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 640px) {
    padding: 4rem 1.25rem;

    .Insight_card_holder {
      grid-template-columns: 1fr;
    }
  }
`;
