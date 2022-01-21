import styled from "styled-components";

export const TeamContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #8ccc7c;

  @media screen and (max-width: 768px) {
    height: 1400px;
  }

  @media screen and (max-width: 480px) {
    height: 1600px;
  }
`;

export const TeamWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 50 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const TeamCard = styled.div`
  background: #728e89;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 80px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-outs;

  &:hover {
    transform: scale(1.02);
    transform: all 0.2s ease-in-outs;
    cursor: pointer;
  }
`;

export const TeamIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  border-radius: 20px;
  outline: 2px solid white;
`;
export const TeamH1 = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 64px;

  @media screen and (max-width: 480) {
    font-size: 2rem;
  }
`;

export const TeamH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: white;
`;

export const TeamP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: white;
`;
