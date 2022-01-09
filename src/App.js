import "./App.css";
import React from "react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { injected } from "./components/wallet/connectors";
import { useWeb3React } from "@web3-react/core";
import contract from "./contracts/psychpunks.json";

const contractAddress = "0xab89D55822768F9eA1A6FFbe3f0eE10D676cA752"; // rinkby testnet address
const abi = contract.abi; // rinkeby testnet abi

function App() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const { activate } = useWeb3React();

  // connect web3 wallet
  const connect = async () => {
    try {
      await activate(injected);
    } catch (e) {
      console.log(e);
    }
  };

  // disconnect web3 wallet
  // async function disconnect() {
  //   try {
  //     deactivate();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // checks if wallet is connected
  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!");
    }

    // gets the accounts
    const accounts = await ethereum.request({ method: "eth_accounts" });

    // if a account has been connected previouslly if will auto connect to that account
    // this is given as a list. If no accounts have been connected the list will be empyty
    // if the list is empty it will connect to the first account sent by metamask.
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized accounts.");
    }
  };

  const mintNft = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        console.log("Initialize payment");
        let nftTxn = await nftContract.mint(1, {
          value: ethers.utils.parseEther("0.01"),
        });

        console.log("Minting... please wait");
        await nftTxn.wait();

        console.log(
          `Minted, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // move to commponents
  const connectWalletButton = () => {
    return (
      <button onClick={connect} className="cta-button connect-wallet-button">
        Connect Wallet
      </button>
    );
  };
  // move to components
  const mintNftButton = () => {
    return (
      <button onClick={mintNft} className="cta-button mint-nft-button">
        Mint NFT
      </button>
    );
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="main-app">
      <h1>test</h1>
      <div>{currentAccount ? mintNftButton() : connectWalletButton()}</div>

      {/* <div>
        <button onClick={connect}>Connect to metamask</button>
        {active ? (
          <span>
            Connected with <b>{account}</b>
          </span>
        ) : (
          <span>not connected</span>
        )}
        <button onClick={disconnect}>disconnect</button>
      </div> */}
    </div>
  );
}

export default App;
