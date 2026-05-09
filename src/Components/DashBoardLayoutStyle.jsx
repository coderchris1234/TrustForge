import styled from "styled-components";

export const DashboardLayoutContainer = styled.div`
  width: 100%;
  background: #f0f2f8;
  min-height: 100vh;
  display: flex;
  font-family: "Poppins", sans-serif;

  /* ── Logout modal ── */
  .logout-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(4, 9, 26, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    backdrop-filter: blur(4px);
  }

  .logout-modal {
    background: #ffffff;
    padding: 2.5rem 3rem;
    border-radius: 16px;
    width: 420px;
    max-width: 90vw;
    text-align: center;
    border: 1px solid #e5e7eb;

    h1 {
      font-size: 1.1rem;
      font-weight: 800;
      color: #04091a;
      letter-spacing: -0.3px;
      margin: 0 0 0.75rem;
    }

    p {
      font-size: 0.875rem;
      color: #6b7280;
      line-height: 1.65;
      margin: 0 0 2rem;
    }

    .buttons {
      display: flex;
      gap: 12px;
    }

    .logout-btn {
      flex: 1;
      height: 44px;
      background: #dc2626;
      border: none;
      color: #ffffff;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 600;
      font-family: "Poppins", sans-serif;
      transition: background 0.2s ease;

      &:hover { background: #b91c1c; }
    }

    .cancel-btn {
      flex: 1;
      height: 44px;
      background: #f3f4f6;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
      color: #374151;
      transition: background 0.2s ease;

      &:hover { background: #e5e7eb; }
    }
  }

  /* ── Sidebar ── */
  .aside {
    width: 240px;
    height: 100vh;
    background: #04091a;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: left 0.3s ease;
    border-right: 1px solid rgba(255,255,255,0.06);

    .close-btn {
      display: none;
      position: absolute;
      top: 16px;
      right: 20px;
      font-size: 1.5rem;
      color: rgba(255,255,255,0.6);
      cursor: pointer;
      line-height: 1;
    }

    .leftSidedContent {
      padding: 1.5rem 1.5rem 1rem;
      border-bottom: 1px solid rgba(255,255,255,0.06);

      .image-logo {
        margin-bottom: 0.5rem;

        img {
          height: 1.4rem;
          width: auto;
          filter: brightness(0) invert(1);
        }
      }

      .DashboardName {
        font-size: 0.72rem;
        font-weight: 600;
        color: rgba(255,255,255,0.35);
        text-transform: uppercase;
        letter-spacing: 1.5px;
        margin: 0;
      }
    }

    .sideBarContents {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 1rem 1rem;
      overflow-y: auto;
      gap: 0.25rem;

      &::-webkit-scrollbar { width: 0; }

      .ItemList {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding-bottom: 1rem;
        margin-bottom: 0.5rem;
        border-bottom: 1px solid rgba(255,255,255,0.06);

        &:last-of-type {
          border-bottom: none;
        }
      }

      .businessContainer {
        border-radius: 8px;
        overflow: hidden;
      }

      .business {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0.6rem 0.75rem;
        border-radius: 8px;
        font-size: 0.85rem;
        font-weight: 400;
        color: rgba(255,255,255,0.55);
        text-decoration: none;
        transition: all 0.15s ease;
        cursor: pointer;

        div { display: flex; align-items: center; }

        &:hover {
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.9);
        }

        &.active {
          background: rgba(0,70,255,0.2);
          color: #ffffff;
          font-weight: 600;

          div { color: #4d8bff; }
        }
      }

      .logout {
        margin-top: auto;
        padding-top: 1rem;
        border-top: 1px solid rgba(255,255,255,0.06);
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0.6rem 0.75rem;
        border-radius: 8px;
        font-size: 0.85rem;
        color: #f87171;
        cursor: pointer;
        transition: background 0.15s ease;

        &:hover { background: rgba(248,113,113,0.1); }

        img { width: 20px; height: 20px; filter: invert(1); opacity: 0.7; }
      }
    }
  }

  /* ── Main content ── */
  .LayoutPage {
    flex: 1;
    margin-left: 240px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    transition: margin-left 0.3s ease;

    .header {
      width: 100%;
      background: #ffffff;
      padding: 0 1.5rem;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      position: sticky;
      top: 0;
      z-index: 100;
      border-bottom: 1px solid #e5e7eb;

      .top-bar { display: none; }

      .header-content {
        display: flex;
        align-items: center;
        gap: 1rem;

        .profile-content {
          display: flex;
          align-items: center;
          gap: 10px;

          .imageContainer {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid #e5e7eb;
            flex-shrink: 0;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .UserInfo {
            p {
              margin: 0;
              font-size: 0.875rem;
              font-weight: 600;
              color: #04091a;
              line-height: 1.2;
            }

            span {
              font-size: 0.72rem;
              color: #6b7280;
              font-weight: 400;
            }
          }
        }
      }
    }
  }

  /* ── Mobile ── */
  @media (max-width: 768px) {
    .aside {
      left: ${({ showSidebar }) => (showSidebar ? "0" : "-100%")};
      width: 280px;

      .close-btn { display: block; }
    }

    .LayoutPage {
      margin-left: 0;

      .header {
        justify-content: space-between;
        padding: 0 1rem;

        .top-bar {
          display: flex;
          align-items: center;
          gap: 1rem;

          .hamburger {
            display: flex;
            flex-direction: column;
            gap: 4px;
            cursor: pointer;

            .bar {
              width: 22px;
              height: 2px;
              background: #04091a;
              border-radius: 2px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    .logout-modal {
      padding: 2rem 1.5rem;
    }
  }
`;
