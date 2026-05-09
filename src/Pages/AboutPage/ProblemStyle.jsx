import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ProblemContainer = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 7rem 1.5rem;
  display: flex;
  justify-content: center;

  .Problem_wrapper {
    width: 100%;
    max-width: 1100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 6rem;
    animation: ${fadeUp} 0.8s ease forwards;
  }

  .Problem_section .Problem_text_holder {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .section_label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: #0046ff;
    }

    h3 {
      font-size: clamp(1.8rem, 3.5vw, 2.6rem);
      font-weight: 800;
      color: #04091a;
      line-height: 1.15;
      margin: 0;
      letter-spacing: -1px;
    }

    p {
      font-size: 1rem;
      line-height: 1.8;
      color: #4b5563;
      margin: 0;
    }

    span {
      display: block;
      font-size: 0.9rem;
      line-height: 1.8;
      color: #6b7280;
      padding: 1.25rem 1.5rem;
      background: #f8faff;
      border-left: 3px solid #04091a;
      border-radius: 0 8px 8px 0;
    }
  }

  .Problem_section1 img {
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
    box-shadow: 0 24px 64px rgba(4, 9, 26, 0.12);
  }

  @media (max-width: 1024px) {
    padding: 5rem 1.5rem;

    .Problem_wrapper {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  @media (max-width: 640px) {
    padding: 4rem 1.25rem;

    .Problem_section .Problem_text_holder h3 {
      font-size: 1.75rem;
    }
  }
`;
