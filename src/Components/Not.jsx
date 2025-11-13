import React, { useState } from "react";
import { Not_container } from "./NotStyle";

const Notification = ({ title, message, date, status }) => {
  const [modal, setModal] = useState(false);

  return (
    <Not_container>
      {modal && (
        <div className="notification-modal">
          <div className="notification-content">
            <h3>{title}</h3>
            <p>{message}</p>
            <span>{new Date(date).toLocaleString()}</span>
            <button onClick={() => setModal(false)}>Close</button>
          </div>
        </div>
      )}

      <div className={`not_wrapper ${status === "unread" ? "unread" : ""}`}>
        <div className="not_top">
          <div className="not_top_left">
            {status === "unread" && <div className="bulb">•</div>}
            <div className="new_text">{status === "unread" ? "New" : ""}</div>
          </div>
        </div>

        <div className="not_bottom" onClick={() => setModal(true)}>
          <p style={{ fontSize: "1rem", fontWeight: "600" }}>{title}</p>
          <p>{message}</p>
          <span>{new Date(date).toLocaleString()}</span>
        </div>
      </div>
    </Not_container>
  );
};

export default Notification;
