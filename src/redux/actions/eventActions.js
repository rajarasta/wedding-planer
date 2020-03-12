import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_GUESTS
} from "../types";
import axios from "axios";

export const getAllGuests = event => dispatch => {
  axios
    .get(`/${event}/guests`)
    .then(res => {
      console.log("eventAction started");
      dispatch({
        type: SET_GUESTS,
        payload: { event: event, guests: res.data }
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};
