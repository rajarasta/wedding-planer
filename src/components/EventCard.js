import React from "react";

// Router stuff
import { useHistory, withRouter } from "react-router-dom";

// MUI components
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia
} from "@material-ui/core";

// CSS and style
import customStyles from "../assets/jss/customStyles";
import avatar from "../assets/pictures/mirna_i_antonio.jpg";
import {
  cardTitle,
  roseColor
} from "../assets/jss/material-dashboard-pro-react.js";

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
  }
};

// Set styles
const useStyles = makeStyles(theme => {
  return {
    ...styles,
    ...customStyles
  };
});

// COMPONENT
function EventCard(props) {
  // Styles
  const classes = useStyles();
  // Router
  //const history = useHistory();

  // Props
  const {
    name,
    slug,
    type,
    invitedGuests,
    confirmedGuests,
    createdAt
  } = props.event;

  return (
    <Card profile>
      <CardMedia image={avatar} style={{ height: 200 }} />
      <CardContent profile>
        <Typography variant="h5" className={classes.cardCategory}>
          {name}
        </Typography>
        <Typography
          variant="overline"
          className={`${classes.cardTitle} ${classes.marginTop30}`}
        >
          {type}
        </Typography>
        <Typography variant="body2" className={classes.cardDescription}>
          Created at: {createdAt}
          <br />
          Invited guests: {invitedGuests}
          <br />
          Confirmed guests: {confirmedGuests}
        </Typography>
        <Button
          round
          variant="contained"
          color="secondary"
          onClick={() => {
            console.log(props.match)
            props.history.push(`/home-dashboard/event/${slug}`);
          }}
        >
          Edit
        </Button>
      </CardContent>
    </Card>
  );
}

export default withRouter(EventCard);