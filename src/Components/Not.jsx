import React from "react";
import { Not_container } from "../Components/NotStyle";
import { notify } from "../Config/Data";
const Not = () => {
  return (
    <Not_container>
      {notify.map((n, index) => (
        <div className="not_wrapper" key={index}>
          <div className="not_top">
            <div className="not_top_left">
              <div className="bulb">{n.bulb}</div>
              <div className="new_text">{n.new}</div>
            </div>
            <div className="new_btn">{n.newbtn}</div>
          </div>
          <div className="not_bottom">
            <p>{n.text}</p>
            <span>{n.hour}</span>
          </div>
        </div>
      ))}
    </Not_container>
  );
};

export default Not;
