import React, { useState } from "react";
import axios from "axios";

// Redux stuff
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

// Router
import { withRouter } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";

import styles from "../../assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";

import lock from "../../assets/pictures/lock.jpeg";

const useStyles = makeStyles(styles);

function LoginPage({ history }) {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const state = useSelector(state => {
    return {
      user: state.user,
      UI: state.UI
    };
  });

  const dispatch = useDispatch();

  function handleLogin(event) {
    event.preventDefault();
    const userData = {
      email: email,
      password: password
    };
    dispatch(loginUser(userData, history));
  }

  return (
    <div
      style={{
        backgroundImage: "url(" + lock + ")",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh"
      }}
    >
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
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: email,
                      onChange: e => {
                        setEmail(e.target.value);
                      },
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: password,
                      onChange: e => {
                        setPassword(e.target.value);
                      },
                      endAdornment: (
                        <InputAdornment position="end">
                          <Lock className={classes.inputAdornmentIcon}></Lock>
                        </InputAdornment>
                      ),
                      type: "password",
                      autoComplete: "off"
                    }}
                  />
                </CardBody>
                <CardFooter className={classes.justifyContentCenter}>
                  <Button
                    color="rose"
                    simple
                    size="lg"
                    onClick={e => handleLogin(e)}
                    block
                  >
                    Log In
                  </Button>
                  <Button
                    color="rose"
                    simple
                    size="lg"
                    onClick={() => {
                      history.push("/signup");
                    }}
                    block
                  >
                    Register
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default withRouter(LoginPage);
