import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./Components/DashBoardLayout";
import SignupForm from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login";
import VerifyEmail from "./Pages/Auth/VerifyEmail";
import ResetPassword from "./Pages/Auth/ResetPassword";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import ChooseRole from "./Pages/Auth/ChooseRole";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Private from "./Config/Private";
import Creator from "./Pages/DashboardPage/CreatorPage/Creator";
import Investor from "./Pages/DashboardPage/InvestorPage/Investor";
import OverView from "./Pages/DashboardPage/CreatorPage/Overview";
import MyBusiness from "./Pages/DashboardPage/CreatorPage/MyBusiness";
import AddBusiness from "./Pages/DashboardPage/CreatorPage/AddBusiness";
import Analytics from "./Pages/DashboardPage/CreatorPage/Analytics";
import Overview from "./Pages/DashboardPage/CreatorPage/Overview";
import Notification from "./Pages/DashboardPage/CreatorPage/Notification";
import Meeting from "./Pages/DashboardPage/CreatorPage/Meeting";
import Profile from "./Pages/DashboardPage/CreatorPage/Profile";
import Subscription from "./Pages/DashboardPage/CreatorPage/Subscription";
import KycVerification from "./Pages/DashboardPage/CreatorPage/KycVerification";
import HelpSupport from "./Pages/DashboardPage/CreatorPage/HelpSupport";

import ExploreBusiness from "./Pages/DashboardPage/InvestorPage/ExploreBusiness";
import SavedBusiness from "./Pages/DashboardPage/InvestorPage/SavedBusiness";
import FundingHistory from "./Pages/DashboardPage/InvestorPage/FundingHistory";
import NdaManagement2 from "./Pages/DashboardPage/InvestorPage/NdaManagement2";
import Notification2 from "./Pages/DashboardPage/InvestorPage/Notification";
import Meeting2 from "./Pages/DashboardPage/InvestorPage/Meeting2";
import Profile2 from "./Pages/DashboardPage/InvestorPage/Profile";
import Subscription2 from "./Pages/DashboardPage/InvestorPage/Subscription2";
import KycVerification2 from "./Pages/DashboardPage/InvestorPage/KycVerification2";
import HelpSupport2 from "./Pages/DashboardPage/InvestorPage/HelpSupport2";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<SignupForm />} />
        <Route path={"/verify-email"} element={<VerifyEmail />} />
        <Route path={"/Reset-password"} element={<ResetPassword />} />
        <Route path={"/forgot-password"} element={<ForgotPassword />} />
        <Route path={"/Choose-role"} element={<ChooseRole />} />

        <Route element={<Private />}>
          <Route path="/Dashboard/Creator" element={<Creator />}>
            <Route path="" element={<Overview />} />
            <Route path="my-business" element={<MyBusiness />} />
            <Route path="add-business" element={<AddBusiness />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="notification" element={<Notification />} />
            <Route path="meeting" element={<Meeting />} />
            <Route path="profile" element={<Profile />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="kyc-verification" element={<KycVerification />} />
            <Route path="help-support" element={<HelpSupport />} />
          </Route>
        </Route>

        <Route element={<Private />}>
          <Route path="/Dashboard/Investor" element={<Investor />}>
            <Route path="" element={<ExploreBusiness />} />
            <Route path="saved-business" element={<SavedBusiness />} />
            <Route path="nda-management" element={<NdaManagement2 />} />
            <Route path="notification" element={<Notification2 />} />
            <Route path="meeting" element={<Meeting2 />} />
            <Route path="profile" element={<Profile2 />} />
            <Route path="subscription" element={<Subscription2 />} />
            <Route path="kyc-verification" element={<KycVerification2 />} />
            <Route path="help-support" element={<HelpSupport2 />} />
            <Route path="funding-history" element={<FundingHistory />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
