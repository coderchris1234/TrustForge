import styled from "styled-components";

export const SubcriptionCard_container = styled.div`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: max-content;

  h1 {
    font-size: 22px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    margin: 0;
  }

  p {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    margin: 0;
    margin-top: 0.5rem;
  }

  .Ask_question_wrapper {
    width: 100%;
    background-color: #ffffff;
    padding: 1rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.8rem;
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
