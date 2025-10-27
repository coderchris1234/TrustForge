import styled from "styled-components";

export const MissionContainer = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  background-color: var(--main_white);
  justify-content: center;
  align-items: center;

  .Mission_wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    .Mission {
      width: 1008px;
      height: 249px;
      background-color: var(--main_white);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 20px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

      .Mission_icon {
        color: var(--primary_color_500);
        font-size: 60px;
        font-weight: 100;
      }

      h3 {
        font-size: 28px;
        font-weight: 600;
        color: var(--netural_black_color);
        margin: 0px;
      }

      p {
        font-size: 18px;
        font-weight: 400;
        color: var(--netural_black_color);
        line-height: 125%;
        text-align: center;
      }
    }
  }
`;
