import styled from "styled-components";

export const ImageWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 1000px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  background-color: #75918b;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 600px;
  }
`;

export const Image = styled.img`
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 135%;
  }
`;
