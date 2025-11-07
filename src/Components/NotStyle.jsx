import styled from "styled-components";

export const Not_container = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .not_wrapper {
    width: 100%;
    background-color: #d6e8ff;
    padding: 1rem;
    border-radius: 1rem;
    border-left: 0.6rem solid #0038cc;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .not_top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;

      .not_top_left {
        display: flex;
        align-items: center;
        gap: 1rem;

        .bulb {
          height: 1.8rem;
          width: 1.8rem;
          background-color: #2044744b;
          color: blue;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          font-size: 1rem;
        }

        .new_text {
          font-weight: 600;
          font-size: 1rem;
        }
      }

      .new_btn {
        height: 2rem;
        min-width: 4rem;
        border-radius: 0.4rem;
        background-color: #0038cc;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.9rem;
        padding: 0 0.6rem;
      }
    }

    .not_bottom {
      padding-left: 2.5rem;

      span {
        font-weight: 300;
        font-size: 0.95rem;
      }
    }
  }

  @media (max-width: 768px) {
    .not_wrapper {
      padding: 0.8rem;

      .not_top {
        flex-direction: column;
        align-items: flex-start;

        .not_top_left {
          flex-direction: row;
          gap: 0.8rem;

          .bulb {
            font-size: 0.9rem;
          }

          .new_text {
            font-size: 0.95rem;
          }
        }

        .new_btn {
          font-size: 0.85rem;
          padding: 0.4rem 0.6rem;
        }
      }

      .not_bottom {
        padding-left: 1.5rem;

        span {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .not_wrapper {
      padding: 0.6rem;

      .not_top_left {
        flex-direction: column;
        align-items: flex-start;

        .bulb {
          font-size: 0.85rem;
        }

        .new_text {
          font-size: 0.9rem;
        }
      }

      .new_btn {
        font-size: 0.8rem;
        width: 100%;
      }

      .not_bottom {
        padding-left: 1rem;

        span {
          font-size: 0.85rem;
        }
      }
    }
  }
`;
