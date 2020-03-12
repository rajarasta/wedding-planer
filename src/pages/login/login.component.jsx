import React, { useState } from "react";

// Redux stuff
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

// Router stuff
import { withRouter, Link } from "react-router-dom";

// MUI components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

// MUI icons
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";

// Theme components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";

// CSS and style
import styles from "../../assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
import customStyles from "../../assets/jss/customStyles";
import lock from "../../assets/pictures/lock.jpeg";

const useStyles = makeStyles(theme => {
  return {
    ...styles(theme),
    ...customStyles
  };
});

// COMPONENT
function Login({ history }) {
  // Styles
  const classes = useStyles();
  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  // Redux
  const state = useSelector(state => {
    return {
      user: state.user,
      UI: state.UI,
      errors: state.UI.errors
    };
  });

  const dispatch = useDispatch();

  // Local state
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    const userData = {
      email: email,
      password: password
    };
    dispatch(loginUser(userData, history));
  }

  // Return
  return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form>
              <Card login className={classes[cardAnimaton]}>
                <CardHeader
                  className={`${classes.cardHeader} ${classes.textCenter}`}
                  color="rose"
                >
                  <h4 className={classes.cardTitle}>Log in</h4>
                  <div className={classes.socialLine}>
                    {[
                      "fab fa-facebook-square",
                      "fab fa-twitter",
                      "fab fa-google-plus"
                    ].map((prop, key) => {
                      return (
                        <Button
                          color="transparent"
                          justIcon
                          key={key}
                          className={classes.customButtonClass}
                        >
                          <i className={prop} />
                        </Button>
                      );
                    })}
                  </div>
                </CardHeader>
                <CardBody>
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    className={classes.textField}
                    helperText={state.errors.email}
                    error={state.errors.email ? true : false}
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value);
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                    fullWidth
                  />
                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    className={classes.textField}
                    helperText={state.errors.password}
                    error={state.errors.password ? true : false}
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Lock className={classes.inputAdornmentIcon}></Lock>
                        </InputAdornment>
                      )
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
                    onClick={e => handleLogin(e)}
                    className={classes.button}
                    block
                  >
                    Log In
                    {state.UI.loading && (
                      <CircularProgress className={classes.progress} />
                    )}
                  </Button>
                  <br />
                  <small>
                    <Link to="/auth/signup">Don't have an account? </Link>
                  </small>
                </CardBody>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
  );
}

export default withRouter(Login);
