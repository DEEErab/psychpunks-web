import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLinkItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconsLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About us </FooterLinkTitle>
              <FooterLink to="/Home"> Mint </FooterLink>
              <FooterLink to="/Home"> OpenSea </FooterLink>
              <FooterLink to="/Home"> Twitter </FooterLink>
              <FooterLink to="/Home"> Discord </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About us </FooterLinkTitle>
              <FooterLink to="/Home"> Mint </FooterLink>
              <FooterLink to="/Home"> OpenSea </FooterLink>
              <FooterLink to="/Home"> Twitter </FooterLink>
              <FooterLink to="/Home"> Discord </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="">PsychPunks</SocialLogo>
            <WebsiteRights>
              PsychPunks&copy; 2022, All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="Discord">
                <FaDiscord />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="OpenSea">
                <FaTwitter />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
