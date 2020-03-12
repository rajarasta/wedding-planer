/*
v.0.1.

*/
import React from "react";

// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Fab, Button } from "@material-ui/core";

// Components
import NavPills from "../../components/NavPills/NavPills.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import ExtendedTable from "../../components/ExtendedTable/ExtendedTable";
import GuestTable from "../../components/GuestTable";

// CSS and styles
import { cardTitle } from "../../assets/jss/material-dashboard-pro-react.js";
const styles = {
  cardTitle,
  pageSubcategoriesTitle: {
    color: "#3C4858",
    textDecoration: "none",
    textAlign: "center"
  },
  cardCategory: {
    margin: "0",
    color: "#999999"
  }
};
const useStyles = makeStyles(styles);

// COMPONENT
export default function Guests({ history }) {
  // Style application
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardHeader>
          <Typography variant="h4" className={classes.cardTitle}>
            Guests
          </Typography>
        </CardHeader>
        <CardBody>
          <NavPills
            color="warning"
            tabs={[
              {
                tabButton: "All guests",
                tabContent: (
                  <span>
                    <GuestTable />
                  </span>
                )
              },
              {
                tabButton: "Responses",
                tabContent: (
                  <span>
                    <ExtendedTable />
                  </span>
                )
              },
              {
                tabButton: "Unresponded",
                tabContent: <span>Alright</span>
              }
            ]}
          />
        </CardBody>
      </Card>

      <Fab
        style={{ position: "fixed", bottom: "3rem", right: "3rem" }}
        onClick={() => {
          history.push("add_guest");
        }}
      >
        +
      </Fab>
    </div>
  );
}
