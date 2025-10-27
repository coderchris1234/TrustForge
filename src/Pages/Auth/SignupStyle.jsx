import styled from "styled-components";
import signup from '../../assets/signup.jpg';
export const SignupContainer = styled.div`
  display: flex;
  gap: 20px;
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

export const SignupLeft = styled.div`
  display: flex;
  height: 100vh;
  width: 40%;
  position: fixed;
  left: 0%;
  background: linear-gradient(
      0deg,
      rgba(0, 70, 255, 0.25) 0%,
      rgba(0, 70, 255, 0.25) 100%
    ),
    url(${signup});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const SignupRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  width: 40%;
  position: relative;
  left: 20%;
  padding: 20px;
`;

export const FormBox = styled.div`
  width: 80%;
  max-width: 400px;
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;

  span {
    color: #0066ff;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  transition: 0.3s;

  &:focus {
    border-color: #0066ff;
    outline: none;
  }
`;

export const SelectField = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
  margin-bottom: 10px;
  background-color: #fff;
`;

export const PhoneField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0 10px;
  margin-bottom: 10px;
  background-color: #fff;

  .country-select {
    display: flex;
    align-items: center;
    gap: 6px;
    background-color: #f5f5f5;
    border-radius: 6px;
    padding: 4px 3px;
    cursor: pointer;
  }

  select {
    border: none;
    background: transparent;
    font-size: 14px;
    outline: none;
    cursor: pointer;
  }

  input {
    border: none;
    flex: 1;
    padding: 10px 0;
    outline: none;
    font-size: 14px;
  }

  svg {
    width: 24px;
    height: 18px;
    border-radius: 3px;
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
 background-color: ${props => (props.disabled ? "#144b9e" : "#0066ff")};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${props => (props.disabled ? 0.8 : 1)};
  transition: background-color 150ms ease, opacity 150ms ease;

  &:hover {
    background-color: ${props => (props.disabled ? "#144b9e" : "#0051cc")};
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
