import React from "react";
import { Notification_container } from "./NotificationStyle";
import Not from "../../../Components/Not";
import Not2 from "../../../Components/Not2";
const Notification = () => {
  return (
    <Notification_container>
      <div className="notification_top">
        <div>
          <h1>Notifications </h1>
          <p>Stay updated with your latest activities.</p>
        </div>
        <div className="mark">Mark All As Read</div>
      </div>
      <div className="read_unread">
        <div className="all">All <small>(5)</small></div>
        <div className="unread">Unread <small>(3)</small></div>
      </div>
      <Not />
      <Not2 />
    </Notification_container>
  );
};

export default Notification;
