import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: black;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1800px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1600px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled.button`
  font-family: "PressStart2P";
  color: white;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  background: black;
  border: none;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconsLink = styled.a`
  color: white;
  font-size: 24px;
`;

export const IconImg = styled.img`
  width: 24px;
`;

export const Info = styled.p`
  color: white;
  display: flex;
  font-size: 12px;
  justify-content: center;
  margin-bottom: 32px;
  text-align: center;
  line-height: 30px;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
