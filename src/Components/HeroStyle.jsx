import styled, { keyframes } from "styled-components";
import HeroBg from "../assets/HeroBg.jpg";

// Text fade/slide animation
const fadeSlide = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  25% { opacity: 1; transform: translateY(0); }
  75% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-10px); }
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 70vh;

  .Hero_page_wrapper {
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.71)),
      url(${HeroBg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;

    .Hero_content {
      width: 100%;
      max-width: 1000px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      text-align: center;

      h3 {
        font-size: clamp(2rem, 5vw, 4rem);
        font-weight: 800;
        color: var(--main_white);
        line-height: 140%;
        margin: 0;

        .animated-word {
          background: linear-gradient(90deg, #0046ff, #0046ff, #042f6cff 70%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 1px white;
          animation: ${fadeSlide} 2.5s ease-in-out infinite;
          display: inline-block;
          min-width: 140px;
          text-align: center;
        }
      }

      p {
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        color: var(--main_white);
        line-height: 1.6;
        max-width: 700px;
      }

      .Hero_btn {
        width: 183px;
        height: 52px;
        border-radius: 12px;
        color: var(--main_white);
        border: none;
        background-color: var(--primary_color_500);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.05);
          background-color: #0039cc;
        }

        .Hero_icon {
          font-size: 35px;
        }
      }
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    height: auto;
    /* padding: 3rem 1rem; */

    .Hero_content {
      padding: 30px;
      gap: 15px;

      h3 {
        font-size: clamp(1.8rem, 6vw, 2.8rem);
      }

      p {
        font-size: 1rem;
        line-height: 1.5;
      }

      .Hero_btn {
        width: 160px;
        height: 45px;
        font-size: 15px;
      }
    }
  }

  @media (max-width: 480px) {
    .Hero_content h3 {
      font-size: 1.6rem;
      line-height: 130%;
    }

    .Hero_content p {
      font-size: 0.9rem;
    }

    .Hero_btn {
      width: 140px;
      height: 40px;
      font-size: 14px;
    }
  }
`;
