import styled from "styled-components";
import { Link } from "react-scroll";

export const HomeButton = styled(Link)`
  border-radius: 50px;
  background: #253539;
  white-space: nowrap;
  padding: 14px 48px;
  color: white;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  box-shadow: -2px 3px black;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3f5c64;
    border: 2px solid white;
  }
`;
