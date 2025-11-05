import styled from "styled-components";

export const KycVerifyContainer = styled.div`
  width: 100%;
  height: max-content;
  /* background-color: green; */
  display: flex;
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
    width: 90%;
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
    width: 90%;
    height: 180px;
    background-color: #ffffff;
    border-radius: 12px;
  }

  .Profile_photo_kyc {
    width: 90%;
    /* height: 80vh; */
    height: max-content;
    background-color: green;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 12px;
    gap: 1rem;

    /* align-items: center; */
    /* justify-content: center; */

    h1 {
      width: 100%;
    }
    .Professional_photo {
      width: 100%;
      height: max-content;
      background-color: red;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      gap: 15px;

      h3 {
        margin: 0;
      }

      .Photo_img {
        width: 165px;
        height: 165px;
        border-radius: 50%;
        background-color: blue;
      }
    }

    .Photo_input {
      width: 100%;
      height: max-content;
      background-color: pink;
      display: flex;
      justify-content: space-between;
      gap: 2rem;

      .Input_kyc {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 50%;
        background-color: blue;

        input {
          width: 100%;
          height: 40px;
        }
      }
    }
  }
`;
