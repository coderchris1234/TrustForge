import React from "react";
import { StartBtnContainer } from "./StartBtnStyle";
import CustomButton from "../../Components/CustomButton";
import { useDispatch } from "react-redux";
import { setBlogBtnAction } from "../Global/Slice";

const StartBtn = () => {
  const dispatch = useDispatch();

  const handleButtonClick = (title) => {
    dispatch(setBlogBtnAction(title));
  };

  return (
    <StartBtnContainer>
      <article className="Startup_header">
        <div className="Startup_Header_btns">
          <CustomButton
            className="Startup_Header_btn1"
            Btntext="All"
            type="button"
            onClick={() => handleButtonClick("")}
          />
          <CustomButton
            className="Startup_Header_btn2"
            Btntext="For Startups / Existing Businesses"
            type="button"
            onClick={() => handleButtonClick("startups")}
          />
          <CustomButton
            className="Startup_Header_btn3"
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
