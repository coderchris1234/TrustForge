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

const AddBusiness = () => {
  const fileInputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);

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
    fundingSought: "",
  });

  const progressPercent = (step / totalSteps) * 100;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
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

  const handleSubmit = () => {
    console.log("Form submitted:", form);
    toast.success("Business successfully submitted!");
    setStep(1);
    setForm("");
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
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
        {/* Form content */}
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
                  name="yearFounded"
                  value={form.yearFounded}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,4}$/.test(value)) {
                      setForm({ ...form, yearFounded: value });
                    }
                  }}
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
                <Input
                  value={form.businessModel}
                  name="businessModel"
                  onChange={handleChange}
                  placeholder="Describe your business model (B2B, B2C, Marketplace, etc.)"
                />
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
                      <Label style={{ Color: "#e6e9ef" }}>Funding Stage</Label>
                      <select>
                        <option value="">Pre-Seed</option>
                        <option value="">Seed</option>
                        <option value="">Series A</option>
                        <option value="">Series B</option>
                        <option value="">Series C+</option>
                        <option value="">Growth Stage</option>
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
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <UploadBox onClick={() => fileInputRef.current.click()}>
                    <MdOutlineFileUpload size={40} color="blue" />
                    {uploadedFile ? uploadedFile.name : "Click to upload"}
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
                      Your business profile will be reviews between 24-48 hours
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
            {step < totalSteps ? "Next Step" : "Submit"}
          </NextButton>
        </ActionRow>
      </Card>
    </PageWrap>
  );
};

export default AddBusiness;
