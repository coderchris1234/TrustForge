import React, { useState } from "react";
import { Not_container } from "./NotStyle";
import { MdOutlineCancel } from "react-icons/md";

const Notification = ({
  id,
  title,
  message,
  date,
  status,
  // markAsRead,
  deleteNotification,
}) => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // const closeModal = () => {
  //   setLoading(false);
  //   setModal(false);
  //   markAsRead(id);
  // };

  const handleDelete = async () => {
    console.log("Deleting →", id);
    setLoading(true);
    await deleteNotification(id);
    setLoading(false);
    setModal(false);
  };

  return (
    <Not_container>
      {modal && (
        <div className="notification-modal">
          <div className="notification-content">
            <MdOutlineCancel onClick={() => setModal(false)} />
            <h3>{title}</h3>
            <p>{message}</p>
            <span>{new Date(date).toLocaleString()}</span>
            <button onClick={handleDelete}>
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
