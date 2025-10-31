import styled from "styled-components";

export const SubscribeContainer = styled.div`
  /* background-color: red; */
  width: 95%;
  margin: 0 auto;

  .subHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .subscriptionPlan {
    .Subscriptions {
      /* width: 100%; */
      /* background-color: green; */

      .subCard {
        border: 1px solid blue;
        border-radius: 8px;
        width: 90%;
        position: relative;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        background-color: #ffff;
        gap: 2rem;

        .topSection {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          h3 {
            font-size: 36px;
            font-weight: 500;
            line-height: 43px;

            span {
              font-size: 16px;
              font-weight: 400;
            }
          }
        }

        .metricsSection {
          background: linear-gradient(135deg, #e1ebf8, #dbe5d3);
          border-radius: 8px;
          margin-top: 1rem;
          padding: 1rem 0.5rem;

          .metricsHeader {
            display: flex;
            gap: 0.5rem;
            font-size: 16px;
          }

          .metric-lists {
            li {
              list-style: none;
              font-size: 14px;
              /* background-color: orange; */
              padding-bottom: 0.5rem;
            }
          }
        }

        .featureSection {
          /* background-color: green; */

          ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            list-style: none;
            font-size: 13px;
          }

          li::before {
            content: "✔️";
            padding-right: 8px;
          }
        }

        .actionBox {
          margin-top: 5rem;
          background-color: #ffff;
          border-radius: 8px;
          padding: 0.5rem;
          width: 100%;
          display: flex;
          justify-content: center;
          border: 1px solid lightgray;

          button {
            background-color: transparent;
            border: none;
            text-align: center;
            cursor: pointer;
          }
        }
      }

      p {
        position: absolute;
        right: 130px;
        top: -10px;
        background-color: blue;
        border-radius: 8px;
        padding: 0.2rem;
        color: white;
      }
    }
  }
`;
