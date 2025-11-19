import styled from "styled-components";

export const BusinessContainer = styled.div`
  width: 97%;
  box-sizing: border-box;

  /* ============================
      MAIN CONTAINER
  ============================= */
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

  /* ============================
      TOP CONTENT — BUSINESS INFO + BUTTONS
  ============================= */
  .businessContent {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: flex-start;
  }

  .business {
    flex: 1 1 auto;
    min-width: 0;
  }

  /* ============================
      BUSINESS HEADING + TAGS
  ============================= */
  .heading {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 6px;
  }

  .popular,
  .trending {
    font-size: 0.5rem;
    padding: 4px;
    border-radius: 1rem;
    color: black;
  }

  .popular {
    background: var(--accent_color_500);
  }

  .trending {
    background: var(--secondary_color_500);
  }

  .heading p {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #111827;
  }

  /* ============================
      STATUS TAGS
  ============================= */
  .set {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }

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

  p {
    margin: 0;
    color: #4b5563;
    font-size: 14px;
    line-height: 1.4;
  }

  /* ============================
      BUTTON GROUP
  ============================= */
  .btn {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: flex-end;
    min-width: 130px;
    box-sizing: border-box;
  }

  .bt {
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    border: 1px solid lightgray;
    cursor: pointer;
    font-weight: 600;
    background: transparent;
    text-align: center;
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

  /* ============================
      UNDER SECTION
  ============================= */
  .under {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-top: 0.6rem;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .extra {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    color: #374151;
    font-size: 14px;
  }

  .extra div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .extra svg {
    width: 18px;
    height: 18px;
    color: #6b7280;
  }

  .Date_posted {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
  }

  /* ============================
      DESKTOP >= 769px
  ============================= */
  @media (min-width: 769px) {
    .btn {
      width: 160px;
      flex-direction: column;
      align-items: stretch;
    }

    .bt,
    .deleteBtn {
      width: 100%;
      padding: 0.55rem 0.75rem;
    }
  }

  /* ============================
      TABLET <= 768px
  ============================= */
  @media (max-width: 768px) {
    .businessContainer {
      padding-bottom: 72px; /* Space for bottom buttons */
    }

    .businessContent {
      flex-direction: column;
      gap: 0.75rem;
    }

    .btn {
      position: absolute;
      left: 16px;
      right: 16px;
      bottom: 12px;
      flex-direction: row;
      justify-content: flex-start;
      gap: 0.6rem;
      align-items: center;
      min-width: auto;
    }

    .bt,
    .deleteBtn {
      flex: 1;
      width: 100%;
      padding: 0.45rem 0.8rem;
      font-size: 14px;
    }

    .under {
      margin-top: 6px;
    }
  }

  /* ============================
      MOBILE <= 480px
  ============================= */
  @media (max-width: 480px) {
    padding: 0.4rem;

    .businessContainer {
      padding: 0.8rem;
      padding-bottom: 72px;
    }

    .businessContent {
      flex-direction: column;
      gap: 0.6rem;
    }

    .under {
      gap: 0.6rem;
      justify-content: flex-start;
    }

    .btn {
      left: 12px;
      right: 12px;
      bottom: 12px;
      flex-direction: row;
      justify-content: space-between;
      gap: 0.6rem;
    }

    .bt,
    .deleteBtn {
      padding: 0.5rem;
      font-size: 14px;
    }

    .extra {
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  }
`;
