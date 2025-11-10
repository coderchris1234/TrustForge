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
} from "./KycVerifyStyle";
import toast from "react-hot-toast";
import { GoUpload } from "react-icons/go";
import { MdOutlinePayment } from "react-icons/md";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetailss } from "../Pages/Global/Slice";

const KycVerification = () => {
  const governmentIssuedRef = useRef(null);
  const proofOfAdressRef = useRef(null);
  const ProfilePicRef = useRef(null);
  const [profilePics, setProfilePics] = useState(null);
  const [userKYC, setUserKYC] = useState(null);
  const isUnderReview = userKYC?.toLowerCase().includes("review");
  const dispatch = useDispatch();


  const [loading, setLoading] = useState(false);
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
    investmentType: "",
    governmentId: null,
    proofOfAddress: null,
  });
  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
  };
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
      handleSubmit();
    }
  };
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const token = useSelector((state) => state.TrustForge.user?.token);
  const user = useSelector((state) => state.TrustForge.user);
  const userId = user?.data?.id;

  const handleSubmit = async () => {
    setLoading(true);
    const formData2 = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formData2.append(key, value);
    });
    try {
      const  res = await axios.post(`${BaseUrl}/kycI`, formData2, {
        headers: { authorization: `Bearer ${token}` },
      });


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
        firstName: "",
        lastName: "",
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
    } catch (error) {
      console.error("Error reading persisted user:", error);
      // setLoading(false);
    }
  }, [userId]);

  console.log("this is user", userKYC);

  useEffect(() => {
    if (userKYC?.includes("review")) {
      setStep(4);
    }
  }, [userKYC]);

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
              {userKYC?.toLowerCase().includes("review") ? "Pending" : "Review"}
            </StepName>
          </StepNames>
        </StepInfo>

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
                </FieldRow>

                <FieldRow>
                  <Label>Phone Number</Label>
                  <Input
                    name="phoneNumber"
                    type="num"
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
                <p>Investment Profile</p>
                <FieldRow>
                  <Label>Investment Type</Label>
                  <Input
                    value={formData.investmentType}
                    onChange={handleChange}
                    name="investmentType"
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
              <BackButton onClick={handleBack} disabled={isUnderReview}>
                Previous
              </BackButton>
            )}

            <NextButton
              onClick={handleNext}
              disabled={isUnderReview}
              style={{
                opacity: isUnderReview ? 0.6 : 1,
                cursor: isUnderReview ? "not-allowed" : "pointer",
              }}
            >
              {step < totalSteps
                ? "Next Step"
                : loading
                ? "submiting..."
                : "Submit for Verification"}
            </NextButton>
          </ActionRow>
        </Card>
      </PageWrap>
    </KycContainer>
  );
};

export default KycVerification;
