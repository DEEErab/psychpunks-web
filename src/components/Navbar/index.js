import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../Wallet/connectors";

export const Navbar = ({ toggle }) => {
  const { activate, deactivate } = useWeb3React();

  // connect web3 wallet
  const connect = async () => {
    try {
      await activate(injected);
    } catch (e) {
      console.log(e);
    }
  };

  // disconnect web3 wallet
  const disconnect = async () => {
    try {
      deactivate();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">PsychPunks</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="team">Team</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={connect}>Connect</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
