import styled from "styled-components";

export const Nda_container = styled.div`
  width: 100%;
  margin-top: 1.7rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .ndadata_main {
    width: 100%;
    padding: 1rem;
    border: 1px solid gray;
    border-radius: 0.8rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .nda_top {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .download {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      width: auto;

      .sign_icon {
        height: 1.6rem;
        min-width: 4.7rem;
        color: green;
        background-color: #deffea;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.8rem;
        font-size: 12px;
        padding: 0 0.5rem;
      }

      .download_view {
        height: 2.7rem;
        min-width: 7rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.6rem;
        border: 1px solid gray;
        padding: 0 0.5rem;
      }

      .view {
        height: 2rem;
        min-width: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.8rem;
        border: 1px solid gray;
        padding: 0 0.5rem;
      }
    }

    .nda_bottom {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 2rem;

      .date {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }

      span {
        color: green;
      }
    }
  }

  @media (max-width: 768px) {
    .ndadata_main {
      padding: 0.8rem;

      .nda_top {
        flex-direction: column;
        align-items: flex-start;
      }

      .download {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.8rem;

        .sign_icon,
        .download_view,
        .view {
          font-size: 11px;
          padding: 0.3rem 0.5rem;
        }
      }

      .nda_bottom {
        flex-direction: column;
        gap: 1rem;

        .date {
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .ndadata_main {
      padding: 0.6rem;

      .download {
        flex-direction: column;
        align-items: flex-start;

        .sign_icon,
        .download_view,
        .view {
          font-size: 10px;
          width: 100%;
        }
      }

      .nda_bottom {
        gap: 0.8rem;

        .date {
          font-size: 13px;
        }
      }
    }
  }
`;
