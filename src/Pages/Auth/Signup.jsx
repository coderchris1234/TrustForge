import React, { useState } from "react";
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

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    role: "",
  });

  const [country, setCountry] = useState({
    name: "Nigeria",
    isoCode: "NG",
    code: "+234",
  });

  const countries = [
    { name: "Nigeria", isoCode: "NG", code: "+234" },
    { name: "Ghana", isoCode: "GH", code: "+233" },
    { name: "Kenya", isoCode: "KE", code: "+254" },
    { name: "United States", isoCode: "US", code: "+1" },
  ];

  const [errors, setErrors] = useState({});

  // 🧠 Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // 🧹 Clear error for the field as user types
    if (errors[name]) {
      setErrors((prevErrors) => {
        const updated = { ...prevErrors };
        delete updated[name];
        return updated;
      });
    }
  };

  // 🌍 Handle country selection and flag update
  const handleCountryChange = (e) => {
    const selected = countries.find((c) => c.code === e.target.value);
    if (selected) setCountry(selected);
  };

  // 🧾 Validate form inputs
  const validateForm = () => {
    const newErrors = {};

    // Full name
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email (must include @ and .com)";
    }

    // Phone number
    if (!formData.phone) newErrors.phone = "Phone number is required";

    // Role
    if (!formData.role) newErrors.role = "Please select a role";

    // Password
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!formData.password) newErrors.password = "Password is required";
    else if (!passwordRegex.test(formData.password))
      newErrors.password =
        "Must include uppercase, lowercase, number, and symbol";

    // Confirm password
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🚀 Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      alert("Account created successfully!");

      // Log the full submitted data
      console.log({
        ...formData,
        country: country.name,
        phone: `${country.code}${formData.phone}`,
      });

      // ✅ Clear all input fields after submission
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        role: "",
      });

      // ✅ Optionally reset selected country back to Nigeria
      setCountry({
        name: "Nigeria",
        isoCode: "NG",
        code: "+234",
      });

      // ✅ Clear any previous errors
      setErrors({});
    }
  };

  return (
    <SignupContainer>
      <SignupLeft>
        {/* <img src="https://i.imgur.com/wfV9rnF.jpeg" alt="" /> */}
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
            <InputField
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <ErrorText>{errors.password}</ErrorText>}

            <Label>
              Confirm Password <span className="required">*</span>
            </Label>
            <InputField
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <ErrorText>{errors.confirmPassword}</ErrorText>
            )}

            <CreateButton type="submit">Create Account</CreateButton>
          </form>

          <OrText>Or create an account using</OrText>

          <GoogleBtn>
            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt="Google"
            />
          </GoogleBtn>

          <LoginText>
            Already have an account? <span>Log in</span>
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
