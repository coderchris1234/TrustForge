import React, { useState } from "react";
import { Not_container } from "./NotStyle";

const Notification = ({ id, title, message, date, status, markAsRead }) => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    setLoading(false);
    setModal(false);
    markAsRead(id);
  };

  return (
    <Not_container>
      {modal && (
        <div className="notification-modal">
          omo
          <div className="notification-content">
            <h3>{title}</h3>
            <p>{message}</p>
            <span>{new Date(date).toLocaleString()}</span>
            <button onClick={closeModal}>
              {loading ? "Deleting..." : "Delete"}
            </button>
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
