import {combineReducers} from "redux";
import darkModeReducer from "./darkModeReducer";
import productsReducer from "./productsInfo";

const rootReducer = combineReducers({
    messages: productsReducer,
    darkMode: darkModeReducer,
});

export default rootReducer;
