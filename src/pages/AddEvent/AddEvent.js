/*eslint-disable*/
/*
v.0.1. Igor
- adjusted imports

*/
import React, { useState } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { addEvent } from "../../redux/actions/eventActions";

// Route
import { useHistory, Link } from "react-router-dom";

// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Card,
  CardHeader,
  CardContent,
  Typography,
  TextField,
  CircularProgress
} from "@material-ui/core";

// style for this view
import styles from "../../assets/jss/material-dashboard-pro-react/views/validationFormsStyle.js";
import customStyles from "../../assets/jss/customStyles";

const useStyles = makeStyles(theme => {
  return {
    ...styles,
    ...customStyles
  };
});

export default function AddEvent(props) {
  // Styles
  const classes = useStyles();
  // History
  const history = useHistory();
  // Global state
  const dispatch = useDispatch();
  const state = useSelector(state => {
    return {
      user: state.user,
      UI: state.UI,
      errors: state.UI.errors
    };
  });

  // Local state
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [type, setType] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const eventData = {
      name: name,
      slug: slug,
      type: type
    };
    dispatch(addEvent(eventData, history));
  }
  // Return
  return (
    <div className={classes.container}>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={8}>
          <form>
            <Card>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="rose"
              >
                <Typography variant="h5">Add event</Typography>
              </CardHeader>
              <CardContent>
                <TextField
                  id="name"
                  name="name"
                  type="text"
                  label="Event name"
                  className={classes.textField}
                  helperText={state.errors.name}
                  error={state.errors.name ? true : false}
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                  fullWidth
                />
                <TextField
                  id="slug"
                  name="slug"
                  type="text"
                  label="Event slug (URL) in ime-i-ime format"
                  className={classes.textField}
                  helperText={state.errors.slug}
                  error={state.errors.slug ? true : false}
                  value={slug}
                  onChange={e => {
                    setSlug(e.target.value);
                  }}
                  fullWidth
                />
                <TextField
                  id="type"
                  name="type"
                  type="text"
                  label="Type of event"
                  className={classes.textField}
                  value={type}
                  onChange={e => {
                    setType(e.target.value);
                  }}
                  fullWidth
                />

                {state.errors.message && (
                  <Typography variant="body2" className={classes.customError}>
                    {state.errors.message}
                  </Typography>
                )}
                <Button
                  color="rose"
                  variant="contained"
                  onClick={e => handleSubmit(e)}
                  className={classes.button}
                  block
                >
                  Add
                  {state.UI.loading && (
                    <CircularProgress className={classes.progress} />
                  )}
                </Button>
              </CardContent>
            </Card>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
