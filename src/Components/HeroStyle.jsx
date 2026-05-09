import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const ticker = keyframes`
  0%   { opacity: 0; transform: translateY(100%); }
  12%  { opacity: 1; transform: translateY(0); }
  80%  { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-100%); }
`;

export const HeroContainer = styled.section`
  width: 100%;
  background: #f5f0e8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 7rem 1.5rem 4rem;

  /* decorative circle */
  &::before {
    content: "";
    position: absolute;
    top: -180px;
    right: -180px;
    width: 560px;
    height: 560px;
    border-radius: 50%;
    background: #b9ff66;
    opacity: 0.18;
    pointer-events: none;
  }

  .Hero_inner {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 1;
    animation: ${fadeUp} 0.8s ease forwards;
  }

  /* ── Left column ── */
  .Hero_left {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .Hero_badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #191919;
    border-radius: 100px;
    padding: 6px 16px 6px 8px;
    width: fit-content;

    .badge_dot {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #b9ff66;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      font-weight: 800;
      color: #191919;
      flex-shrink: 0;
    }

    span {
      font-size: 0.8rem;
      font-weight: 500;
      color: #ffffff;
      letter-spacing: 0.3px;
    }
  }

  h1 {
    font-size: clamp(3rem, 6vw, 5.5rem);
    font-weight: 900;
    color: #191919;
    line-height: 1.0;
    margin: 0;
    letter-spacing: -3px;

    .word-ticker {
      display: inline-block;
      overflow: hidden;
      height: 1.05em;
      vertical-align: bottom;
      min-width: 280px;
    }

    .animated-word {
      display: block;
      color: #b9ff66;
      animation: ${ticker} 2.5s ease-in-out infinite;
      line-height: 1.05;
      /* paint the text dark so it shows on light bg */
      -webkit-text-stroke: 2px #191919;
    }
  }

  .Hero_sub {
    font-size: 1.05rem;
    color: #555;
    line-height: 1.75;
    max-width: 520px;
    margin: 0;
  }

  .Hero_cta_group {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;

    .Hero_btn {
      height: 52px;
      padding: 0 32px;
      border-radius: 100px;
      background: #191919;
      color: #ffffff;
      border: none;
      font-size: 0.9rem;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: "Poppins", sans-serif;
      transition: all 0.2s ease;

      &:hover {
        background: #b9ff66;
        color: #191919;
        transform: translateY(-2px);
      }

      .Hero_icon { font-size: 1.1rem; }
    }

    .Hero_btn_outline {
      height: 52px;
      padding: 0 28px;
      border-radius: 100px;
      background: transparent;
      border: 2px solid #191919;
      color: #191919;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      font-family: "Poppins", sans-serif;
      transition: all 0.2s ease;

      &:hover {
        background: #191919;
        color: #ffffff;
      }
    }
  }

  /* ── Right column — bento card ── */
  .Hero_right {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .Hero_card_main {
    background: #191919;
    border-radius: 24px;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .card_label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.4);
    }

    .card_stat {
      font-size: 3.5rem;
      font-weight: 900;
      color: #b9ff66;
      letter-spacing: -2px;
      line-height: 1;
    }

    .card_desc {
      font-size: 0.875rem;
      color: rgba(255,255,255,0.6);
      line-height: 1.6;
    }
  }

  .Hero_card_row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    .Hero_card_sm {
      background: #ffffff;
      border-radius: 18px;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      border: 1px solid #e8e3d8;

      .sm_num {
        font-size: 1.8rem;
        font-weight: 900;
        color: #191919;
        letter-spacing: -1px;
        line-height: 1;
      }

      .sm_label {
        font-size: 0.75rem;
        color: #888;
        font-weight: 500;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 7rem 1.5rem 4rem;

    .Hero_inner {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    h1 .word-ticker {
      min-width: 200px;
      display: block;
    }
  }

  @media (max-width: 640px) {
    padding: 6rem 1.25rem 3rem;

    h1 {
      font-size: clamp(2.4rem, 8vw, 3.5rem);
      letter-spacing: -1.5px;
    }

    .Hero_cta_group {
      flex-direction: column;

      .Hero_btn, .Hero_btn_outline {
        width: 100%;
        justify-content: center;
      }
    }

    .Hero_card_row .Hero_card_sm .sm_num {
      font-size: 1.4rem;
    }
  }
`;
