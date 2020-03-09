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

export default function TimelinePage() {
  return (
    <div>
      <SectionHeaders/>
      <GridContainer>
        <GridItem xs={12}>
          <Card plain>
            <CardBody plain>
              <Timeline stories={stories} />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12}>
          <Card plain>
            <CardBody plain>
              <RsvpInvitationSection/>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
