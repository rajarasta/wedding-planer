import { SET_EVENT, SET_GUESTS } from "../types";

const initialState = { guests: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EVENT:
      return {
        ...state,
        [action.payload.event]: { ...action.payload.data }
      };
    case SET_GUESTS:
      return {
        ...state,
        guests: action.payload.guests
      };
    default:
      return state;
  }
}
