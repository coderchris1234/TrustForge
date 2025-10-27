import React from "react";
import { JourneyContainer } from "./JourneyStyle";
import CustomButton from "../../Components/CustomButton";

const Journey = () => {
  return (
    <JourneyContainer>
      <div className="Journney_wrapper">
        <h3>Join us on This Journey</h3>
        <p>
          Whether you’re a startup looking for investment or an investor seeking{" "}
          <br />
          opportunities, TRUSTFORGE is here to help you succeed.
        </p>
        <CustomButton className="journey_button" Btntext="Get Started Today" />
      </div>
    </JourneyContainer>
  );
};

export default Journey;
