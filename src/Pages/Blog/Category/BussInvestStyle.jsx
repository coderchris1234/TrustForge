import styled from "styled-components";

export const InvestContainer = styled.div`
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1.5rem 6rem;

  .Invest_wrapper {
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 5rem;

    .Top_section {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 4rem;

      .left_Container {
        width: 200px;
        flex-shrink: 0;
        position: sticky;
        top: 5.5rem;
        height: fit-content;

        .Blog_Header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding-top: 2rem;
          h3 {
            margin: 0;
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #0046ff;
          }
        }

        .Blog_Infos {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 1.5rem;
          padding: 1.5rem;
          background: #f8faff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;

          .Blog_Info_Data {
            display: flex;
            flex-direction: column;
            gap: 4px;
            span {
              font-size: 0.68rem;
              font-weight: 700;
              letter-spacing: 1.5px;
              text-transform: uppercase;
              color: #9ca3af;
            }
            h4 {
              font-size: 0.875rem;
              font-weight: 600;
              color: #04091a;
              margin: 0;
            }
            p {
              font-size: 0.775rem;
              color: #0046ff;
              background: #eff6ff;
              padding: 2px 10px;
              border-radius: 100px;
              width: fit-content;
              margin: 0;
              font-weight: 600;
            }
          }
        }
      }

      .Right_Container {
        flex: 1;
        min-width: 0;
        padding-top: 2rem;

        .Right_cont_items {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          margin-bottom: 3rem;

          header h1 {
            font-size: clamp(1.8rem, 3.5vw, 2.8rem);
            font-weight: 800;
            color: #04091a;
            line-height: 1.15;
            letter-spacing: -1px;
            margin: 0;
          }

          .Right_cont_image {
            width: 100%;
            height: 440px;
            border-radius: 14px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .Introduction_Section {
            display: flex;
            flex-direction: column;
            gap: 2.5rem;

            .Introduction_Section_Title {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              h3 {
                font-size: 1.1rem;
                font-weight: 700;
                color: #04091a;
                margin: 0;
              }
              p {
                font-size: 1rem;
                line-height: 1.85;
                color: #374151;
                margin: 0;
              }
            }

            ul {
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
              padding: 0;
              li {
                list-style: none;
                padding: 1.75rem;
                background: #f8faff;
                border: 1px solid #e5e7eb;
                border-radius: 12px;
                border-left: 3px solid #04091a;
                h4 {
                  font-size: 0.95rem;
                  font-weight: 700;
                  color: #04091a;
                  margin: 0 0 0.5rem;
                }
                p {
                  line-height: 1.85;
                  font-size: 0.9rem;
                  color: #4b5563;
                  margin: 0;
                }
              }
            }

            .bottomText ul {
              display: flex;
              flex-direction: column;
              gap: 0.75rem;
              padding: 1.75rem;
              background: #04091a;
              border-radius: 12px;
              li {
                list-style: none;
                font-size: 0.9rem;
                color: rgba(255,255,255,0.75);
                line-height: 1.8;
                border: none;
                background: none;
                padding: 0;
                border-left: none;
                border-radius: 0;
                h4 { display: none; }
              }
            }
          }

          .Insight_btn {
            height: 52px;
            padding: 0 32px;
            border-radius: 8px;
            color: #ffffff;
            border: none;
            background: #0046ff;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 0.95rem;
            font-weight: 700;
            cursor: pointer;
            width: fit-content;
            font-family: "Poppins", sans-serif;
            transition: all 0.2s ease;
            &:hover {
              background: #002da3;
              transform: translateY(-2px);
              box-shadow: 0 8px 24px rgba(0,70,255,0.3);
            }
            .Insight_icon { font-size: 1.2rem; }
          }
        }
      }
    }

    .Bottom_section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding-top: 3rem;
      border-top: 1px solid #e5e7eb;
      header h1 {
        font-size: 1.2rem;
        font-weight: 700;
        color: #04091a;
        margin: 0;
      }
      .relatedPost {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 2rem 1.5rem 5rem;
    .Invest_wrapper .Top_section {
      flex-direction: column;
      gap: 2rem;
      .left_Container {
        width: 100%;
        position: static;
        .Blog_Infos { flex-direction: row; flex-wrap: wrap; gap: 1rem; }
      }
      .Right_Container { padding-top: 0; }
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem 4rem;
    .Invest_wrapper {
      gap: 3rem;
      .Top_section .Right_Container .Right_cont_items .Right_cont_image { height: 240px; }
      .Bottom_section .relatedPost { flex-direction: column; }
    }
  }
`;
