import React from "react";
import Icon1 from "../../images/4.png";
import Icon2 from "../../images/5.png";
import Icon3 from "../../images/6.png";
import {
  TeamContainer,
  TeamH1,
  TeamWrapper,
  TeamCard,
  TeamIcon,
  TeamH2,
  TeamP,
} from "./TeamElements";

const Team = () => {
  return (
    <TeamContainer id="team">
      <TeamH1>Our Team</TeamH1>
      <TeamWrapper>
        <TeamCard>
          <TeamIcon src={Icon1} />
          <TeamH2></TeamH2>
          <TeamP>TeamP</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={Icon2} />
          <TeamH2>TeamH2</TeamH2>
          <TeamP>testP</TeamP>
        </TeamCard>
        <TeamCard>
          <TeamIcon src={Icon3} />
          <TeamH2>TeamH2</TeamH2>
          <TeamP>TeamP</TeamP>
        </TeamCard>
      </TeamWrapper>
    </TeamContainer>
  );
};

export default Team;
