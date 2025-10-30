import styled from "styled-components";

export const KycContainer = styled.div`
  /* background-color: red; */
  width: 93%;
  margin: 0 auto;
  margin: 1rem;

  .WhyKyc {
    border-radius: 12px;
    border: 0.5px solid lightgray;
    background: #d6e8ff;
    padding: 1rem;
    border: none;

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    ul li {
      position: relative;
      padding-left: 1.5rem; /* gives space for the circle */
      display: flex;
      align-items: center;
    }

    /* small round bullet */
    ul li::before {
      content: "";
      position: absolute;
      left: 0;
      width: 8px;
      height: 8px;
      border: 2px solid #336bff; /* border color */
      border-radius: 50%;
      background-color: transparent; /* or use a solid color */
    }
  }
`;
