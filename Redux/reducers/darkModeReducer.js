import * as t from "../types";

const initialState = {
  darkMode: [],
  palettesKey: "BLUE_THEME",
};

const darkModeReducer = (state = initialState, action) => {

  switch (action.type) {
    case t.CHOOSE_THEME:
      return { ...state, palettesKey: action.payload };
    default:
      return state;
  }
};

export default darkModeReducer;
