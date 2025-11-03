import styled from "styled-components";

export const JourneyContainer = styled.div`
  width: 100%;
  height: 30vh;
  background-color: var(--main_white);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  margin-bottom: 2rem;

  .Journney_wrapper {
    width: 45%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    h3 {
      margin: 0px;
      font-size: 28px;
      font-weight: 600;
      color: var(--main_black);
      text-align: center;
    }

    p {
      font-size: 18px;
      font-weight: 500;
      color: var(--main_black);
      line-height: 140%;
      text-align: center;
    }

    .journey_button {
      width: 179px;
      height: 44px;
      background-color: var(--primary_color_500);
      border: none;
      border-radius: 8px;
      color: var(--main_white);
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: var(--primary_color_600);
        transform: translateY(-2px);
      }
    }
  }

  /* ✅ Tablet view */
  @media (max-width: 1024px) {
    height: auto;
    padding: 3rem 0;

    .Journney_wrapper {
      width: 65%;
      gap: 12px;

      h3 {
        font-size: 26px;
      }

      p {
        font-size: 17px;
      }

      .journey_button {
        width: 165px;
        height: 42px;
        font-size: 15px;
      }
    }
  }

  /* ✅ Mobile view */
  @media (max-width: 768px) {
    height: auto;
    padding: 2.5rem 1.5rem;

    .Journney_wrapper {
      width: 100%;
      align-items: flex-start;
      text-align: left;
      gap: 15px;

      h3 {
        font-size: 22px;
        text-align: left;
      }

      p {
        font-size: 15px;
        text-align: left;
      }

      .journey_button {
        width: 150px;
        height: 40px;
        font-size: 14px;
      }
    }
  }

  /* ✅ Small mobile screens */
  @media (max-width: 480px) {
    padding: 2rem 1rem;

    .Journney_wrapper {
      gap: 10px;
      align-items: center;

      h3 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
        text-align: center;
      }

      .journey_button {
        width: 140px;
        height: 38px;
        font-size: 13px;
      }
    }
  }
`;
