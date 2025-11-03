import styled from "styled-components";

export const MissionContainer = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  background-color: var(--main_white);
  justify-content: center;
  align-items: center;

  .Mission_wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    .Mission {
      width: 1008px;
      height: 260px;
      background-color: var(--main_white);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding: 2rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

      .Mission_icon {
        color: var(--primary_color_500);
        font-size: 60px;
        font-weight: 100;
        margin-top: 2rem;
      }

      h3 {
        font-size: 28px;
        font-weight: 600;
        color: var(--netural_black_color);
        margin: 0px;
        text-align: center;
      }

      p {
        font-size: 18px;
        font-weight: 400;
        color: var(--netural_black_color);
        line-height: 150%;
        text-align: center;
        margin-bottom: 2rem;
      }
    }
  }

  @media (max-width: 1024px) {
    height: auto;
    padding: 3rem 0;

    .Mission_wrapper {
      gap: 30px;

      .Mission {
        width: 90%;
        height: auto;
        padding: 25px 20px;
        gap: 18px;

        .Mission_icon {
          font-size: 50px;
        }

        h3 {
          font-size: 24px;
        }

        p {
          font-size: 16px;
          max-width: 600px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 1.5rem;

    .Mission_wrapper {
      align-items: flex-start;
      gap: 25px;

      .Mission {
        width: 100%;
        align-items: flex-start;
        text-align: left;
        padding: 20px;
        gap: 15px;

        .Mission_icon {
          font-size: 45px;
        }

        h3 {
          font-size: 22px;
          text-align: left;
        }

        p {
          font-size: 15px;
          text-align: left;
          line-height: 150%;
        }
      }
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;

    .Mission_wrapper {
      .Mission {
        gap: 12px;
        align-items: center;

        .Mission_icon {
          font-size: 40px;
        }

        h3 {
          font-size: 20px;
        }

        p {
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
`;
