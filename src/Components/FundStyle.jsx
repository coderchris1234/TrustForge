import styled from "styled-components";

export const FundContainer = styled.section`
  width: 100%;
  background: #b9ff66;
  padding: 5rem 1.5rem;
  display: flex;
  justify-content: center;

  .Fund_page_wrapper {
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }

  .Fund_num {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 2rem 2.5rem;
    border-right: 1px solid rgba(25,25,25,0.15);

    &:last-child { border-right: none; }

    h1 {
      font-size: clamp(2.5rem, 4vw, 3.5rem);
      font-weight: 900;
      color: #191919;
      margin: 0;
      letter-spacing: -2px;
      line-height: 1;
    }

    p {
      font-size: 0.8rem;
      font-weight: 600;
      color: rgba(25,25,25,0.6);
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;

    .Fund_page_wrapper {
      grid-template-columns: repeat(2, 1fr);

      .Fund_num {
        border-right: none;
        border-bottom: 1px solid rgba(25,25,25,0.15);
        padding: 1.75rem 1.5rem;

        &:nth-child(odd) {
          border-right: 1px solid rgba(25,25,25,0.15);
        }

        &:nth-last-child(-n+2) {
          border-bottom: none;
        }
      }
    }
  }
`;
