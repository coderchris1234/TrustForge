import styled from "styled-components";

export const InvestContainer = styled.div`
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .Invest_wrapper {
    width: 90%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .Top_section {
      width: 100%;
      height: max-content;
      display: flex;
      justify-content: space-between;

      .left_Container {
        width: 25%;
        height: 100vh;
        /* background-color: red; */

        .Blog_Header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding-top: 3rem;

          h3 {
            margin: 0px;
          }
        }

        .Blog_Infos {
          width: 100%;
          height: max-content;
          padding-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-top: 3rem;

          .Blog_Info_Data {
            height: 60px;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            span {
              color: var(--neutral_gray_color_600);
            }

            p {
              color: var(--main_black);
            }
          }
        }
      }

      .Right_Container {
        width: 80%;
        height: max-content;
        padding-top: 4rem;

        .Right_cont_items {
          width: 100%;
          height: max-content;
          display: flex;
          flex-direction: column;
          padding-top: 1rem;
          gap: 2rem;
          margin-bottom: 3rem;

          header {
            h1 {
              font-size: 48px;
              font-weight: 500;
              color: var(--netural_black_color);
              line-height: 120%;
            }
          }

          .Right_cont_image {
            width: 100%;
            height: 390px;
            border-radius: 10px;

            img {
              width: 100%;
              height: 100%;
              border-radius: 10px;
              object-fit: cover;
            }
          }

          .Introduction_Section {
            width: 100%;
            height: max-content;

            .Introduction_Section_Title {
              width: 100%;
              height: max-content;
              padding-bottom: 2rem;

              h3 {
                font-size: 22px;
                font-weight: 600;
              }

              p {
                font-size: 18px;
                line-height: 2rem;
                font-weight: 400;
              }
            }

            ul {
              width: 100%;
              height: max-content;
              padding-bottom: 1rem;
              display: flex;
              flex-direction: column;
              gap: 1.5rem;

              li {
                list-style-type: none;

                h4 {
                  font-size: 18px;
                  font-weight: 500;
                }

                p {
                  line-height: 2rem;
                  font-size: 16px;
                  font-weight: 400;
                }
              }
            }

            .bottomText {
              width: 100%;
              height: max-content;

              ul {
                width: 100%;
                height: max-content;
                padding-bottom: 1rem;
                display: flex;
                flex-direction: column;
                gap: 1.5rem;

                li {
                  list-style-type: none;
                  line-height: 2rem;
                  font-size: 16px;
                  font-weight: 400;
                }
              }
            }
          }
          .Insight_btn {
            width: 183px;
            height: 52px;
            border-radius: 12px;
            color: var(--main_white);
            border: none;
            background-color: var(--primary_color_500);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.7rem;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;

            .Insight_icon {
              font-size: 35px;
              font-weight: 100;
            }
          }
        }
      }
    }

    .Bottom_section {
      width: 100%;
      height: max-content;
      min-height: 70vh;
      display: flex;
      flex-direction: column;
      padding: 2rem 2rem 2rem 0rem;
      margin-bottom: 1.5rem;

      header {
        h1 {
          font-size: 30px;
          font-weight: 700;
          color: var(--netural_black_color);
          margin-bottom: 2rem;
        }
      }

      .relatedPost {
        display: flex;
        gap: 1rem;
      }
    }
  }
`;
