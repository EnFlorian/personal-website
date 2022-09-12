import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import {
  CLOSE_NOTIFICATION_MODAL,
  OPEN_NOTIFICATION_MODAL,
  SET_DARKMODE_OFF,
  SET_DARKMODE_ON,
  TOGGLE_MOBILE_MENU,
} from "./actions";

const initialState = {
  isDarkmode: true,
  isNotificationModalOpen: false,
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setDarkmodeOn = () => {
    dispatch({ type: SET_DARKMODE_ON });
  };

  const setDarkmodeOff = () => {
    dispatch({ type: SET_DARKMODE_OFF });
  };

  const toggleMobileMenu = (isMobileMenuOpen) => {
    dispatch({ type: TOGGLE_MOBILE_MENU, payload: isMobileMenuOpen });
  };

  const openNotificationModal = () => {
    dispatch({ type: OPEN_NOTIFICATION_MODAL });
  };

  const closeNotificationModal = () => {
    dispatch({ type: CLOSE_NOTIFICATION_MODAL });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        closeNotificationModal,
        openNotificationModal,
        setDarkmodeOff,
        setDarkmodeOn,
        toggleMobileMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
