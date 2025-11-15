import styled from "styled-components";
export const BusinessContainer = styled.div`
  padding: 0.5rem;
  width: 100%;

  .businessContainer {
    width: 97%;
    margin: 0 auto;
    background-color: #ffff;
    border-radius: 8px;
    padding: 0.5rem;
    /* background-color: "red" */

    .businessContent {
      display: flex;
      justify-content: space-between;

      .business {
        .heading {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;

          .Trending {
            font-size: 0.5rem;
            background: var(--secondary_color_500);
            padding: 4px;
            border-radius: 1rem;
            color: black;
          }
          .popular {
            font-size: 0.5rem;
            background: var(--accent_color_500);
            padding: 4px;
            border-radius: 1rem;
            color: black;
          }
        }
        .set {
          display: flex;
          gap: 0.5rem;

          .retail {
            background-color: #e7e6e6;
            border: none;
          }
          .active {
            background-color: #b8f7b8;
            border: none;
          }

          .under-review {
            background-color: #ffcc80;
            border: none;
          }

          .seed {
            border: 1px solid lightgray;
          }

          .status {
            border: 1px solid lightgray;
            border-radius: 8px;
            padding: 0.3rem;
            font-size: 12px;
          }
        }
      }

      .btn {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: center;

        .bt {
          padding: 0.5rem;
          border-radius: 6px;
          border: 1px solid lightgray;
          cursor: pointer;
        }
        .view {
          background: blue;
          color: #ffff;
        }

        .deleteBtn {
          display: flex;
          flex-direction: row-reverse;
          justify-content: center;
          gap: 0.5rem;
          color: red;
        }
        .deleteBtn:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }
      }
    }

    .under {
      display: flex;
      justify-content: space-between;
      width: 85%;
      align-items: center;

      .extra {
        display: flex;
        gap: 0.5rem;

        div {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .businessContainer {
      display: flex;
      flex-direction: column;
      padding: 0.8rem;
      width: 100%;
    }

    .businessContent {
      flex-direction: column;
      gap: 0.8rem;
    }

    .business {
      width: 100%;

      .set {
        flex-wrap: wrap;
        gap: 0.4rem;
      }
    }

    .under {
      width: 100%;
      flex-wrap: wrap;
      gap: 0.8rem;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.5rem;

      .extra {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
      }
    }

    .btn {
      flex-direction: row;
      justify-content: flex-end;
      gap: 0.6rem;
      margin-top: 0.8rem;
      width: 100%;

      .bt {
        padding: 0.45rem 0.8rem;
      }
    }
  }
`;
