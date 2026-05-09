import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChooseRoleContainer,
  ChooseRole_left,
  ChoosRole_right,
  Startup,
  Investor,
  Roles,
} from "./ChooseRoleStyle";
import authlogo from "../../assets/authlogo.png";
import { LuBuilding2 } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";
import { TbChartLine } from "react-icons/tb";

const ChooseRole = () => {
  const navigate = useNavigate();

  return (
    <ChooseRoleContainer>
      <ChooseRole_left>
        <img src={authlogo} alt="TrustForge" onClick={() => navigate("/")} />
        <div className="Left_quote">
          <blockquote>"The right connection changes everything."</blockquote>
          <p>Choose your role to get started on TrustForge.</p>
        </div>
      </ChooseRole_left>

      <ChoosRole_right>
        <div className="role_content">
          <div className="role_header">
            <h1>How will you use TrustForge?</h1>
            <p>Select the role that best describes you to get started.</p>
          </div>

          <Roles>
            <Startup onClick={() => navigate("/signup?role=business")}>
              <div className="role_icon">
                <LuBuilding2 />
              </div>
              <div className="role_text">
                <h3>Startup / Existing Business</h3>
                <p>Showcase your venture and connect with the right investors</p>
              </div>
              <GoArrowRight className="role_arrow" />
            </Startup>

            <Investor onClick={() => navigate("/signup?role=investor")}>
              <div className="role_icon">
                <TbChartLine />
              </div>
              <div className="role_text">
                <h3>Investor</h3>
                <p>Discover verified, high-potential businesses to fund</p>
              </div>
              <GoArrowRight className="role_arrow" />
            </Investor>
          </Roles>
        </div>
      </ChoosRole_right>
    </ChooseRoleContainer>
  );
};

export default ChooseRole;
