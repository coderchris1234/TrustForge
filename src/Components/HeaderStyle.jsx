import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4.5rem;
  background-color: var(--main_white);
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 99999;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .Header_Wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* position: relative; */
  }

  .AppLogo {
    flex: 1;
    display: flex;
    align-items: center;

    img {
      max-height: 4rem;
      max-width: 230px;

      object-fit: contain;
    }
  }

  nav {
    flex: 2;
    display: flex;
    align-items: center;

    ul {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 0;
      margin: 0;

      .Link {
        text-decoration: none;
        color: var(--neutral_black_color);
      }

      .Link.active {
        font-weight: bold;
        color: var(--primary_color_500);
      }

      li {
        list-style-type: none;
        font-size: 1.2rem;
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
    flex: 1;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-end;

    &.mobile {
      display: none;
    }

    .Btn_Login,
    .Btn_Login2 {
      height: 2.5rem;
      font-size: 1rem;
      border-radius: 8px;
      cursor: pointer;
      transition: all 350ms ease-in-out;
    }

    .Btn_Login {
      width: 5rem;
      border: 2px solid var(--primary_color_500);
      background-color: var(--main_white);
      color: var(--primary_color_500);

      &:hover {
        background-color: var(--primary_color_100);
        border: none;
      }
    }

    .Btn_Login2 {
      width: 8rem;
      background-color: var(--primary_color_500);
      color: var(--main_white);
      border: none;

      &:hover {
        background-color: var(--primary_color_700);
      }
    }
  }

  .MenuIcon {
    display: none;
    font-size: 2rem;
    cursor: pointer;
    color: var(--primary_color_500);
  }

  @media (max-width: 768px) {
    .MenuIcon {
      display: block;
    }

    nav {
      display: none;
    }

    nav.MobileNav {
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: var(--main_white);
      position: absolute;
      top: 4.3rem;
      left: 0;
      right: 0px;
      z-index: 9999;
      height: max-content;
      align-items: center;

      ul {
        flex-direction: column;
        align-items: flex-start;
        /* padding: 1rem; */
        margin-bottom: 1rem;
        width: 100%;
        gap: 2rem;
      }

      .Link {
        width: 100%;
        height: 40px;
        li {
          padding: 0.5rem 0.5rem;
          border: 1px solid black;
          width: 100%;
          border-radius: 8px;
        }
      }

      .Auth_Button.mobile {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        width: 100%;
        /* padding: 1rem; */
        gap: 0.75rem;

        .Btn_Login,
        .Btn_Login2 {
          width: 100%;
          font-size: 1rem;
        }
      }
    }

    .Auth_Button.desktop {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .AppLogo {
      justify-content: flex-start;
    }

    .AppLogo img {
      max-width: 100px;
      max-height: 2rem;
    }
  }
`;
