// import React, { useState } from "react";
// import {
//   KycContainer,
//   PageWrap,
//   Card,
//   StepInfo,
//   StepLabel,
//   ProgressBar,
//   ProgressFill,
//   StepName,
//   StepNames,
//   FormArea,
//   SectionTitle,
//   FieldRow,
//   Label,
//   Input,
//   Textarea,
// } from "./KycVerificationStyle";
// import toast from "react-hot-toast";

// const KycVerification = () => {
//   const [formData, setFormData] = useState({
//     profilePic: null,
//     firstName: "",
//     lastName: "",
//     dateOfBirth: "",
//     phoneNumber: "",
//     emailAddress: "",
//     nationality: "",
//     residentialAddress: "",
//     city: "",
//     state: "",
//     companyName: "",
//     industry: "",
//     businessRegistrationNumber: "",
//     businessAddress: "",
//     yearFounded: "",
//     teamSize: "",
//     companyWebsite: "",
//     businessDescription: "",
//     bankName: "",
//     accountNumber: "",
//     accountType: "",
//     governmentIssuedId: null,
//     proofOfAddress: null,
//     businessRegistrationCertificate: null,
//   });
//   const handleChange = (e) => {
//     setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
//   };
//   const totalSteps = 5;
//   const [step, setStep] = useState(1);

//   const progressPercent = (step / totalSteps) * 100;

//   const handleBack = () => {
//     if (step > 1) setStep((s) => s - 1);
//   };

//   const handleNext = () => {
//     if (
//       step === 1 &&
//       (!formData.profilePic ||
//         !formData.firstName ||
//         !formData.lastName ||
//         !formData.dateOfBirth ||
//         !formData.phoneNumber ||
//         !formData.emailAddress ||
//         !formData.nationality ||
//         !formData.residentialAddress ||
//         !formData.city ||
//         !formData.state)
//     ) {
//       toast.error("Please fill all required fields in step 1");
//       return;
//     }

//     if (
//       step === 2 &&
//       (!formData.companyName ||
//         !formData.industry ||
//         !formData.businessRegistrationNumber ||
//         !formData.businessAddress ||
//         !formData.yearFounded ||
//         !formData.teamSize ||
//         !formData.companyWebsite ||
//         !formData.businessAddress)
//     ) {
//       toast.error("Please fill all required fields in step 2");
//       return;
//     }

//     if (
//       step === 3 &&
//       (!formData.bankName || !formData.accountNumber || !formData.accountType)
//     ) {
//       toast.error("Please fill all required fields in step 3");
//       return;
//     }

//     if (
//       step === 4 &&
//       (!formData.governmentIssuedId ||
//         !formData.proofOfAddress ||
//         !formData.businessRegistrationCertificate)
//     ) {
//       toast.error("Please fill all required fields in step 4");
//     }

//     if (formData.yearFounded.length < 4) {
//       toast.error("year should be 4 digits");
//     }

//     if (step < totalSteps) {
//       setStep((prev) => prev + 1);
//     } else {
//       handleSubmit();
//     }
//   };
//   return (
//     <KycContainer>
//       <h2>KYC Verification</h2>
//       <p>Complete your KYC verification to unlock more features</p>
//       <div className="WhyKyc">
//         <p>Why Kyc verification</p>
//         <ul>
//           <li>Build trust with investors through verified credentials</li>
//           <li>Access premium features and detailed business information</li>
//           <li>Increase visibility in search results and recommendations</li>
//           <li>
//             Comply with regulatory requirements for financial transactions
//           </li>
//         </ul>
//       </div>
//       <PageWrap>
//         <StepInfo>
//           <StepLabel>
//             step {step} of {totalSteps}
//           </StepLabel>

//           <ProgressBar>
//             <progressFill style={{ width: `${progressPercent}%` }} />
//           </ProgressBar>
//           <StepNames>
//             <StepName active={step === 1}>Personal</StepName>
//             <StepName active={step === 2}>Business</StepName>
//             <StepName active={step === 3}>Banking</StepName>
//             <StepName active={step === 4}>Document</StepName>
//             <stepName active={step === 5}>Review</stepName>
//           </StepNames>
//         </StepInfo>

//         <Card>
//           <FormArea>
//             {step === 1 && (
//               <>
//                 <SectionTitle>Personal Information</SectionTitle>
//                 <FieldRow>
//                   <div className="ProfileContainer">
//                     <Label>Profile photo</Label>
//                     <div className="ProfilePic"></div>
//                   </div>
//                 </FieldRow>
//               </>
//             )}
//           </FormArea>
//         </Card>
//       </PageWrap>
//     </KycContainer>
//   );
// };

// export default KycVerification;
