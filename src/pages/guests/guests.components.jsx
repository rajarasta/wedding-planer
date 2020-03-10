import React from "react";

import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import NavPills from "../../components/NavPills/NavPills.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";

import { cardTitle } from "../../assets/jss/material-dashboard-pro-react.js";

import ExtendedTable from "../../components/ExtendedTable/ExtendedTable";
import { withRouter } from "react-router-dom";
import Fab from "@material-ui/core/Fab";

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

const Guests = ({ history }) => {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader>
              <h3 className={classes.cardTitle}>Guests</h3>
            </CardHeader>
            <CardBody>
              <NavPills
                color="warning"
                tabs={[
                  {
                    tabButton: "All guests",
                    tabContent: (
                      <span>
                        <ExtendedTable />
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
                    tabContent: <span></span>
                  }
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      <Fab
        style={{ position: "fixed", bottom: "3rem", right: "3rem" }}
        onClick={() => {
          history.push("add-guest-page");
        }}
      />
    </div>
  );
};

export default withRouter(Guests);
