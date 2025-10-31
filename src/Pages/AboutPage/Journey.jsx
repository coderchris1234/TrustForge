import React from "react";
import { JourneyContainer } from "./JourneyStyle";
import CustomButton from "../../Components/CustomButton";
import { useNavigate } from "react-router-dom";

const Journey = () => {
  const nav = useNavigate();
  return (
    <JourneyContainer>
      <div className="Journney_wrapper">
        <h3>Join us on This Journey</h3>
        <p>
          Whether you’re a startup looking for investment or an investor seeking{" "}
          <br />
          opportunities, TRUSTFORGE is here to help you succeed.
        </p>
        <CustomButton
          className="journey_button"
          Btntext="Get Started Today"
          onClick={() => {
            nav("/signup");
          }}
        />
      </div>
    </JourneyContainer>
  );
};

export default Journey;
