import styled, { keyframes } from "styled-components";

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const TeamContainer = styled.section`
  width: 100%;
  background: #04091a;
  padding: 7rem 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .Team_wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    animation: ${fadeUp} 0.8s ease forwards;
  }

  .Team_header_text {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: end;
    padding: 0 1.5rem;
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;

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
      color: #4d8bff;
    }

    h3 {
      font-size: clamp(2rem, 4vw, 2.8rem);
      font-weight: 800;
      color: #ffffff;
      margin: 0;
      letter-spacing: -1px;
      line-height: 1.15;
    }

    p {
      font-size: 1rem;
      color: rgba(255,255,255,0.5);
      line-height: 1.8;
      margin: 0;
      padding-top: 0.5rem;
    }
  }

  .Team_images_carousel {
    width: 100%;
    overflow: hidden;
    padding: 0.5rem 0;

    .scroll {
      display: flex;
      width: max-content;
      gap: 1.25rem;
      padding: 0 1.5rem;
      animation: ${scrollLeft} 30s linear infinite;

      &:hover {
        animation-play-state: paused;
      }
    }

    .Team_card {
      width: 260px;
      background: #0a1128;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 1.5rem;
      gap: 0.75rem;
      flex-shrink: 0;
      transition: all 0.25s ease;

      &:hover {
        border-color: rgba(77,139,255,0.4);
        background: #0d1535;
        transform: translateY(-3px);
      }

      .Team_Card_profile {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 2px solid rgba(77,139,255,0.4);
        overflow: hidden;
        flex-shrink: 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      h3 {
        font-size: 0.9rem;
        font-weight: 700;
        color: #ffffff;
        margin: 0;
        text-align: center;
      }

      span {
        font-size: 0.75rem;
        font-weight: 600;
        color: #4d8bff;
        background: rgba(77,139,255,0.12);
        padding: 3px 12px;
        border-radius: 100px;
      }

      p {
        font-size: 0.775rem;
        color: rgba(255,255,255,0.45);
        line-height: 1.6;
        text-align: center;
        margin: 0;
      }
    }
  }

  @media (max-width: 1024px) {
    .Team_header_text {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  @media (max-width: 640px) {
    padding: 4rem 0;

    .Team_images_carousel .Team_card {
      width: 230px;
      padding: 1.5rem 1.25rem;
    }
  }
`;
