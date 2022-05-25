import { TOGGLE_DARK_THEME, TOGGLE_MOBILE_MENU } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_DARK_THEME:
      return {
        ...state,
        isDarkTheme: action.payload,
      };
    case TOGGLE_MOBILE_MENU:
      return {
        ...state,
        isMobileMenuOpen: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
