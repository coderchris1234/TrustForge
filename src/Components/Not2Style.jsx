import styled from "styled-components";

export const Not2_container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  .not2_wrapper {
    width: 100%;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .not2_top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;

      .not2_top_left {
        display: flex;
        align-items: center;
        gap: 1rem;

        .bulb2 {
          height: 1.8rem;
          width: 1.8rem;
          background-color: #c1c1c1;
          color: purple;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          font-size: 1rem;
        }

        .new_text2 {
          font-weight: 600;
          font-size: 1rem;
        }
      }
    }

    .not2_bottom {
      padding-left: 2.5rem;

      span {
        font-weight: 300;
        font-size: 0.95rem;
      }
    }
  }

  @media (max-width: 768px) {
    .not2_wrapper {
      padding: 0.8rem;

      .not2_top {
        flex-direction: column;
        align-items: flex-start;

        .not2_top_left {
          flex-direction: row;
          gap: 0.8rem;

          .bulb2 {
            font-size: 0.9rem;
          }

          .new_text2 {
            font-size: 0.95rem;
          }
        }
      }

      .not2_bottom {
        padding-left: 1.5rem;

        span {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .not2_wrapper {
      padding: 0.6rem;

      .not2_top_left {
        flex-direction: column;
        align-items: flex-start;

        .bulb2 {
          font-size: 0.85rem;
        }

        .new_text2 {
          font-size: 0.9rem;
        }
      }

      .not2_bottom {
        padding-left: 1rem;

        span {
          font-size: 0.85rem;
        }
      }
    }
  }
`;
