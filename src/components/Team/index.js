import React from "react";
import Icon1 from "../../images/quickscope.png";
import Icon2 from "../../images/deeerab.png";
import Icon3 from "../../images/trwn.png";
import {
  TeamContainer,
  TeamH1,
  TeamWrapper,
  TeamCard1,
  TeamCard2,
  TeamCard3,
  TeamIcon,
  TeamH2,
  TeamP,
} from "./TeamElements";

const Team = () => {
  return (
    <TeamContainer id="team">
      <TeamH1>Our Team</TeamH1>
      <TeamWrapper>
        <TeamCard1 href="https://twitter.com/quickscopeNFT" target="_blank">
          <TeamIcon src={Icon1} />
          <TeamH2>Quickscope</TeamH2>
          <TeamP>Marketing</TeamP>
        </TeamCard1>

        <TeamCard2 href="https://twitter.com/DEEErab" target="_blank">
          <TeamIcon src={Icon2} />
          <TeamH2>DEEErab</TeamH2>
          <TeamP>Developer</TeamP>
        </TeamCard2>

        <TeamCard3 href="https://twitter.com/trwn__" target="_blank">
          <TeamIcon src={Icon3} />
          <TeamH2>Trwn</TeamH2>
          <TeamP>Developer</TeamP>
        </TeamCard3>
      </TeamWrapper>
    </TeamContainer>
  );
};

export default Team;
