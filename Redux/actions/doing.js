import { dispatch } from "../store";
import * as t from "../types";


export const sendMessage = (Message) => {
  dispatch({ type: t.SEND_MESSAGE, payload: { ...Message } });
};

export const themePalette = (item) => {
  dispatch({ type: t.CHOOSE_THEME, payload:item });
};
export const removeNotes = (index) => {
  dispatch({ type: t.REMOVE_NOTE, payload: index });
};
