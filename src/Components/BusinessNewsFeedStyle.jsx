import styled from "styled-components";
export const Newsfeed_container = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .postCard {
    height: 10rem;
    width: 100%;
    display: flex;
    border: 1px solid gray;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 1rem;
    .busines_left {
      height: 100%;
      width: 80%;

      .supplychain {
        height: 2.2rem;
        width: 100%;
        display: flex;
        .icon {
          width: 17rem;
          height: 2rem;
          display: flex;
          gap: 0.4rem;
        }
        .trendsection {
          width: 5rem;
          height: 1.2rem;
          background-color: #e5f8d6;
          gap: 0.2rem;
          display: flex;
          border-radius: 0.7rem;
          color: green;
          font-size: 12px;
          justify-content: center;
          align-items: center;
        }
      }
      .about {
        font-weight: 300;
        font-size: 1.1rem;
      }
      .details {
        height: 2.4rem;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1.4rem;
        // background-color: red;

        .ai {
          font-weight: 500;
          //   height: 1.3rem;
          //   width: 4.2rem;
          display: flex;
          padding: 0.5rem;
          align-items: center;
          justify-content: center;
          border-radius: 0.4rem;
          background-color: #e5e5e5;
          border-radius: 8px;
        }
        .founded {
          font-weight: 294;
        }
        .series {
          border: 1px solid lightgray;
          border-radius: 8px;
          padding: 0.5rem;
        }
      }
      .engagement {
        gap: 30rem;
        width: 100%;
        display: flex;
        // background-color: red;
        padding-top: 1rem;
        .reactions {
          display: flex;
          gap: 3rem;
        }
        .reactions {
          //   background-color: pink;
          display: flex;
          align-items: center;
        }
        .viewnum {
          gap: 0.4rem;
          width: 3rem;
          height: 2rem;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        .like {
          gap: 0.4rem;
          width: 3rem;
          height: 2rem;
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .comment {
          gap: 0.4rem;
          width: 3rem;
          height: 2rem;
          display: flex;
          align-items: flex-end;
          cursor: pointer;
        }
      }
    }
    .busines_right {
      height: 100%;
      width: 20%;
      gap: 1.6rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .post_view {
        height: 3.2rem;
        width: 7rem;
        background-color: #0046ff;
        color: #fff;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover {
          transform: scale(1.05);
          transition: all 0.3s ease-in-out;
        }
      }
      .love {
        height: 3.2rem;
        width: 7rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid gray;
        cursor: pointer;

        &:hover {
          transform: scale(1.05);
          transition: all 0.3s ease-in-out;
          background-color: lightgoldenrodyellow;
        }
      }
    }
  }
`;
