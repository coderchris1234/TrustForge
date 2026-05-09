import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const InsightContainer = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 7rem 1.5rem;
  display: flex;
  justify-content: center;

  .Insight_wrapper {
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    animation: ${fadeUp} 0.8s ease forwards;
  }

  .Insight_texts {
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
      color: #0046ff;
    }

    h3 {
      font-size: clamp(2rem, 4vw, 2.8rem);
      font-weight: 800;
      color: #04091a;
      margin: 0;
      line-height: 1.15;
      letter-spacing: -1px;

      span { color: #0046ff; }
    }

    .right_head {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      gap: 1rem;
      padding-bottom: 0.25rem;

      p {
        font-size: 1rem;
        color: #4b5563;
        line-height: 1.75;
        margin: 0;
        text-align: right;
      }
    }
  }

  .Insight_card_holder {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .Insight_btn {
    width: fit-content;
    height: 48px;
    padding: 0 28px;
    border-radius: 8px;
    cursor: pointer;
    background: transparent;
    border: 1.5px solid #04091a;
    color: #04091a;
    font-size: 0.875rem;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    transition: all 0.2s ease;
    align-self: center;

    &:hover {
      background: #04091a;
      color: #ffffff;
    }
  }

  @media (max-width: 1024px) {
    padding: 5rem 1.5rem;

    .Insight_texts {
      grid-template-columns: 1fr;
      gap: 1.5rem;

      .right_head {
        align-items: flex-start;

        p { text-align: left; }
      }
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
