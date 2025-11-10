import styled from "styled-components";
export const Nda_container2 = styled.div`
  height: 10rem;
  width: 100%;
  margin-top: 1rem;

  .ndadata2_main {
    height: 100%;
    width: 100%;
    padding: 1rem;
    border: 1px solid gray;
    border-radius: 0.8rem;
    background-color: #fff;

    .nda2_top {
      display: flex;
      justify-content: space-between;
      height: 50%;
    }
    .download2 {
      height: 100%;
      width: 22rem;
      display: flex;
      gap: 2.7rem;
      .sign_icon2 {
        height: 1.6rem;
        width: 4.7rem;
        color: #c48f01;
        background-color: #f4ffae;
        gap: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.8rem;
        font-size: 12px;
      }
      .download_view2 {
        height: 2.7rem;
        width: 7rem;
        gap: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.6rem;
        background-color: #0202fa;
        height: 2.2rem;
        width: 6.8rem;
        color: white;
      }
    }
    .nda_bottom2 {
      height: 4rem;
      width: 100%;
      display: flex;
      gap: 7rem;
      span {
        color: #e35151;
        font-weight: 600;
      }
    }
  }
`;
