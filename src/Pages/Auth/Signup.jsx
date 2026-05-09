import React, { useState } from "react";
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
import authlogo from "../../assets/authlogo.png";
import ReactCountryFlag from "react-country-flag";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../Global/Slice";

const Signup = () => {
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const plan = JSON.parse(localStorage.getItem("selectedPlan"));
  console.log("plan", plan);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    subscriptionTier: plan || "free",
  });

  const [role, setRole] = useState("");

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [country, setCountry] = useState({
    name: "Nigeria",
    isoCode: "NG",
    code: "+234",
  });

  const dispatch = useDispatch();

  const countries = [
    { isoCode: "NG", code: "+234" },
    { isoCode: "GH", code: "+233" },
    { isoCode: "KE", code: "+254" },
    { isoCode: "US", code: "+1" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (e) => {
    const selected = countries.find((c) => c.code === e.target.value);
    if (selected) setCountry(selected);
  };

  const validateForm = () => {
    if (
      !formData.fullName.trim() ||
      !formData.email ||
      !formData.password ||
      !formData.phoneNumber ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("All fields are required");
      return false;
    }

    if (!formData.email.includes("@") || !formData.email.includes("com")) {
      toast.error("Please input a valid email...must include @ and .com");

      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password does not match");
      return false;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be greater than eight");
      return false;
    }
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      toast.error(
        "Password must include at least  uppercase, number, symbol and be 8+ chars long"
      );
      return false;
    }

    if (!role) {
      toast.error("Please select a role");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isvalid = validateForm();
    if (!isvalid) return;
    setLoading(true);

    setCountry({
      name: "Nigeria",
      isoCode: "NG",
      code: "+234",
    });

    try {
      const res = await axios.post(
        `${BaseUrl}/${role === "Investor" ? "Investor" : "user"}`,
        {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          phoneNumber: `${country.code}${formData.phoneNumber}`,
        }
      );

      dispatch(setUser(res?.data));

      console.log("res", res);

      toast.success(res?.data?.message);
      sessionStorage.setItem(
        import.meta.env.VITE_USERID,
        JSON.stringify(res.data.data.id)
      );

      navigate("/verifyemail");
    } catch (err) {
      setLoading(false);
      console.log("error", err);
      toast.error(err?.response?.data?.message);
    }

    console.log("this is the value", formData);
  };

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirm = () => setShowConfirm(!showConfirm);

  return (
    <SignupContainer>
      <SignupLeft>
        <span className="Auth_logo_text" onClick={() => navigate("/")}>TrustForge.</span>
        <div className="Left_quote">
          <blockquote>
            "Your next great partnership starts here."
          </blockquote>
          <p>Join 90+ businesses already growing on TrustForge.</p>
        </div>
      </SignupLeft>
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}

      <SignupRight>
        <FormBox>
          <FormTitle>
            <div className="title-text">Create your account</div>
            <div className="title-sub">Join TrustForge and start building connections</div>
          </FormTitle>

          <form onSubmit={handleSubmit} noValidate>
            <Label>
              Name <span className="required">*</span>
            </Label>
            <InputField
              name="fullName"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />

            <Label>
              Email Address <span className="required">*</span>
            </Label>
            <InputField
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />

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
                value={formData.phoneNumber}
                type="text"
                name="phoneNumber"
                placeholder="Enter phone number"
                maxLength="10"
                onChange={(e) => {
                  if (!/^\d*$/.test(e.target.value)) return;
                  handleChange(e);
                }}
              />
            </PhoneField>

            <Label>
              Select Role <span className="required">*</span>
            </Label>
            <SelectField
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select...</option>
              <option value="BusinessOwner">Startup/Existing Business</option>
              <option value="Investor">Investor</option>
            </SelectField>

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
                  color: "#9ca3af",
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
                  color: "#9ca3af",
                }}
              >
                {showConfirm ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <CreateButton>
              {loading ? "Creating..." : "Create Account"}
            </CreateButton>
          </form>

          <LoginText>
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
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
