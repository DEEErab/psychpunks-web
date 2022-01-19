import React from "react";
import { HomeButton } from "../HomeButtonElements";
import { animateScroll as scroll } from "react-scroll";
import img from "../../images/1.png";
import {
  InfoContrainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./AboutElements";

const about = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <InfoContrainer id="about">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>The</TopLine>
                <Heading>PsychPunks</Heading>
                <Subtitle>
                  A mission-driven expansion to the CryptoPunks phenomena
                  empowering everyone through mental health support and
                  psychedelic research. <br></br>
                  <br></br>PsychPunks are fully unique and diverse additions to
                  the Punkverse. Inspired by the great AltPunks that came before
                  us, our aim is to be the most uni que and mission-driven Punk
                  derivative - the ultimate AltPunk and a homage to all Punk
                  derivatives.
                </Subtitle>
                <BtnWrap>
                  <HomeButton
                    onClick={toggleHome}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                  >
                    Get a psychpunk
                  </HomeButton>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContrainer>
    </>
  );
};

export default about;
