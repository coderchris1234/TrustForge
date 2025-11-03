import React from "react";
import { Nda_container } from "../../../Components/NdaStyle";
import { Nda_Wrapper } from "./NdaMangeStyle";
import { FaRegEdit } from "react-icons/fa";
import Nda from "../../../Components/Nda";
import Nda2 from "../../../Components/Nda2";
const NdaManagement2 = () => {
  return (
    <Nda_Wrapper>
      < div className="ndaHolder">
        <div className="nda_about_text">
          <h1>NDA Management</h1>
          <p>Manage your non-disclosure agreements with startups</p>
        </div>
        <div className="nda_about_subtext">
          <div className="about">
            <FaRegEdit />
            <span>About NDA’s</span>
          </div>
          <div className="text">
            <p>
              Non-Disclosure Agreements (NDAs) protect confidential information
              shared between you and startups. You must sign an NDA before
              accessing detailed business plans, financial projection, and
              proprietary information.
            </p>
          </div>
        </div>
      </div>
      <Nda />
      <Nda2 />
    </Nda_Wrapper>
  );
};

export default NdaManagement2;
