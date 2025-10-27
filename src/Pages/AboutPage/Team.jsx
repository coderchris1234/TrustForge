import React from "react";
import { TeamContainer } from "./TeamStyle";
import { TeamInfo } from "../../Config/Data";

const Team = () => {
  return (
    <TeamContainer>
      <div className="Team_wrapper">
        <article className="Team_header_text">
          <h3>Meet Our Team</h3>
          <p>The team behind the platform where trust meets growth</p>
        </article>
        <div className="Team_images">
          {TeamInfo?.map((props) => (
            <aside className="Team_card">
              <div className="Team_Card_profile">
                <img src={props.Image} alt={props.name} />
              </div>
              <h3>{props.name}</h3>
              <span>{props.role}</span>
              <p>{props.details}</p>
            </aside>
          ))}
        </div>
      </div>
    </TeamContainer>
  );
};

export default Team;
