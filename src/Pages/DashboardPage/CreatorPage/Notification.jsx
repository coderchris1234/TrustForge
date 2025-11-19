import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Notificationcontainer } from "./NotificationStyle";
import Not from "../../../Components/Not"; // Use the Not component we updated

const Notification1 = () => {
  const [notifications, setNotifications] = useState([]);
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const user = useSelector((state) => state.TrustForge.user);
  const token = user?.token;

  const markAsRead = async (id) => {
    try {
      await axios.post(
        `${BaseUrl}/read`,
        { notificationId: id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setNotifications((prev) => prev.filter((n) => n.id !== id));
    } catch (err) {
      console.log("Error marking as read", err);
    }
  };

  const deleteNotification = async (id) => {
    try {
      await axios.delete(`${BaseUrl}/killN/${id}`);

      setNotifications((prev) => prev.filter((n) => n.id !== id));
    } catch (err) {
      console.log("Error deleting notification", err);
    }
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const url = `${BaseUrl}/allNotificationsById`;
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const allNotifications = [
          ...(res.data.read || []),
          ...(res.data.unread || []),
        ];

        const sorted = [...allNotifications].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setNotifications(sorted);
        console.log("Fetched notifications:", allNotifications);
      } catch (error) {
        console.log("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
    const interval = setInterval(fetchNotifications, 1000); // every 5 seconds

    return () => clearInterval(interval);
  }, [token, BaseUrl]);

  return (
    <Notificationcontainer>
      <div className="notification_top">
        <div>
          <h1>Notifications</h1>
          <p>Stay updated with your latest activities.</p>
        </div>
        <div className="mark">Mark All As Read</div>
      </div>

      <div className="read_unread">
        <div className="all">
          All <small>({notifications.length})</small>
        </div>
      </div>

      <div className="notification_list">
        {notifications.length === 0 && <p>No notifications yet.</p>}

        {notifications.map((notif) => (
          <Not
            key={notif.id}
            id={notif.id}
            title={notif.title}
            message={notif.description}
            date={new Date(notif.createdAt).toLocaleString()}
            status={notif.status}
            markAsRead={markAsRead}
            deleteNotification={deleteNotification}
          />
        ))}
      </div>
    </Notificationcontainer>
  );
};

export default Notification1;
