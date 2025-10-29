import styled from "styled-components";

export const FundContainer = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(to left, #336bff, #002da3, #002da3, #336bff);
  margin-top: 3rem;
  margin-bottom: 3rem;

  .Fund_page_wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .Fund_num {
      width: 20%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h1 {
        font-size: 48px;
        font-weight: 600;
        color: var(--main_white);
        margin: 0px;
      }

      p {
        width: 90%;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        color: var(--main_white);
      }
    }
  }
`;
