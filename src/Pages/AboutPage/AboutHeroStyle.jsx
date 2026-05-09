import styled, { keyframes } from "styled-components";
import FrameBulb from "/FrameBulb.png";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const AboutHeroContainer = styled.div`
  width: 100%;
  height: 72vh;
  min-height: 480px;
  background: linear-gradient(
      135deg,
      rgba(4, 9, 26, 0.75) 0%,
      rgba(0, 29, 104, 0.65) 100%
    ),
    url(${FrameBulb});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .About_hero_content {
    width: 100%;
    max-width: 820px;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    animation: ${fadeInUp} 0.9s ease forwards;

    .About_badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(8px);
      border-radius: 100px;
      padding: 6px 18px;
      font-size: 0.8rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.9);
      letter-spacing: 0.5px;
    }

    h1 {
      font-size: clamp(2.2rem, 5vw, 3.6rem);
      font-weight: 800;
      color: var(--main_white);
      margin: 0;
      line-height: 1.18;
      letter-spacing: -0.5px;
    }

    p {
      font-size: clamp(0.95rem, 2vw, 1.1rem);
      font-weight: 400;
      color: rgba(255, 255, 255, 0.82);
      line-height: 1.75;
      max-width: 640px;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: unset;
    padding: 6rem 1.5rem 5rem;

    .About_hero_content {
      h1 { font-size: clamp(1.8rem, 6vw, 2.4rem); }
      p { font-size: 0.95rem; }
    }
  }

  @media (max-width: 480px) {
    padding: 5rem 1.25rem 4rem;

    .About_hero_content {
      h1 { font-size: 1.75rem; }
    }
  }
`;
