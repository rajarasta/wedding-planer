import React from "react";

import { Route } from "react-router-dom";

import TimelinePage from "../Timeline/Timeline";

const Invites = ({ match }) => {
  return (
    <div className="timeline-overview-page">
      <Route exact path={`${match.path}`} component={TimelinePage} />
      <Route path={`${match.path}/:inviteID`} component={TimelinePage} />
    </div>
  );
};

export default Invites;
