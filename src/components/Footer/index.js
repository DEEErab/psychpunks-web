import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import openSea from "../../images/opensea.png";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconsLink,
  IconImg,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="home">PsychPunks</SocialLogo>
            <WebsiteRights>
              PsychPunks&copy; 2022, All rights reserved
            </WebsiteRights>
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
