import styled, { keyframes } from "styled-components";
import emailverify from "/emailverify.jpg";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const VerifyEmailContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;

  @media (max-width: 900px) { flex-direction: column; }
`;

export const VerifyEmailLeft = styled.div`
  width: 48%;
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,29,104,0.5) 100%),
    url(${emailverify});
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
    }

    p {
      font-size: 0.9rem;
      color: rgba(255,255,255,0.7);
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

export const VerifyEmailRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 3rem 2rem;
  min-height: 100vh;

  @media (max-width: 900px) {
    min-height: unset;
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
  margin-bottom: 2.5rem;

  .title-text {
    font-size: 1.75rem;
    font-weight: 700;
    color: #04091a;
    letter-spacing: -0.5px;
    line-height: 1.2;
    margin-bottom: 0.5rem;

    span { color: #0046ff; }
  }

  small {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 400;
    display: block;
    line-height: 1.6;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.75rem;
  margin-top: 1.25rem;
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
  background: ${(p) => (p.disabled ? "#93aff7" : "#0046ff")};
  transition: all 0.25s ease;

  &:hover:not(:disabled) {
    background: #002da3;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(0,70,255,0.25);
  }
`;

export const OrText = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;
  margin: 1.25rem 0;
`;

export const LoginText = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 1.25rem;

  button, span {
    color: #0046ff;
    cursor: pointer;
    font-weight: 600;
    background: none;
    border: none;
    padding: 0;
    font-family: "Poppins", sans-serif;
    font-size: 0.875rem;

    &:hover { text-decoration: underline; }
  }
`;

export const TermsText = styled.p`
  text-align: center;
  font-size: 0.75rem;
  margin-top: 0.75rem;
  color: #9ca3af;

  a {
    color: #0046ff;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`;

export const ErrorText = styled.p`
  color: #dc2626;
  font-size: 0.775rem;
  margin-top: 0.3rem;
`;
