import {
  SET_DARKMODE_ON,
  SET_DARKMODE_OFF,
  TOGGLE_MOBILE_MENU,
  OPEN_NOTIFICATION_MODAL,
  CLOSE_NOTIFICATION_MODAL,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_DARKMODE_ON:
      return { ...state, isDarkmode: true };
    case SET_DARKMODE_OFF:
      return { ...state, isDarkmode: false };

    case TOGGLE_MOBILE_MENU:
      return {
        ...state,
        isMobileMenuOpen: action.payload,
      };
    case OPEN_NOTIFICATION_MODAL:
      return {
        ...state,
        isNotificationModalOpen: true,
      };
    case CLOSE_NOTIFICATION_MODAL:
      return {
        ...state,
        isNotificationModalOpen: false,
      };
    default:
      return state;
  }
};

export default reducer;
