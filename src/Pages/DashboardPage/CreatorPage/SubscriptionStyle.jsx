import styled from "styled-components";

export const SubcriptionCard_container = styled.div`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  p {
    font-size: 28px;
    font-weight: 600;
    max-width: 820px;
    padding-left: 2rem;
    height: max-content;
  }
  h1 {
    font-size: 22px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    margin: 0;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    max-width: 820px;
  }

  @media (max-width: 900px) {
    p {
      font-size: 24px;
    }
    span {
      font-size: 15px;
      padding: 0 12px;
    }
  }

  @media (max-width: 480px) {
    margin-top: 1.2rem;

    p {
      font-size: 18px;
      line-height: 24px;
      text-align: left; 
      width: 100%;
      padding-left: 8px;
    }

    span {
      font-size: 13px;
      line-height: 16px;
      text-align: left;
      width: 100%;
      padding-left: 8px;
      margin-top: 6px;
    }
  }

  .Ask_question_wrapper {
    width: 100%;
    background-color: #ffffff;
    padding: 1rem;
    margin-top: 2rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.8rem;
    /* height: auto; */
    /* min-height: 200px; */
    box-sizing: border-box;
    height: max-content;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    display: flex;
    gap: 2rem;

    h1 {
      font-size: 20px;
    }

    p {
      font-size: 15px;
    }

    .Ask_question_wrapper {
      padding: 0.8rem;
      gap: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.6rem;

    h1 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }

    .Ask_question_wrapper {
      padding: 0.6rem;
      gap: 0.6rem;
    }
  }
`;
