import React from "react";
import { ndadata22 } from "../Config/Data";
import { Nda_container2 } from "./Nda2Styles";
const Nda2 = () => {
  return (
    <Nda_container2>
      {ndadata22.map((n, index) => (
        <div className="ndadata2_main" key={index}>
          <div className="nda2_top">
            <div className="ndadata2_text">
              <h3>{n.ai}</h3>
              <small>{n.tech}</small>
            </div>
            <div className="download2">
              <div className="sign_icon2">
                {n.icon}
                {n.sign}
              </div>
              <div className="download_view2">
                {n.icon2}
                {n.download}
              </div>
            </div>
          </div>
          <div className="nda_bottom2">
                <div className="date2">
                    <p> {n.sent}</p>
                    <p>
                    <b>{n.date1}</b>
                    </p>
                </div>
                <div className="action2">
                    <p>{n.action}</p>
                    <p>
                    <span>{n.signature}</span>
                    </p>
                </div>
          </div>
        </div>
      ))}
    </Nda_container2>
  );
};

export default Nda2;
