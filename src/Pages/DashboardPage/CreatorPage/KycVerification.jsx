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
} from "./KycVerificationStyle";
import toast from "react-hot-toast";
import { GoUpload } from "react-icons/go";
import { MdOutlinePayment } from "react-icons/md";
import axios from "axios";
import { useSelector } from "react-redux";

const KycVerification = () => {
  const governmentIssuedRef = useRef(null);
  const proofOfAdressRef = useRef(null);
  const ProfilePicRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [profilePics, setProfilePics] = useState(null);
  const [userKYC, setUserKYC] = useState(null);
  const kycLocked =
    userKYC?.toLowerCase().includes("review") ||
    userKYC?.toLowerCase().includes("verified");

  const [formData, setFormData] = useState({
    profilePic: null,
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    nationality: "",
    residentialAddress: "",
    city: "",
    state: "",
    bankName: "",
    accountNumber: "",
    accountName: "",
    accountType: "",
    governmentId: null,
    proofOfAddress: null,
  });

  const [dobError, setDobError] = useState("");

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

  // const handleChange = (e) => {
  //   setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
  // };
  const totalSteps = 4;
  const [step, setStep] = useState(1);

  const progressPercent = (step / totalSteps) * 100;
  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    const imageData = URL.createObjectURL(file);
    setProfilePics(imageData);
    console.log("file", imageData);
    if (file) {
      setFormData((f) => ({ ...f, [fieldName]: file }));
      toast.success(`${file.name} uploaded successfully`);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNext = () => {
    if (
      step === 1 &&
      (!formData.profilePic ||
        !formData.firstName ||
        !formData.lastName ||
        !formData.dateOfBirth ||
        !formData.phoneNumber ||
        !formData.email ||
        !formData.nationality ||
        !formData.residentialAddress ||
        !formData.city ||
        !formData.state)
    ) {
      toast.error("Please fill all required fields in step 1");
      return;
    }

    if (
      step === 2 &&
      (!formData.bankName ||
        !formData.accountNumber ||
        !formData.accountType ||
        !formData.accountName)
    ) {
      toast.error("Please fill all required fields in step 3");
      return;
    }

    if (step === 3 && (!formData.governmentId || !formData.proofOfAddress)) {
      toast.error("Please fill all required fields in step 3");
    }

    if (step < totalSteps) {
      setStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const token = useSelector((state) => state.TrustForge.user?.token);
  const user = useSelector((state) => state.TrustForge.user);
  const userId = user?.data?.id;

  const handleSubmit = async () => {
    const formData2 = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formData2.append(key, value);
    });
    for (let [key, value] of formData2.entries()) {
      console.log(key, value);
    }
    try {
      setLoading(true);
      const res = await axios.post(`${BaseUrl}/kyc`, formData2, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("KYC has been sent successfully ");
      setLoading(false);
      setStep(4);
      console.log("omo", res);
    } catch (error) {
      setLoading(false);
      toast.error("failed to send kyc details please try again");
      console.log(error);
    } finally {
      setLoading(false);
      setFormData({
        profilePic: null,
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        phoneNumber: "",
        email: "",
        nationality: "",
        residentialAddress: "",
        city: "",
        state: "",
        bankName: "",
        accountNumber: "",
        accountName: "",
        accountType: "",
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
          setUserKYC(res?.data?.data?.user?.kycStatus || "");
        } catch (err) {
          console.error("Error fetching overview data:", err);
        } finally {
          // setLoading(false);
        }
      };

      fetchData();
    } catch (error) {
      console.error("Error reading persisted user:", error);
      // setLoading(false);
    }
  }, [userId]);

  console.log("this is user", userKYC);
  useEffect(() => {
    if (kycLocked) {
      setStep(4);
    }
  }, [kycLocked]);

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
      {userKYC?.toLowerCase() === "under review" ? (
        <Card style={{ textAlign: "center", padding: "2rem" }}>
          <h2 style={{ color: "orange" }}>Pending</h2>
          <p>
            Your KYC is currently under review. You will be notified once it's
            approved.
          </p>
        </Card>
      ) : userKYC?.toLowerCase() === "verified" ? (
        <Card style={{ textAlign: "center", padding: "2rem" }}>
          <h2 style={{ color: "green" }}>Verified</h2>
          <p>
            Congratulations! Your KYC has been successfully verified. You can
            now access all TrustForge features.
          </p>
        </Card>
      ) : (
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
              <StepName active={step === 2}>Banking</StepName>
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
                ? "Your KYC has been verified successfully!"
                : ""}

              {userKYC.toLowerCase().includes("review")
                ? "Your KYC verification is currently under review."
                : userKYC.toLowerCase().includes("verified")
                ? "Your KYC has been verified successfully!"
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
                            width: "150px",
                            height: "150px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <GoUpload size={30} color="grey" />
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
                        <Label>First Name</Label>
                        <Input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <Label>Last Name</Label>
                        <Input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </div>
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
                      <p style={{ color: "red", marginTop: "4px" }}>
                        {dobError}
                      </p>
                    )}
                  </FieldRow>

                  <FieldRow>
                    <Label>Phone Number</Label>
                    <Input
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </FieldRow>

                  <FieldRow>
                    <Label>Email Address</Label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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
                        <Input
                          onChange={handleChange}
                          name="city"
                          value={formData.city}
                        />
                      </div>
                      <div>
                        <Label>State</Label>
                        <Input
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </FieldRow>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="Bank">
                    <div className="bankDetails">
                      <MdOutlinePayment size={60} color="blue" />
                      <div>
                        <h2>Banking Information</h2>
                        <p>For recieving investment funds securely</p>
                      </div>
                    </div>
                    <div className="secure">
                      <p>Secure & Encrypted:</p>
                      <span>
                        All banking information is encrypted and stored
                        securely. TRUSTFORGE uses this information solely for
                        transfering investment funds into your business account
                      </span>
                    </div>
                  </div>
                  <FieldRow>
                    <Label>Bank Name</Label>
                    <Input
                      value={formData.bankName}
                      onChange={handleChange}
                      name="bankName"
                      placeholder="e.g... First Bank"
                    />
                  </FieldRow>
                  <FieldRow>
                    <Label>Account Name</Label>
                    <Input
                      value={formData.accountName}
                      onChange={handleChange}
                      name="accountName"
                      placeholder="Must match business name"
                    />
                  </FieldRow>
                  <FieldRow>
                    <Label>Account Number</Label>
                    <Input
                      value={formData.accountNumber}
                      onChange={handleChange}
                      name="accountNumber"
                      placeholder="Enter account number"
                    />
                  </FieldRow>
                  <FieldRow>
                    <Label>Account Type</Label>
                    <Input
                      value={formData.accountType}
                      onChange={handleChange}
                      name="accountType"
                      placeholder="Enter account type"
                    />
                  </FieldRow>
                </>
              )}

              {step === 3 && (
                <>
                  <SectionTitle>Verification Document</SectionTitle>
                  <FieldRow>
                    <h3>Government-Issued ID</h3>
                    <p>Password, Driver's license, or National ID</p>
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
                    >
                      <GoUpload size={50} color="lightGrey" />
                      <p style={{ color: "lightgray" }}>
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
                    >
                      <GoUpload size={50} color="lightGrey" />
                      <p style={{ color: "lightgray" }}>
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

              <NextButton disabled={kycLocked} onClick={handleNext}>
                {step < totalSteps
                  ? "Next Step"
                  : loading
                  ? "Submitting  Verification..."
                  : "Submit for Verification"}
              </NextButton>
            </ActionRow>
          </Card>
        </PageWrap>
      )}
    </KycContainer>
  );
};

export default KycVerification;
