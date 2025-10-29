import styled from "styled-components";
import FrameBulb from "../../assets/FrameBulb.png";

export const AboutHeroContainer = styled.div`
  width: 100%;
  height: 50vh;
  background: url(${FrameBulb});
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .About_hero_content {
    width: 60%;
    height: 60%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;

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
    }
  }
`;
