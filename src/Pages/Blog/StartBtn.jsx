import React from "react";
import { StartBtnContainer } from "./StartBtnStyle";
import CustomButton from "../../Components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { setBlogBtnAction } from "../Global/Slice";

const StartBtn = () => {
  const dispatch = useDispatch();
  const blogTitle = useSelector((state) => state.TrustForge.blogBtnAction);

  const handleButtonClick = (title) => {
    dispatch(setBlogBtnAction(title));
  };

  return (
    <StartBtnContainer>
      <article className="Startup_header">
        <div className="Startup_Header_btns">
          <CustomButton
            className={`Startup_Header_btn1 ${
              blogTitle === "" ? "active_btn" : ""
            }`}
            Btntext="All"
            type="button"
            onClick={() => handleButtonClick("")}
          />
          <CustomButton
            className={`Startup_Header_btn2 ${
              blogTitle === "startups" ? "active_btn" : ""
            }`}
            Btntext="For Startups / Existing Businesses"
            type="button"
            onClick={() => handleButtonClick("startups")}
          />
          <CustomButton
            className={`Startup_Header_btn3 ${
              blogTitle === "investors" ? "active_btn" : ""
            }`}
            Btntext="For Investors"
            type="button"
            onClick={() => handleButtonClick("investors")}
          />
        </div>
      </article>
    </StartBtnContainer>
  );
};

export default StartBtn;
