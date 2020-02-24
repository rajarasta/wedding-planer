import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import ArtTrack from "@material-ui/icons/ArtTrack";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import styles from "../../assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";

import weddingTable from "../../assets/pictures/wedding-table5.jpg";
import weddingChurch from "../../assets/pictures/wedding-church.jpg";
import weddingAccomodation from "../../assets/pictures/wedding-accomodation.jpg";

import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(styles);

function Dashboard({history}) {
  const classes = useStyles();
  return (
    <div>
      <h3>Manage Listings</h3>
      <br />
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={()=>{history.push('guests')}}>
                <img src={weddingTable} alt="..." />
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
                  Guests
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                Manage all the people that will be the there on your special day.
              </p>
            </CardBody>
            <CardFooter product>
              FOOTER
            </CardFooter>
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
              {/*TODO location top level description*/ }
                ###Locations top level description
              </p>
            </CardBody>
            <CardFooter product>
              FOOTER
            </CardFooter>
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
            <CardFooter product>
              FOOTER
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withRouter(Dashboard);
