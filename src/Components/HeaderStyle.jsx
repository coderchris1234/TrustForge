import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4.5rem;
  background-color: rgba(4, 9, 26, 0.95);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 99999;
  border-bottom: 1px solid rgba(255,255,255,0.07);

  .Header_Wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .AppLogo {
    flex: 1;
    display: flex;
    align-items: center;

    img {
      max-height: 4rem;
      max-width: 200px;
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
      justify-content: center;
      gap: 4rem;
      align-items: center;
      padding: 0;
      margin: 0;

      .Link {
        text-decoration: none;
        color: rgba(255,255,255,0.65);
      }

      .Link.active {
        font-weight: 600;
        color: #ffffff;
      }

      li {
        list-style-type: none;
        font-size: 0.9rem;
        font-weight: 400;
        cursor: pointer;
        transition: color 200ms ease;

        &:hover {
          color: #ffffff;
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
      border: 1px solid rgba(255,255,255,0.2);
      background-color: transparent;
      color: rgba(255,255,255,0.8);

      &:hover {
        border-color: rgba(255,255,255,0.5);
        color: #ffffff;
        background-color: transparent;
      }
    }

    .Btn_Login2 {
      width: 12rem;
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
    color: rgba(255,255,255,0.8);
  }

  /* ---------- MOBILE ---------- */
  @media (max-width: 768px) {
    .MenuIcon {
      display: block;
    }

    nav {
      display: none;
    }

    /* Mobile nav when open */
    nav.MobileNav {
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: #04091a;
      border-top: 1px solid rgba(255,255,255,0.07);
      position: absolute;
      top: 4.3rem;
      left: 0;
      right: 0;
      z-index: 9999;
      height: max-content;
      align-items: center;
      padding: 12px 14px;
      box-sizing: border-box;
      gap: 10px;
    }

    /* vertical list, tighter spacing */
    nav.MobileNav ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.65rem; /* reduced gap */
      padding: 0;
      margin: 0;
    }

    /* each link wrapper spans full width and uses box-sizing */
    nav.MobileNav .Link {
      width: 100%;
      box-sizing: border-box;
    }

    /* style individual li as a boxed item (like your screenshot) */
    nav.MobileNav .Link li {
      width: 100%;
      box-sizing: border-box;
      padding: 0.6rem 0.75rem;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.04);
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 400;
      color: rgba(255,255,255,0.75);
      transition: border-color 140ms ease, color 140ms ease;
    }

    nav.MobileNav .Link.active li {
      border-color: #4d8bff;
      color: #ffffff;
      font-weight: 600;
    }

    /* auth buttons stacked and full-width, slightly tighter */
    nav.MobileNav .Auth_Button.mobile {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
      width: 100%;
      gap: 0.6rem;
      margin-top: 6px;
    }

    /* Login (outline) */
    nav.MobileNav .Auth_Button.mobile .Btn_Login {
      width: 100%;
      height: 2.75rem;
      border-radius: 10px;
      border: 2px solid var(--primary_color_500);
      background: transparent;
      color: var(--primary_color_500);
      font-size: 1rem;
    }

    /* Get started (filled) */
    nav.MobileNav .Auth_Button.mobile .Btn_Login2 {
      width: 100%;
      height: 2.75rem;
      border-radius: 10px;
      background: var(--primary_color_500);
      color: #fff;
      font-size: 1rem;
      border: none;
    }

    .Auth_Button.desktop {
      display: none;
    }
  }

  /* ---------- SMALL PHONES ---------- */
  @media (max-width: 480px) {
    .AppLogo {
      justify-content: flex-start;
    }

    .AppLogo img {
      max-width: 100px;
      max-height: 2rem;
    }

    /* slightly reduce padding on very small screens */
    nav.MobileNav {
      padding-left: 10px;
      padding-right: 10px;
      gap: 8px;
    }

    nav.MobileNav ul {
      gap: 0.5rem;
    }

    nav.MobileNav .Link li {
      padding: 0.55rem 0.7rem;
      font-size: 0.95rem;
    }

    nav.MobileNav .Auth_Button.mobile .Btn_Login,
    nav.MobileNav .Auth_Button.mobile .Btn_Login2 {
      height: 2.4rem;
      font-size: 0.95rem;
    }
  }
`;
