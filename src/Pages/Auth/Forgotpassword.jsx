import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import axios from "axios";
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
  // const user = useSelector((state) => state.TrustForge.user);
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  // Dynamic endpoint selection based on role
  // const endpoints =
  //   user?.data?.role === "Investor"
  //     ? `${BaseUrl}/forgoti`
  //     : `${BaseUrl}/forgot`;

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e) => {
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

    try {
      // First, call the Investor endpoint
      const investorRes = await axios.post(`${BaseUrl}/forgoti`, { email });

      if (
        investorRes.data?.message?.toLowerCase().includes("investor not found")
      ) {
        // Investor not found → try Business Owner endpoint
        const businessRes = await axios.post(`${BaseUrl}/forgot`, { email });

        if (
          businessRes.data?.message?.toLowerCase().includes("user not found")
        ) {
          setError("User not found");
          toast.error("User not found");
        } else {
          toast.success("Password reset link has been sent to your email");
        }
      } else {
        // Investor found → success
        toast.success("Password reset link has been sent to your email");
      }
    } catch (err) {
      const msg =
        err.response?.data?.message || err.message || "Something went wrong";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
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
