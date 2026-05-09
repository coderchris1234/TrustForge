import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideWord = keyframes`
  0%   { opacity: 0; transform: translateY(16px); }
  15%  { opacity: 1; transform: translateY(0); }
  80%  { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-16px); }
`;

export const HeroContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #04091a;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  /* subtle grid overlay */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  /* blue glow top-right */
  &::after {
    content: "";
    position: absolute;
    top: -200px;
    right: -200px;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(0,70,255,0.18) 0%, transparent 65%);
    pointer-events: none;
  }

  .Hero_page_wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8rem 1.5rem 5rem;
    position: relative;
    z-index: 1;
  }

  .Hero_content {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
    animation: ${fadeUp} 0.9s ease forwards;
  }

  .Hero_badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(0, 70, 255, 0.12);
    border: 1px solid rgba(0, 70, 255, 0.35);
    border-radius: 100px;
    padding: 6px 18px;
    font-size: 0.78rem;
    font-weight: 600;
    color: #93b4ff;
    letter-spacing: 1px;
    text-transform: uppercase;

    .badge_dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #4ade80;
      flex-shrink: 0;
      box-shadow: 0 0 6px #4ade80;
    }
  }

  h1 {
    font-size: clamp(2.8rem, 6vw, 5rem);
    font-weight: 800;
    color: #ffffff;
    line-height: 1.1;
    margin: 0;
    letter-spacing: -2px;

    .animated-word {
      display: inline-block;
      background: linear-gradient(90deg, #4d8bff, #a78bfa);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: ${slideWord} 2.5s ease-in-out infinite;
    }
  }

  .Hero_sub {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: rgba(255,255,255,0.55);
    line-height: 1.75;
    max-width: 620px;
    margin: 0;
  }

  .Hero_cta_group {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;

    .Hero_btn {
      height: 54px;
      padding: 0 36px;
      border-radius: 8px;
      background: #0046ff;
      color: #fff;
      border: none;
      font-size: 0.95rem;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s ease;
      font-family: "Poppins", sans-serif;

      &:hover {
        background: #0038cc;
        transform: translateY(-2px);
        box-shadow: 0 12px 32px rgba(0,70,255,0.4);
      }

      .Hero_icon { font-size: 1.2rem; }
    }

    .Hero_btn_outline {
      height: 54px;
      padding: 0 32px;
      border-radius: 8px;
      background: transparent;
      border: 1px solid rgba(255,255,255,0.2);
      color: rgba(255,255,255,0.8);
      font-size: 0.95rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: "Poppins", sans-serif;

      &:hover {
        border-color: rgba(255,255,255,0.5);
        color: #fff;
      }
    }
  }

  .Hero_stats {
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1rem;
    border-top: 1px solid rgba(255,255,255,0.07);
    width: 100%;
    max-width: 600px;
    animation: ${fadeIn} 1.4s ease forwards;

    .stat_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;

      strong {
        font-size: 1.5rem;
        font-weight: 800;
        color: #ffffff;
        letter-spacing: -0.5px;
      }

      span {
        font-size: 0.75rem;
        color: rgba(255,255,255,0.4);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
    }
  }

  @media (max-width: 768px) {
    min-height: 100svh;

    .Hero_page_wrapper {
      padding: 7rem 1.25rem 4rem;
    }

    h1 {
      letter-spacing: -1px;

      .word-wrap {
        min-width: 160px;
        display: block;
        margin: 0 auto;
      }
    }

    .Hero_cta_group {
      flex-direction: column;
      width: 100%;

      .Hero_btn, .Hero_btn_outline {
        width: 100%;
        justify-content: center;
      }
    }

    .Hero_stats {
      gap: 2rem;
    }
  }
`;
