/*
v.0.1. Igor
- Removed dummy/hard-programmed event card and added "add event" buttom
- Cleaned up imports
*/

import React from "react";

// Redux stuff
import { useSelector } from "react-redux";

// Rotuer stuff
import { useHistory } from "react-router-dom";

// Main components
import EventCard from "../../components/EventCard";

// MUI components
import { Fab } from "@material-ui/core";

// MUI icons

// Theme components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";

// COMPONENT
export default function EventList(props) {
  const history = useHistory();
  // Redux
  const state = useSelector(state => {
    return {
      user: state.user,
      UI: state.UI,
      events: state.user.events
    };
  });

  return (
    <GridContainer>
      {state.events.map(item => {
        return (
          <GridItem xs={12} sm={12} md={4} key={item.eventId}>
            <EventCard event={item} history={history} />
          </GridItem>
        );
      })}
      <Fab
        style={{ position: "fixed", bottom: "3rem", right: "3rem" }}
        color="secondary"
        onClick={() => {
          console.log(history);
          history.push(`${history.pathname}/event/add`);
          console.log(history);
        }}
      >
        +
      </Fab>
    </GridContainer>
  );
}
