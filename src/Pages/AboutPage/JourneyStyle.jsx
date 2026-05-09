import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const JourneyContainer = styled.section`
  width: 100%;
  background: #0046ff;
  padding: 7rem 1.5rem;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  .Journney_wrapper {
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
    position: relative;
    z-index: 1;
    animation: ${fadeUp} 0.8s ease forwards;

    h3 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      color: #ffffff;
      margin: 0;
      letter-spacing: -1px;
      line-height: 1.15;
    }

    p {
      font-size: 1.05rem;
      color: rgba(255,255,255,0.75);
      line-height: 1.8;
      margin: 0;
      max-width: 560px;
    }

    .journey_button {
      height: 54px;
      padding: 0 40px;
      background: #ffffff;
      border: none;
      border-radius: 8px;
      color: #0046ff;
      font-size: 0.95rem;
      font-weight: 700;
      cursor: pointer;
      font-family: "Poppins", sans-serif;
      transition: all 0.2s ease;

      &:hover {
        background: rgba(255,255,255,0.9);
        transform: translateY(-2px);
        box-shadow: 0 12px 32px rgba(0,0,0,0.2);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;

    .Journney_wrapper {
      h3 { font-size: 1.75rem; }
      p { font-size: 0.95rem; }
    }
  }

  @media (max-width: 640px) {
    padding: 4rem 1.25rem;

    .Journney_wrapper {
      h3 { font-size: 1.5rem; }

      .journey_button {
        width: 100%;
        max-width: 300px;
      }
    }
  }
`;
