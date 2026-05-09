import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const SmartContainer = styled.section`
  width: 100%;
  background: #f8faff;
  padding: 7rem 1.5rem;
  display: flex;
  justify-content: center;

  .Smart_wrapper {
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    animation: ${fadeUp} 0.8s ease forwards;
  }

  .Smart_left {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: end;

    .Smart_left_content {
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

    .Smart_right_desc {
      padding-top: 0.5rem;

      p {
        font-size: 1rem;
        color: #4b5563;
        line-height: 1.8;
        margin: 0;
      }
    }
  }

  .Smart_right {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1px;
    background: #e5e7eb;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    overflow: hidden;

    .Smart_right_content {
      display: contents;
    }

    .Smart_card {
      background: #ffffff;
      padding: 2.5rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      transition: background 0.2s ease;

      &:hover {
        background: #f0f5ff;
      }

      .Smart_card_cont {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .Smart_img {
        width: 48px;
        height: 48px;
        border-radius: 10px;
        background: #04091a;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        color: #ffffff;
      }

      h3 {
        font-size: 1rem;
        font-weight: 700;
        color: #04091a;
        margin: 0;
      }

      span {
        font-size: 0.875rem;
        color: #6b7280;
        line-height: 1.65;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 5rem 1.5rem;

    .Smart_left {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  @media (max-width: 640px) {
    padding: 4rem 1.25rem;

    .Smart_right {
      grid-template-columns: 1fr;
    }
  }
`;
