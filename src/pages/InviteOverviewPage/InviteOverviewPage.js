import React from "react";

import { Route } from "react-router-dom";

import TimelinePage from "../TimelinePage/TimelinePage";

const InviteOverviewPage = ({ match }) => {
  return (
    <div className="timeline-overview-page">
      <Route exact path={`${match.path}`} component={TimelinePage} />
      <Route path={`${match.path}/:inviteID`} component={TimelinePage}/>
    </div>
  );
};

export default InviteOverviewPage;
