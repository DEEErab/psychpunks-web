import styled from "styled-components";

export const InfoContrainer = styled.div`
  background: #bd7dcd;
  display: flex;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 1000px;
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 1250px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 200px;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;
export const TextWrapper = styled.div`
  max-width: 600px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: white;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-shadow: -2px 3px black;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: white;
  text-shadow: -2px 3px black;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 500px;
  margin-bottom: 35px;
  font-size: 28px;
  line-height: 30px;
  color: white;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
