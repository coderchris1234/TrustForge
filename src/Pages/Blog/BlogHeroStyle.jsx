import styled, { keyframes } from "styled-components";
import Insight from "/Insight.png";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const BlogHeroContainer = styled.section`
  width: 100%;
  height: 72vh;
  min-height: 480px;
  background: linear-gradient(
      135deg,
      rgba(4, 9, 26, 0.78) 0%,
      rgba(0, 29, 104, 0.65) 100%
    ),
    url(${Insight});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .Blog_hero_wrapper {
    width: 100%;
    max-width: 800px;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
    animation: ${fadeUp} 0.9s ease forwards;

    .Blog_badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(0,70,255,0.2);
      border: 1px solid rgba(77,139,255,0.4);
      border-radius: 100px;
      padding: 6px 18px;
      font-size: 0.72rem;
      font-weight: 700;
      color: #93b4ff;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    h1 {
      font-size: clamp(2.2rem, 5vw, 3.8rem);
      font-weight: 800;
      color: #ffffff;
      margin: 0;
      line-height: 1.1;
      letter-spacing: -1px;
    }

    p {
      font-size: clamp(0.95rem, 2vw, 1.1rem);
      color: rgba(255,255,255,0.65);
      line-height: 1.75;
      max-width: 560px;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: unset;
    padding: 7rem 1.5rem 5rem;

    .Blog_hero_wrapper {
      h1 { font-size: clamp(1.8rem, 6vw, 2.4rem); }
    }
  }

  @media (max-width: 480px) {
    padding: 6rem 1.25rem 4rem;
  }
`;
