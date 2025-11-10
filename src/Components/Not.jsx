import React from "react";
import { Not_container } from "../Components/NotStyle";

const Not = ({ title, message, date, status }) => {
  return (
    <Not_container>
      <div className={`not_wrapper ${status === "unread" ? "unread" : ""}`}>
        <div className="not_top">
          <div className="not_top_left">
            {/* Optional: you can use an icon for unread notifications */}
            {status === "unread" && <div className="bulb">•</div>}
            <div className="new_text">{status === "unread" ? "New" : ""}</div>
          </div>
        </div>
        <div className="not_bottom">
          <p>{message}</p>
          <span>{new Date(date).toLocaleString()}</span>
        </div>
      </div>
    </Not_container>
  );
};

export default Not;
