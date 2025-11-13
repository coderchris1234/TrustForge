import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { NotificationContainer } from "./NotificationStyle";
import Not from "../../../Components/Not"; // Use the Not component we updated

const Notification1 = () => {
  const [notifications, setNotifications] = useState([]);
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const user = useSelector((state) => state.TrustForge.user);
  const token = user?.token;

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const url = `${BaseUrl}/allNotificationsById`;
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // API response has "read" and "unread"
        const allNotifications = [
          ...(res.data.read || []),
          ...(res.data.unread || []),
        ];

        setNotifications(allNotifications);
        console.log("Fetched notifications:", allNotifications);
      } catch (error) {
        console.log("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, [token, BaseUrl]);

  return (
    <NotificationContainer>
      <div className="notification_top">
        <div>
          <h1>Notifications</h1>
          <p>Stay updated with your latest activities around your business.</p>
        </div>
        {/* <div className="mark">Mark All As Read</div> */}
      </div>
      {notifications.length === 0 ? (
        <p>No notifications yet</p>
      ) : (
        notifications.map((n) => (
          <Not
            key={n.id}
            title={n.title}
            message={n.description}
            date={n.createdAt}
            status={n.status}
          />
        ))
      )}
    </NotificationContainer>
  );
};

export default Notification1;
