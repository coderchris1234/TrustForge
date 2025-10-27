import styled from "styled-components";

export const InvestContainer = styled.div`
  width: 100%;
  height: max-content;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .Invest_wrapper {
    width: 90%;
    height: max-content;
    min-height: 80vh;
    background-color: green;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .Top_section {
      width: 100%;
      height: 100vh;
      background-color: black;
      display: flex;
      justify-content: space-between;
      position: relative;

      .left_Container {
        width: 20%;
        height: 100%;
        background-color: purple;
      }

      .Right_Container {
        width: 80%;
        height: 100%;
        overflow-y: scroll;
        position: sticky;
        top: 0;
        bottom: 0;
        background: blue;
      }
    }

    .Bottom_section {
      width: 100%;
      height: max-content;
      min-height: 70vh;
      background-color: yellow;
    }
  }
`;
