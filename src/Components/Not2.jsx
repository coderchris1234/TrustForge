import React from "react";
import { notify2 } from "../Config/Data";
import { Not2_container } from "./Not2Style";
const Not2 = () => {
  return (
    <Not2_container>
      {notify2.map((n2, index) => (
        <div className="not2_wrapper" key={index}>
          <div className="not2_top">
            <div className="not2_top_left">
              <div className="bulb2">{n2.bulb}</div>
              <div className="new_text2">{n2.new}</div>
            </div>
          </div>
          <div className="not2_bottom">
            <p>{n2.text}</p>
            <span>{n2.hour}</span>
          </div>
        </div>
      ))}
    </Not2_container>
  );
};

export default Not2;
