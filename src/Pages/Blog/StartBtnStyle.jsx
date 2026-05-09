import styled from "styled-components";

export const StartBtnContainer = styled.div`
  width: 100%;
  background: #04091a;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 1.5rem;

  .Startup_header {
    width: 100%;
    max-width: 1100px;
    display: flex;
    justify-content: center;

    .Startup_Header_btns {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
      justify-content: center;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 100px;
      padding: 5px;

      .Startup_Header_btn1,
      .Startup_Header_btn2,
      .Startup_Header_btn3 {
        height: 38px;
        border-radius: 100px;
        border: none;
        background: transparent;
        color: rgba(255,255,255,0.55);
        font-size: 0.85rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        padding: 0 20px;
        white-space: nowrap;
        font-family: "Poppins", sans-serif;

        &:hover {
          color: #ffffff;
        }
      }

      .active_btn {
        background: #0046ff;
        color: #ffffff;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0,70,255,0.3);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;

    .Startup_header .Startup_Header_btns {
      .Startup_Header_btn1,
      .Startup_Header_btn2,
      .Startup_Header_btn3 {
        font-size: 0.78rem;
        padding: 0 14px;
        height: 34px;
      }
    }
  }
`;
