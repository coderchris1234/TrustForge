import React, { useEffect, useState } from "react";
import { Notification_container } from "./NotificationStyle";
import Not from "../../../Components/Not";
import axios from "axios";
import { useSelector } from "react-redux";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const token = useSelector((state) => state.TrustForge.user?.token);

  const markAsRead = async (id) => {
    try {
      await axios.post(
        `${BaseUrl}/read`,
        { notificationId: id }, // 👈 pass ID in body
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Update UI after backend confirms
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    } catch (err) {
      console.log("Error marking as read", err);
    }
  };

  useEffect(() => {
    if (!token) return;

    const fetchNotifications = async () => {
      try {
        const res = await axios.get(`${BaseUrl}/allNotificationsI`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Merge read and unread notifications into one array
        const allNotifications = [
          ...(res.data?.read || []),
          ...(res.data?.unread || []),
        ];

        // Sort by newest first
        allNotifications.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setNotifications(allNotifications);
        console.log("Fetched notifications:", allNotifications);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, [token, BaseUrl]);

  return (
    <Notification_container>
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
          />
        ))}
      </div>
    </Notification_container>
  );
};

export default Notification;
