import React from "react";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Heading from "../../components/Heading/Heading.js";
import Timeline from "../../components/Timeline/Timeline.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import SectionHeaders from "../../components/SectionHeaders/SectionHeaders.js";
import RsvpInvitationSection from "../../components/RsvpInvitationSection/RsvpInvitationSection.js";

import { stories } from "../../assets/variables/general";

function TimelinePage({ match }) {
  return (
    <div>
      <SectionHeaders />
      <GridContainer>
        <GridItem xs={12}>
          <Card plain>
            <CardBody plain>
              <Timeline stories={stories} />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12}>
          <h3>{"Invite for " + match.params.inviteID.substring(1)}</h3>
        </GridItem>

        <GridItem xs={12}>
          <Card plain style={{ marginBottom: "0px", marginTop: "0px" }}>
            {" "}
            {/*TODO: ovo malo bolje rijesi*/}
            <CardBody plain>
              <RsvpInvitationSection inviteID={match.params.inviteID} />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default TimelinePage;
