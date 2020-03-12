/*
v.0.1
Renamed the component
*/

import React from "react";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import TimelineUI from "../../components/Timeline/Timeline";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import SectionHeaders from "../../components/SectionHeaders/SectionHeaders";
import RsvpInvitationSection from "../../components/RsvpInvitationSection/RsvpInvitationSection";

import { stories } from "../../assets/variables/general";

export default function Timeline({ match }) {
  return (
    <div>
      <SectionHeaders />
      <GridContainer>
        <GridItem xs={12}>
          <Card plain>
            <CardBody plain>
              <TimelineUI stories={stories} />
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
