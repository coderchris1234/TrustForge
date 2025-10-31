import styled from "styled-components";

export const JourneyContainer = styled.div`
  width: 100%;
  height: 30vh;
  background-color: var(--main_white);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  margin-bottom: 2rem;

  .Journney_wrapper {
    width: 45%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    h3 {
      margin: 0px;
      font-size: 28px;
      font-weight: 600;
      color: var(--main_black);
    }

    p {
      font-size: 18px;
      font-weight: 500;
      color: var(--main_black);
      line-height: 125%;
      text-align: center;
    }

    .journey_button {
      width: 179px;
      height: 44px;
      background-color: var(--primary_color_500);
      border: none;
      border-radius: 8px;
      color: var(--main_white);
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
