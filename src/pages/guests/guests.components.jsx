import React from "react";

import ExtendedTable from "../../components/ExtendedTable/ExtendedTable";
import { withRouter } from "react-router-dom";
import Fab from "@material-ui/core/Fab";

const Guests = ({ history }) => {
  return (
    <div>
      <ExtendedTable />
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
