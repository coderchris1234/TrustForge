import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import About from "./Pages/AboutPage/About";
import BlogPage from "./Pages/Blog/BlogPage";
import CategoryBlog from "./Pages/Blog/Category/CategoryBlog";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/blog"} element={<BlogPage />} />
        <Route path={"/blog-details"} element={<CategoryBlog />} />

        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<SignupForm />} />
        <Route path={"/verify-email"} element={<VerifyEmail />} />
        <Route path={"/Reset-password"} element={<ResetPassword />} />
        <Route path={"/forgot-password"} element={<ForgotPassword />} />
        <Route path={"/Choose-role"} element={<ChooseRole />} />

        <Route element={<Private />}>
          <Route path="/Dashboard/Creator" element={<Creator />} />
        </Route>

        <Route element={<Private />}>
          <Route path="/Dashboard/Investor" element={<Investor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
