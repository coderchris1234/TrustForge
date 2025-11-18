import React from "react";
import styled from "styled-components";

/* breakpoints */
const breakpoints = {
  mobile: "480px",
  mobileLarge: "768px",
  tablet: "1024px",
};

export const Overlay = styled.div`
  position: fixed;
  inset: 0; /* shorthand for top:0; right:0; bottom:0; left:0 */
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 16px; /* ensure modal doesn't touch screen edges on mobile */

  /* On very small screens place modal near top and allow scrolling inside */
  @media (max-width: ${breakpoints.mobile}) {
    align-items: flex-start;
    padding: 12px;
    overflow-y: auto;
  }
`;

export const ModalBox = styled.div`
  background: #fff;
  width: 40%;
  max-width: 900px;
  min-width: 320px;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  max-height: calc(100vh - 48px);
  overflow-y: auto;

  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid #fff;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* header area alignment helper */
  .upCase {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
  }

  .input {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    select {
      padding: 0.9rem;
      border-radius: 8px;
      border: 1px solid lightgray;
      outline: none;
      font-size: 14px;
      width: 100%;
      box-sizing: border-box;
      background: #fff;
    }

    button {
      width: 100%;
      padding: 0.95rem;
      border: none;
      border-radius: 12px;
      background-color: var(--primary_color_500);
      color: #fff;
      cursor: pointer;
      font-size: 15px;
    }

    input {
      padding: 0.9rem;
      width: 100%;
      border-radius: 12px;
      border: 1px solid lightgray;
      outline: none;
      font-size: 14px;
      box-sizing: border-box;
    }

    .meeting {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0.5rem;
    }
  }

  .dateInput {
    display: flex;
    justify-content: space-between;
    gap: 12px;

    /* ensure children stretch when stacked */
    input,
    select {
      flex: 1 1 0;
    }
  }

  /* --------- Tablet --------- */
  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
    padding: 20px;
    border-radius: 14px;
    max-height: calc(100vh - 32px);

    .input {
      gap: 0.9rem;

      select,
      input {
        padding: 0.85rem;
        font-size: 14px;
      }

      button {
        padding: 0.9rem;
        font-size: 15px;
      }
    }

    .dateInput {
      gap: 10px;
    }
  }

  /* --------- Large phones / small tablets --------- */
  @media (max-width: ${breakpoints.mobileLarge}) {
    width: 90%;
    padding: 18px;
    border-radius: 12px;
    max-height: calc(100vh - 24px);

    .input {
      gap: 0.75rem;

      select,
      input {
        padding: 0.8rem;
        font-size: 14px;
      }

      button {
        padding: 0.85rem;
        font-size: 14px;
      }
    }

    .upCase {
      flex-wrap: wrap;
      gap: 8px;
      align-items: flex-start;
    }

    .dateInput {
      flex-direction: column;
      align-items: stretch;
      gap: 8px;
    }
  }

  /* --------- Small phones --------- */
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    padding: 14px;
    border-radius: 10px;
    min-width: 0;
    max-height: calc(100vh - 20px);

    .input {
      padding: 0.75rem;
      gap: 0.6rem;

      select,
      input {
        padding: 0.7rem;
        font-size: 13px;
      }

      button {
        padding: 0.8rem;
        font-size: 14px;
      }
    }

    .upCase {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }

    .dateInput {
      flex-direction: column;
      gap: 8px;
    }
  }
`;
