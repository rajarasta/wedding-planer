import { CREATE_EVENT, SET_GUESTS } from "../types";

const initialState = { guests: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state
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
