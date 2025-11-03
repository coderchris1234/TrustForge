import styled from "styled-components";

export const KycContainer = styled.div`
  width: 100%;
  height: max-content;
  /* background-color: red; */
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .Kyc_text_heading {
    width: 100%;
    height: 4.3rem;
    /* background-color: green; */
    padding: 1rem;
  }

  .why_verification {
    width: 95%;
    height: 183px;
    background-color: #d6e8ff;
    border-radius: 12px;
    padding: 2rem;

    h3 {
      color: #0038cc;
    }

    .Verify_listing {
      padding-left: 2rem;
      display: flex;
      gap: 0.5rem;
      flex-direction: column;

      li {
        color: #0038cc;
      }
    }
  }

  .Kyc_steps {
    width: 95%;
    height: 180px;
    background-color: #ffffff;
    border-radius: 12px;
  }
`;
