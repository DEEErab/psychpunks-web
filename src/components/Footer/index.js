import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import openSea from "../../images/opensea.png";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  Info,
  SocialIcons,
  SocialIconsLink,
  IconImg,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleHome}>PsychPunks</SocialLogo>

            <Info>
              PsychPunks&copy; 2022, All rights reserved
              <br></br>
              Not affiliated with LarvaLabs.
              <br></br>
              Contract address: 0x26582b17c733bbc60fa41c833c9d814fc9cc4b03
            </Info>
            <SocialIcons>
              <SocialIconsLink
                href="https://twitter.com/psychpunks"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconsLink>
              <SocialIconsLink
                href="https://discord.gg/XfxabdJFsA"
                target="_blank"
                aria-label="Discord"
              >
                <FaDiscord />
              </SocialIconsLink>
              <SocialIconsLink
                href="https://opensea.io/collection/psych-punks"
                target="_blank"
                aria-label="OpenSea"
              >
                <IconImg src={openSea}></IconImg>
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
