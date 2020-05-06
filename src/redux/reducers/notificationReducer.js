import Type from "redux/types/notificationType";

export const initialState = {
  type: undefined,
  active: false,
  message: undefined,
};

export const notification = (state = initialState, action) => {
  switch (action.type) {
    case Type.NOTIFICATION_SET_MESSAGE:
      return {
        ...state,
        type: action.notificationType,
        active: true,
        message: action.message,
      };

    case Type.NOTIFICATION_REQUEST_ERROR:
      return {
        ...state,
        type: "error",
        active: true,
        message: action.message,
      };

    case Type.NOTIFICATION_REQUEST_SUCCESS:
      return {
        ...state,
        type: "success",
        active: true,
        message: action.message,
      };

    case Type.NOTIFICATION_CLEAR_MESSAGE:
      return {
        ...state,
        active: false,
      };

    default: {
      return {
        ...state,
      };
    }
  }
};

export default notification;
