import React, { useEffect, useState } from "react";
import { Notification_container } from "./NotificationStyle";
import Not from "../../../Components/Not";
import Not2 from "../../../Components/Not2";
import axios from "axios";
import { useSelector } from "react-redux";
const Notification = () => {
  const [notification, setNotification] = useState([]);
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const user = useSelector((state) => state.TrustForge.user);
  const token = user?.token;

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const url = `${BaseUrl}/allNotificationsByI`;

        const res = await axios.get(url, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setNotification(res?.data?.data?.notifications || []);
        console.log("notification", notification);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotification();
  }, [token, BaseUrl]);
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
        <div className="all">
          All <small>(5)</small>
        </div>
        <div className="unread">
          Unread <small>(3)</small>
        </div>
      </div>
      <Not />
      <Not2 />
    </Notification_container>
  );
};

export default Notification;
