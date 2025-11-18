import styled, { keyframes } from "styled-components";
import HOME from "../assets/HOME.png";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TargetContainer = styled.div`
  width: 100%;
  min-height: 75vh;
  background: url(${HOME});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;

  .Target_wrapper {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    animation: ${fadeUp} 1s ease forwards;

    .who_we_are {
      width: 100%;
      max-width: 1200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      text-align: center;

      h3 {
        font-size: clamp(1.8rem, 4vw, 2.5rem);
        font-weight: 700;
        color: var(--netural_black_color);
        margin-bottom: 0.5rem;
      }

      p {
        font-size: clamp(1rem, 2.5vw, 1.25rem);
        color: var(--netural_black_color);
        font-weight: 400;
        margin: 0;
        line-height: 1.6;
      }
    }

    .Secure {
      width: 100%;
      max-width: 1000px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 2rem;
      animation: ${fadeUp} 1.2s ease forwards;

      .Secure_img {
        width: 28%;
        min-width: 220px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        transition: transform 0.3s ease;

        &:hover {
          transform: translateY(-5px);
        }

        .Secure_image_holder {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          background-color: var(--primary_color_200);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary_color_500);
          font-size: 30px;
        }

        h3 {
          font-size: 20px;
          font-weight: 600;
          color: var(--netural_black_color);
          margin: 0;
        }

        p {
          font-size: 16px;
          color: var(--netural_black_color);
          line-height: 1.5;
          margin: 0;
          max-width: 260px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    background-size: cover;
    background-position: top center;

    .Target_wrapper {
      gap: 2rem;

      .Secure {
        justify-content: center;

        .Secure_img {
          width: 45%;
        }
      }
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    background-size: cover;

    .Target_wrapper {
      gap: 1.5rem;

      .who_we_are h3 {
        font-size: 1.5rem;
      }

      .who_we_are p {
        font-size: 0.95rem;
      }

      .Secure {
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        .Secure_img {
          width: 80%;
        }
      }
    }
  }
`;
