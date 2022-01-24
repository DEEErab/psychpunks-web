import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
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
  const { active, activate, account } = useWeb3React();
  const [scrollNav, setScrollNav] = useState(false);

  const connect = async () => {
    try {
      await activate(injected);
    } catch (e) {
      console.log(e);
    }
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo onClick={toggleHome} to="/">
            PsychPunks
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="roadmap"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Roadmap
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="dao"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Treasury
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="team"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Team
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={connect}>
              {active ? (
                account.substring(0, 3) + "..." + account.substring(39, 43)
              ) : (
                <span>Connect</span>
              )}
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
