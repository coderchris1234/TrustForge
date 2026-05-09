import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const SolutionContainer = styled.section`
  width: 100%;
  background: #04091a;
  padding: 7rem 1.5rem;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -150px;
    right: -150px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(0,70,255,0.15) 0%, transparent 65%);
    pointer-events: none;
  }

  .Solution_wrapper {
    width: 100%;
    max-width: 1100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 6rem;
    position: relative;
    z-index: 1;
    animation: ${fadeUp} 0.8s ease forwards;
  }

  .Solution_section img {
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
  }

  .Section_section1 .Solution_text_holder {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .section_label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: #4d8bff;
    }

    h3 {
      font-size: clamp(1.8rem, 3.5vw, 2.6rem);
      font-weight: 800;
      color: #ffffff;
      margin: 0;
      line-height: 1.15;
      letter-spacing: -1px;
    }

    p {
      font-size: 1rem;
      line-height: 1.8;
      color: rgba(255,255,255,0.65);
      margin: 0;
    }

    span {
      display: block;
      font-size: 0.9rem;
      line-height: 1.8;
      color: rgba(255,255,255,0.5);
      padding: 1.25rem 1.5rem;
      background: rgba(255,255,255,0.05);
      border-left: 3px solid #4d8bff;
      border-radius: 0 8px 8px 0;
    }
  }

  @media (max-width: 1024px) {
    padding: 5rem 1.5rem;

    .Solution_wrapper {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  @media (max-width: 640px) {
    padding: 4rem 1.25rem;

    .Section_section1 .Solution_text_holder h3 {
      font-size: 1.75rem;
    }
  }
`;
