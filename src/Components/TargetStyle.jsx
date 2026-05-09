import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const TargetContainer = styled.section`
  width: 100%;
  background: #191919;
  padding: 7rem 1.5rem;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: -120px;
    left: -120px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: #b9ff66;
    opacity: 0.08;
    pointer-events: none;
  }

  .Target_wrapper {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    position: relative;
    z-index: 1;
    animation: ${fadeUp} 0.8s ease forwards;
  }

  /* ── Who we are — horizontal split ── */
  .who_we_are {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: start;
    padding-bottom: 5rem;
    border-bottom: 1px solid rgba(255,255,255,0.08);

    .left_col {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .section_label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: #b9ff66;
    }

    h3 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 900;
      color: #ffffff;
      margin: 0;
      line-height: 1.0;
      letter-spacing: -2px;
    }

    .right_col {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      padding-top: 0.5rem;
    }

    p {
      font-size: 1rem;
      color: rgba(255,255,255,0.6);
      line-height: 1.8;
      margin: 0;
    }
  }

  /* ── Feature cards — bento row ── */
  .Secure {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    .Secure_img {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      padding: 2.5rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      transition: all 0.25s ease;

      &:hover {
        background: rgba(185,255,102,0.06);
        border-color: rgba(185,255,102,0.3);
        transform: translateY(-4px);
      }

      .Secure_image_holder {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        background: #b9ff66;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #191919;
        font-size: 1.4rem;
      }

      h3 {
        font-size: 1.1rem;
        font-weight: 700;
        color: #ffffff;
        margin: 0;
      }

      p {
        font-size: 0.875rem;
        color: rgba(255,255,255,0.5);
        line-height: 1.65;
        margin: 0;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 5rem 1.5rem;

    .who_we_are {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding-bottom: 3rem;
    }

    .Secure {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 640px) {
    padding: 4rem 1.25rem;

    .Secure {
      grid-template-columns: 1fr;
    }
  }
`;
