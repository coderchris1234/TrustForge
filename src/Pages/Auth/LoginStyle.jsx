import styled from "styled-components";
import login from '../../assets/login.jpg';
export const LoginContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 100%;
  height: max-content;
  font-family: "Poppins", sans-serif;
  background-color: #fff;
  font-weight: 400;
  font-size: 16px;
  font-style: normal;
  line-height: 24px;
`;

export const LoginLeft = styled.div`
  width: 43%;
  background: linear-gradient(
      0deg,
      rgba(0, 70, 255, 0.25) 0%,
      rgba(0, 70, 255, 0.25) 100%
    ),
    url(${login});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const LoginRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  width: 50%;
  padding: 10rem;
  height: 100vh;
`;

export const FormBox = styled.div`
  width: 80%;
  max-width: 420px;
`;

export const FormTitle = styled.h2`
  display: block;
  text-align: center;
  margin-bottom: 12px;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: #1b1b1b;

  .title-text {
    color: #0046ff;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 145%;
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

export const CreateButton = styled.button`
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

export const GoogleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: 0.3s;
  width: 30%;
  margin: 0 auto;

  &:hover {
    background-color: #f9f9f9;
  }

  img {
    width: 25px;
    height: 25px;
  }
`;

export const LoginText = styled.p`
  text-align: center;
  margin-top: 15px;
  font-size: 14px;

  span {
    color: #ff3c00;
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
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
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;
