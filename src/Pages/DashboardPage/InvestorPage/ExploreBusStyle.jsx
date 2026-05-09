import styled from "styled-components";

export const Explorecontainer = styled.div`
  width: 100%;
  padding: 2rem 2rem 4rem;
  font-family: "Poppins", sans-serif;
  max-width: 1200px;
  margin: 0 auto;

  .exploreText {
    margin-bottom: 1.75rem;

    h1 {
      font-size: 1.4rem;
      font-weight: 800;
      color: #04091a;
      letter-spacing: -0.5px;
      margin: 0 0 4px;
    }

    p {
      font-size: 0.875rem;
      color: #6b7280;
      margin: 0;
    }
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: nowrap;
  margin-bottom: 1.5rem;

  .search {
    flex: 1;
    height: 44px;
    background: #ffffff;
    border: 1.5px solid #e5e7eb;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 14px;
    transition: border-color 0.2s ease;
    min-width: 0;

    &:focus-within {
      border-color: #0046ff;
      box-shadow: 0 0 0 3px rgba(0,70,255,0.08);
    }

    svg { color: #9ca3af; flex-shrink: 0; }

    .input {
      flex: 1;
      border: none;
      outline: none;
      background: transparent;
      font-size: 0.875rem;
      font-family: "Poppins", sans-serif;
      color: #04091a;

      &::placeholder { color: #9ca3af; }
    }
  }

  .mind {
    height: 44px;
    padding: 0 14px;
    border: 1.5px solid #e5e7eb;
    border-radius: 10px;
    background: #ffffff;
    font-size: 0.875rem;
    font-family: "Poppins", sans-serif;
    color: #374151;
    cursor: pointer;
    outline: none;
    transition: border-color 0.2s ease;
    appearance: none;
    padding-right: 32px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;

    &:focus { border-color: #0046ff; }
  }

  .filter {
    height: 44px;
    padding: 0 16px;
    border: 1.5px solid #e5e7eb;
    border-radius: 10px;
    background: #ffffff;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    transition: all 0.2s ease;
    white-space: nowrap;

    &:hover {
      border-color: #0046ff;
      color: #0046ff;
    }

    p { margin: 0; }
  }

  /* Filter drawer */
  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(4,9,26,0.5);
    z-index: 20;
    backdrop-filter: blur(2px);
  }

  .drawer {
    position: fixed;
    top: 0;
    right: -380px;
    width: 360px;
    height: 100vh;
    background: #ffffff;
    padding: 2rem 1.5rem;
    box-shadow: -8px 0 32px rgba(4,9,26,0.12);
    transition: right 0.3s ease;
    z-index: 9999;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    &.show { right: 0; }

    .drawerHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 1rem;
        font-weight: 700;
        color: #04091a;
        margin: 0;
      }
    }

    .closeBtn {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: #f3f4f6;
      border: none;
      cursor: pointer;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #374151;
      transition: background 0.2s ease;

      &:hover { background: #e5e7eb; }
    }

    .sub {
      font-size: 0.8rem;
      color: #9ca3af;
      margin: -0.75rem 0 0;
    }

    .title {
      font-size: 0.8rem;
      font-weight: 700;
      color: #04091a;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 0;
    }

    .list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .checkbox {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.875rem;
      color: #374151;
      cursor: pointer;

      input[type="checkbox"] {
        width: 16px;
        height: 16px;
        accent-color: #0046ff;
        cursor: pointer;
      }
    }

    .clearBtn {
      height: 44px;
      width: 100%;
      border: 1.5px solid #e5e7eb;
      background: transparent;
      border-radius: 10px;
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 600;
      color: #374151;
      font-family: "Poppins", sans-serif;
      transition: all 0.2s ease;
      margin-top: auto;

      &:hover {
        border-color: #0046ff;
        color: #0046ff;
      }
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.5rem;

    .search { min-width: 0; }

    .drawer {
      width: 100%;
      right: -100%;
    }
  }
`;

export const Text = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1.25rem;
`;
