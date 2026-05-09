import styled, { keyframes } from "styled-components";
import signup from "/signup.jpg";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const SignupContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;

  .loading-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .spinner {
    width: 48px;
    height: 48px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const SignupLeft = styled.div`
  width: 48%;
  min-height: 100vh;
  background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.55) 0%,
      rgba(0, 29, 104, 0.5) 100%
    ),
    url(${signup});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 2.5rem 3rem;
  position: sticky;
  top: 0;
  height: 100vh;

  img {
    height: 2.8rem;
    width: auto;
    cursor: pointer;
    object-fit: contain;
  }

  .Left_quote {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    blockquote {
      font-size: clamp(1.2rem, 2.5vw, 1.6rem);
      font-weight: 700;
      color: #ffffff;
      line-height: 1.4;
      margin: 0;
      letter-spacing: -0.3px;
    }

    p {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    min-height: 260px;
    height: 260px;
    position: relative;
    padding: 1.75rem 1.5rem;

    .Left_quote { display: none; }
  }
`;

export const SignupRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #ffffff;
  padding: 3rem 2rem 4rem;
  overflow-y: auto;

  @media (max-width: 900px) {
    padding: 3rem 1.5rem 4rem;
    align-items: flex-start;
  }
`;

export const FormBox = styled.div`
  width: 100%;
  max-width: 420px;
  animation: ${fadeInUp} 0.7s ease forwards;
`;

export const FormTitle = styled.div`
  margin-bottom: 2rem;

  .title-text {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--netural_black_color);
    letter-spacing: -0.5px;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .title-sub {
    font-size: 0.9rem;
    color: #6b7280;
    font-weight: 400;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.4rem;
  margin-top: 1.1rem;

  .required {
    color: var(--error_red_color_500);
    margin-left: 2px;
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 14px;
  border: 1.5px solid #e5e7eb;
  border-radius: 10px;
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
  color: var(--netural_black_color);
  background: #f9fafb;
  transition: all 0.2s ease;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: var(--primary_color_500);
    background: #ffffff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 70, 255, 0.08);
  }
`;

export const SelectField = styled.select`
  width: 100%;
  height: 48px;
  padding: 0 14px;
  border: 1.5px solid #e5e7eb;
  border-radius: 10px;
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
  color: var(--netural_black_color);
  background: #f9fafb;
  cursor: pointer;
  transition: all 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;

  &:focus {
    border-color: var(--primary_color_500);
    background-color: #ffffff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 70, 255, 0.08);
  }
`;

export const PhoneField = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  border: 1.5px solid #e5e7eb;
  border-radius: 10px;
  background: #f9fafb;
  overflow: hidden;
  transition: all 0.2s ease;

  &:focus-within {
    border-color: var(--primary_color_500);
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(0, 70, 255, 0.08);
  }

  .country-select {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 10px;
    border-right: 1.5px solid #e5e7eb;
    height: 48px;
    background: #f3f4f6;
    flex-shrink: 0;
    cursor: pointer;

    select {
      border: none;
      background: transparent;
      font-size: 0.8rem;
      font-family: "Poppins", sans-serif;
      outline: none;
      cursor: pointer;
      color: #374151;
    }
  }

  input {
    border: none;
    flex: 1;
    height: 48px;
    padding: 0 14px;
    outline: none;
    font-size: 0.9rem;
    font-family: "Poppins", sans-serif;
    background: transparent;
    color: var(--netural_black_color);

    &::placeholder {
      color: #9ca3af;
    }
  }
`;

export const CreateButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  margin-top: 1.5rem;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  background: ${(p) => (p.disabled ? "#93aff7" : "var(--primary_color_500)")};
  transition: all 0.25s ease;

  &:hover:not(:disabled) {
    background: var(--primary_color_700);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(0, 70, 255, 0.25);
  }
`;

export const OrText = styled.p`
  text-align: center;
  color: #9ca3af;
  font-size: 0.8rem;
  margin: 1.25rem 0;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 42%;
    height: 1px;
    background: #e5e7eb;
  }

  &::before { left: 0; }
  &::after { right: 0; }
`;

export const GoogleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #e5e7eb;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    border-color: #d1d5db;
    background: #f9fafb;
  }

  img {
    width: 22px;
    height: 22px;
  }
`;

export const LoginText = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 1.25rem;

  span {
    color: var(--primary_color_500);
    cursor: pointer;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TermsText = styled.p`
  text-align: center;
  font-size: 0.75rem;
  margin-top: 0.75rem;
  color: #9ca3af;

  a {
    color: var(--primary_color_500);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ErrorText = styled.p`
  color: var(--error_red_color_500);
  font-size: 0.775rem;
  margin-top: 0.3rem;
`;
