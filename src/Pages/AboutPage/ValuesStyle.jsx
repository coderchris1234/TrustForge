import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ValuesContainer = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 7rem 1.5rem;
  display: flex;
  justify-content: center;

  .Value_wrapper {
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    animation: ${fadeUp} 0.8s ease forwards;
  }

  .Value_header_text {
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

    h1 {
      font-size: clamp(2rem, 4vw, 2.8rem);
      font-weight: 800;
      color: #04091a;
      margin: 0;
      letter-spacing: -1px;
      line-height: 1.15;
    }

    p {
      font-size: 1rem;
      color: #4b5563;
      line-height: 1.8;
      margin: 0;
      padding-top: 0.5rem;
    }
  }

  .Value_card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: #e5e7eb;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    overflow: hidden;

    .Value_card_item {
      background: #ffffff;
      padding: 2.5rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      transition: background 0.2s ease;

      &:hover {
        background: #f0f5ff;
      }

      .Value_image_holder {
        width: 48px;
        height: 48px;
        border-radius: 10px;
        background: #04091a;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-size: 1.3rem;
      }

      h3 {
        font-size: 1rem;
        font-weight: 700;
        color: #04091a;
        margin: 0;
      }

      p {
        font-size: 0.875rem;
        color: #6b7280;
        line-height: 1.65;
        margin: 0;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 5rem 1.5rem;

    .Value_header_text {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .Value_card {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    padding: 4rem 1.25rem;

    .Value_card {
      grid-template-columns: 1fr;
    }
  }
`;
