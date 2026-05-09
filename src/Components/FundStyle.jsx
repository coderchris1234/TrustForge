import styled from "styled-components";

export const FundContainer = styled.section`
  width: 100%;
  background: #04091a;
  padding: 5rem 1.5rem;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(0,70,255,0.12) 0%, transparent 65%);
    pointer-events: none;
  }

  .Fund_page_wrapper {
    width: 100%;
    max-width: 1100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    position: relative;
    z-index: 1;
  }

  .Fund_num {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem 1rem;
    border-right: 1px solid rgba(255,255,255,0.08);

    &:last-child {
      border-right: none;
    }

    h1 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      color: #ffffff;
      margin: 0;
      letter-spacing: -1.5px;
      line-height: 1;
    }

    p {
      font-size: 0.8rem;
      font-weight: 400;
      color: rgba(255,255,255,0.4);
      margin: 0.5rem 0 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      max-width: 140px;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;

    .Fund_page_wrapper {
      grid-template-columns: repeat(2, 1fr);

      .Fund_num {
        border-right: none;
        border-bottom: 1px solid rgba(255,255,255,0.08);
        padding: 2rem;

        &:nth-child(odd) {
          border-right: 1px solid rgba(255,255,255,0.08);
        }

        &:nth-last-child(-n+2) {
          border-bottom: none;
        }
      }
    }
  }
`;
