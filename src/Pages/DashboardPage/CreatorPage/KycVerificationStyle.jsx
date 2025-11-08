import styled from "styled-components";

export const KycContainer = styled.div`
  /* background-color: red; */
  width: 93%;
  margin: 0 auto;
  margin: 1rem;

  .WhyKyc {
    border-radius: 12px;
    border: 0.5px solid lightgray;
    background: #d6e8ff;
    padding: 1rem;
    border: none;

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    ul li {
      position: relative;
      padding-left: 1.5rem; /* gives space for the circle */
      display: flex;
      align-items: center;
    }

    /* small round bullet */
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
`;

export const PageWrap = styled.div`
  width: 100%;
  padding: 32px 48px;
  /* background: #f3f5f8; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding-right: 5rem;
`;

export const Card = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 8px;
  padding: 28px 34px;
  box-shadow: 0 1px 12px rgba(15, 23, 42, 0.06);
  box-sizing: border-box;
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
`;

export const StepLabel = styled.div`
  font-size: 13px;
  color: #336bff;
  margin-bottom: 8px;
  font-size: 1rem;
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
  gap: 0;
  justify-content: space-between;
  align-items: center;
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

  .profilePic {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .imageContainer {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background-color: grey;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    span {
      background-color: blue;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      position: absolute;
      right: 25rem;
      top: 9rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .Bank {
    /* background-color: red; */
    padding: 2rem;
    display: flex;
    flex-direction: column;

    .bankDetails {
      /* background-color: pink; */
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
`;

export const SectionTitle = styled.h3`
  margin: 6px 0 18px;
  font-size: 1.5rem;
  color: #111827;
`;

export const FieldRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 14px;

  .Name {
    /* background-color: blue; */
    /* padding: 1rem; */
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    div {
      /* background-color: grey; */
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
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #1b1b1b;
  margin-bottom: 5px;

  &::after {
    content: "*";
    color: red;
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
`;

export const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
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
`;
