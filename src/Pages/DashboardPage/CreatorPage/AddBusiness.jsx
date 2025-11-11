import React, { useState, useRef } from "react";

import {
  PageWrap,
  Card,
  ProgressFill,
  ProgressBar,
  TitleBlock,
  MainTitle,
  SubTitle,
  StepInfo,
  StepLabel,
  StepName,
  StepNames,
  FormArea,
  SectionTitle,
  FieldRow,
  Label,
  Input,
  Textarea,
  UploadWrapper,
  UploadBox,
  ActionRow,
  BackButton,
  NextButton,
} from "./AddBusinessStyle";
import toast from "react-hot-toast";
import { MdOutlineFileUpload } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "axios";

const AddBusiness = () => {
  const token = useSelector((state) => state.TrustForge.user?.token);

  const pitchDeckInputRef = useRef(null);
  const certInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const totalSteps = 3;
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    businessName: "",
    industry: "",
    description: "",
    yearFounded: "",
    businessModel: "",
    revenueModel: "",
    targetMarket: "",
    currentRevenue: "",
    fundingStage: "",
    fundingSought: "",
    pitchDeck: null,
    businessRegistrationCertificate: null,
  });

  const progressPercent = (step / totalSteps) * 100;

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setForm((f) => ({ ...f, [fieldName]: file }));
      toast.success(`${file.name} uploaded successfully`);
    }
  };

  const handleNext = () => {
    if (
      step === 1 &&
      (!form.businessName ||
        !form.industry ||
        !form.description ||
        !form.yearFounded)
    ) {
      toast.error("Please fill all required fields in Step 1");
      return;
    }
    if (
      step === 2 &&
      (!form.businessModel ||
        !form.currentRevenue ||
        !form.revenueModel ||
        !form.targetMarket)
    ) {
      toast.error("Please fill all required fields in Step 2");
      return;
    }
    if (form.yearFounded.length < 4) {
      toast.error("year should be 4 digits");

      return;
    }
    if (step < totalSteps) {
      setStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (!form.pitchDeck) {
        toast.error("Please upload your pitch deck before submitting");
        setLoading(false);
        return;
      }
      if (!form.businessRegistrationCertificate) {
        toast.error(
          "Please upload your business registration certificate before submitting"
        );
        setLoading(false);
        return;
      }

      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await axios.post(`${BaseUrl}/pitch`, formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(" Business", res?.data);

      toast.success(res?.data?.message || "Business created successfully");
    } catch (error) {
      setLoading(false);
      const msg = error?.response?.data?.message;
      setErrorMessage(msg);
      toast.error(msg);
      console.log(errorMessage);
    }
    setStep(1);
    setLoading(false);
    setForm({
      businessName: "",
      industry: "",
      description: "",
      yearFounded: "",
      businessModel: "",
      revenueModel: "",
      targetMarket: "",
      currentRevenue: "",
      fundingStage: "",
      fundingSought: "",
      pitchDeck: null,
      businessRegistrationCertificate: null,
    });
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <>
      <PageWrap>
        <TitleBlock>
          <MainTitle>Add Business profile</MainTitle>
          <SubTitle>
            Share your innovative Business idea with Potential investors
          </SubTitle>
        </TitleBlock>

        <StepInfo>
          <StepLabel>
            Step {step} of {totalSteps}
          </StepLabel>

          <ProgressBar>
            <ProgressFill style={{ width: `${progressPercent}%` }} />
          </ProgressBar>

          <StepNames>
            <StepName active={step === 1}>Basic info</StepName>
            <StepName active={step === 2}>Details</StepName>
            <StepName active={step === 3}>Attachment</StepName>
          </StepNames>
        </StepInfo>

        <Card>
          <FormArea>
            {step === 1 && (
              <>
                <SectionTitle>Basic information</SectionTitle>

                <FieldRow>
                  <Label>Business Name</Label>
                  <Input
                    name="businessName"
                    value={form.businessName}
                    onChange={handleChange}
                    placeholder="Enter your business name"
                  />
                </FieldRow>

                <FieldRow>
                  <Label>Industry</Label>
                  <Input
                    name="industry"
                    value={form.industry}
                    onChange={handleChange}
                    placeholder="Enter your industry"
                  />
                </FieldRow>

                <FieldRow>
                  <Label>Business Description</Label>
                  <Textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Provide a short description of your business"
                    rows={4}
                    style={{
                      outline: "none",
                    }}
                  />
                </FieldRow>

                <FieldRow>
                  <Label>Year Founded</Label>
                  <Input
                    type="date"
                    name="yearFounded"
                    value={form.yearFounded}
                    onChange={handleChange}
                    placeholder="e.g. 2020"
                  />
                </FieldRow>
              </>
            )}

            {step === 2 && (
              <>
                <SectionTitle>Business Model</SectionTitle>

                <FieldRow>
                  <Label>Business Model</Label>
                  <select
                    name="businessModel"
                    value={form.businessModel}
                    onChange={handleChange}
                    style={{
                      height: "40px",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      border: "1px solid #e6e9ef",
                      background: "#fafafa",
                      fontSize: "13px",
                      outline: "none",
                      width: "100%",
                    }}
                  >
                    <option value="">Select your business model</option>
                    <option value="B2B">B2B (Business to Business)</option>
                    <option value="B2C">B2C (Business to Consumer)</option>
                    <option value="C2C">C2C (Consumer to Consumer)</option>
                    <option value="Marketplace">Marketplace</option>
                    <option value="Subscription">Subscription</option>
                    <option value="Freemium">Freemium</option>
                    <option value="Commission">Commission-based</option>
                    <option value="Licensing">Licensing</option>
                    <option value="Advertising">Advertising</option>
                    <option value="Other">Other</option>
                  </select>
                </FieldRow>

                <FieldRow>
                  <Label>Revenue Model</Label>
                  <Input
                    value={form.revenueModel}
                    onChange={handleChange}
                    name="revenueModel"
                    placeholder="How does your business generate revenue?"
                  />
                </FieldRow>

                <FieldRow>
                  <Label>Target Market</Label>
                  <Input
                    value={form.targetMarket}
                    onChange={handleChange}
                    name="targetMarket"
                    placeholder="Who are your target customers?"
                  />
                  <FieldRow>
                    <div className="fund">
                      <div>
                        <Label style={{ Color: "#e6e9ef" }}>
                          Funding Stage
                        </Label>
                        <select
                          name="fundingStage"
                          value={form.fundingStage}
                          onChange={handleChange}
                        >
                          <option value="Pre-Seed">Pre-Seed</option>
                          <option value="Seed">Seed</option>
                          <option value="Series A">Series A</option>
                          <option value="Series B">Series B</option>
                          <option value="Series C+">Series C+</option>
                          <option value="Growth Stage">Growth Stage</option>
                        </select>
                      </div>
                      <div>
                        <Label>Funding Sought</Label>
                        <input
                          type="num"
                          placeholder="e.g..., ₦700,000"
                          onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d{0,30}$/.test(value)) {
                              setForm({ ...form, fundingSought: value });
                            }
                          }}
                          value={form.fundingSought}
                        />
                      </div>
                    </div>
                  </FieldRow>
                </FieldRow>
                <FieldRow>
                  <Label>Current Revenue</Label>
                  <Input
                    value={form.currentRevenue}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d{0,30}$/.test(value)) {
                        setForm({ ...form, currentRevenue: value });
                      }
                    }}
                    name="currentRevenue"
                    placeholder="e.g..., ₦500,000"
                  />
                </FieldRow>
              </>
            )}

            {step === 3 && (
              <>
                <SectionTitle>Document & Attachment</SectionTitle>
                <h3>Upload Supporting Document</h3>
                <p>
                  Add pitch deck, business plan, financial statments or other
                  relevant document
                </p>
                <FieldRow>
                  <Label>Upload Pitch Deck</Label>
                  <UploadWrapper>
                    <input
                      type="file"
                      ref={pitchDeckInputRef}
                      style={{ display: "none" }}
                      onChange={(e) => handleFileChange(e, "pitchDeck")}
                      name="pitchDeck"
                    />
                    <UploadBox
                      onClick={() => pitchDeckInputRef.current.click()}
                    >
                      <MdOutlineFileUpload size={40} color="blue" />
                      {form.pitchDeck ? form.pitchDeck.name : "Click to upload"}
                    </UploadBox>
                  </UploadWrapper>
                  <Label>Business Registration Certificate</Label>
                  <UploadWrapper>
                    <input
                      type="file"
                      ref={certInputRef}
                      style={{ display: "none" }}
                      onChange={(e) =>
                        handleFileChange(e, "businessRegistrationCertificate")
                      }
                      name="businessRegistrationCertificate"
                    />
                    <UploadBox onClick={() => certInputRef.current.click()}>
                      <MdOutlineFileUpload size={40} color="blue" />
                      {form.businessRegistrationCertificate
                        ? form.businessRegistrationCertificate.name
                        : "Click to upload"}
                    </UploadBox>
                  </UploadWrapper>
                  <div className="submission">
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      Submission Guidelines
                    </p>
                    <ul>
                      <li>Ensure all information is accurate and up to date</li>
                      <li>
                        Your business profile will be reviews between 24-48
                        hours
                      </li>
                      <li>You can edit or delete your profile anytime</li>
                      <li>
                        You will be notified when investors want to contact you
                      </li>
                    </ul>
                  </div>
                </FieldRow>
              </>
            )}
          </FormArea>

          {/* Buttons */}
          <ActionRow>
            {step > 1 && <BackButton onClick={handleBack}>Previous</BackButton>}

            <NextButton onClick={handleNext}>
              {step < totalSteps
                ? "Next Step"
                : loading
                ? "Submiting..."
                : "Submit"}
            </NextButton>
          </ActionRow>
        </Card>
      </PageWrap>
    </>
  );
};

export default AddBusiness;
