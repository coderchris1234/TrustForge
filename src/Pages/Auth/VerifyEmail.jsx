import React, { useRef, useState, useEffect } from "react";
import {
  VerifyEmailContainer,
  VerifyEmailLeft,
  VerifyEmailRight,
  FormBox,
  FormTitle,
  CreateButton,
  OrText,
  LoginText,
  TermsText,
  Label,
  ErrorText,
} from "./VerfiyEmailStyle";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Global/Slice";

const CODE_LENGTH = 6;

const VerifyEmail = () => {
  const navigate = useNavigate();
  const inputsRef = useRef([]);
  const resendIntervalRef = useRef(null);
  const [code, setCode] = useState(Array(CODE_LENGTH).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const dispatch = useDispatch();

  const role = useSelector((state) => state.TrustForge.user);
  console.log("this is role", role);

  useEffect(() => {
    setCanResend(false);
    setResendTimer(60);

    if (resendIntervalRef.current) clearInterval(resendIntervalRef.current);
    resendIntervalRef.current = setInterval(() => {
      setResendTimer((t) => {
        if (t <= 1) {
          clearInterval(resendIntervalRef.current);
          resendIntervalRef.current = null;
          setCanResend(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => {
      if (resendIntervalRef.current) {
        clearInterval(resendIntervalRef.current);
        resendIntervalRef.current = null;
      }
    };
  }, []);

  const handleChange = (e, idx) => {
    const val = e.target.value;
    if (val && !/^\d$/.test(val)) return;

    setError("");
    setCode((prev) => {
      const next = [...prev];
      next[idx] = val;
      return next;
    });

    if (val && idx < CODE_LENGTH - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace") {
      if (!code[idx] && idx > 0) {
        inputsRef.current[idx - 1]?.focus();
        setCode((prev) => {
          const next = [...prev];
          next[idx - 1] = "";
          return next;
        });
      } else {
        setCode((prev) => {
          const next = [...prev];
          next[idx] = "";
          return next;
        });
      }
    } else if (e.key === "ArrowLeft" && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    } else if (e.key === "ArrowRight" && idx < CODE_LENGTH - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData?.getData("text") || "";
    const digits = pasted.replace(/\D/g, "").slice(0, CODE_LENGTH).split("");
    if (digits.length === 0) return;
    setCode((prev) => {
      const next = [...prev];
      for (let i = 0; i < CODE_LENGTH; i++) {
        next[i] = digits[i] || "";
      }
      return next;
    });
    const lastIndex = Math.min(digits.length - 1, CODE_LENGTH - 1);
    if (lastIndex >= 0) inputsRef.current[lastIndex]?.focus();
  };
  const email = JSON.parse(sessionStorage.getItem("userEmail"));

  // console.log("this is role", role);

  const verifyCode = async (e) => {
    e?.preventDefault();
    setError("");
    const joined = code.join("");
    if (joined.length < CODE_LENGTH) {
      setError("Enter the complete 6-digit code.");
      return;
    }

    const BaseUrl = import.meta.env.VITE_BaseUrl;

    const endpoint =
      role?.data?.role === "Investor"
        ? `${BaseUrl}/verifyInvestor`
        : `${BaseUrl}/verify`;

    const payload = {
      email,
      otp: joined,
    };

    try {
      setLoading(true);
      const res = await axios.post(endpoint, payload);

      toast.success(res?.data?.message || "Email verified successfully");
      dispatch(setUser(res?.data));

      setLoading(false);

      navigate(
        `${
          res?.data?.role === "Investor"
            ? "/dashboard/investor"
            : "/dashboard/business_owner"
        }`
      );
    } catch (err) {
      console.log(err);
      setLoading(false);

      toast.error(err?.response?.data?.message || "Verification failed.");
    } finally {
      sessionStorage.removeItem("userEmail");
      sessionStorage.removeItem("userRole");
    }

    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    //   if (joined === "123456") {
    //     toast.success("Email verified successfully!");
    //     navigate("/login");
    //   } else {
    //     setError("Invalid verification code. Please try again.");
    //     toast.error("Verification failed");
    //   }
    // }, 1200);
  };

  const resendCode = () => {
    const BaseUrl = import.meta.env.VITE_BaseUrl;

    const endpoint =
      role?.data?.role === "Investor"
        ? `${BaseUrl}/verifyInvestor`
        : `${BaseUrl}/verify`;
    if (!canResend) return;
    setCanResend(false);
    setResendTimer(60);
    try {
      const res = axios.post(endpoint);
      console.log(res);
    } catch (error) {
      toast.error(error?.message);
    }
    setCode(Array(CODE_LENGTH).fill(""));
    inputsRef.current[0]?.focus();

    if (resendIntervalRef.current) {
      clearInterval(resendIntervalRef.current);
      resendIntervalRef.current = null;
    }
    resendIntervalRef.current = setInterval(() => {
      setResendTimer((t) => {
        if (t <= 1) {
          clearInterval(resendIntervalRef.current);
          resendIntervalRef.current = null;
          setCanResend(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const allFilled = code.every((c) => c !== "");

  return (
    <VerifyEmailContainer>
      <VerifyEmailLeft />
      <VerifyEmailRight>
        <FormBox>
          <FormTitle>
            <div className="title-text">
              Email <span>Verification.</span>
            </div>
            <small
              style={{ fontWeight: 400, display: "block", color: "#1B1B1B" }}
            >
              A verification code has been sent to your email address. Please
              enter to continue.
            </small>
          </FormTitle>

          <form onSubmit={verifyCode}>
            <Label>Enter verification code</Label>

            <div
              style={{
                display: "flex",
                gap: 10,
                justifyContent: "center",
                marginTop: 8,
                marginBottom: 8,
              }}
              onPaste={handlePaste}
            >
              {code.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => (inputsRef.current[idx] = el)}
                  inputMode="numeric"
                  pattern="\d*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  aria-label={`Digit ${idx + 1}`}
                  style={{
                    width: 44,
                    height: 48,
                    textAlign: "center",
                    fontSize: 18,
                    borderRadius: 6,
                    border: "1px solid #ccc",
                    outline: "none",
                  }}
                />
              ))}
            </div>

            {error && <ErrorText>{error}</ErrorText>}

            <CreateButton type="submit" disabled={!allFilled || loading}>
              {loading ? "Verifying..." : "Verify Account"}
            </CreateButton>
          </form>

          <OrText style={{ marginTop: 12 }}>
            Didn’t receive the code?
            <button
              type="button"
              onClick={resendCode}
              disabled={!canResend}
              style={{
                marginLeft: 8,
                color: canResend ? "#0066ff" : "#999",
                cursor: canResend ? "pointer" : "default",
                fontWeight: 600,
                background: "none",
                border: "none",
                padding: 0,
              }}
            >
              {canResend ? "Resend code" : `Resend code in ${resendTimer}s`}
            </button>
          </OrText>

          <LoginText style={{ marginTop: 12 }}>
            Already verified?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: "#ff3c00",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              Log In
            </button>
          </LoginText>

          <TermsText style={{ marginTop: 10 }}>
            By verifying, you agree to our{" "}
            <a href="#" onClick={(e) => e.preventDefault()}>
              Terms and Conditions
            </a>
            .
          </TermsText>
        </FormBox>
      </VerifyEmailRight>
    </VerifyEmailContainer>
  );
};

export default VerifyEmail;
