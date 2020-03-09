import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Table from "../../components/Table/Table.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardHeader from "../../components/Card/CardHeader.js";

import styles from "../../assets/jss/material-dashboard-pro-react/views/extendedTableStyle";

import { withRouter } from "react-router-dom";
//Functions
import getAllGuests, {
  getGuest
} from "../../server/functions/controllers/guests.js";

//Firebase
import { firestore } from "../../firebase/firebase.utils.js";

const useStyles = makeStyles(styles);

function ExtendedTables({ history }) {
  const [tableData, setTableData] = React.useState([]);

  useEffect(() => {
    getGuestFromFirebase();
  }, []);

  const getGuestFromFirebase = () => {
    console.log("called1");
    const guestsTableData = [];
    firestore
      .collection("guests")
      .get()
      .then(guestsArray => {
        console.log(guestsArray);
        guestsArray.forEach(element => {
          const _element = element.data();
          console.log(_element);
          guestsTableData.push([
            _element.firstname,
            _element.lastName,
            _element.additionalAdults,
            _element.phone,
            roundButtons
          ]);
        });
        setTableData(guestsTableData);
      });
  };

  const classes = useStyles();

  const handleButtonClick = () => {
    //Linking.openURL('whatsapp://send?text=hello&phone=xxxxxxxxxxxxx')
    window.location.href='whatsapp://send?text=hello&phone=385955415'
  };

  const roundButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button
        round
        color={prop.color}
        className={classes.actionButton + " " + classes.actionButtonRound}
        key={key}
        onClick={handleButtonClick}
      >
        <prop.icon className={classes.icon} />
      </Button>
    );
  });

  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>All guests list</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHead={[
                "First Name",
                "Last Name",
                "Additional Adults",
                "Extra info",
                "Actions"
              ]}
              tableData={tableData}
              customCellClasses={[classes.center, classes.right, classes.right]}
              customClassesForCells={[0, 4, 5]}
              customHeadCellClasses={[
                classes.center,
                classes.right,
                classes.right
              ]}
              customHeadClassesForCells={[0, 4, 5]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withRouter(ExtendedTables);
