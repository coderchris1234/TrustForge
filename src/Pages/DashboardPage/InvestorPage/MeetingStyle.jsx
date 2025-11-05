import styled from "styled-components";
export const Meeting_container = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .meeting {
    height: 5rem;
    width: 100%;

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
  .upcoming_coming {
    height: 2.3rem;
    width: 20rem;
    background-color: #c1c1c1;
    display: flex;
    padding: 0.3rem;
    border-radius: 1rem;

    .upcoming {
      height: 100%;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      border-radius: 1rem;
      gap: 0.4rem;

      span{
        background-color: red;
        border-radius: 1rem;
        height: 1.2;
        width: 1.22rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color:white;
      }
    }
    .coming {
      height: 100%;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
