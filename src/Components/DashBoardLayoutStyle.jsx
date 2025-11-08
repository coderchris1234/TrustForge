import styled from "styled-components";

export const DashboardLayoutContainer = styled.div`
  width: 100%;
  background: #eceff4;
  min-height: 100vh;
  display: flex;
  font-family: "Poppins", sans-serif;
  gap: 2px;

  .aside {
    width: 240px;
    height: 100vh;
    background-color: var(--main_white);
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: left 0.3s ease;
    padding-top: 1rem;

    .close-btn {
      display: none;
    }

    .leftSidedContent {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      width: 88%;

      .image-logo {
        display: flex;
        gap: 6px;
        margin-bottom: 10px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .LogoName {
      background: linear-gradient(91deg, #002da3 24.94%, #0046ff 72.09%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 600;
      font-size: 21px;
    }

    .DashboardName {
      color: var(--netural_black_color);
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }

    .sideBarContents {
      width: 80%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding-top: 1rem;

      .ItemList {
        border-bottom: 1px solid var(--neutral_gray_color_500);
        padding-bottom: 3rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 100%;
      }
    }

    .logout {
      margin-top: 30px;
      color: var(--error_red_color_500);
    }

    .businessContainer {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .business {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      transition: background 0.2s ease;

      &:hover,
      &.active {
        color: var(--secondary_color_800);
      }
    }
  }

  .LayoutPage {
    flex: 1;
    margin-left: 240px;
    min-height: 100vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;

    .header {
      width: 100%;
      background-color: var(--main_white);
      padding: 1rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      position: sticky;
      top: 0;
      left: 0;
      height: 70px;
      /* align-items: center; */
      justify-content: center;

      .top-bar {
        display: none;
      }

      .header-content {
        width: 98%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        .profile-content {
          display: flex;
          flex: 1;
          min-width: 200px;
          align-items: center;
          gap: 8px;

          .image {
            background-color: red;
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }

          .UserInfo {
            p {
              margin: 0;
            }
            span {
              font-size: 10px;
              color: var(--secondary_color_700);
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .aside {
      left: ${({ showSidebar }) => (showSidebar ? "0" : "-100%")};
      width: 100%;
      height: 100vh;
      position: absolute;
      background-color: var(--main_white);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      padding: 20px;
      z-index: 999;

      .close-btn {
        display: block;
        position: absolute;
        top: 15px;
        right: 20px;
        font-size: 28px;
        font-weight: bold;
        color: #333;
        cursor: pointer;
        z-index: 1001;
      }
    }

    .LayoutPage {
      margin-left: 0;
      width: 100%;
      padding: 10px;

      .header {
        .top-bar {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 10px;
          margin-bottom: 10px;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;

          .bar {
            width: 25px;
            height: 3px;
            background-color: #333;
          }
        }

        .notification {
          position: relative;

          img {
            width: 24px;
            height: 24px;
          }

          .rounded {
            position: absolute;
            top: -6px;
            left: 14px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            color: #fff;
            font-size: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .header-content {
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;

          .profile-content {
            width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    .LogoName {
      font-size: 16px;
    }

    .DashboardName {
      font-size: 14px;
    }

    .header-content {
      width: 100%;
    }

    .profile-content {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
