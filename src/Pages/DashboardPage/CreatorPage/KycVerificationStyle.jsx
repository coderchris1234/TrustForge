import styled from "styled-components";

/* breakpoints */
const breakpoints = {
  mobile: "480px",
  tablet: "768px",
};

export const KycContainer = styled.div`
  width: 93%;
  margin: 0 auto;
  margin: 1rem;
  box-sizing: border-box;

  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    animation: fadeIn 0.2s ease-out;
    padding: 20px; /* ensure spacing on small screens */

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
      box-sizing: border-box;

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
      box-sizing: border-box;
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
      box-sizing: border-box;
    }

    .cancel-btn {
      background: transparent;
      padding: 10px;
      border: 1px solid grey;
      border-radius: 6px;
      cursor: pointer;
      width: 50%;
      font-size: 15px;
      box-sizing: border-box;
    }

    .okay {
      background-color: #0046ff;
      width: 50%;
      margin: 0 auto;
      color: #ffff;
      border: none;
      padding: 0.5rem;
      border-radius: 6px;
      cursor: pointer;
    }
  }

  .inputSelect {
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #e6e9ef;
    background: #fafafa;
    font-size: 13px;
    outline: none;
    box-sizing: border-box;

    @media (max-width: ${breakpoints.tablet}) {
      padding: 0.9rem;
      font-size: 13px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      padding: 0.75rem;
      font-size: 12.5px;
    }
  }

  .WhyKyc {
    border-radius: 12px;
    border: 0.5px solid lightgray;
    background: #d6e8ff;
    padding: 1rem;
    border: none;
    box-sizing: border-box;

    p {
      color: #0038cc;
      font-size: 22px;
      margin: 0 0 6px 0;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin: 0;
      padding: 0;
    }

    ul li {
      position: relative;
      padding-left: 1.5rem;
      display: flex;
      align-items: center;
      color: #0038cc;
      font-size: 18px;
    }

    ul li::before {
      content: "";
      position: absolute;
      left: 0;
      width: 8px;
      height: 8px;
      border: 2px solid #336bff;
      border-radius: 50%;
      background-color: transparent;
    }

    @media (max-width: ${breakpoints.tablet}) {
      padding: 0.9rem;

      p {
        font-size: 20px;
      }

      ul li {
        font-size: 16px;
      }
    }

    @media (max-width: ${breakpoints.mobile}) {
      padding: 0.8rem;

      p {
        font-size: 18px;
      }

      ul li {
        font-size: 15px;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 95%;
    margin: 0.5rem auto;

    .WhyKyc {
      padding: 0.8rem;
      ul {
        gap: 0.4rem;
      }
    }
  }

  /* modal responsive tweaks (tablet + mobile) */
  @media (max-width: ${breakpoints.tablet}) {
    .modal-overlay {
      align-items: center;
      padding: 24px;

      .logout-modal {
        width: 80%;
        padding: 2rem;
      }

      .logout-modal .buttons {
        width: 100%;
        flex-direction: column;
        gap: 12px;
      }

      .logout-btn,
      .cancel-btn,
      .okay {
        width: 100%;
      }

      .logout-modal p {
        width: 100%;
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    .modal-overlay {
      align-items: flex-start;
      padding-top: 238px;

      .logout-modal {
        width: 100%;
        max-width: 420px;
        padding: 1.25rem;
      }

      .logout-modal .buttons {
        width: 100%;
        flex-direction: column;
        gap: 10px;
      }

      .logout-btn,
      .cancel-btn,
      .okay {
        width: 100%;
        padding: 10px;
        font-size: 14px;
      }
    }
  }
`;

/* ---------------- PageWrap ---------------- */
export const PageWrap = styled.div`
  width: 100%;
  /* padding: 32px 48px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  /* padding-right: 5rem; */

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px;
  }
`;

/* ---------------- Card ---------------- */
export const Card = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 8px;
  padding: 28px 34px;
  box-shadow: 0 1px 12px rgba(15, 23, 42, 0.06);
  box-sizing: border-box;
  margin-top: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px;
    border-radius: 10px;
  }
`;

/* ---------------- StepInfo ---------------- */
export const StepInfo = styled.div`
  margin-top: 12px;
  margin-bottom: 24px;
  background-color: #fff;
  border-radius: 8px;
  width: 100%;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    gap: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 1rem;
    padding: 0.8rem;
  }
`;

/* ---------------- StepLabel ---------------- */
export const StepLabel = styled.div`
  color: #336bff;
  margin-bottom: 8px;
  font-size: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

/* ---------------- ProgressBar ---------------- */
export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: #e6e9ef;
  border-radius: 6px;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    height: 5px;
  }
`;

export const ProgressFill = styled.div`
  height: 100%;
  background: #336bff;
  border-radius: 6px;
  transition: width 350ms ease;
`;

/* ---------------- StepNames ---------------- */
export const StepNames = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0;

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
`;

/* ---------------- StepName ---------------- */
export const StepName = styled.div`
  font-size: 16px;
  color: ${(p) => (p.active ? "#336bff" : "#9ca3af")};
  font-weight: ${(p) => (p.active ? 600 : 500)};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

/* ---------------- FormArea ---------------- */
export const FormArea = styled.div`
  padding: 6px 0 26px 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .profilePic {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .imageContainer {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      box-sizing: border-box;
    }

    span {
      background-color: blue;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      position: absolute;
      right: 10px;
      bottom: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      z-index: 1;
    }
  }

  .Bank {
    padding: 2rem;
    display: flex;
    flex-direction: column;

    .bankDetails {
      display: flex;
      gap: 1rem;
    }

    .secure {
      background-color: var(--primary_color_300);
      padding: 1rem;
      display: flex;
      align-items: center;
      border-radius: 6px;

      span {
        color: var(--primary_color_500);
        font-size: 15px;
      }

      @media (max-width: ${breakpoints.tablet}) {
        padding: 0.8rem;
        gap: 0.6rem;

        span {
          font-size: 14px;
        }
      }

      @media (max-width: ${breakpoints.mobile}) {
        padding: 0.7rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;

        span {
          font-size: 13px;
        }
      }
    }
  }

  .Upload {
    border: 1px dashed lightgray;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    .profilePic {
      padding: 1.5rem;
      .imageContainer {
        width: 100px;
        height: 100px;
      }
      span {
        width: 28px;
        height: 28px;
      }
    }

    .Bank {
      padding: 1.5rem;

      .bankDetails {
        flex-direction: column;
      }
    }

    .Upload {
      padding: 2rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    .profilePic {
      padding: 1rem;

      .imageContainer {
        width: 80px;
        height: 80px;
      }

      span {
        width: 28px;
        height: 28px;
        right: 6px;
        bottom: 2px;
      }
    }

    .Bank {
      padding: 1rem;

      .bankDetails {
        flex-direction: column;
      }
    }

    .Upload {
      padding: 1rem;
    }
  }
`;

/* ---------------- SectionTitle ---------------- */
export const SectionTitle = styled.h3`
  margin: 6px 0 18px;
  font-size: 1.5rem;
  color: #111827;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.3rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.1rem;
    text-align: center;
  }
`;

/* ---------------- FieldRow ---------------- */
export const FieldRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 14px;

  .Name {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    div {
      width: 30%;
      display: flex;
      flex-direction: column;
      flex: 1;
      box-sizing: border-box;
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

  @media (max-width: ${breakpoints.tablet}) {
    .Name {
      flex-direction: column;
      gap: 1rem;
      div {
        width: 100%;
      }
    }
  }
`;

/* ---------------- Label, Input, SelectInput, Textarea ---------------- */
export const Label = styled.label`
  font-size: 1rem;
  color: #1b1b1b;
  margin-bottom: 5px;

  &::after {
    content: "*";
    color: red;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
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
  box-sizing: border-box;

  &:focus {
    border-color: #c7ddff;
    box-shadow: 0 0 0 3px rgba(0, 70, 255, 0.06);
    background: #fff;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 38px;
  }
`;

export const SelectInput = styled.select`
  height: 40px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e6e9ef;
  background: #fafafa;
  outline: none;
  font-size: 13px;
  box-sizing: border-box;

  &:focus {
    border-color: #c7ddff;
    box-shadow: 0 0 0 3px rgba(0, 70, 255, 0.06);
    background: #fff;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 38px;
  }
`;

export const Textarea = styled.textarea`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e6e9ef;
  background: #fafafa;
  font-size: 13px;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    border-color: #c7ddff;
    box-shadow: 0 0 0 3px rgba(0, 70, 255, 0.06);
    background: #fff;
  }
`;

/* ---------------- UploadWrapper + UploadBox ---------------- */
export const UploadWrapper = styled.div`
  display: flex;
  cursor: pointer;
  gap: 1rem;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 0.75rem;
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
  color: var(--primary_color_400);
  background: #fafafa;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    padding: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    padding: 1rem;
  }
`;

/* ---------------- ActionRow (already had responsiveness) ---------------- */
export const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 1rem;

    button {
      width: 100%;
    }
  }
`;

/* ---------------- Buttons ---------------- */
export const BackButton = styled.button`
  background: transparent;
  color: #6b7280;
  border: 1px solid var(--neutral_gray_color_600);
  font-size: 14px;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 8px;
  box-sizing: border-box;

  &:disabled {
    color: #c7ccd4;
    cursor: not-allowed;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
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
  box-sizing: border-box;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover {
    background: #007ad9;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    padding: 0.9rem;
  }
`;

