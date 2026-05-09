import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4.5rem;
  background: rgba(245, 240, 232, 0.92);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 99999;
  border-bottom: 1px solid rgba(25,25,25,0.1);

  .Header_Wrapper {
    width: 90%;
    max-width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .AppLogo {
    flex: 1;
    display: flex;
    align-items: center;

    .Logo_text {
      font-size: 1.25rem;
      font-weight: 900;
      color: #191919;
      letter-spacing: -0.5px;
      font-family: "Poppins", sans-serif;

      &::after {
        content: ".";
        color: #b9ff66;
      }
    }
  }

  nav {
    flex: 2;
    display: flex;
    align-items: center;

    ul {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 3rem;
      align-items: center;
      padding: 0;
      margin: 0;

      .Link {
        text-decoration: none;
        color: #555;
      }

      .Link.active {
        font-weight: 700;
        color: #191919;
      }

      li {
        list-style-type: none;
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        transition: color 200ms ease;

        &:hover { color: #191919; }
      }
    }
  }

  .Auth_Button {
    flex: 1;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-end;

    &.mobile { display: none; }

    .Btn_Login,
    .Btn_Login2 {
      height: 2.4rem;
      font-size: 0.875rem;
      border-radius: 100px;
      cursor: pointer;
      transition: all 200ms ease;
      font-family: "Poppins", sans-serif;
    }

    .Btn_Login {
      padding: 0 20px;
      border: 2px solid rgba(25,25,25,0.2);
      background: transparent;
      color: #191919;

      &:hover {
        border-color: #191919;
        background: transparent;
      }
    }

    .Btn_Login2 {
      padding: 0 20px;
      background: #191919;
      color: #ffffff;
      border: none;

      &:hover {
        background: #b9ff66;
        color: #191919;
      }
    }
  }

  .MenuIcon {
    display: none;
    font-size: 1.75rem;
    cursor: pointer;
    color: #191919;
  }

  @media (max-width: 768px) {
    .MenuIcon { display: block; }
    nav { display: none; }

    nav.MobileNav {
      display: flex;
      flex-direction: column;
      width: 100%;
      background: #f5f0e8;
      border-top: 1px solid rgba(25,25,25,0.1);
      position: absolute;
      top: 4.3rem;
      left: 0;
      right: 0;
      z-index: 9999;
      padding: 1rem;
      gap: 8px;
    }

    nav.MobileNav ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 0;
      margin: 0;
    }

    nav.MobileNav .Link {
      width: 100%;
    }

    nav.MobileNav .Link li {
      width: 100%;
      padding: 0.65rem 1rem;
      border: 1px solid rgba(25,25,25,0.1);
      background: #ffffff;
      border-radius: 10px;
      font-size: 0.9rem;
      font-weight: 500;
      color: #555;
    }

    nav.MobileNav .Link.active li {
      border-color: #191919;
      color: #191919;
      font-weight: 700;
    }

    nav.MobileNav .Auth_Button.mobile {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 8px;
      margin-top: 8px;
    }

    nav.MobileNav .Auth_Button.mobile .Btn_Login,
    nav.MobileNav .Auth_Button.mobile .Btn_Login2 {
      width: 100%;
      height: 2.75rem;
      border-radius: 10px;
    }

    nav.MobileNav .Auth_Button.mobile .Btn_Login {
      border: 2px solid #191919;
      background: transparent;
      color: #191919;
    }

    nav.MobileNav .Auth_Button.mobile .Btn_Login2 {
      background: #191919;
      color: #ffffff;
      border: none;
    }

    .Auth_Button.desktop { display: none; }
  }

  @media (max-width: 480px) {
    .AppLogo img {
      max-width: 120px;
      max-height: 2rem;
    }
  }
`;
