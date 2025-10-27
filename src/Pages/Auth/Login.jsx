import React, { useState, useMemo } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  LoginContainer,
  LoginLeft,
  LoginRight,
  FormBox,
  FormTitle,
  InputField,
  CreateButton,
  OrText,
  GoogleBtn,
  LoginText,
  TermsText,
  Label,
  ErrorText,
} from "./LoginStyle";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => {
        const updated = { ...prevErrors };
        delete updated[name];
        return updated;
      });
    }
  };

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email (must include @ and .com)";

    if (!formData.password) newErrors.password = "Password is required";
    else if (!passwordRegex.test(formData.password))
      newErrors.password =
        "Password must have uppercase, lowercase, number and symbol (min 8 chars)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Logged in successfully!");
      navigate("/dashboard");
    }, 1600);
  };

  const togglePassword = () => setShowPassword((s) => !s);

  const isFormValid = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const passwordOk = passwordRegex.test(formData.password);
    return emailOk && passwordOk;
  }, [formData]);

  return (
    <LoginContainer>
      <LoginLeft />

      <LoginRight>
        <FormBox>
          <FormTitle>
            <div className="title-text">Log In.</div>
            <small>
              Good to see you again. <br /> Log in to pick up where you left off.
            </small>
          </FormTitle>

          <form onSubmit={onSubmit}>
            <Label>
              Email Address <span className="required">*</span>
            </Label>
            <InputField
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}

            <Label>
              Password <span className="required">*</span>
            </Label>
            <div style={{ position: "relative" }}>
              <InputField
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="enter password"
                value={formData.password}
                onChange={handleChange}
                style={{ paddingRight: "40px" }}
              />
              <span
                onClick={togglePassword}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#888",
                }}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {errors.password && <ErrorText>{errors.password}</ErrorText>}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "12px",
              }}
            >
              <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  style={{ width: 16, height: 16, cursor: "pointer" }}
                />
                <span style={{ fontSize: 14 }}>Remember me</span>
              </label>

              <span
                onClick={() => navigate("/resetpassword")}
                style={{
                  fontSize: 14,
                  color: "black",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </span>
            </div>

            <CreateButton type="submit" disabled={!isFormValid}>
              {loading ? "Logging in..." : "Log In"}
            </CreateButton>
          </form>

          <OrText onClick={() => navigate("/verifyemail")}>
            Or log in with
          </OrText>

          <GoogleBtn
            onClick={() => toast("Google login not implemented in demo.")}
            role="button"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt="Google"
            />
          </GoogleBtn>

          <LoginText style={{ marginTop: 14 }}>
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")} style={{ color: "#DC2626" }}>
              Create one
            </span>
          </LoginText>

          <TermsText>
            By logging in, you agree to our{" "}
            <a href="#" onClick={(e) => e.preventDefault()}>
              Terms and Conditions
            </a>
            .
          </TermsText>
        </FormBox>
      </LoginRight>
    </LoginContainer>
  );
};

export default Login;
