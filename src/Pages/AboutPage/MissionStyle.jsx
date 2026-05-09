import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const MissionContainer = styled.section`
  width: 100%;
  background: #f8faff;
  padding: 7rem 1.5rem;
  display: flex;
  justify-content: center;

  .Mission_wrapper {
    width: 100%;
    max-width: 1100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: #e5e7eb;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    overflow: hidden;
    animation: ${fadeUp} 0.8s ease forwards;
  }

  .Mission {
    background: #ffffff;
    padding: 3.5rem 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    transition: background 0.2s ease;

    &:hover {
      background: #f0f5ff;
    }

    .Mission_icon {
      width: 56px;
      height: 56px;
      border-radius: 12px;
      background: #04091a;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    h3 {
      font-size: 1.3rem;
      font-weight: 800;
      color: #04091a;
      margin: 0;
      letter-spacing: -0.5px;
    }

    p {
      font-size: 0.95rem;
      color: #4b5563;
      line-height: 1.8;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;

    .Mission_wrapper {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    padding: 4rem 1.25rem;

    .Mission {
      padding: 2.5rem 2rem;
    }
  }
`;
