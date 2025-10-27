import styled from "styled-components";
import forgotpassword from "../../assets/forgotpassword.jpg";

export const ForgotPasswordContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
  height: max-content;
  font-family: "Poppins", sans-serif;
  background-color: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const ForgotPasswordLeft = styled.div`
  display: flex;
  width: 43%;
  height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(0, 70, 255, 0.25) 0%,
      rgba(0, 70, 255, 0.25) 100%
    ),
    url(${forgotpassword});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ForgotPasswordRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  width: 50%;
  padding: 20px;

`;

export const FormBox = styled.div`
  width: 80%;
  max-width: 420px;
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 12px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  color: #1b1b1b;

  .title-text {
    color: #1b1b1b;
    font-family: Poppins;
    font-size: 28px;
    font-weight: 600;
    line-height: 160%;
  }

  span {
    color: #0066ff;
  }

  small {
    font-size: 14px;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  transition: 0.3s;
  margin-bottom: 6px;

  &:focus {
    border-color: #0066ff;
    outline: none;
  }
`;

export const ConfirmButton = styled.button`
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: 600;
  width: 100%;
  margin-top: 18px;
  background-color: ${(props) => (props.disabled ? "#144b9e" : "#0066ff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.8 : 1)};
  transition: background-color 150ms ease, opacity 150ms ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#144b9e" : "#0051cc")};
  }
`;

export const OrText = styled.p`
  text-align: center;
  color: #888;
  font-size: 14px;
  margin: 15px 0 10px;
`;

export const LoginText = styled.p`
  text-align: center;
  margin-top: 15px;
  font-size: 14px;

  span {
    color: #ff3c00;
    cursor: pointer;
    font-weight: 500;
  }
`;

export const TermsText = styled.p`
  text-align: center;
  font-size: 12px;
  margin-top: 10px;
  color: #666;

  a {
    color: #0066ff;
    text-decoration: none;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  display: block;
  margin-top: 1rem;
  margin-bottom: 0.3rem;

  .required {
    color: red;
    margin-left: 3px;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.2rem;
  text-align: center;
`;
