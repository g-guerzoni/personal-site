import Type from "redux/types/notificationType";

export const notificationSetMessage = (message, notificationType) => ({
  type: Type.NOTIFICATION_SET_MESSAGE,
  message,
  notificationType,
});

export const notificationClearMessage = () => ({
  type: Type.NOTIFICATION_CLEAR_MESSAGE,
});
