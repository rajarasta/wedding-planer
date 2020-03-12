import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_GUESTS } from "../types";
import axios from "axios";
import { getUserData } from "./userActions";

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

export const addEvent = (eventData, history) => dispatch => {
  axios
    .post("/event", eventData)
    .then(res => {
      console.log("eventCreate started");
      dispatch({ type: LOADING_UI });
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/home-dashboard");
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};
