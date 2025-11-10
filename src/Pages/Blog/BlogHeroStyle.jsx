import styled from "styled-components";
import Insight from "/Insight.png";

export const BlogHeroContainer = styled.div`
  width: 100%;
  height: 50vh;
  background: url(${Insight});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .Blog_hero_wrapper {
    width: 60%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;

    h1 {
      font-size: 50px;
      font-weight: 700;
      color: var(--main_white);
      margin: 0px;
      line-height: 120%;
    }

    p {
      font-size: 20px;
      font-weight: 400;
      color: var(--main_white);
      line-height: 150%;
      text-align: center;
    }
  }

  @media (max-width: 1024px) {
    height: 45vh;

    .Blog_hero_wrapper {
      width: 80%;

      h1 {
        font-size: 42px;
      }

      p {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 4rem 1.5rem;

    .Blog_hero_wrapper {
      width: 100%;
      gap: 15px;

      h1 {
        font-size: 32px;
        line-height: 130%;
      }

      p {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;

    .Blog_hero_wrapper {
      h1 {
        font-size: 28px;
      }

      p {
        font-size: 16px;
      }
    }
  }
`;
