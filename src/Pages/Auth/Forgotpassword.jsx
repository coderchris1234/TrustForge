import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  ForgotPasswordContainer,
  ForgotPasswordLeft,
  ForgotPasswordRight,
  FormBox,
  FormTitle,
  InputField,
  ConfirmButton,
  OrText,
  LoginText,
  TermsText,
  Label,
  ErrorText,
} from "./ForgotPassStyle";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Enter a valid email (must include @ and .com)");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Password reset link / code sent to your email (demo)");
      navigate("/login");
    }, 1400);
  };

  return (
    <ForgotPasswordContainer>
      <ForgotPasswordLeft />

      <ForgotPasswordRight>
        <FormBox>
          <FormTitle>
            <div className="title-text">
              Forgot <span>Password.</span>
            </div>
            <small
              style={{ fontWeight: 400, display: "block", color: "#1B1B1B" }}
            >
              Don't worry, it happens! Enter your email address and we'll send a
              link to reset your password.
            </small>
          </FormTitle>

          <form onSubmit={handleSubmit}>
            <Label>
              Email Address <span className="required">*</span>
            </Label>
            <InputField
              name="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
            />
            {error && <ErrorText>{error}</ErrorText>}

            <ConfirmButton type="submit" disabled={!email || loading}>
              {loading ? "Sending..." : "Confirm"}
            </ConfirmButton>
          </form>

          <OrText style={{ marginTop: 12 }}> </OrText>

          <LoginText style={{ marginTop: 8, color: "#1B1B1B" }}>
            Remember password?{" "}
            <span onClick={() => navigate("/login")}>Log In</span>
          </LoginText>

          <TermsText style={{ marginTop: 10 }}>
            By requesting a password reset, you agree to our{" "}
            <a href="#" onClick={(e) => e.preventDefault()}>
              Terms and Conditions
            </a>
            .
          </TermsText>
        </FormBox>
      </ForgotPasswordRight>
    </ForgotPasswordContainer>
  );
};

export default ForgotPassword;
