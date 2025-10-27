import React, { useState, useMemo } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  ResetPasswordContainer,
  ResetPasswordLeft,
  ResetPasswordRight,
  FormBox,
  FormTitle,
  InputField,
  CreateButton,
  OrText,
  LoginText,
  TermsText,
  Label,
  ErrorText,
} from "./ResetPassStyle"; 
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.newPassword) newErrors.newPassword = "New password required";
    else if (!passwordRegex.test(formData.newPassword))
      newErrors.newPassword =
        "Password must include uppercase, lowercase, number, and symbol (min 8 chars)";

    if (formData.newPassword !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Password reset successfully!");
      navigate("/login");
    }, 1600);
  };

  const checks = useMemo(() => {
    const hasLower = /[a-z]/.test(formData.newPassword);
    const hasUpper = /[A-Z]/.test(formData.newPassword);
    const hasNumber = /\d/.test(formData.newPassword);
    const hasSymbol = /[@$!%*?&#]/.test(formData.newPassword);
    const minLength = formData.newPassword.length >= 8;
    const strong =
      hasLower && hasUpper && (hasNumber || hasSymbol) && minLength;
    return {
      hasLower,
      hasUpper,
      hasNumberOrSymbol: hasNumber || hasSymbol,
      minLength,
      strong,
    };
  }, [formData.newPassword]);

  const isFormValid = useMemo(() => {
    return checks.strong && formData.newPassword === formData.confirmPassword;
  }, [checks, formData]);

  return (
    <ResetPasswordContainer>
      <ResetPasswordLeft />
      <ResetPasswordRight>
        <FormBox>
          <FormTitle>
            <div className="title-text">
              Reset <span>Password.</span>
            </div>
            <br />
            <small>
              Enter a new password for your account. <br /> Make sure it's strong and easy for you to remember.
            </small>
          </FormTitle>

          <form onSubmit={onSubmit}>
            <Label>
              Enter New Password <span className="required">*</span>
            </Label>
            <div style={{ position: "relative" }}>
              <InputField
                name="newPassword"
                placeholder="Enter new password"
                type={showNew ? "text" : "password"}
                value={formData.newPassword}
                onChange={handleChange}
                style={{ paddingRight: "40px" }}
              />
              <span
                onClick={() => setShowNew((s) => !s)}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#888",
                }}
              >
                {showNew ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.newPassword && <ErrorText>{errors.newPassword}</ErrorText>}

            <Label>
              Re-enter New Password <span className="required">*</span>
            </Label>
            <div style={{ position: "relative" }}>
              <InputField
                name="confirmPassword"
                placeholder="Confirm password"
                type={showConfirm ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{ paddingRight: "40px" }}
              />
              <span
                onClick={() => setShowConfirm((s) => !s)}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#888",
                }}
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.confirmPassword && <ErrorText>{errors.confirmPassword}</ErrorText>}

            <div style={{ marginTop: 12, marginBottom: 8, fontSize: 14 }}>
              <ChecklistItem ok={checks.strong}>
                Password strength: {checks.strong ? "Strong" : "Weak"}
              </ChecklistItem>
              <ChecklistItem ok={checks.minLength}>At least 8 characters</ChecklistItem>
              <ChecklistItem ok={checks.hasNumberOrSymbol}>Contains a number or symbol</ChecklistItem>
              <ChecklistItem ok={checks.hasUpper}>Contains an uppercase letter</ChecklistItem>
            </div>

            <CreateButton type="submit" disabled={!isFormValid}>
              {loading ? "Resetting..." : "Reset Password"}
            </CreateButton>
          </form>

          <OrText style={{ marginTop: 14 }}> </OrText>

          <LoginText style={{ marginTop: 8 }}>
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Log In</span>
          </LoginText>

          <TermsText style={{ marginTop: 10 }}>
            By resetting your password, you agree to our{" "}
            <a href="#" onClick={(e) => e.preventDefault()}>
              Terms and Conditions
            </a>.
          </TermsText>
        </FormBox>
      </ResetPasswordRight>
    </ResetPasswordContainer>
  );
};

export default ResetPassword;

const ChecklistItem = ({ children, ok }) => (
  <div
    style={{
      display: "flex",
      gap: 8,
      alignItems: "center",
      color: ok ? "#0b8f3b" : "#666",
      marginBottom: 6,
    }}
  >
    <span
      style={{
        width: 18,
        height: 18,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        background: ok ? "#e6f7ec" : "#f5f5f5",
        color: ok ? "#0b8f3b" : "#999",
        fontWeight: 700,
        fontSize: 12,
      }}
    >
      {ok ? "✓" : ""}
    </span>
    <span>{children}</span>
  </div>
);
