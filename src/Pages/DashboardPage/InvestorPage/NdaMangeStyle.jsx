import styled from "styled-components";
export const Nda_Wrapper = styled.div`
  height: max-content;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  .nda_about_text {
    h1 {
      font-size: 22px;
      font-family: "poppins" sans-serif;
      font-weight: 600;
    }
    p {
      font-size: 16px;
      font-family: "poppins" sans-serif;
      font-weight: 400;
    }
  }
  .nda_about_subtext {
    height: 6rem;
    width: 100%;
    background-color: #d6e8ff;
    border-radius: 12px;
    padding: 1rem;
    color: #0038cc;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;

    .about {
      height: 1.4rem;
      width: 100%;
      gap: 0.4rem;
      display: flex;
      font-family: "poppins" sans-serif;
      font-weight: 500;
      font-size: 16px;
      padding-left: 3rem;
    }
     .text {
        font-family: "poppins" sans-serif;
        font-weight: 400;
        font-size: 14px;
        padding-left: 4.4rem;
      }
  }
`;
