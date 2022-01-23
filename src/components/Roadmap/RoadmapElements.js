import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 1000px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  background-color: #587f8a;

  @media screen and (max-width: 768px) {
    height: 600px;
    width: 120%;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-right: 75px;
  }
`;
