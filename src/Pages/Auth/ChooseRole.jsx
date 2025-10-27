import React from "react";
import styed from "styled-components";
import { ChooseRoleContainer, ChooseRole_left, ChoosRole_right, Startup, Investor, Roles } from "./ChooseRoleStyle";
const ChooseRole = () => {
  return <ChooseRoleContainer>
    <ChooseRole_left> 
      <div className=""></div>
    </ChooseRole_left>
    <ChoosRole_right> 
      <h1>Select Role</h1>
      <Roles>
      <Startup>
        <div className="img_startup"></div>
        <div className="text1">
        <h3>START-UP/EXISTING BUSINESS</h3>
        </div>
      </Startup>
      <Investor>
        <div className="img_investor"></div>
        <div className="text2">
        <h3>INVESTORS</h3>
        </div>
      </Investor>
      </Roles>
    </ChoosRole_right>
  </ChooseRoleContainer>;
};

export default ChooseRole;
