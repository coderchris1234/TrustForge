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
import { useNavigate } from "react-router-dom";

const AddBusiness = () => {
  const token = useSelector((state) => state.TrustForge.user?.token);
  console.log("userToken", token);
  const nav = useNavigate();

  const pitchDeckInputRef = useRef(null);
  const certInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [errorModal, setErrorModal] = useState("");

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
    setForm((f) => ({ ...f, [fieldName]: file }));
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

      if (res?.data?.message?.includes("pending")) {
        toast.error(res?.data?.message);
        setLoading(false);
        return false;
      } else if (res?.data?.message?.includes("under review ")) {
        setLoading(false);
        toast.error(res?.data?.message);
      } else {
        setOpenModal(true);
      }
    } catch (error) {
      setLoading(false);
      setErrorModal(error?.response?.data?.message || "Something went wrong");
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalized = value.charAt(0).toUpperCase() + value.slice(1);
    setForm((prev) => ({ ...prev, [name]: capitalized }));
  };
  // setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

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
                  <select
                    name="industry"
                    value={form.industry}
                    onChange={handleChange}
                    className="inputSelect"
                  >
                    <option value="">Select industry</option>
                    <option value="AI">AI</option>
                    <option value="FinTech">FinTech</option>
                    <option value="HealthTech">HealthTech</option>
                    <option value="EdTech">EdTech</option>
                    <option value="Green Tech / Agriculture">
                      Green Tech / Agriculture
                    </option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Retail">Retail</option>
                  </select>
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
                  <Textarea
                    value={form.revenueModel}
                    onChange={handleChange}
                    name="revenueModel"
                    placeholder="How does your business generate revenue?"
                    rows={4}
                    style={{ outline: "none" }}
                  />
                </FieldRow>

                <FieldRow>
                  <Label>Target Market</Label>
                  <Textarea
                    style={{
                      outline: "none",
                    }}
                    value={form.targetMarket}
                    onChange={handleChange}
                    name="targetMarket"
                    placeholder="Who are your target customers?"
                    row={4}
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
                          <option value="">Select</option>
                          <option value="Pre-Seed">Pre-Seed</option>
                          <option value="Seed">Seed</option>
                          <option value="Series A">Series A</option>
                          <option value="Series B">Series B</option>
                          <option value="Series C+">Series C+</option>
                          <option value="Growth Stage">Growth Stage</option>
                        </select>
                      </div>
                      <div>
                        <Label>Capital Needed</Label>
                        <input
                          type="num"
                          placeholder="e.g...₦700,000"
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
                  <Label>Expected Current Revenue</Label>
                  <Input
                    value={form.currentRevenue}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d{0,30}$/.test(value)) {
                        setForm({ ...form, currentRevenue: value });
                      }
                    }}
                    name="currentRevenue"
                    placeholder="How much your business is projected to generate every year. e.g...₦500,000,"
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
                      // accept=".pdf"
                    />
                    <UploadBox
                      hasFile={!!form.pitchDeck}
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
                      // accept=".pdf"
                      onChange={(e) =>
                        handleFileChange(e, "businessRegistrationCertificate")
                      }
                      name="businessRegistrationCertificate"
                    />
                    <UploadBox onClick={() => certInputRef.current.click()}>
                      hasFile={!!form.businessRegistrationCertificate}
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

            <NextButton onClick={handleNext} disabled={loading}>
              {loading ? (
                <>
                  <span className="loader"></span>
                  Submitting...
                </>
              ) : step < totalSteps ? (
                "Next Step"
              ) : (
                "Submit"
              )}
            </NextButton>
          </ActionRow>
        </Card>
        {openModal && (
          <div className="modal-overlay">
            <div className="logout-modal">
              <h1>Business Upload.</h1>
              <p>
                Your business has been uploaded successfully. Our team is
                reviewing it.
              </p>

              <div className="buttons">
                <button className="view1" onClick={() => nav("../mybusiness")}>
                  View Business Profile
                </button>
              </div>
            </div>
          </div>
        )}
        {errorModal && (
          <div className="modal-overlay">
            <div className="logout-modal">
              <h2>Error</h2>
              <p>{errorModal}</p>

              <div className="buttons">
                <button className="view" onClick={() => setErrorModal("")}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </PageWrap>
    </>
  );
};

export default AddBusiness;
