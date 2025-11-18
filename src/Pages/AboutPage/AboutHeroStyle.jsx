import styled from "styled-components";
import FrameBulb from "/FrameBulb.png";

export const AboutHeroContainer = styled.div`
  width: 100%;
  height: 50vh;
  background: url(${FrameBulb});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .About_hero_content {
    width: 70%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    h1 {
      font-size: 50px;
      font-weight: 700;
      color: var(--main_white);
      margin: 0;
      line-height: 120%;
    }

    p {
      font-size: 18px;
      font-weight: 400;
      color: var(--main_white);
      line-height: 150%;
      max-width: 700px;
    }
  }

  @media (max-width: 1024px) {
    height: 45vh;

    .About_hero_content {
      width: 80%;
      h1 {
        font-size: 42px;
      }
      p {
        font-size: 17px;
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 4rem 1rem;
    background-position: top;
    align-items: flex-start;
    text-align: left;

    .About_hero_content {
      width: 100%;
      align-items: flex-start;
      gap: 15px;

      h1 {
        font-size: 34px;
        line-height: 130%;
        text-align: center;
      }

      p {
        font-size: 16px;
        line-height: 150%;
        text-align: center;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;

    .About_hero_content {
      h1 {
        font-size: 28px;
        text-align: center;
      }

      p {
        font-size: 15px;
        text-align: center;
      }
    }
  }
`;
