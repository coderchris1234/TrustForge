import styled from "styled-components";

export const PageWrap = styled.div`
  width: 100%;
  padding: 32px 48px;
  background: #f3f5f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding-right: 5rem;
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    animation: fadeIn 0.2s ease-out;

    .logout-modal {
      background: #fff;
      padding: 3rem 5rem;
      border-radius: 10px;
      width: 50%;
      animation: scaleIn 0.2s ease-out;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        text-align: center;
        width: 80%;
      }
    }

    .logout-modal .buttons {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      width: 60%;
    }

    .logout-btn {
      background: #0046ff;
      padding: 10px;
      border: none;
      color: white;
      border-radius: 6px;
      cursor: pointer;
      width: 50%;
      font-size: 15px;
    }

    .cancel-btn {
      background: transparent;
      padding: 10px;
      border: 1px solid grey;
      border-radius: 6px;
      cursor: pointer;
      width: 50%;
      font-size: 15px;
    }

    .view1 {
      background-color: #0046ff;
      width: 80%;
      margin: 0 auto;
      color: #ffff;
      border: none;
      padding: 0.5rem;
      border-radius: 6px;
      cursor: pointer;
    }

    @media (max-width: 480px) {
      padding: 18px 16px;
    }
  }
`;

export const Card = styled.div`
  width: 98%;
  background: #ffffff;
  border-radius: 8px;
  padding: 28px 34px;
  box-shadow: 0 1px 12px rgba(15, 23, 42, 0.06);
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 18px;
    width: 100%;
    border-radius: 10px;
  }
`;

export const TitleBlock = styled.div`
  margin-bottom: 18px;
`;

export const MainTitle = styled.h1`
  font-size: 20px;
  margin: 0;
  color: #111827;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const SubTitle = styled.p`
  margin: 6px 0 0;
  color: #6b7280;
  font-size: 13px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const StepInfo = styled.div`
  margin-top: 12px;
  margin-bottom: 24px;
  background-color: #fff;
  border-radius: 8px;
  width: 98%;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 480px) {
    padding: 10px;
    gap: 12px;
  }
`;

export const StepLabel = styled.div`
  font-size: 13px;
  color: #336bff;
  margin-bottom: 8px;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 6px;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: #e6e9ef;
  border-radius: 6px;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 5px;
  }
`;

export const ProgressFill = styled.div`
  height: 100%;
  background: #336bff;
  border-radius: 6px;
  transition: width 350ms ease;
`;

export const StepNames = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 0;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    margin-top: 8px;
    justify-content: flex-start;
    gap: 8px;
    /* allow compact appearance on mobile */
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 4px;
  }
`;

export const StepName = styled.div`
  font-size: 16px;
  color: ${(p) => (p.active ? "#336bff" : "#9ca3af")};
  font-weight: ${(p) => (p.active ? 600 : 500)};

  @media (max-width: 480px) {
    font-size: 13px;
    white-space: nowrap;
  }
`;

export const FormArea = styled.div`
  padding: 6px 0 26px 0;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.9rem;
    padding-bottom: 18px;
  }
`;

export const SectionTitle = styled.h3`
  margin: 6px 0 18px;
  font-size: 1.5rem;
  color: #111827;

  @media (max-width: 480px) {
    margin: 6px 0 12px;
    font-size: 1.15rem;
  }
`;

export const FieldRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 14px;

  .inputSelect {
    background-color: #f3f5f8;
    border: none;
    outline: none;
    padding: 0.5rem 0.2rem;
    border-radius: 5px;
  }

  .fund {
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      flex: 1;

      select {
        padding: 0.4rem 0.2rem;
        border-radius: 5px;
        background-color: #f3f5f8;
        border: none;
        outline: none;
      }
      input {
        padding: 0.5rem 0.2rem;
        border-radius: 5px;
        background-color: #f3f5f8;
        border: none;
        outline: none;
      }
    }
  }

  .submission {
    background-color: var(--primary_color_100);
    padding: 1rem;
    border-radius: 8px;
    color: var(--primary_color_500);
    font-weight: 400;
    font-family: "Poppins", sans-serif;

    ul {
      padding-left: 2rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
    margin-bottom: 12px;

    .fund {
      flex-direction: column;
      gap: 8px;

      div {
        width: 100%;
      }
    }

    .submission {
      padding: 12px;
      ul {
        padding-left: 1.25rem;
      }
    }
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #1b1b1b;
  margin-bottom: 5px;

  &::after {
    content: "*";
    color: red;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 6px;
  }
`;

export const Input = styled.input`
  height: 40px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e6e9ef;
  background: #fafafa;
  outline: none;
  font-size: 13px;
  &:focus {
    border-color: #c7ddff;
    box-shadow: 0 0 0 3px rgba(0, 70, 255, 0.06);
    background: #fff;
  }

  @media (max-width: 480px) {
    height: 42px;
    font-size: 13px;
  }
`;

export const Textarea = styled.textarea`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e6e9ef;
  background: #fafafa;
  font-size: 13px;
  resize: vertical;
  &:focus {
    border-color: #c7ddff;
    box-shadow: 0 0 0 3px rgba(0, 70, 255, 0.06);
    background: #fff;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 9px 10px;
  }
`;

export const UploadWrapper = styled.div`
  display: flex;
  cursor: pointer;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const UploadBox = styled.div`
  width: 320px;
  padding: 2rem;
  border-radius: 8px;
  border: 1px dashed #d1d5db;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 13px;
  background: #fafafa;
  color: var(--primary_color_400);

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
    font-size: 13px;
  }
`;

export const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;

  @media (max-width: 480px) {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
  }
`;

export const BackButton = styled.button`
  background: transparent;
  color: #6b7280;
  border: none;
  font-size: 14px;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 8px;
  &:disabled {
    color: #c7ccd4;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 8px 10px;
  }
`;

export const NextButton = styled.button`
  background: #00a3ff;
  color: #ffffff;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #007ad9;
  }

  @media (max-width: 480px) {
    padding: 8px 14px;
    font-size: 13px;
    border-radius: 8px;
    margin-left: auto;
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background: #00a3ff; /* optional: keep background same on disabled */
    }
  }
`;
