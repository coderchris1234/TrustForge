import React, { useEffect, useRef, useState } from "react";
import {
  KycContainer,
  PageWrap,
  Card,
  StepInfo,
  StepLabel,
  ProgressBar,
  ProgressFill,
  StepName,
  StepNames,
  FormArea,
  SectionTitle,
  FieldRow,
  Label,
  Input,
  Textarea,
  ActionRow,
  NextButton,
  BackButton,
  SelectInput,
} from "./KycVerifyStyle";
import toast from "react-hot-toast";
import { GoUpload } from "react-icons/go";
import { MdOutlinePayment } from "react-icons/md";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetailss } from "../Pages/Global/Slice";
import { NigeriaCities, NigeriaStates, SelectOptions } from "../Config/Data";
import profileHolder from "../assets/profileHolder.png";

const KycVerification = () => {
  const governmentIssuedRef = useRef(null);
  const proofOfAdressRef = useRef(null);
  const ProfilePicRef = useRef(null);
  const [profilePics, setProfilePics] = useState(null);
  const [userKYC, setUserKYC] = useState(null);
  const kycLocked =
    userKYC?.toLowerCase().includes("review") ||
    userKYC?.toLowerCase().includes("verified");
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [dobError, setDobError] = useState("");
  const [openKycModal, setOpenKycModal] = useState(false);
  const [openKycSuccess, setOpenKycSuccess] = useState(false);

  const [formData, setFormData] = useState({
    profilePic: null,
    fullName: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    nationality: "",
    residentialAddress: "",
    city: "",
    state: "",
    investmentType: "",
    governmentId: null,
    proofOfAddress: null,
  });

  const totalSteps = 4;
  const [step, setStep] = useState(1);

  const progressPercent = (step / totalSteps) * 100;

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    const imageData = URL.createObjectURL(file);
    setProfilePics(imageData);
    // console.log("file", imageData);
    if (file) {
      setFormData((f) => ({ ...f, [fieldName]: file }));
      // toast.success(`${file.name} uploaded successfully`);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNext = () => {
    if (
      step === 1 &&
      (!formData.profilePic ||
        !formData.fullName ||
        !formData.dateOfBirth ||
        !formData.phoneNumber ||
        !formData.email ||
        !formData.nationality ||
        !formData.residentialAddress ||
        !formData.city ||
        !formData.state)
    ) {
      toast.error("Please fill all required fields in step 1");
      setLoading(false);
      return;
    }

    if (step === 2 && !formData.investmentType) {
      toast.error("Please fill all required fields in step 3");
      setLoading(false);
      return;
    }

    if (step === 3 && (!formData.governmentId || !formData.proofOfAddress)) {
      setLoading(false);
      toast.error("Please fill all required fields in step 3");
    }

    if (step < totalSteps) {
      setStep((prev) => prev + 1);
    } else {
      handleKyc();
    }
  };
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const token = useSelector((state) => state.TrustForge.user?.token);
  const user = useSelector((state) => state.TrustForge.user);
  const userId = user?.data?.id;

  const handleKyc = () => {
    setOpenKycModal(true);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const formData2 = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formData2.append(key, value);
    });
    try {
      const res = await axios.post(`${BaseUrl}/kycI`, formData2, {
        headers: { authorization: `Bearer ${token}` },
      });
      setOpenKycModal(false);
      setOpenKycSuccess(true);

      setUserKYC("Under Review");

      const profileData = res?.data;

      dispatch(setUserDetailss(profileData));

      console.log("responseee", res?.data);
      setStep(4);
      console.log("omo", res);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
      setFormData({
        profilePic: null,
        dateOfBirth: "",
        nationality: "",
        residentialAddress: "",
        city: "",
        state: "",
        investmentType: "",
        governmentId: null,
        proofOfAddress: null,
      });
    }
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    try {
      const endpoint =
        user?.data?.role === "Investor"
          ? `${BaseUrl}/investor/${userId}`
          : `${BaseUrl}/user/${userId}`;

      const fetchData = async () => {
        try {
          const res = await axios.get(endpoint);
          // console.log("omo", res);
          setUserKYC(res?.data?.data?.user?.kycStatus || "");
        } catch (err) {
          console.error("Error fetching overview data:", err);
        } finally {
          // setLoading(false);
        }
      };

      fetchData();
      const interval = setInterval(fetchData, 1000); // every 5 seconds

      return () => clearInterval(interval);
    } catch (error) {
      console.error("Error reading persisted user:", error);
      // setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    if (kycLocked) {
      setStep(4);
    }
  }, [kycLocked]);

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;
      const endpoints = `${BaseUrl}/investor/${userId}`;
      try {
        const res = await axios.get(endpoints);
        setUserDetails(res?.data?.data?.user);
        setFormData((prev) => ({
          ...prev,
          fullName: res?.data?.data?.user?.fullName || "",
          email: res?.data?.data?.user?.email || "",
          phoneNumber: res?.data?.data?.user?.phoneNumber || "",
        }));
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUser();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "dateOfBirth") {
      const error = validateDOB(value);
      setDobError(error);
    }
  };
  const validateDOB = (value) => {
    if (!value) return "Date of birth is required.";

    const dob = new Date(value);
    const today = new Date();

    if (dob >= today) return "Date of birth must be in the past.";

    const age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    const day = today.getDate() - dob.getDate();
    const hasBirthdayPassed = month > 0 || (month === 0 && day >= 0);
    const actualAge = hasBirthdayPassed ? age : age - 1;

    if (actualAge < 18) return "You must be at least 18 years old.";

    return "";
  };

  console.log("user", formData);

  return (
    <KycContainer>
      <h2>KYC Verification</h2>
      <p>Complete your KYC verification to unlock more features</p>
      <div className="WhyKyc">
        <p>Why Kyc verification</p>
        <ul>
          <li>Build trust with investors through verified credentials</li>
          <li>Access premium features and detailed business information</li>
          <li>Increase visibility in search results and recommendations</li>
          <li>
            Comply with regulatory requirements for financial transactions
          </li>
        </ul>
      </div>
      <PageWrap>
        <StepInfo>
          <StepLabel>
            step {step} of {totalSteps}
          </StepLabel>

          <ProgressBar>
            <ProgressFill style={{ width: `${progressPercent}%` }} />
          </ProgressBar>
          <StepNames>
            <StepName active={step === 1}>Personal</StepName>
            <StepName active={step === 2}>Business</StepName>
            <StepName active={step === 3}>Document</StepName>
            <StepName active={step === 4}>
              {userKYC?.toLowerCase().includes("review")
                ? "Pending"
                : userKYC?.toLowerCase().includes("verified")
                ? "Approved"
                : "Review"}
            </StepName>
          </StepNames>
        </StepInfo>
        {userKYC && (
          <div
            style={{
              marginTop: "1rem",
              padding: "0.8rem 1.2rem",
              borderRadius: "8px",
              textAlign: "center",
              backgroundColor: userKYC.toLowerCase().includes("review")
                ? "rgba(255, 165, 0, 0.15)" // orange tint for pending
                : userKYC.toLowerCase().includes("verified")
                ? "rgba(0, 128, 0, 0.15)" // green tint for verified
                : "transparent",
              color: userKYC.toLowerCase().includes("review")
                ? "#e69500"
                : userKYC.toLowerCase().includes("verified")
                ? "green"
                : "inherit",
              fontWeight: "600",
              fontSize: "1rem",
            }}
          >
            {userKYC.toLowerCase().includes("review")
              ? "Your KYC verification is currently under review."
              : userKYC.toLowerCase().includes("verified")
              ? "Congratulations! Your KYC has been successfully verified. You can now access all TrustForge features."
              : ""}
          </div>
        )}

        <Card>
          <FormArea>
            {step === 1 && (
              <>
                <SectionTitle>Personal information</SectionTitle>
                <FieldRow className="profilePic">
                  <Label>Profile Picture</Label>
                  <Input
                    style={{ display: "none" }}
                    type="file"
                    name="profilePic"
                    onChange={(e) => handleFileChange(e, "profilePic")}
                    // id="profilePicInput"
                    ref={ProfilePicRef}
                  />
                  <div className="imageContainer">
                    {formData.profilePic ? (
                      <img
                        src={profilePics}
                        alt="Profile Preview"
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <img
                        src={profileHolder}
                        alt="Profile Preview"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      // <GoUpload size={30} color="blue" />
                    )}
                    <span onClick={() => ProfilePicRef.current.click()}>
                      <GoUpload color="#ffff" />
                    </span>
                  </div>

                  <p>Upload a professional photo</p>
                </FieldRow>

                <FieldRow>
                  <div className="Name">
                    <div>
                      <Label>Fullname</Label>
                      <Input
                        type="text"
                        name="firstName"
                        value={userDetails?.fullName}
                        onChange={handleChange}
                        readOnly
                      />
                    </div>
                    {/* <div>
                      <Label>Last Name</Label>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div> */}
                  </div>
                </FieldRow>

                <FieldRow>
                  <Label>Date Of Birth</Label>
                  <Input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    placeholder="dd/mm/yyyy"
                  />
                  {dobError && (
                    <p style={{ color: "red", marginTop: "4px" }}>{dobError}</p>
                  )}
                </FieldRow>

                <FieldRow>
                  <Label>Phone Number</Label>
                  <Input
                    name="phoneNumber"
                    type="num"
                    value={userDetails?.phoneNumber}
                    onChange={handleChange}
                    readOnly
                  />
                </FieldRow>

                <FieldRow>
                  <Label>Email Address</Label>
                  <Input
                    type="email"
                    name="email"
                    value={userDetails?.email}
                    onChange={handleChange}
                    readOnly
                  />
                </FieldRow>
                <FieldRow>
                  <Label>Nationality</Label>
                  <Input
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                  />
                </FieldRow>
                <FieldRow>
                  <Label>Residential Address</Label>
                  <Input
                    name="residentialAddress"
                    value={formData.residentialAddress}
                    onChange={handleChange}
                  />
                </FieldRow>

                <FieldRow>
                  <div className="Name">
                    <div>
                      <Label>City</Label>
                      <SelectInput
                        onChange={handleChange}
                        name="city"
                        value={formData.city}
                      >
                        <option>Choose City</option>
                        {NigeriaCities.map((cities, index) => (
                          <option value={cities} key={index}>
                            {cities}
                          </option>
                        ))}
                      </SelectInput>
                    </div>
                    <div>
                      <Label>State</Label>
                      <SelectInput
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                      >
                        <option>Choose State</option>
                        {NigeriaStates.map((cities, index) => (
                          <option value={cities} key={index}>
                            {cities}
                          </option>
                        ))}
                      </SelectInput>
                    </div>
                  </div>
                </FieldRow>
              </>
            )}

            {step === 2 && (
              <>
                <h2>Investment Profile</h2>
                <FieldRow>
                  <Label>Investment Type</Label>
                  <select
                    className="select"
                    value={formData.investmentType}
                    onChange={handleChange}
                    name="investmentType"
                  >
                    {SelectOptions?.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </FieldRow>
              </>
            )}

            {step === 3 && (
              <>
                <SectionTitle>Verification Document</SectionTitle>
                <FieldRow>
                  <h3>Government-Issued ID</h3>
                  <p>Passport, Driver's license, or National ID</p>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    ref={governmentIssuedRef}
                    style={{ display: "none" }}
                    onChange={(e) => handleFileChange(e, "governmentId")}
                    name="governmentId"
                  />
                  <div
                    onClick={() => governmentIssuedRef.current.click()}
                    className="Upload"
                    style={{
                      // border: "2px dashed var(--primary_color_400)",
                      border: formData.governmentId
                        ? "1px dashed var(--primary_color_400)"
                        : "1px dashed lightgray",
                    }}
                  >
                    <GoUpload
                      size={50}
                      color={
                        formData.governmentId
                          ? " var(--primary_color_400)"
                          : "lightGrey"
                      }
                    />
                    <p
                      style={{
                        color: formData.governmentId
                          ? "var(--primary_color_400)"
                          : "lightgray",
                      }}
                    >
                      {formData.governmentId
                        ? formData.governmentId.name
                        : "Click to upload"}
                    </p>
                  </div>

                  <h3>Proof of Address</h3>
                  <p>Utility bill or bank statement (last 3 months)</p>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    ref={proofOfAdressRef}
                    style={{ display: "none" }}
                    onChange={(e) => handleFileChange(e, "proofOfAddress")}
                    name="proofOfAddress"
                  />
                  <div
                    onClick={() => proofOfAdressRef.current.click()}
                    className="Upload"
                    style={{
                      // border: "2px dashed var(--primary_color_400)",
                      border: formData.proofOfAddress
                        ? "1px dashed var(--primary_color_400)"
                        : "1px dashed lightgray",
                    }}
                  >
                    <GoUpload
                      size={50}
                      color={
                        formData.governmentId
                          ? " var(--primary_color_400)"
                          : "lightGrey"
                      }
                    />
                    <p
                      style={{
                        color: formData.proofOfAddress
                          ? "var(--primary_color_400)"
                          : "lightgray",
                      }}
                    >
                      {formData.proofOfAddress
                        ? formData.proofOfAddress.name
                        : "Click to upload"}
                    </p>
                  </div>
                </FieldRow>
              </>
            )}
          </FormArea>

          {/* Buttons */}
          <ActionRow>
            {step > 1 && (
              <BackButton disabled={kycLocked} onClick={handleBack}>
                Previous
              </BackButton>
            )}

            <NextButton disabled={kycLocked || loading} onClick={handleNext}>
              {step < totalSteps ? "Next Step" : "Submit for Verification"}
            </NextButton>
          </ActionRow>
        </Card>
      </PageWrap>
      {openKycModal && (
        <div className="modal-overlay">
          <div className="logout-modal">
            <h1>Confirm Submission</h1>
            <p>
              Please review your details carefully before submitting. You won't
              be able to edit them once sent
            </p>

            <div className="buttons">
              <button
                className="logout-btn"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? <div className="spinner"></div> : "Submit"}
              </button>

              <button
                className="cancel-btn"
                onClick={() => setOpenKycModal(false)}
              >
                Review
              </button>
            </div>
          </div>
        </div>
      )}

      {openKycSuccess && (
        <div className="modal-overlay">
          <div className="logout-modal">
            <h1>Kyc Submission</h1>
            <p>
              Your KYC has been submitted successfully. Our team is reviewing
              it.
            </p>

            <div className="buttons">
              <button className="okay" onClick={() => setOpenKycSuccess(false)}>
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
    </KycContainer>
  );
};

export default KycVerification;
