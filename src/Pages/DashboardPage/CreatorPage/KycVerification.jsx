import React, { useState } from "react";
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

const KycVerification = () => {
  const [formData, setFormData] = useState({
    profilePic: null,
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    emailAddress: "",
    nationality: "",
    residentialAddress: "",
    city: "",
    state: "",
    companyName: "",
    industry: "",
    businessRegistrationNumber: "",
    businessAddress: "",
    yearFounded: "",
    teamSize: "",
    companyWebsite: "",
    businessDescription: "",
    bankName: "",
    accountNumber: "",
    accountName: "",
    accountType: "",
    governmentIssuedId: null,
    proofOfAddress: null,
    businessRegistrationCertificate: null,
  });
  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
  };
  const totalSteps = 5;
  const [step, setStep] = useState(1);

  const progressPercent = (step / totalSteps) * 100;

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
        !formData.emailAddress ||
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
      (!formData.companyName ||
        !formData.industry ||
        !formData.businessRegistrationNumber ||
        !formData.businessAddress ||
        !formData.yearFounded ||
        !formData.teamSize ||
        !formData.companyWebsite ||
        !formData.businessAddress)
    ) {
      toast.error("Please fill all required fields in step 2");
      return;
    }

    if (
      step === 3 &&
      (!formData.bankName || !formData.accountNumber || !formData.accountType)
    ) {
      toast.error("Please fill all required fields in step 3");
      return;
    }

    if (
      step === 4 &&
      (!formData.governmentIssuedId ||
        !formData.proofOfAddress ||
        !formData.businessRegistrationCertificate)
    ) {
      toast.error("Please fill all required fields in step 4");
    }

    if (formData.yearFounded.length < 4) {
      toast.error("year should be 4 digits");
    }

    if (step < totalSteps) {
      setStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    toast.success("KYC submitted successfully");

    setFormData({
      profilePic: null,
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      phoneNumber: "",
      emailAddress: "",
      nationality: "",
      residentialAddress: "",
      city: "",
      state: "",
      companyName: "",
      industry: "",
      businessRegistrationNumber: "",
      businessAddress: "",
      yearFounded: "",
      teamSize: "",
      companyWebsite: "",
      businessDescription: "",
      bankName: "",
      accountNumber: "",
      accountName: "",
      accountType: "",
      governmentIssuedId: null,
      proofOfAddress: null,
      businessRegistrationCertificate: null,
    });
    setStep(1);
  };
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
            <StepName active={step === 3}>Banking</StepName>
            <StepName active={step === 4}>Document</StepName>
            <stepName active={step === 5}>Review</stepName>
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
                    onChange={(e) =>
                      setFormData((f) => ({
                        ...f,
                        profilePic: e.target.files[0],
                      }))
                    }
                    id="profilePicInput"
                  />
                  <div className="imageContainer">
                    {formData.profilePic ? (
                      <img
                        src={URL.createObjectURL(formData.profilePic)}
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
                  </div>
                  <span
                    onClick={() =>
                      document.getElementById("profilePicInput").click()
                    }
                  >
                    <GoUpload color="#ffff" />
                  </span>
                  <p>Upload a professional photo</p>
                </FieldRow>

                <FieldRow>
                  <div className="Name">
                    <div>
                      <Label>First Name</Label>
                      <Input
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Label>Last Name</Label>
                      <Input
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </FieldRow>

                <FieldRow>
                  <Label>Date Of Birth</Label>
                  <Input
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
                    name="emailAddress"
                    value={formData.emailAddress}
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
                      <Input value={formData.state} onChange={handleChange} />
                    </div>
                  </div>
                </FieldRow>
              </>
            )}

            {step === 2 && (
              <>
                <SectionTitle>Company Information</SectionTitle>

                <FieldRow>
                  <Label>Company Name</Label>
                  <Input
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </FieldRow>

                <FieldRow>
                  <div className="Name">
                    <div>
                      <Label>Industry</Label>
                      <Input
                        onChange={handleChange}
                        name="industry"
                        value={formData.industry}
                      />
                    </div>
                    <div>
                      <Label>Business registration number</Label>
                      <Input
                        value={formData.businessRegistrationNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </FieldRow>

                <FieldRow>
                  <div className="Name">
                    <div>
                      <Label>Year Founded</Label>
                      <Input
                        onChange={handleChange}
                        name="yearFounded"
                        value={formData.yearFounded}
                      />
                    </div>
                    <div>
                      <Label>Team Size</Label>
                      <Input
                        onChange={handleChange}
                        name="teamSize"
                        value={formData.teamSize}
                      />
                    </div>
                  </div>

                  <FieldRow>
                    <Label>Company Website</Label>
                    <Input
                      value={formData.companyWebsite}
                      onChange={handleChange}
                      placeholder="https://example.com"
                      type="text"
                    />
                  </FieldRow>
                </FieldRow>
                <FieldRow>
                  <Label>Business Description</Label>
                  <Input
                    name="businessDescription"
                    value={formData.businessDescription}
                    placeholder="Describe your business, products, services..."
                  />
                </FieldRow>
              </>
            )}

            {step === 3 && (
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
                      All banking information is encrypted and stored securely.
                      TRUSTFORGE uses this information solely for transfering
                      investment funds into your business account
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
                    name="accountNumber"
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

            {step === 4 && (
              <>
                <SectionTitle>Verification Document</SectionTitle>
                <FieldRow>
                  <h3>Government-Issued ID</h3>
                  <p>Password, Driver's license, or National ID</p>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    id="governmentId"
                    style={{ display: "none" }}
                    onChange={(e) =>
                      setFormData((f) => ({
                        ...f,
                        governmentIssuedId: e.target.files[0],
                      }))
                    }
                  />
                  <div
                    onClick={() =>
                      document.getElementById("governmentId").click()
                    }
                    className="Upload"
                  >
                    <GoUpload size={50} color="lightGrey" />
                    <p style={{ color: "lightgray" }}>
                      {formData.governmentIssuedId
                        ? formData.governmentIssuedId.name
                        : "Click to upload"}
                    </p>
                  </div>

                  <h3>Proof of Address</h3>
                  <p>Utility bill or bank statement (last 3 months)</p>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    id="proofOfAddress"
                    style={{ display: "none" }}
                    onChange={(e) =>
                      setFormData((f) => ({
                        ...f,
                        proofOfAddress: e.target.files[0],
                      }))
                    }
                  />
                  <div
                    onClick={() =>
                      document.getElementById("proofOfAddress").click()
                    }
                    className="Upload"
                  >
                    <GoUpload size={50} color="lightGrey" />
                    <p style={{ color: "lightgray" }}>
                      {formData.proofOfAddress
                        ? formData.proofOfAddress.name
                        : "Click to upload"}
                    </p>
                  </div>

                  <h3>Business registration Certificate</h3>
                  <p>Certificate of Incorporation or Business License</p>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    id="businessCert"
                    style={{ display: "none" }}
                    onChange={(e) =>
                      setFormData((f) => ({
                        ...f,
                        businessRegistrationCertificate: e.target.files[0],
                      }))
                    }
                  />

                  <div
                    onClick={() =>
                      document.getElementById("businessCert").click()
                    }
                    className="Upload"
                  >
                    <GoUpload size={50} color="lightGrey" />
                    <p style={{ color: "lightgray" }}>
                      {formData.businessRegistrationCertificate
                        ? formData.businessRegistrationCertificate.name
                        : "Click to upload"}
                    </p>
                  </div>
                </FieldRow>
              </>
            )}
          </FormArea>

          {/* Buttons */}
          <ActionRow>
            {step > 1 && <BackButton onClick={handleBack}>Previous</BackButton>}

            <NextButton onClick={handleNext}>
              {step < totalSteps ? "Next Step" : "Submit for Verification"}
            </NextButton>
          </ActionRow>
        </Card>
      </PageWrap>
    </KycContainer>
  );
};

export default KycVerification;
