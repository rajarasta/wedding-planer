/*
v.0.1
Nije potrebno withRouter() exportanje s obzirom da nije dio komponente koja je fiksni dio UI-a
https://stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom

- added useHistory 
- edited Guest tab/links to correct URLs
- organized the file

*/

import React from "react";

// Router stuff
import { useHistory, Link } from "react-router-dom";

// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Tooltip } from "@material-ui/core";
import { Refresh, Edit, ArtTrack } from "@material-ui/icons";

// Components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

// Images and assets
import weddingTable from "../../assets/pictures/wedding-table5.jpg";
import weddingChurch from "../../assets/pictures/wedding-church.jpg";
import weddingAccomodation from "../../assets/pictures/wedding-accomodation.jpg";

// Styles
import styles from "../../assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";
const useStyles = makeStyles(styles);

export default function Dashboard(props) {
  const classes = useStyles();
  const history = useHistory();
  // COMPONENT
  return (
    <div>
      <h3>Manage Listings</h3>
      <br />
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <Link to={`${history.location.pathname}/guests`}>
                <img src={weddingTable} alt="..." />
              </Link>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="View"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <ArtTrack className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="success" simple justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Remove"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <Link to={`${history.location.pathname}/guests`}>
                <Typography variant="h4" className={classes.cardProductTitle}>
                  Guests
                </Typography>
              </Link>
              <Typography
                variant="body"
                className={classes.cardProductDesciprion}
              >
                Manage all the people that will be the there on your special
                day.
              </Typography>
            </CardBody>
            <CardFooter product>FOOTER</CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={weddingChurch} alt="..." />
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="View"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <ArtTrack className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="success" simple justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Remove"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Locations
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                {/*TODO location top level description*/}
                ###Locations top level description
              </p>
            </CardBody>
            <CardFooter product>FOOTER</CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={weddingAccomodation} alt="..." />
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="View"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <ArtTrack className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="success" simple justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Remove"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Accomodation
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                ####Accomodation top level description
              </p>
            </CardBody>
            <CardFooter product>FOOTER</CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
