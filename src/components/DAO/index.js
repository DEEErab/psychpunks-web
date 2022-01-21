import React from "react";
import { HomeButton } from "../HomeButtonElements";
import { animateScroll as scroll } from "react-scroll";
import {
  DaoContainer,
  DaoContent,
  DaoH1,
  DaoP,
  DaoBtnWrapper,
} from "./DAOElements";

const DAO = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <DaoContainer id="dao">
      <DaoContent>
        <DaoH1>PsychPunks DAO</DaoH1>
        <DaoP>
          Each PsychPunk NFT is also a governance token, essentially a voting
          ticket, for the PsychPunks treasury. This fund will be used
          exclusively to donate towards various mental health programs and
          social causes. Furthermore, the 2.7% aftermarket royalties will fund
          this treasury indefinitely. Together we can make the world a happier
          and healthier place!
        </DaoP>
        <DaoBtnWrapper>
          <HomeButton
            onClick={toggleHome}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Join the DAO!
          </HomeButton>
        </DaoBtnWrapper>
      </DaoContent>
    </DaoContainer>
  );
};

export default DAO;
