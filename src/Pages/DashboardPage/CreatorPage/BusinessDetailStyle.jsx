import styled from "styled-components";

export const BusinessContainer = styled.div`
  width: 95%;
  padding: 1rem;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SkeletonWrapper = styled.div`
  padding: 20px;
  animation: fadeIn 0.3s ease-in;

  .skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e7e7e7 37%, #f0f0f0 63%);
    background-size: 400% 100%;
    border-radius: 8px;
    animation: shimmer 1.4s ease infinite;
  }

  .skeleton.header {
    width: 60%;
    height: 28px;
    margin-bottom: 20px;
  }

  .skeleton.line {
    width: 100%;
    height: 18px;
    margin-bottom: 12px;
  }

  .skeleton.box {
    width: 100%;
    height: 200px;
    margin-top: 25px;
  }

  /* shimmer effect */
  @keyframes shimmer {
    0% {
      background-position: -400% 0;
    }
    100% {
      background-position: 400% 0;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
