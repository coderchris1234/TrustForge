import styled from "styled-components";

export const BusinessContainer = styled.div`
  /* background-color: red; */
  /* margin-bottom: 0.3rem; */
  padding: 0.5rem;

  .businessContainer {
    width: 97%;
    margin: 0 auto;
    background-color: #ffff;
    border-radius: 8px;
    padding: 0.5rem;

    .businessContent {
      display: flex;
      justify-content: space-between;

      .business {
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
          background: transparent;
        }

        .deleteBtn {
          display: flex;
          flex-direction: row-reverse;
          justify-content: center;
          gap: 0.5rem;
          color: red;
        }
      }
    }

    .under {
      display: flex;
      justify-content: space-between;
      /* background-color: orange; */
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
`;
