import styled from "styled-components";

export const OverviewContent = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 48px;
  font-family: "Poppins", sans-serif;

  .ContentTitle {
    padding-top: 1.25rem;
    margin-bottom: 12px;

    h1 {
      font-size: 22px;
      font-weight: 600;
      line-height: 28px;
      margin-bottom: 6px;
    }

    p {
      color: #1b1b1b;
      font-size: 15px;
      font-weight: 400;
      line-height: 22px;
      margin: 0;
    }
  }

  .Overview-content {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 20px;
    margin-top: 16px;
    width: 100%;
    flex-wrap: nowrap; 

    .box {
      flex: 1; 
      min-width: 0;
      height: 7rem; 
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 18px;
      transition: all 0.3s ease;
    }

    .box:hover {
      transform: translateY(-2px);
    }

    .box p {
      color: #666;
      font-size: 14px;
      margin: 0 0 4px 0;
    }

    .box span {
      color: #111;
      font-size: 22px;
      font-weight: 600;
    }

    img {
      width: 28px;
      height: 28px;
    }
  }

  .recentIdeas {
    width: 100%;
    background-color: #fff;
    margin-top: 18px;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(11, 13, 22, 0.04);
    display: flex;
    flex-direction: column;

    .recent {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      p {
        font-weight: 600;
        margin: 0;
        font-size: 16px;
      }

      button {
        background-color: transparent;
        border: 1px solid lightgrey;
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        font-size: 14px;

        &:hover {
          background-color: #f3f3f3;
        }
      }
    }
  }

  .QuickAction {
    background-color: #fff;
    margin-top: 20px;
    padding: 1.2rem;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(11, 13, 22, 0.04);

    p {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
      color: #1b1b1b;
    }

    .action {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;

      .quick {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 14px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .quick.primary {
        background: #0046ff;
        color: #fff;
      }

      .quick.secondary {
        border: 1px solid #ccc;
        background: #fff;
        color: #000;
      }

      .quick:hover {
        opacity: 0.9;
      }
    }
  }

  @media (max-width: 992px) {
    .Overview-content {
      flex-wrap: wrap;
      .box {
        flex: 1 1 calc(50% - 10px); 
        height: 7rem;
      }
    }

    .QuickAction .action .quick {
      flex: 1 1 calc(50% - 10px);
    }
  }

  @media (max-width: 600px) {
    .Overview-content {
      flex-direction: column;
      gap: 14px;

      .box {
        width: 100%;
        flex: none;
        height: 7rem; 
      }
    }

    .recentIdeas {
      padding: 1rem;
    }

    .QuickAction {
      padding: 1rem;

      .action {
        flex-direction: column;
        gap: 10px;

        .quick {
          width: 100%;
        }
      }
    }
  }
`;
