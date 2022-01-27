import React, { useState, useEffect } from "react";
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
  const [connected, setConnected] = useState("Connect");
  const [currentAccount, setCurrentAccount] = useState(null);

  // connect web3 wallet
  const connect = async () => {
    try {
      await activate(injected);
    } catch (e) {
      console.log(e);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      window.alert("Make sure you have Metamask installed!");
      return;
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      setConnected(account.substr(0, 3) + "..." + account.substr(39, 43));
      setCurrentAccount(account);
    } else {
      console.log("no authorized accounts");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

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
            Treasury
          </SidebarLink>
          <SidebarLink to="team" onClick={toggle}>
            Team
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute
            onClick={connect}
            value={connected}
            onChange={(e) => setConnected(e.target.value)}
          >
            {active ? (
              account.substring(0, 3) + "..." + account.substring(39, 43)
            ) : (
              <span>{connected}</span>
            )}
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
