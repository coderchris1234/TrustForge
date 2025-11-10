import styled from "styled-components";

export const Nda_container2 = styled.div`
  width: 100%;
  margin-top: 1rem;

  .ndadata2_main {
    width: 100%;
    padding: 1rem;
    border: 1px solid gray;
    border-radius: 0.8rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .nda2_top {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .download2 {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      width: auto;

      .sign_icon2 {
        min-width: 4.7rem;
        height: 1.6rem;
        color: #c48f01;
        background-color: #f4ffae;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.8rem;
        font-size: 12px;
        padding: 0 0.5rem;
      }

      .download2_view {
        min-width: 7rem;
        height: 2.7rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.6rem;
        border: 1px solid gray;
        padding: 0 0.5rem;
      }
    }

    .nda_bottom2 {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 2rem;

      span {
        color: #e35151;
        font-weight: 600;
      }
    }
  }

  @media (max-width: 768px) {
    .ndadata2_main {
      padding: 0.8rem;

      .nda2_top {
        flex-direction: column;
        align-items: flex-start;
      }

      .download2 {
        flex-direction: row;
        gap: 0.8rem;

        .sign_icon2,
        .download2_view {
          font-size: 11px;
          padding: 0.3rem 0.5rem;
        }
      }

      .nda_bottom2 {
        flex-direction: column;
        gap: 1rem;

        span {
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .ndadata2_main {
      padding: 0.6rem;

      .download2 {
        flex-direction: column;
        align-items: flex-start;

        .sign_icon2,
        .download2_view {
          font-size: 10px;
          width: 100%;
        }
      }

      .nda_bottom2 {
        gap: 0.8rem;

        span {
          font-size: 13px;
        }
      }
    }
  }
`;
