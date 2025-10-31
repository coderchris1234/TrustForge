import styled from "styled-components";

export const DashboardLayout = styled.div`
  width: 100%;
  background: #eceff4;
  height: 100vh;
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
    /* background-color: green; */
    position: fixed;
    top: 0;
    left: 0;

    .leftSidedContent {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      /* background-color: pink; */
      width: 88%;

      .image-logo {
        display: flex;
        gap: 6px;
        /* background-color: green; */
      }
    }

    .image {
      background-color: blue;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    .LogoName {
      background: linear-gradient(91deg, #002da3 24.94%, #0046ff 72.09%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 600;
      font-style: normal;
      line-height: 125%;
      font-size: 21px;
    }

    .DashboardName {
      color: var(--netural_black_color);
      font-size: 16px;
      font-weight: 400;
      font-style: normal;
      line-height: 24px;
      /* text-align: center; */
    }

    .sideBarContents {
      /* background-color: pink; */
      width: 80%;
      display: flex;
      flex-direction: column;
      height: max-content;
      cursor: pointer;
      gap: 20px;
      padding-top: 1rem;

      .ItemList {
        border-bottom: 1px solid var(--neutral_gray_color_500);
        padding-bottom: 3rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 100%;
        height: max-content;
        /* background-color: green; */
        /* padding-bottom: 10px; */
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
      position: relative;
    }

    .business {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      transition: background 0.2s ease;

      &:hover {
        color: var(--secondary_color_800);
      }

      &.active {
        color: var(--secondary_color_800);
      }
    }
  }

  .LayoutPage {
    width: 88%;
    margin-left: 240px;
    height: 100vh;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */

    .header {
      width: 100%;
      background-color: var(--main_white);
      padding: 8px;
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;

      .header-content {
        width: 98%;
        /* background-color: grey; */
        display: flex;
        justify-content: space-between;
        align-items: center;

        .profile-content {
          display: flex;
          width: 40%;
          align-items: center;
          gap: 8px;
        }
      }

      .image {
        background-color: red;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      .notification {
        /* background-color: red; */
        position: relative;

        .rounded {
          position: absolute;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: red;
          top: -10px;
          left: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffff;
        }
      }
    }
  }
`;
