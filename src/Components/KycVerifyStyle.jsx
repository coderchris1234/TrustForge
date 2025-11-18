import styled from "styled-components";

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
  }

  .WhyKyc {
    border-radius: 12px;
    border: 0.5px solid lightgray;
    background: #d6e8ff;
    padding: 1rem;
    border: none;

    p {
      color: #0038cc;
      font-size: 22px;
      margin: 0 0 8px 0;
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
      margin: 0;
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
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 0.5rem auto;

    .WhyKyc {
      padding: 0.8rem;
      ul {
        gap: 0.4rem;
      }
    }
  }
`;

export const PageWrap = styled.div`
  width: 100%;
  /* padding: 32px 48px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  /* padding-right: 5rem; */
  /* background-color: yellow; */

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const Card = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 8px;
  padding: 28px 34px;
  box-shadow: 0 1px 12px rgba(15, 23, 42, 0.06);
  box-sizing: border-box;
  /* background-color: green; */

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 10px;
  }
`;

export const StepInfo = styled.div`
  margin-top: 1rem;
  margin-bottom: 12px;
  background-color: #fff;
  /* background-color: red; */
  border-radius: 8px;
  width: 100%;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    padding: 0.8rem;
  }
`;

export const StepLabel = styled.div`
  font-size: 1rem;
  color: #336bff;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: #e6e9ef;
  border-radius: 6px;
  overflow: hidden;
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
  justify-content: space-between;
  align-items: center;
  gap: 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
`;

export const StepName = styled.div`
  font-size: 16px;
  color: ${(p) => (p.active ? "#336bff" : "#9ca3af")};
  font-weight: ${(p) => (p.active ? 600 : 500)};
`;

export const FormArea = styled.div`
  padding: 6px 0 26px 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;

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
      position: relative; // REQUIRED for positioning the span
      object-fit: cover;
      /* overflow: hidden; */
    }

    span {
      background-color: blue;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      position: absolute;
      right: 10px; // fix position to inside the edge
      bottom: 10px; // fix position to inside the edge
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

      span {
        color: var(--primary_color_500);
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

  @media (max-width: 768px) {
    .profilePic {
      padding: 1.5rem;
      .imageContainer {
        width: 100px;
        height: 100px;
      }
      span {
        width: 28px;
        height: 28px;
        right: 10px; // fix position to inside the edge
        bottom: 10px;
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

  @media (max-width: 480px) {
    .profilePic {
      padding: 1rem;
      position: relative;
      .imageContainer {
        width: 80px;
        height: 80px;
      }
      span {
        width: 28px;
        height: 28px;
        right: 6px; // fix position to inside the edge
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

export const SectionTitle = styled.h3`
  margin: 6px 0 18px;
  font-size: 1.5rem;
  color: #111827;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    text-align: center;
  }
`;

export const FieldRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 14px;
  box-sizing: border-box;

  .select {
    height: 40px;
    padding: 8px 12px;
    border: 1px solid lightgrey;
    border-radius: 8px;
    outline: none;
    background: #fff;
  }

  .Name {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    div {
      width: 30%;
      display: flex;
      flex-direction: column;
      flex: 1;
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

  @media (max-width: 768px) {
    .Name {
      flex-direction: column;
      gap: 1rem;
      div {
        width: 100%;
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

  &:focus {
    border-color: #c7ddff;
    box-shadow: 0 0 0 3px rgba(0, 70, 255, 0.06);
    background: #fff;
  }

  @media (max-width: 480px) {
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

  &:focus {
    border-color: #c7ddff;
    box-shadow: 0 0 0 3px rgba(0, 70, 255, 0.06);
    background: #fff;
  }

  @media (max-width: 480px) {
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

  &:focus {
    border-color: #c7ddff;
    box-shadow: 0 0 0 3px rgba(0, 70, 255, 0.06);
    background: #fff;
  }
`;

export const UploadWrapper = styled.div`
  display: flex;
  cursor: pointer;

  @media (max-width: 768px) {
    flex-direction: column;
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
  font-size: 13px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;

    button {
      width: 100%;
    }
  }
`;

export const BackButton = styled.button`
  background: transparent;
  color: #6b7280;
  border: 1px solid var(--neutral_gray_color_600);

  font-size: 14px;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 8px;

  &:disabled {
    color: #c7ccd4;
    cursor: not-allowed;
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover {
    background: #007ad9;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.9rem;
  }
`;
