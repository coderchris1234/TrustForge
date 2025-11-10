import React, { useEffect, useState } from "react";
import Notification from "../InvestorPage/Notification";
import axios from "axios";
import { useSelector } from "react-redux";
import { NotificationContainer } from "./NotificationStyle";

const Notification1 = () => {
  const [notification, setNotification] = useState([]);
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const user = useSelector((state) => state.TrustForge.user);
  const token = user?.token;

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const url = `${BaseUrl}/allNotificationsById`;

        const res = await axios.get(url, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        console.log(res);

        setNotification(res?.data?.data || []);
        console.log(Notification);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotification();
  }, [token, BaseUrl]);
  return (
    <NotificationContainer>
      {notification.length === 0 ? (
        <p>No notifications yet</p>
      ) : (
        notification.map((m) => <Notification key={m.id} />)
      )}
    </NotificationContainer>
  );
};

export default Notification1;
