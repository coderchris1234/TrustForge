import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


import {
  SignupContainer,
  SignupLeft,
  SignupRight,
  FormBox,
  FormTitle,
  InputField,
  SelectField,
  PhoneField,
  CreateButton,
  GoogleBtn,
  OrText,
  LoginText,
  TermsText,
  Label,
  ErrorText,
} from "./SignupStyle";
import ReactCountryFlag from "react-country-flag";
import { useNavigate } from 'react-router-dom'
import { useMemo } from "react";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [country, setCountry] = useState({
    name: "Nigeria",
    isoCode: "NG",
    code: "+234",
  });

  const countries = [
    { isoCode: "NG", code: "+234" },
    { isoCode: "GH", code: "+233" },
    { isoCode: "KE", code: "+254" },
    { isoCode: "US", code: "+1" },
  ];

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prevErrors) => {
        const updated = { ...prevErrors };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleCountryChange = (e) => {
    const selected = countries.find((c) => c.code === e.target.value);
    if (selected) setCountry(selected);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email (must include @ and .com)";
    }

    if (!formData.phone) newErrors.phone = "Phone number is required";

    if (!formData.role) newErrors.role = "Please select a role";

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!formData.password) newErrors.password = "Password is required";
    else if (!passwordRegex.test(formData.password))
      newErrors.password =
        "Must include uppercase, lowercase, number, and symbol";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      setLoading(true);

      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        role: "",
      });

      setCountry({
        name: "Nigeria",
        isoCode: "NG",
        code: "+234",
      });

      setErrors({});
    }
    setTimeout(() => {
      setLoading(false);
      toast.success("Account created successfully!");
    }, 3000);
    navigate("/login");
  };

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirm = () => setShowConfirm(!showConfirm);

  const isFormValid = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const passwordOk = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(formData.password);
    const passwordMatch = formData.password === formData.confirmPassword;
    return (
      formData.fullName.trim().length > 0 &&
      emailOk &&
      passwordOk &&
      passwordMatch &&
      formData.phone &&
      formData.role
    );
  }, [formData]);

  return (
    <SignupContainer>
      <SignupLeft>
      </SignupLeft>

      <SignupRight>
        <FormBox>
          <FormTitle>
            Welcome to <span>TrustForge!</span>
          </FormTitle>

          <form onSubmit={handleSubmit}>
            <Label>
              Name <span className="required">*</span>
            </Label>
            <InputField
              name="fullName"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}

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
              Phone Number <span className="required">*</span>
            </Label>
            <PhoneField>
              <div className="country-select">
                <ReactCountryFlag
                  countryCode={country.isoCode}
                  svg
                  style={{ width: "24px", height: "18px" }}
                />
                <select value={country.code} onChange={handleCountryChange}>
                  {countries.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.name} ({c.code})
                    </option>
                  ))}
                </select>
              </div>

              <InputField
                value={formData.phone}
                type="text"
                name="phone"
                placeholder="Enter phone number"
                maxLength="10"
                onChange={(e) => {
                  if (!/^\d*$/.test(e.target.value)) return;
                  handleChange(e);
                }}
              />
            </PhoneField>
            {errors.phone && <ErrorText>{errors.phone}</ErrorText>}

            <Label>
              Select Role <span className="required">*</span>
            </Label>
            <SelectField
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="creator">Creator</option>
              <option value="investor">Investor</option>
            </SelectField>
            {errors.role && <ErrorText>{errors.role}</ErrorText>}

            <Label>
              Password <span className="required">*</span>
            </Label>
           <div style={{ position: "relative" }}>
              <InputField
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
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

            <Label>
              Confirm Password <span className="required">*</span>
            </Label>
           <div style={{ position: "relative" }}>
              <InputField
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{ paddingRight: "40px" }}
              />
              <span
                onClick={toggleConfirm}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#888",
                }}
              >
                {showConfirm ? <FaEye /> :<FaEyeSlash />}
              </span>
            </div>
            {errors.confirmPassword && (
              <ErrorText>{errors.confirmPassword}</ErrorText>
            )}

            <CreateButton type="submit" disabled={!isFormValid}>{loading ? "Creating..." : "Create Account"}</CreateButton>
          </form>

          <OrText style={{ color: "#1B1B1B" }}>Or create an account using</OrText>

          <GoogleBtn>
            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt="Google"
            />
          </GoogleBtn>

          <LoginText>
            Already have an account? <span onClick={() => navigate("/login")} style={{color:"#DC2626"}}>Log in</span>
          </LoginText>

          <TermsText>
            By creating an account, you agree to our{" "}
            <a href="#">Terms and Conditions</a>.
          </TermsText>
        </FormBox>
      </SignupRight>
    </SignupContainer>
  );
};

export default Signup;

