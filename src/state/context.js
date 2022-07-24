import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { TOGGLE_DARK_THEME, TOGGLE_MOBILE_MENU } from "./actions";

const initialState = {
  isDarkTheme: false,
  isMobileMenuOpen: false,
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleDarkTheme = (isDarkTheme) => {
    dispatch({ type: TOGGLE_DARK_THEME, payload: isDarkTheme });
  };

  const toggleMobileMenu = (isMobileMenuOpen) => {
    dispatch({ type: TOGGLE_MOBILE_MENU, payload: isMobileMenuOpen });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleDarkTheme,
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
