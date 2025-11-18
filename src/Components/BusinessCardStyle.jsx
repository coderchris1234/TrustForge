import styled from "styled-components";

export const BusinessContainer = styled.div`
  /* padding: 0.5rem; */
  width: 97%;
  box-sizing: border-box;

  .businessContainer {
    width: 100%;
    margin: 0.75rem auto;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 0.75rem;
    box-sizing: border-box;
    position: relative;
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }

  .businessContent {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: flex-start;
  }

  .business {
    flex: 1 1 auto;
    min-width: 0;

    .heading {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin-bottom: 6px;

      .popular {
        font-size: 0.5rem;
        background: var(--accent_color_500);
        padding: 4px;
        border-radius: 1rem;
        color: black;
      }

      .trending {
        font-size: 0.5rem;
        background: var(--secondary_color_500);
        padding: 4px;
        border-radius: 1rem;
        color: black;
      }

      p {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        color: #111827;
        .business {
          .heading {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
          }
          .set {
            display: flex;
            gap: 0.5rem;

            .retail {
              background-color: #e7e6e6;
              border: none;
            }
            .active {
              background-color: #b8f7b8;
              border: none;
            }

            .under-review {
              background-color: #ffcc80;
              border: none;
            }

            .seed {
              border: 1px solid lightgray;
            }

            .status {
              border: 1px solid lightgray;
              border-radius: 8px;
              padding: 0.3rem;
              font-size: 12px;
            }
          }
        }
      }
      .btn {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: center;

        .bt {
          padding: 0.5rem;
          border-radius: 6px;
          border: 1px solid lightgray;
          cursor: pointer;
        }
        .view {
          background: blue;
          color: #ffff;
        }

        .deleteBtn {
          display: flex;
          flex-direction: row-reverse;
          justify-content: center;
          gap: 0.5rem;
          color: red;
        }
        .deleteBtn:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }
      }
    }

    .set {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      flex-wrap: wrap;

      .status {
        border: 1px solid lightgray;
        border-radius: 8px;
        padding: 0.25rem 0.5rem;
        font-size: 15px;
        background: transparent;
        color: #374151;
      }

      .retail {
        background-color: #e7e6e6;
        border: none;
      }

      .active {
        background-color: #b8f7b8;
        border: none;
      }

      .under-review {
        background-color: #ffcc80;
        border: none;
      }

      .seed {
        border: 1px solid lightgray;
      }
    }

    p {
      margin: 0;
      color: #4b5563;
      font-size: 14px;
      line-height: 1.4;
    }
  }

  /* Buttons block */
  .btn {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: flex-end;
    min-width: 130px;
    box-sizing: border-box;

    .bt {
      padding: 0.5rem 0.75rem;
      border-radius: 6px;
      border: 1px solid lightgray;
      cursor: pointer;
      font-weight: 600;
      background: transparent;
    }

    .view {
      background: #1e6bff;
      color: #fff;
      border: none;
    }

    .deleteBtn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      color: #ff1717;
      background: #fff;
      border-radius: 6px;
      padding: 0.45rem 0.75rem;
      border: 2px solid rgba(255, 0, 0, 0.377);
    }

    .deleteBtn:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  .under {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-top: 0.6rem;
    gap: 1rem;
    flex-wrap: wrap;
    box-sizing: border-box;

    .extra {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      color: #374151;
      font-size: 14px;

      div {
        display: flex;
        align-items: center;
        gap: 0.4rem;

        svg {
          width: 18px;
          height: 18px;
          color: #6b7280;
        }
      }
    }
    .Date_posted {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      /* justify-content: space-between; */
    }
  }

  /* ---------------- Desktop (>= 769px) — Added ---------------- */
  @media (min-width: 769px) {
    .btn {
      width: 160px; /* equal button container width */
      flex-direction: column;
      align-items: stretch;
    }

    .btn .bt,
    .btn .deleteBtn {
      width: 100%; /* equal width buttons */
      text-align: center;
      padding: 0.55rem 0.75rem;
    }
  }

  /* ---------------- Tablet (<= 768px) ---------------- */
  @media (max-width: 768px) {
    .businessContainer {
      padding: 0.75rem;
      padding-bottom: 72px;
    }

    .businessContent {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .btn {
      position: absolute;
      left: 16px;
      right: 16px;
      bottom: 12px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 0.6rem;
      align-items: center;
      padding: 0;
      min-width: auto;
    }

    .btn .bt,
    .btn .deleteBtn {
      flex: 1;
      width: 100%;
      text-align: center;
      padding: 0.45rem 0.8rem;
      font-size: 14px;
    }

    .under {
      width: 100%;
      margin-top: 6px;
    }
  }

  /* ---------------- Mobile (<= 480px) ---------------- */
  @media (max-width: 480px) {
    padding: 0.4rem;

    .businessContainer {
      padding: 0.8rem;
      padding-bottom: 72px;
      border-radius: 8px;
    }

    .businessContent {
      flex-direction: column;
      gap: 0.6rem;
    }

    .under {
      width: 100%;
      margin-top: 6px;
      gap: 0.6rem;
      justify-content: flex-start;
      align-items: center;
    }

    .btn {
      position: absolute;
      left: 12px;
      right: 12px;
      bottom: 12px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 0.6rem;
      padding: 0;
      z-index: 2;
    }

    .btn .bt,
    .btn .deleteBtn {
      flex: 1;
      width: 100%;
      text-align: center;
      padding: 0.5rem;
      font-size: 14px;
    }

    .under .extra {
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  }
`;
