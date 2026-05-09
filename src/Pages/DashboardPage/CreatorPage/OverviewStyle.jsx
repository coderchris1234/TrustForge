import styled from "styled-components";

export const OverviewContent = styled.div`
  width: 100%;
  padding: 2rem 2rem 4rem;
  font-family: "Poppins", sans-serif;
  max-width: 1200px;
  margin: 0 auto;

  /* ── Page header ── */
  .Contenttitle_holder {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    gap: 1rem;
    flex-wrap: wrap;

    .ContentTitle {
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

    .QuickAction {
      .action {
        display: flex;
        gap: 10px;
        align-items: center;

        .quick {
          height: 40px;
          padding: 0 20px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
          font-family: "Poppins", sans-serif;
          border: none;
          background: #0046ff;
          color: #ffffff;

          p { color: #ffffff; margin: 0; font-size: 0.85rem; }

          &:hover {
            background: #002da3;
            transform: translateY(-1px);
            box-shadow: 0 6px 16px rgba(0,70,255,0.25);
          }
        }
      }
    }
  }

  /* ── Stat cards ── */
  .Overview-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;

    .box {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      transition: all 0.2s ease;

      &:hover {
        border-color: #c7d7ff;
        box-shadow: 0 4px 20px rgba(0,70,255,0.07);
        transform: translateY(-2px);
      }

      > div:first-child {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      p {
        font-size: 0.78rem;
        font-weight: 500;
        color: #6b7280;
        margin: 0;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      span {
        font-size: 1.75rem;
        font-weight: 800;
        color: #04091a;
        letter-spacing: -1px;
        line-height: 1;
      }

      > div:last-child {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background: #f0f2f8;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
    }
  }

  /* ── Recent section ── */
  .recentIdeas {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 1.5rem;

    .recent {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.25rem;

      p {
        font-size: 0.95rem;
        font-weight: 700;
        color: #04091a;
        margin: 0;
        letter-spacing: -0.3px;
      }

      button {
        height: 34px;
        padding: 0 16px;
        background: transparent;
        border: 1.5px solid #e5e7eb;
        border-radius: 8px;
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: 600;
        color: #374151;
        font-family: "Poppins", sans-serif;
        transition: all 0.2s ease;

        &:hover {
          border-color: #0046ff;
          color: #0046ff;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .Overview-content {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 3rem;

    .Contenttitle_holder {
      flex-direction: column;
      gap: 1rem;

      .QuickAction { width: 100%; }
    }
  }

  @media (max-width: 480px) {
    padding: 1rem 0.75rem 3rem;

    .Overview-content {
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem;

      .box {
        padding: 1.25rem 1rem;

        span { font-size: 1.4rem; }
      }
    }
  }
`;
