import styled from "styled-components";
export const FundActivity_container = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 1.5rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;

  .sec_wrapper {
    height: 12rem;
    width: 100%;
    padding: 1rem;
    gap: 2rem;
    border: 1px solid black;
    border-radius: 1rem;
    background-color: #ffffff;
    .tittle {
      height: 45%;
      width: 100%;
      display: flex;
      gap: 31.3rem;

      .right_sec {
        display: flex;
        gap: 1rem;
      }

      .activeicon {
        border: 1px solid gray;
        border-radius: 0.7rem;
        height: 35%;
        width: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
        background-color: #deffea;
        color: green;
        font-size: 12px;
        font-weight: 600;
      }

      .view_details {
        height: 55%;
        width: 7rem;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid gray;
      }
    }
    .investment {
      display: flex;
      align-items: flex-end;
      gap: 9rem;
      margin-top: 3rem;
    }
  }
`;
