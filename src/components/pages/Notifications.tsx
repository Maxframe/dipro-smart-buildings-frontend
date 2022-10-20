import React from "react";
import NotificationAlert from "../UI/NotificationAlert";
import { useApiGet } from "../../hook/useApiHook";
import { NotificationInterface } from "../../hook/dataInterfaces";


export default function Notifications() {

  const notifications = useApiGet<NotificationInterface[]>('/notifications').data;

  return (
    <div>
      <h1>Benachrichtigungen</h1>
      {notifications?.map((notification: NotificationInterface, index: number) => (
        <NotificationAlert key={index} roomLabel={notification.room} roomID={notification.roomId} plantID={notification.plantId} plantLabel={notification.plant} plantImg={notification.plantImage} />
      ))}
    </div>
  )
}