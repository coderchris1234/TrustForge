import styled from "styled-components";
import header from "../../assets/header.png";

export const BlogHeroContainer = styled.div`
  width: 100%;
  height: 50vh;
  background: url(${header});
  background-size: contain;
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

    h1 {
      font-size: 48px;
      font-weight: 600;
      color: var(--main_white);
      margin: 0px;
      line-height: 120%;
    }

    p {
      font-size: 16px;
      font-weight: 400;
      color: var(--main_white);
      line-height: 150%;
      text-align: center;
    }
  }
`;
