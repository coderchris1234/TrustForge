import styled from "styled-components";

export const Nda_Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  .nda_about_text {
    h1 {
      font-size: 22px;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
    }

    p {
      font-size: 16px;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }
  }

  .nda_about_subtext {
    width: 100%;
    background-color: #d6e8ff;
    border-radius: 12px;
    padding: 1rem;
    color: #0038cc;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;

    .about {
      display: flex;
      gap: 0.4rem;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 16px;
      padding-left: 3rem;
    }

    .text {
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-size: 14px;
      padding-left: 4.4rem;
    }
  }

  @media (max-width: 768px) {
    .nda_about_text {
      h1 {
        font-size: 18px;
      }

      p {
        font-size: 14px;
      }
    }

    .nda_about_subtext {
      padding: 0.8rem;

      .about {
        font-size: 14px;
        padding-left: 2rem;
      }

      .text {
        font-size: 13px;
        padding-left: 2.5rem;
      }
    }
  }

  @media (max-width: 480px) {
    .nda_about_text {
      h1 {
        font-size: 16px;
      }

      p {
        font-size: 13px;
      }
    }

    .nda_about_subtext {
      padding: 0.6rem;

      .about {
        font-size: 13px;
        padding-left: 1rem;
      }

      .text {
        font-size: 12px;
        padding-left: 1.5rem;
      }
    }
  }
`;
