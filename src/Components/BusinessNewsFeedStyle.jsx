import styled from "styled-components";

export const Newsfeed_container = styled.div`
  width: 100%;
  margin-top: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .postCard {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #1b1b1b4d;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 1rem;
    height: max-content;
    /* background-color: red; */
    .busines_left {
      flex: 1 1 70%;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .supplychain {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.5rem;
        align-items: center;
        justify-content: space-between;

        .icon {
          flex: 1 1 auto;
          display: flex;
          gap: 0.4rem;
          min-width: 0;

          .popular {
            font-size: 0.5rem;
            background: var(--accent_color_500);
            padding: 0.5rem;
            border-radius: 1rem;
            color: black;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .trending {
            font-size: 0.5rem;
            background: var(--secondary_color_500);
            padding: 0.5rem;
            border-radius: 1rem;
            color: black;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        /* .trendsection {
          background-color: #e5f8d6;
          border-radius: 0.7rem;
          color: green;
          font-size: 12px;
          padding: 0.3rem 0.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          flex-shrink: 0;
          width: 120px;
          height: 30px;
        } */
      }

      .about {
        font-weight: 300;
        font-size: 1.1rem;
      }

      .details {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;

        .ai {
          font-weight: 500;
          padding: 0.5rem;
          border-radius: 8px;
          background-color: #e5e5e5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .founded {
          font-weight: 300;
        }

        .series {
          border: 1px solid lightgray;
          border-radius: 8px;
          padding: 0.5rem;
        }
      }

      .engagement {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-top: 1rem;

        .seeking {
          display: flex;
          align-items: center;
        }

        .reactions {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          justify-content: center;
          /* background-color: green; */

          span {
            margin: 0;
          }

          .viewnum,
          .like,
          .comment {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            width: auto;
            height: 2rem;
            cursor: pointer;
            font-size: 18px;
            /* color: red; */
          }
        }
      }
    }

    .busines_right {
      flex: 1 1 25%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;

      .post_view,
      .love {
        height: 3rem;
        width: 7rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }

      .post_view {
        background-color: #0046ff;
        color: #fff;

        &:hover {
          transform: scale(1.05);
        }
      }

      .love {
        border: 1px solid gray;

        &:hover {
          transform: scale(1.05);
          background-color: lightgoldenrodyellow;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .postCard {
      flex-direction: column;

      .busines_left,
      .busines_right {
        width: 100%;
        align-items: flex-start;

        .supplychain {
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          /* background-color: red; */
          width: 100%;
          align-items: center;

          .icon {
            width: 60%;
            justify-content: flex-start;
            /* background-color: green; */
          }

          .trendsection {
            margin-top: 0.5rem;
            width: auto;
            font-size: 11px;
            padding: 0.3rem 0.8rem;
            width: 90px;
            height: 30px;
            margin-bottom: 0.5rem;
          }
        }
      }

      .busines_right {
        flex-direction: row;
        justify-content: space-between;

        .post_view,
        .love {
          width: 48%;
          margin-top: 1rem;
        }
      }

      .engagement {
        flex-direction: column;
        gap: 1rem;

        .reactions {
          gap: 1rem;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .postCard {
      padding: 0.8rem;

      .about {
        font-size: 1rem;
      }

      .details {
        gap: 0.8rem;
      }

      .post_view,
      .love {
        font-size: 0.9rem;
        height: 2.8rem;
      }

      .trendsection {
        font-size: 10px;
        padding: 0.2rem 0.6rem;
      }
    }
  }
`;
