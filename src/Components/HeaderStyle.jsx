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
        color: var(--neutral_black_color);
      }

      .Link.active {
        font-weight: bold;
        color: var(--primary_color_500);
      }

      li {
        list-style-type: none;
        font-size: 1rem;
        font-weight: 400;
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
      border: 2px solid var(--neutral_gray_color_500);
      background-color: var(--main_white);
      color: var(--main_black);

      &:hover {
        background-color: var(--primary_color_100);
        border: none;
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
    color: var(--primary_color_500);
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
      background-color: var(--main_white);
      position: absolute;
      top: 4.3rem;
      left: 0;
      right: 0;
      z-index: 9999;
      height: max-content;
      align-items: center;

      /* add horizontal padding so items don't touch edges */
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
      border: 1px solid #e6e7ea;
      background: #ffffff;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 400;
      color: var(--neutral_black_color);
      transition: border-color 140ms ease, color 140ms ease;
    }

    /* active link look */
    nav.MobileNav .Link.active li {
      border-color: var(--primary_color_500);
      color: var(--primary_color_500);
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
