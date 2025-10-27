import React from "react";
import { MissionContainer } from "./MissionStyle";
import { MissionInfo } from "../../Config/Data";

const Mission = () => {
  return (
    <MissionContainer>
      <div className="Mission_wrapper">
        {MissionInfo?.map((item) => (
          <div className="Mission">
            <div className="Mission_icon">{item.icon}</div>
            <h3>{item.goal}</h3>
            <p>{item.descriptions}</p>
          </div>
        ))}
      </div>
    </MissionContainer>
  );
};

export default Mission;
