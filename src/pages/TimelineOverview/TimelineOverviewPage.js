import React from "react";

import { Route } from "react-router-dom";

import TimelinePage from "../TimelinePage/TimelinePage";

const TimelineOverviewPage = ({ match }) => {
  return (
    <div className="timeline-ovewview-page">
      <Route exact path={`${match.path}`} component={TimelinePage} />
      <Route path={`${match.path}/:inviteID`} component={TimelinePage}/>
    </div>
  );
};

export default TimelineOverviewPage;
