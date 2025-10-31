import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4.3rem;
  background-color: var(--main_white);
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0px;
  z-index: 99999;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .Header_Wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .AppLogo {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      height: 60%;
    }
  }

  nav {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;

    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px;
      margin: 0px;

      .Link {
        text-decoration: none;
        color: var(--netural_black_color);
      }

      .Link.active {
        font-weight: bold;
        text-decoration: none;
        color: var(--primary_color_500);
      }

      li {
        list-style-type: none;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        transition: all 350ms ease-in-out;

        &:hover {
          color: var(--primary_color_500);
        }
      }
    }
  }

  .Auth_Button {
    width: 20%;
    height: 100%;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .Btn_Login {
      height: 44px;
      width: 80px;
      font-size: 16px;
      border: 2px solid var(--primary_color_500);
      border-radius: 8px;
      background-color: var(--main_white);
      color: var(--primary_color_500);
      cursor: pointer;
      transition: all 350ms ease-in-out;

      &:hover {
        background-color: var(--primary_color_100);
        border: none;
      }
    }

    .Btn_Login2 {
      height: 44px;
      width: 130px;
      font-size: 16px;
      border-radius: 8px;
      background-color: var(--primary_color_500);
      color: var(--main_white);
      border: none;
      cursor: pointer;
      transition: all 350ms ease-in-out;

      &:hover {
        background-color: var(--primary_color_700);
        border: none;
      }
    }
  }
`;
