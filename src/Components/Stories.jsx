import React from "react";
import { StoriesContainer } from "./StoriesStyle";
import { StoriesData } from "../Config/Data";

const Stories = () => {
  return (
    <StoriesContainer>
      <div className="Story_wrapper">
        <div className="Story_header">
          <h3>
            <span>Success </span> Stories.
          </h3>
          <p>Real businesses achieving real results through TRUSTFORGE.</p>
        </div>
        <div className="Story_card_holder">
          {StoriesData?.map((item) => (
            <article className="Story_card">
              <div className="Story_image">
                <img src={item.image} alt="" />
              </div>
              <div className="Story_contents">
                <aside className="Story_cont1">
                  <div className="Story_icon">{item.Icon}</div>
                  <p>{item.descriptions}</p>
                </aside>
                <div className="Story_cont2">
                  <div className="Linediv">
                    <div className="Line"></div>
                  </div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                  <p>{item.jobTitle}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </StoriesContainer>
  );
};

export default Stories;
