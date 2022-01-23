import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../Wallet/connectors";

const Sidebar = ({ isOpen, toggle }) => {
  const { active, activate, account } = useWeb3React();

  // connect web3 wallet
  const connect = async () => {
    try {
      await activate(injected);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="roadmap" offset={-100} onClick={toggle}>
            Roadmap
          </SidebarLink>
          <SidebarLink to="dao" onClick={toggle}>
            DAO
          </SidebarLink>
          <SidebarLink to="team" onClick={toggle}>
            Team
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute onClick={connect}>
            {active ? (
              account.substring(0, 3) + "..." + account.substring(39, 43)
            ) : (
              <span>Connect</span>
            )}
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
