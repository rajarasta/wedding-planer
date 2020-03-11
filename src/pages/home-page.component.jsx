import React, { useState } from "react";

// Redux stuff
import { useSelector, useDispatch } from "react-redux";

// Router stuff
import { withRouter } from "react-router-dom";

// Main components
import EventCard from "../components/EventCard";

// MUI components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// MUI icons
import Home from "@material-ui/icons/Home";

// Theme components
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import Button from "../components/CustomButtons/Button.js";
import CardAvatar from "../components/Card/CardAvatar";

// Images
import background from "../assets/pictures/backround.jpg";
import avatar from "../assets/pictures/mirna_i_antonio.jpg";

// CSS and style
import {
  cardTitle,
  roseColor
} from "../assets/jss/material-dashboard-pro-react.js";
import customStyles from "../assets/jss/customStyles";

const styles = {
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#FFFFFF",
    marginTop: "0"
  },
  cardCategoryWhite: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: ".875rem"
  },
  cardCategory: {
    color: "#999999",
    marginTop: "10px"
  },
  icon: {
    color: "#333333",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px"
    }
  },
  iconRose: {
    color: roseColor
  },
  marginTop30: {
    marginTop: "30px"
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
  },
  homePage: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 800
  }
};

const useStyles = makeStyles(theme => {
  return {
    ...styles,
    ...customStyles
  };
});

// COMPONENT
function HomePage({ history }) {
  // Styles
  const classes = useStyles();

  // Redux
  const state = useSelector(state => {
    return {
      user: state.user,
      UI: state.UI,
      events: state.user.events
    };
  });

  const dispatch = useDispatch();

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <Card profile>
          <CardBody profile>
            <h6 className={classes.cardCategory}>MIRNA I ANTONIO</h6>

            <h3 className={`${classes.cardTitle} ${classes.marginTop30}`}>
              WEDDING
            </h3>
            <CardAvatar>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." style={{ height: 200 }} />
              </a>
            </CardAvatar>
            <p className={classes.cardDescription}>Manage your wedding.</p>
            <Button
              round
              color="rose"
              onClick={() => {
                history.push("/dashboard");
              }}
            >
              HOME
            </Button>
          </CardBody>
        </Card>
      </GridItem>

      {state.events.map((item, key) => {
        return (
          <GridItem xs={12} sm={12} md={4} key={item.eventId}>
            <EventCard event={item} />
          </GridItem>
        );
      })}
    </GridContainer>
  );
}

export default withRouter(HomePage);
