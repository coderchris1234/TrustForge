import styled from "styled-components";

export const DashboardLayout = styled.div`
  width: 100%;
  background: #eceff4;
  display: flex;
  font-family: "Poppins", sans-serif;
  gap: 2px;

  .aside {
    width: 14%;
    height: 100vh;
    background-color: var(--main_white);
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;

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
      background-color: red;
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
      height: 100vh;
      cursor: pointer;
      gap: 20px;
    }

    .logout {
      color: var(--error_red_color_500);
    }

    .businessContainer {
      /* background-color: orange; */
      display: flex;
      flex-direction: column;
      gap: 12px;
      position: relative;

      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 1px; /* line thickness */
        background-color: #e0e0e0; /* light gray line */
        margin-top: 50px;
        margin-bottom: 10px; /* space between items and line */
        border-radius: 10px; /* slight rounding for a soft look */
      }
    }

    .business {
      display: flex;
      /* justify-content: center; */
      align-items: center;
      gap: 10px;
      font-size: 14px;
      /* display: inline-block; */
      /* background-color: red; */
      transition: background 0.2s ease;

      &:hover {
        background: #c0dafe; /* blue when active */
        color: var(--primary_color_500);
        border-radius: 8px;
        padding: 0px 5px;
      }

      &.active {
        background: #c0dafe; /* blue when active */
        color: var(--primary_color_500);
        border-radius: 8px;
        padding: 5px 5px;
      }
    }
  }

  .LayoutPage {
    width: 88%;
    /* background-color: green; */

    .header {
      width: 100%;
      background-color: brown;
      /* height: 7vh; */
      background-color: var(--main_white);
      padding: 8px;
      display: flex;
      justify-content: center;

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
    }
  }
`;
